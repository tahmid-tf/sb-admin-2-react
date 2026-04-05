import { useEffect } from "react";
import statisticsIllustration from "../../assets/img/illustrations/statistics.svg";
import dataReportIllustration from "../../assets/img/illustrations/data-report.svg";

const numberFormat = (number) => `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function Dashboard() {
  useEffect(() => {
    const charts = [];

    const initDashboard = async () => {
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

    initDashboard().catch(console.error);

    return () => {
      document.getElementById("litepickerRangePlugin")?._litepicker?.destroy?.();
      charts.forEach((chart) => chart.destroy());
    };
  }, []);

  return (
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
  );
}

export default Dashboard;
