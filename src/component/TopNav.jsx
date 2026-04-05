import { Link } from "react-router-dom";
import profile1 from "../assets/img/illustrations/profiles/profile-1.png";
import profile2 from "../assets/img/illustrations/profiles/profile-2.png";
import profile3 from "../assets/img/illustrations/profiles/profile-3.png";
import profile4 from "../assets/img/illustrations/profiles/profile-4.png";
import profile5 from "../assets/img/illustrations/profiles/profile-5.png";

const alerts = [
  [
    "bg-warning",
    "activity",
    "December 29, 2021",
    "This is an alert message. It's nothing serious, but it requires your attention.",
  ],
  [
    "bg-info",
    "bar-chart",
    "December 22, 2021",
    "A new monthly report is ready. Click here to view!",
  ],
  [
    "bg-danger",
    "triangle",
    "December 8, 2021",
    "Critical system failure, systems shutting down.",
  ],
  [
    "bg-success",
    "user-plus",
    "December 2, 2021",
    "New user request. Woody has requested access to the organization.",
  ],
];

const messages = [
  [profile2, "Thomas Wilcox · 58m"],
  [profile3, "Emily Fowler · 2d"],
  [profile4, "Marshall Rosencrantz · 3d"],
  [profile5, "Colby Newton · 3d"],
];

function TopNav() {
  return (
    <nav
      className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
      id="sidenavAccordion"
    >
      <button
        className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
        id="sidebarToggle"
      >
        <i data-feather="menu" />
      </button>

      <Link className="navbar-brand pe-3 ps-4 ps-lg-2" to="/dashboard">
        Dashboard
      </Link>

      <form className="form-inline me-auto d-none d-lg-block me-3">
        <div className="input-group input-group-joined input-group-solid">
          <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-text">
            <i data-feather="search" />
          </div>
        </div>
      </form>

      <ul className="navbar-nav align-items-center ms-auto">
        <li className="nav-item dropdown no-caret d-none d-md-block me-3">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdownDocs"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
          >
            <div className="fw-500">Documentation</div>
            <i className="fas fa-chevron-right dropdown-arrow" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up"
            aria-labelledby="navbarDropdownDocs"
          >
            <a
              className="dropdown-item py-3"
              href="https://docs.startbootstrap.com/sb-admin-pro"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-stack bg-primary-soft text-primary me-4">
                <i data-feather="book" />
              </div>
              <div>
                <div className="small text-gray-500">Documentation</div>
                Usage instructions and reference
              </div>
            </a>
          </div>
        </li>

        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownAlerts"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
          >
            <i data-feather="bell" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownAlerts"
          >
            <h6 className="dropdown-header dropdown-notifications-header">
              <i className="me-2" data-feather="bell" />
              Alerts Center
            </h6>
            {alerts.map(([bg, icon, date, text]) => (
              <a className="dropdown-item dropdown-notifications-item" href="#!" key={date}>
                <div className={`dropdown-notifications-item-icon ${bg}`}>
                  {icon === "triangle" ? (
                    <i className="fas fa-exclamation-triangle" />
                  ) : (
                    <i data-feather={icon} />
                  )}
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
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownMessages"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
          >
            <i data-feather="mail" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownMessages"
          >
            <h6 className="dropdown-header dropdown-notifications-header">
              <i className="me-2" data-feather="mail" />
              Message Center
            </h6>
            {messages.map(([img, meta]) => (
              <a className="dropdown-item dropdown-notifications-item" href="#!" key={meta}>
                <img className="dropdown-notifications-item-img" src={img} alt="" />
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="dropdown-notifications-item-content-details">{meta}</div>
                </div>
              </a>
            ))}
          </div>
        </li>

        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownUserImage"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
          >
            <img className="img-fluid" src={profile1} alt="User" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownUserImage"
          >
            <h6 className="dropdown-header d-flex align-items-center">
              <img className="dropdown-user-img" src={profile1} alt="User" />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name">Valerie Luna</div>
                <div className="dropdown-user-details-email">vluna@aol.com</div>
              </div>
            </h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon">
                <i data-feather="settings" />
              </div>
              Account
            </a>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon">
                <i data-feather="log-out" />
              </div>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
