import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const rewriteAssetUrl = (value) => {
  if (!value || value.startsWith("http") || value.startsWith("//") || value.startsWith("/") || value.startsWith("data:")) {
    return value;
  }
  return `/sb-admin-pro-dist/${value.replace(/^.\//, "")}`;
};

const routeForPage = (fileName) => {
  const slug = fileName.replace(/\.html$/i, "");
  if (slug === "dashboard-3") return "/dashboard";
  if (slug === "dashboard-1") return "/default-dashboard";
  return `/pages/${slug}`;
};

const shouldKeepHrefAsIs = (href) =>
  !href ||
  href.startsWith("http") ||
  href.startsWith("//") ||
  href.startsWith("#") ||
  href.startsWith("javascript:") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const loadRuntimeScript = (src, id) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (id) script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });

function TemplatePage({ slug: propSlug }) {
  const params = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const slug = propSlug ?? params.slug;
  const [content, setContent] = useState({ title: "", mainHtml: "", footerHtml: "", scripts: [] });

  useEffect(() => {
    let isCancelled = false;

    const loadPage = async () => {
      const response = await fetch(`/sb-admin-pro-dist/${slug}.html`);
      if (!response.ok) {
        throw new Error(`Page not found: ${slug}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const main = doc.querySelector("main");
      const footer = doc.querySelector("footer");
      const scripts = Array.from(doc.querySelectorAll("script[src]"))
        .map((script) => script.getAttribute("src"))
        .filter(Boolean);

      [main, footer].forEach((section) => {
        if (!section) return;

        section.querySelectorAll("[src]").forEach((element) => {
          const value = element.getAttribute("src");
          element.setAttribute("src", rewriteAssetUrl(value));
        });

        section.querySelectorAll("[href]").forEach((element) => {
          const value = element.getAttribute("href");
          if (shouldKeepHrefAsIs(value)) return;
          if (value.endsWith(".html")) {
            element.setAttribute("href", routeForPage(value.split("/").pop()));
            return;
          }
          element.setAttribute("href", rewriteAssetUrl(value));
        });
      });

      if (!isCancelled) {
        setContent({
          title: doc.title,
          mainHtml: main?.innerHTML ?? "<div class='container-xl px-4 mt-5'><p>Page content not found.</p></div>",
          footerHtml: footer?.innerHTML ?? "",
          scripts,
        });
      }
    };

    loadPage().catch((error) => {
      if (!isCancelled) {
        console.error(error);
        setContent({
          title: "Page Not Found",
          mainHtml: "<div class='container-xl px-4 mt-5'><div class='alert alert-danger'>This template page could not be loaded.</div></div>",
          footerHtml: "",
          scripts: [],
        });
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (!content.mainHtml) return undefined;

    const previousTitle = document.title;
    const appendedScripts = [];
    let dataTable;

    const initPage = async () => {
      if (content.title) {
        document.title = content.title;
      }

      window.feather?.replace();

      document.querySelectorAll('a[href$=".html"]').forEach((anchor) => {
        const href = anchor.getAttribute("href");
        if (!href) return;
        anchor.setAttribute("href", routeForPage(href.split("/").pop()));
      });

      if (window.bootstrap?.Dropdown) {
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((element) => {
          window.bootstrap.Dropdown.getOrCreateInstance(element);
        });
      }

      const litepickerTargets = [
        ["litepickerSingleDate", { format: "MMM DD, YYYY" }],
        ["litepickerDateRange", { singleMode: false, format: "MMM DD, YYYY" }],
        ["litepickerDateRange2Months", { singleMode: false, numberOfMonths: 2, numberOfColumns: 2, format: "MMM DD, YYYY" }],
        ["litepickerRangePlugin", { startDate: new Date(), endDate: new Date(), singleMode: false, numberOfMonths: 2, numberOfColumns: 2, format: "MMM DD, YYYY", plugins: ["ranges"] }],
      ];

      litepickerTargets.forEach(([id, config]) => {
        const input = document.getElementById(id);
        if (input && window.Litepicker && !input._litepicker) {
          input._litepicker = new window.Litepicker({ element: input, ...config });
        }
      });

      const datatablesSimple = document.getElementById("datatablesSimple");
      if (datatablesSimple && window.simpleDatatables?.DataTable) {
        dataTable = new window.simpleDatatables.DataTable(datatablesSimple);
      }

      const pageScripts = content.scripts.filter((src) => {
        const normalized = src.toLowerCase();
        return (
          !normalized.includes("bootstrap.bundle.min.js") &&
          !normalized.endsWith("/js/scripts.js") &&
          !normalized.includes("litepicker/dist/bundle.js") &&
          !normalized.includes("chart.min.js") &&
          !normalized.includes("simple-datatables@latest")
        );
      });

      for (let index = 0; index < pageScripts.length; index += 1) {
        const src = pageScripts[index];
        if (src.endsWith("js/litepicker.js") || src.endsWith("js/datatables/datatables-simple-demo.js")) {
          continue;
        }
        const script = await loadRuntimeScript(rewriteAssetUrl(src), `template-script-${slug}-${index}`);
        appendedScripts.push(script);
      }

      window.feather?.replace();
    };

    initPage().catch(console.error);

    return () => {
      document.title = previousTitle;
      ["litepickerSingleDate", "litepickerDateRange", "litepickerDateRange2Months", "litepickerRangePlugin"].forEach((id) => {
        document.getElementById(id)?._litepicker?.destroy?.();
      });
      dataTable?.destroy?.();
      appendedScripts.forEach((script) => script.remove());
    };
  }, [content, slug]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleClick = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor || !container.contains(anchor)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("/dashboard") || href.startsWith("/default-dashboard") || href.startsWith("/pages/")) {
        event.preventDefault();
        navigate(href);
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [content.mainHtml, content.footerHtml, navigate]);

  return (
    <div ref={containerRef}>
      <main dangerouslySetInnerHTML={{ __html: content.mainHtml }} />
      {content.footerHtml ? <footer className="footer-admin mt-auto footer-light" dangerouslySetInnerHTML={{ __html: content.footerHtml }} /> : null}
    </div>
  );
}

export default TemplatePage;
