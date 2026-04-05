import { useEffect, useState } from "react";

const loadScript = (src, id) =>
  new Promise((resolve, reject) => {
    const existing = id ? document.getElementById(id) : null;
    if (existing) {
      resolve(existing);
      return;
    }

    const script = document.createElement("script");
    if (id) script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });

const ensureStyle = (href, id) => {
  if (id && document.getElementById(id)) return;

  const link = document.createElement("link");
  if (id) link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

export default function useTemplateVendors() {
  const [vendorsReady, setVendorsReady] = useState(false);

  useEffect(() => {
    let sidebarClickHandler;
    let contentClickHandler;
    const previousTitle = document.title;

    const init = async () => {
      document.title = "Dashboard";
      document.body.classList.add("nav-fixed");

      ensureStyle(
        "https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css",
        "simple-datatables-style",
      );
      ensureStyle(
        "https://cdn.jsdelivr.net/npm/litepicker/dist/css/litepicker.css",
        "litepicker-style",
      );

      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js",
        "sb-fontawesome",
      );
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js",
        "sb-feather",
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        "sb-bootstrap",
      );
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js",
        "sb-chartjs",
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/simple-datatables@latest",
        "sb-datatables",
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/litepicker/dist/bundle.js",
        "sb-litepicker",
      );

      window.feather?.replace();

      if (window.bootstrap?.Dropdown) {
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((element) => {
          window.bootstrap.Dropdown.getOrCreateInstance(element);
        });
      }

      const sidebarToggle = document.getElementById("sidebarToggle");
      if (sidebarToggle) {
        sidebarClickHandler = (event) => {
          event.preventDefault();
          document.body.classList.toggle("sidenav-toggled");
        };
        sidebarToggle.addEventListener("click", sidebarClickHandler);
      }

      const sidenavContent = document.getElementById("layoutSidenav_content");
      if (sidenavContent) {
        contentClickHandler = () => {
          if (window.innerWidth < 992) {
            document.body.classList.remove("sidenav-toggled");
          }
        };
        sidenavContent.addEventListener("click", contentClickHandler);
      }

      setVendorsReady(true);
    };

    init().catch(console.error);

    return () => {
      setVendorsReady(false);
      document.title = previousTitle;
      document.body.classList.remove("nav-fixed", "sidenav-toggled");
      document.getElementById("sidebarToggle")?.removeEventListener("click", sidebarClickHandler);
      document
        .getElementById("layoutSidenav_content")
        ?.removeEventListener("click", contentClickHandler);
    };
  }, []);

  return vendorsReady;
}
