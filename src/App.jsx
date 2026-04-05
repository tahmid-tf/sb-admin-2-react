import { useEffect } from "react";
import "./css/styles.css";
import statisticsIllustration from "./assets/img/illustrations/statistics.svg";
import dataReportIllustration from "./assets/img/illustrations/data-report.svg";
import profile1 from "./assets/img/illustrations/profiles/profile-1.png";
import profile2 from "./assets/img/illustrations/profiles/profile-2.png";
import profile3 from "./assets/img/illustrations/profiles/profile-3.png";
import profile4 from "./assets/img/illustrations/profiles/profile-4.png";
import profile5 from "./assets/img/illustrations/profiles/profile-5.png";

const alerts = [
  ["bg-warning", "activity", "December 29, 2021", "This is an alert message. It's nothing serious, but it requires your attention."],
  ["bg-info", "bar-chart", "December 22, 2021", "A new monthly report is ready. Click here to view!"],
  ["bg-danger", "triangle", "December 8, 2021", "Critical system failure, systems shutting down."],
  ["bg-success", "user-plus", "December 2, 2021", "New user request. Woody has requested access to the organization."],
];

const messages = [
  [profile2, "Thomas Wilcox · 58m"],
  [profile3, "Emily Fowler · 2d"],
  [profile4, "Marshall Rosencrantz · 3d"],
  [profile5, "Colby Newton · 3d"],
];

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

const numberFormat = (number) => `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function App() {
  useEffect(() => {
    let sidebarClickHandler;
    let contentClickHandler;
    const charts = [];
    const previousTitle = document.title;

    const init = async () => {
      document.title = "Affiliate Dashboard";
      document.body.classList.add("nav-fixed");
      ensureStyle("https://cdn.jsdelivr.net/npm/litepicker/dist/css/litepicker.css", "litepicker-style");

      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js", "sb-fontawesome");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js", "sb-feather");
      await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", "sb-bootstrap");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js", "sb-chartjs");
      await loadScript("https://cdn.jsdelivr.net/npm/litepicker/dist/bundle.js", "sb-litepicker");

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
          if (window.innerWidth < 992) document.body.classList.remove("sidenav-toggled");
        };
        sidenavContent.addEventListener("click", contentClickHandler);
      }

      const rangeInput = document.getElementById("litepickerRangePlugin");
      if (rangeInput && window.Litepicker) {
        rangeInput._litepicker = new window.Litepicker({
          element: rangeInput,
          startDate: new Date(),
          endDate: new Date(),
          singleMode: false,
          numberOfMonths: 2,
          numberOfColumns: 2,
          format: "MMM DD, YYYY",
          plugins: ["ranges"],
        });
      }

      const { Chart } = window;
      if (!Chart) return;
      Chart.defaults.global.defaultFontFamily =
        'Metropolis,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = "#858796";

      const areaCtx = document.getElementById("myAreaChart");
      if (areaCtx) {
        charts.push(
          new Chart(areaCtx, {
            type: "line",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [{
                label: "Earnings",
                lineTension: 0.3,
                backgroundColor: "rgba(0, 97, 242, 0.05)",
                borderColor: "rgba(0, 97, 242, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(0, 97, 242, 1)",
                pointBorderColor: "rgba(0, 97, 242, 1)",
                pointBorderWidth: 2,
                data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
              }],
            },
            options: {
              maintainAspectRatio: false,
              legend: { display: false },
              scales: {
                yAxes: [{ ticks: { callback: (value) => `$${numberFormat(value)}` } }],
                xAxes: [{ gridLines: { display: false } }],
              },
            },
          }),
        );
      }

      const barCtx = document.getElementById("myBarChart");
      if (barCtx) {
        charts.push(
          new Chart(barCtx, {
            type: "bar",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [{ label: "Revenue", backgroundColor: "#00ac69", data: [4215, 5312, 6251, 7841, 9821, 14984] }],
            },
            options: { maintainAspectRatio: false, legend: { display: false } },
          }),
        );
      }

      const pieCtx = document.getElementById("myPieChart");
      if (pieCtx) {
        charts.push(
          new Chart(pieCtx, {
            type: "doughnut",
            data: {
              labels: ["Direct", "Social", "Referral"],
              datasets: [{ data: [55, 15, 30], backgroundColor: ["#0061f2", "#6900c7", "#00ac69"] }],
            },
            options: { maintainAspectRatio: false, legend: { display: false }, cutoutPercentage: 80 },
          }),
        );
      }
    };

    init().catch(console.error);

    return () => {
      document.title = previousTitle;
      document.body.classList.remove("nav-fixed", "sidenav-toggled");
      document.getElementById("sidebarToggle")?.removeEventListener("click", sidebarClickHandler);
      document.getElementById("layoutSidenav_content")?.removeEventListener("click", contentClickHandler);
      document.getElementById("litepickerRangePlugin")?._litepicker?.destroy?.();
      charts.forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <>
      <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
        <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
          <i data-feather="menu" />
        </button>
        <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="#!">Dashboard</a>
        <form className="form-inline me-auto d-none d-lg-block me-3">
          <div className="input-group input-group-joined input-group-solid">
            <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-text"><i data-feather="search" /></div>
          </div>
        </form>
        <ul className="navbar-nav align-items-center ms-auto">
          <li className="nav-item dropdown no-caret d-none d-md-block me-3">
            <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
              <div className="fw-500">Documentation</div>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </a>
            <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
              <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank" rel="noreferrer">
                <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book" /></div>
                <div><div className="small text-gray-500">Documentation</div>Usage instructions and reference</div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
            <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
              <i data-feather="bell" />
            </a>
            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
              <h6 className="dropdown-header dropdown-notifications-header"><i className="me-2" data-feather="bell" />Alerts Center</h6>
              {alerts.map(([bg, icon, date, text]) => (
                <a className="dropdown-item dropdown-notifications-item" href="#!" key={date}>
                  <div className={`dropdown-notifications-item-icon ${bg}`}>
                    {icon === "triangle" ? <i className="fas fa-exclamation-triangle" /> : <i data-feather={icon} />}
                  </div>
                  <div className="dropdown-notifications-item-content">
                    <div className="dropdown-notifications-item-content-details">{date}</div>
                    <div className="dropdown-notifications-item-content-text">{text}</div>
                  </div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
            <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
              <i data-feather="mail" />
            </a>
            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
              <h6 className="dropdown-header dropdown-notifications-header"><i className="me-2" data-feather="mail" />Message Center</h6>
              {messages.map(([img, meta]) => (
                <a className="dropdown-item dropdown-notifications-item" href="#!" key={meta}>
                  <img className="dropdown-notifications-item-img" src={img} alt="" />
                  <div className="dropdown-notifications-item-content">
                    <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="dropdown-notifications-item-content-details">{meta}</div>
                  </div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
            <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
              <img className="img-fluid" src={profile1} alt="User" />
            </a>
            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
              <h6 className="dropdown-header d-flex align-items-center">
                <img className="dropdown-user-img" src={profile1} alt="User" />
                <div className="dropdown-user-details">
                  <div className="dropdown-user-details-name">Valerie Luna</div>
                  <div className="dropdown-user-details-email">vluna@aol.com</div>
                </div>
              </h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon"><i data-feather="settings" /></div>
                Account
              </a>
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon"><i data-feather="log-out" /></div>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
              <div className="nav accordion" id="accordionSidenav">
                <div className="sidenav-menu-heading">Core</div>
                <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseDashboards">
                  <div className="nav-link-icon"><i data-feather="activity" /></div>
                  Dashboards
                  <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="#!">Default</a>
                    <a className="nav-link" href="#!">Multipurpose</a>
                    <a className="nav-link" href="#!">Affiliate</a>
                  </nav>
                </div>

                <div className="sidenav-menu-heading">Custom</div>
                <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapsePages">
                  <div className="nav-link-icon"><i data-feather="grid" /></div>
                  Pages
                  <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="#!">Account</a>
                    <a className="nav-link" href="#!">Authentication</a>
                    <a className="nav-link" href="#!">Error</a>
                    <a className="nav-link" href="#!">Pricing</a>
                    <a className="nav-link" href="#!">Invoice</a>
                  </nav>
                </div>

                <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseApps">
                  <div className="nav-link-icon"><i data-feather="globe" /></div>
                  Applications
                  <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="#!">Knowledge Base</a>
                    <a className="nav-link" href="#!">User Management</a>
                    <a className="nav-link" href="#!">Posts Management</a>
                  </nav>
                </div>

                <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseToolkit">
                  <div className="nav-link-icon"><i data-feather="package" /></div>
                  UI Toolkit
                  <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseToolkit" data-bs-parent="#accordionSidenav">
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="#!">Layout</a>
                    <a className="nav-link" href="#!">Components</a>
                    <a className="nav-link" href="#!">Utilities</a>
                  </nav>
                </div>

                <div className="sidenav-menu-heading">Plugins</div>
                <a className="nav-link" href="#!"><div className="nav-link-icon"><i data-feather="bar-chart" /></div>Charts</a>
                <a className="nav-link" href="#!"><div className="nav-link-icon"><i data-feather="filter" /></div>Tables</a>
              </div>
            </div>
            <div className="sidenav-footer">
              <div className="sidenav-footer-content">
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">Valerie Luna</div>
              </div>
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div className="container-xl px-4 mt-5">
              <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                <div className="me-4 mb-3 mb-sm-0">
                  <h1 className="mb-0">Dashboard</h1>
                  <div className="small"><span className="fw-500 text-primary">Friday</span> · September 20, 2021 · 12:16 PM</div>
                </div>
                <div className="input-group input-group-joined border-0 shadow" style={{ width: "16.5rem" }}>
                  <span className="input-group-text"><i data-feather="calendar" /></span>
                  <input className="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Select date range..." />
                </div>
              </div>

              <div className="card card-waves mb-4 mt-5">
                <div className="card-body p-5">
                  <div className="row align-items-center justify-content-between">
                    <div className="col">
                      <h2 className="text-primary">Welcome back, your dashboard is ready!</h2>
                      <p className="text-gray-700">Great job, your affiliate dashboard is ready to go! You can view sales, generate links, prepare coupons, and download affiliate reports using this dashboard.</p>
                      <a className="btn btn-primary p-3" href="#!">Get Started <i className="ms-1" data-feather="arrow-right" /></a>
                    </div>
                    <div className="col d-none d-lg-block mt-xxl-n4">
                      <img className="img-fluid px-xl-4 mt-xxl-n5" src={statisticsIllustration} alt="Statistics" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {[
                  ["primary", "Earnings (monthly)", "$4,390", "trending-up", "12%", "fa-dollar-sign", "success"],
                  ["secondary", "Average sale price", "$27.00", "trending-down", "3%", "fa-tag", "danger"],
                  ["success", "Clicks", "11,291", "trending-up", "12%", "fa-mouse-pointer", "success"],
                  ["info", "Conversion rate", "1.23%", "trending-down", "1%", "fa-percentage", "danger"],
                ].map(([color, title, value, trend, delta, icon, deltaColor]) => (
                  <div className="col-xl-3 col-md-6 mb-4" key={title}>
                    <div className={`card border-start-lg border-start-${color} h-100`}>
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <div className={`small fw-bold text-${color} mb-1`}>{title}</div>
                            <div className="h5">{value}</div>
                            <div className={`text-xs fw-bold text-${deltaColor} d-inline-flex align-items-center`}>
                              <i className="me-1" data-feather={trend} />
                              {delta}
                            </div>
                          </div>
                          <div className="ms-2"><i className={`fas ${icon} fa-2x text-gray-200`} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card mb-4">
                    <div className="card-body text-center p-5">
                      <img className="img-fluid mb-5" src={dataReportIllustration} alt="Report" />
                      <h4>Report generation</h4>
                      <p className="mb-4">Ready to get started? Let us know now! It's time to start building that dashboard you've been waiting to create!</p>
                      <a className="btn btn-primary p-3" href="#!">Continue</a>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header">Affiliate Reports</div>
                    <div className="list-group list-group-flush small">
                      <a className="list-group-item list-group-item-action" href="#!"><i className="fas fa-dollar-sign fa-fw text-blue me-2" />Earnings Reports</a>
                      <a className="list-group-item list-group-item-action" href="#!"><i className="fas fa-tag fa-fw text-purple me-2" />Average Sale Price</a>
                      <a className="list-group-item list-group-item-action" href="#!"><i className="fas fa-mouse-pointer fa-fw text-green me-2" />Engagement (Clicks &amp; Impressions)</a>
                      <a className="list-group-item list-group-item-action" href="#!"><i className="fas fa-percentage fa-fw text-yellow me-2" />Conversion Rate</a>
                      <a className="list-group-item list-group-item-action" href="#!"><i className="fas fa-chart-pie fa-fw text-pink me-2" />Segments</a>
                    </div>
                  </div>

                  <div className="card bg-primary border-0">
                    <div className="card-body">
                      <h5 className="text-white-50">Budget Overview</h5>
                      <div className="mb-4"><span className="display-4 text-white">$48k</span> <span className="text-white-50">per year</span></div>
                      <div className="progress bg-white-25 rounded-pill" style={{ height: "0.5rem" }}>
                        <div className="progress-bar bg-white w-75 rounded-pill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 mb-4">
                  <div className="card mb-4">
                    <div className="card-header">Revenue Summary</div>
                    <div className="card-body"><div className="chart-area"><canvas id="myAreaChart" height="30" /></div></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card h-100">
                        <div className="card-header">Sales Reporting</div>
                        <div className="card-body d-flex flex-column justify-content-center"><div className="chart-bar"><canvas id="myBarChart" height="30" /></div></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card h-100">
                        <div className="card-header">Traffic Sources</div>
                        <div className="card-body">
                          <div className="chart-pie mb-4"><canvas id="myPieChart" height="50" /></div>
                          <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2"><div className="me-3"><i className="fas fa-circle fa-sm me-1 text-blue" />Direct</div><div className="fw-500 text-dark">55%</div></div>
                            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2"><div className="me-3"><i className="fas fa-circle fa-sm me-1 text-purple" />Social</div><div className="fw-500 text-dark">15%</div></div>
                            <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2"><div className="me-3"><i className="fas fa-circle fa-sm me-1 text-green" />Referral</div><div className="fw-500 text-dark">30%</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
