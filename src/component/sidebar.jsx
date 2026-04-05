import { Link } from "react-router-dom";

function Sidebar() {
  return (
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
              <Link className="nav-link" to="/dashboard">Affiliate</Link>
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
            </nav>
          </div>
        </div>
      </div>

      <div className="sidenav-footer">
        <div className="sidenav-footer-content">
          <div className="sidenav-footer-subtitle">Logged in as:</div>
          <div className="sidenav-footer-title">Valerie Luna</div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
