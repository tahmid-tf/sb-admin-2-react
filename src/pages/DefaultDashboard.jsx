import { useEffect } from "react";
import atWorkIllustration from "../assets/img/illustrations/at-work.svg";

const timelineItems = [
  ["27 min", "bg-green", "New order placed! ", "Order #2912", " has been successfully placed."],
  ["58 min", "bg-blue", "Your ", "weekly report", " has been generated and is ready to view."],
  ["2 hrs", "bg-purple", "New user ", "Valerie Luna", " has registered"],
  ["1 day", "bg-yellow", "Server activity monitor alert", "", ""],
  ["1 day", "bg-green", "New order placed! ", "Order #2911", " has been successfully placed."],
];

const progressItems = [
  ["Server Migration", "20%", "20%", "bg-danger"],
  ["Sales Tracking", "40%", "40%", "bg-warning"],
  ["Customer Database", "60%", "60%", ""],
  ["Payout Details", "80%", "80%", "bg-info"],
  ["Account Setup", "Complete!", "100%", "bg-success"],
];

const statCards = [
  ["bg-primary", "calendar", "Earnings (Monthly)", "$40,000", "View Report"],
  ["bg-warning", "dollar-sign", "Earnings (Annual)", "$215,000", "View Report"],
  ["bg-success", "check-square", "Task Completion", "24", "View Tasks"],
  ["bg-danger", "message-circle", "Pending Requests", "17", "View Requests"],
];

const projectCards = [
  ["bg-primary", "Primary", "20,000", "40%"],
  ["bg-warning", "Warning", "10,000", "20%"],
  ["bg-success", "Success", "30,000", "60%"],
  ["bg-danger", "Danger", "15,000", "30%"],
];

const people = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61", "2011/04/25", "$320,800", "Full-time", "bg-primary text-white"],
  ["Garrett Winters", "Accountant", "Tokyo", "63", "2011/07/25", "$170,750", "Part-time", "bg-secondary text-white"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66", "2009/01/12", "$86,000", "Full-time", "bg-primary text-white"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22", "2012/03/29", "$433,060", "Contract", "bg-info"],
  ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700", "Full-time", "bg-primary text-white"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61", "2012/12/02", "$372,000", "Full-time", "bg-primary text-white"],
];

const numberFormat = (number) => `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function DefaultDashboard() {
  useEffect(() => {
    const charts = [];
    let dataTable;

    const initPage = async () => {
      window.feather?.replace();

      const rangeInput = document.getElementById("litepickerRangePlugin");
      if (rangeInput && window.Litepicker && !rangeInput._litepicker) {
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
      if (Chart) {
        Chart.defaults.global.defaultFontFamily =
          'Metropolis,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = "#858796";

        const areaCtx = document.getElementById("myAreaChartDefault");
        if (areaCtx) {
          charts.push(
            new Chart(areaCtx, {
              type: "line",
              data: {
                labels: ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"],
                datasets: [{
                  label: "Earnings",
                  lineTension: 0.3,
                  backgroundColor: "rgba(0, 97, 242, 0.05)",
                  borderColor: "rgba(0, 97, 242, 1)",
                  pointRadius: 3,
                  pointBackgroundColor: "rgba(0, 97, 242, 1)",
                  pointBorderColor: "rgba(0, 97, 242, 1)",
                  pointBorderWidth: 2,
                  data: [10000, 18000, 15000, 22000, 19000, 28000, 32000],
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

        const barCtx = document.getElementById("myBarChartDefault");
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
      }

      const table = document.getElementById("defaultDashboardTable");
      if (table && window.simpleDatatables?.DataTable) {
        dataTable = new window.simpleDatatables.DataTable(table);
      }
    };

    initPage().catch(console.error);

    return () => {
      document.getElementById("litepickerRangePlugin")?._litepicker?.destroy?.();
      charts.forEach((chart) => chart.destroy());
      dataTable?.destroy?.();
    };
  }, []);

  return (
    <>
      <main>
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
          <div className="container-xl px-4">
            <div className="page-header-content pt-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto mt-4">
                  <h1 className="page-header-title">
                    <div className="page-header-icon"><i data-feather="activity" /></div>
                    Dashboard
                  </h1>
                  <div className="page-header-subtitle">Example dashboard overview and content summary</div>
                </div>
                <div className="col-12 col-xl-auto mt-4">
                  <div className="input-group input-group-joined border-0" style={{ width: "16.5rem" }}>
                    <span className="input-group-text"><i className="text-primary" data-feather="calendar" /></span>
                    <input className="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Select date range..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container-xl px-4 mt-n10">
          <div className="row">
            <div className="col-xxl-4 col-xl-12 mb-4">
              <div className="card h-100">
                <div className="card-body h-100 p-5">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-xxl-12">
                      <div className="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                        <h1 className="text-primary">Welcome to Dashboard!</h1>
                        <p className="text-gray-700 mb-0">
                          Browse our fully designed UI toolkit! Browse our prebuilt app pages, components, and utilites, and be sure to look at our full documentation!
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-xxl-12 text-center">
                      <img className="img-fluid" src={atWorkIllustration} alt="At work" style={{ maxWidth: "26rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-6 mb-4">
              <div className="card card-header-actions h-100">
                <div className="card-header">
                  Recent Activity
                  <div className="dropdown no-caret">
                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="defaultActivityDropdown" type="button" data-bs-toggle="dropdown">
                      <i className="text-gray-500" data-feather="more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="defaultActivityDropdown">
                      <h6 className="dropdown-header">Filter Activity:</h6>
                      <a className="dropdown-item" href="#!"><span className="badge bg-green-soft text-green my-1">Commerce</span></a>
                      <a className="dropdown-item" href="#!"><span className="badge bg-blue-soft text-blue my-1">Reporting</span></a>
                      <a className="dropdown-item" href="#!"><span className="badge bg-yellow-soft text-yellow my-1">Server</span></a>
                      <a className="dropdown-item" href="#!"><span className="badge bg-purple-soft text-purple my-1">Users</span></a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="timeline timeline-xs">
                    {timelineItems.map(([time, color, prefix, linkText, suffix]) => (
                      <div className="timeline-item" key={`${time}-${prefix}`}>
                        <div className="timeline-item-marker">
                          <div className="timeline-item-marker-text">{time}</div>
                          <div className={`timeline-item-marker-indicator ${color}`} />
                        </div>
                        <div className="timeline-item-content">
                          {prefix}
                          {linkText ? <a className="fw-bold text-dark" href="#!">{linkText}</a> : null}
                          {suffix}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-6 mb-4">
              <div className="card card-header-actions h-100">
                <div className="card-header">
                  Progress Tracker
                  <div className="dropdown no-caret">
                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="defaultProgressDropdown" type="button" data-bs-toggle="dropdown">
                      <i className="text-gray-500" data-feather="more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="defaultProgressDropdown">
                      <a className="dropdown-item" href="#!"><div className="dropdown-item-icon"><i className="text-gray-500" data-feather="list" /></div>Manage Tasks</a>
                      <a className="dropdown-item" href="#!"><div className="dropdown-item-icon"><i className="text-gray-500" data-feather="plus-circle" /></div>Add New Task</a>
                      <a className="dropdown-item" href="#!"><div className="dropdown-item-icon"><i className="text-gray-500" data-feather="minus-circle" /></div>Delete Tasks</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {progressItems.map(([label, text, width, color]) => (
                    <div className="mb-4" key={label}>
                      <h4 className="small">
                        {label}
                        <span className="float-end fw-bold">{text}</span>
                      </h4>
                      <div className={`progress ${width === "100%" ? "" : "mb-4"}`}>
                        <div className={`progress-bar ${color}`} role="progressbar" style={{ width }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-footer position-relative">
                  <div className="d-flex align-items-center justify-content-between small text-body">
                    <a className="stretched-link text-body" href="#!">Visit Task Center</a>
                    <i className="fas fa-angle-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {statCards.map(([bg, icon, title, value, action]) => (
              <div className="col-lg-6 col-xl-3 mb-4" key={title}>
                <div className={`card ${bg} text-white h-100`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <div className="text-white-75 small">{title}</div>
                        <div className="text-lg fw-bold">{value}</div>
                      </div>
                      <i className="feather-xl text-white-50" data-feather={icon} />
                    </div>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between small">
                    <a className="text-white stretched-link" href="#!">{action}</a>
                    <div className="text-white"><i className="fas fa-angle-right" /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-xl-8 mb-4">
              <div className="card card-header-actions h-100">
                <div className="card-header">
                  Earnings Breakdown
                  <div className="dropdown no-caret">
                    <button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="defaultChartDropdown" type="button" data-bs-toggle="dropdown">
                      <i className="text-gray-500" data-feather="more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="defaultChartDropdown">
                      <a className="dropdown-item" href="#!">Last 7 Days</a>
                      <a className="dropdown-item" href="#!">Last 30 Days</a>
                      <a className="dropdown-item" href="#!">Last Year</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-area"><canvas id="myAreaChartDefault" height="100" /></div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 mb-4">
              <div className="card h-100">
                <div className="card-header">Monthly Revenue</div>
                <div className="card-body">
                  <div className="chart-bar"><canvas id="myBarChartDefault" height="100" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 mb-4">
              <div className="card h-100">
                <div className="card-header">Project Summary</div>
                <div className="card-body">
                  {projectCards.map(([bg, title, amount, percent]) => (
                    <div className={`card ${bg} text-white mb-4`} key={title}>
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <div className="small text-white-75">{title}</div>
                            <div className="text-lg fw-bold">${amount}</div>
                          </div>
                          <div className="small">{percent}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-8 mb-4">
              <div className="card mb-4">
                <div className="card-header">Development Approach</div>
                <div className="card-body">
                  <p>
                    SB Admin Pro makes extensive use of Bootstrap utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create reusable components and custom utility classes.
                  </p>
                  <p className="mb-0">
                    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">Team Overview</div>
                <div className="card-body">
                  <table id="defaultDashboardTable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {people.map(([name, position, office, age, startDate, salary, status, badgeClass]) => (
                        <tr key={name}>
                          <td>{name}</td>
                          <td>{position}</td>
                          <td>{office}</td>
                          <td>{age}</td>
                          <td>{startDate}</td>
                          <td>{salary}</td>
                          <td><div className={`badge rounded-pill ${badgeClass}`}>{status}</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-admin mt-auto footer-light">
        <div className="container-xl px-4">
          <div className="row">
            <div className="col-md-6 small">Copyright © Your Website 2021</div>
            <div className="col-md-6 text-md-end small">
              <a href="#!">Privacy Policy</a>
              {" · "}
              <a href="#!">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default DefaultDashboard;
