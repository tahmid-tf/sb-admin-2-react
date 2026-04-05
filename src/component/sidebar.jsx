import { NavLink } from "react-router-dom";

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
              <NavLink className="nav-link" to="/default-dashboard">Default</NavLink>
              <NavLink className="nav-link" to="/dashboard">Affiliate</NavLink>
            </nav>
          </div>

          <div className="sidenav-menu-heading">Custom</div>
          <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapsePages">
            <div className="nav-link-icon"><i data-feather="grid" /></div>
            Pages
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
          </a>
          <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount">
                Account
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                <nav className="sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/account-profile">Profile</NavLink>
                  <NavLink className="nav-link" to="/account-billing">Billing</NavLink>
                  <NavLink className="nav-link" to="/account-security">Security</NavLink>
                  <NavLink className="nav-link" to="/account-notifications">Notifications</NavLink>
                </nav>
              </div>

              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth">
                Authentication
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="pagesCollapseAuth" data-bs-parent="#accordionSidenavPagesMenu">
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                  <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthBasic">
                    Basic
                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseAuthBasic" data-bs-parent="#accordionSidenavPagesAuth">
                    <nav className="sidenav-menu-nested nav">
                      <NavLink className="nav-link" to="/auth-login-basic">Login</NavLink>
                      <NavLink className="nav-link" to="/auth-register-basic">Register</NavLink>
                      <NavLink className="nav-link" to="/auth-password-basic">Forgot Password</NavLink>
                    </nav>
                  </div>

                  <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial">
                    Social
                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
                    <nav className="sidenav-menu-nested nav">
                      <NavLink className="nav-link" to="/auth-login-social">Login</NavLink>
                      <NavLink className="nav-link" to="/auth-register-social">Register</NavLink>
                      <NavLink className="nav-link" to="/auth-password-social">Forgot Password</NavLink>
                    </nav>
                  </div>
                </nav>
              </div>

              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError">
                Error
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="pagesCollapseError" data-bs-parent="#accordionSidenavPagesMenu">
                <nav className="sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/error-400">400 Error</NavLink>
                  <NavLink className="nav-link" to="/error-401">401 Error</NavLink>
                  <NavLink className="nav-link" to="/error-403">403 Error</NavLink>
                  <NavLink className="nav-link" to="/error-404-1">404 Error 1</NavLink>
                  <NavLink className="nav-link" to="/error-404-2">404 Error 2</NavLink>
                  <NavLink className="nav-link" to="/error-500">500 Error</NavLink>
                  <NavLink className="nav-link" to="/error-503">503 Error</NavLink>
                  <NavLink className="nav-link" to="/error-504">504 Error</NavLink>
                </nav>
              </div>

              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              <NavLink className="nav-link" to="/invoice">Invoice</NavLink>
            </nav>
          </div>

          <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseApps">
            <div className="nav-link-icon"><i data-feather="globe" /></div>
            Applications
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
          </a>
          <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">
              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#appsCollapseKnowledgeBase">
                Knowledge Base
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="appsCollapseKnowledgeBase" data-bs-parent="#accordionSidenavAppsMenu">
                <nav className="sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/knowledge-base-home-1">Home 1</NavLink>
                  <NavLink className="nav-link" to="/knowledge-base-home-2">Home 2</NavLink>
                  <NavLink className="nav-link" to="/knowledge-base-category">Category</NavLink>
                  <NavLink className="nav-link" to="/knowledge-base-article">Article</NavLink>
                </nav>
              </div>

              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#appsCollapseUserManagement">
                User Management
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="appsCollapseUserManagement" data-bs-parent="#accordionSidenavAppsMenu">
                <nav className="sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/user-management-list">Users List</NavLink>
                  <NavLink className="nav-link" to="/user-management-edit-user">Edit User</NavLink>
                  <NavLink className="nav-link" to="/user-management-add-user">Add User</NavLink>
                  <NavLink className="nav-link" to="/user-management-groups-list">Groups List</NavLink>
                  <NavLink className="nav-link" to="/user-management-org-details">Organization Details</NavLink>
                </nav>
              </div>

              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#appsCollapsePostsManagement">
                Posts Management
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="appsCollapsePostsManagement" data-bs-parent="#accordionSidenavAppsMenu">
                <nav className="sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/blog-management-posts-list">Posts List</NavLink>
                  <NavLink className="nav-link" to="/blog-management-create-post">Create Post</NavLink>
                  <NavLink className="nav-link" to="/blog-management-edit-post">Edit Post</NavLink>
                  <NavLink className="nav-link" to="/blog-management-posts-admin">Posts Admin</NavLink>
                </nav>
              </div>
            </nav>
          </div>

          <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseFlows">
            <div className="nav-link-icon"><i data-feather="repeat" /></div>
            Flows
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
          </a>
          <div className="collapse" id="collapseFlows" data-bs-parent="#accordionSidenav">
            <nav className="sidenav-menu-nested nav">
              <NavLink className="nav-link" to="/multi-tenant-select">Multi-Tenant Registration</NavLink>
              <NavLink className="nav-link" to="/wizard">Wizard</NavLink>
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
