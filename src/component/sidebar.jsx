import { NavLink } from "react-router-dom";

const sections = [
  {
    id: "collapseDashboards",
    icon: "activity",
    title: "Dashboards",
    links: [
      ["Default", "/default-dashboard"],
      ["Affiliate", "/dashboard"],
      ["Multipurpose", "/pages/dashboard-2"],
    ],
  },
  {
    id: "collapseAccount",
    icon: "user",
    title: "Account",
    links: [
      ["Profile", "/pages/account-profile"],
      ["Billing", "/pages/account-billing"],
      ["Security", "/pages/account-security"],
      ["Notifications", "/pages/account-notifications"],
    ],
  },
  {
    id: "collapseAuth",
    icon: "lock",
    title: "Authentication",
    links: [
      ["Login Basic", "/pages/auth-login-basic"],
      ["Register Basic", "/pages/auth-register-basic"],
      ["Password Basic", "/pages/auth-password-basic"],
      ["Login Social", "/pages/auth-login-social"],
      ["Register Social", "/pages/auth-register-social"],
      ["Password Social", "/pages/auth-password-social"],
      ["Redirect", "/pages/auth-redirect"],
    ],
  },
  {
    id: "collapseErrors",
    icon: "alert-circle",
    title: "Errors",
    links: [
      ["400", "/pages/error-400"],
      ["401", "/pages/error-401"],
      ["403", "/pages/error-403"],
      ["404 v1", "/pages/error-404-1"],
      ["404 v2", "/pages/error-404-2"],
      ["500", "/pages/error-500"],
      ["503", "/pages/error-503"],
      ["504", "/pages/error-504"],
    ],
  },
  {
    id: "collapseApps",
    icon: "globe",
    title: "Applications",
    links: [
      ["KB Home 1", "/pages/knowledge-base-home-1"],
      ["KB Home 2", "/pages/knowledge-base-home-2"],
      ["KB Category", "/pages/knowledge-base-category"],
      ["KB Article", "/pages/knowledge-base-article"],
      ["Users List", "/pages/user-management-list"],
      ["Edit User", "/pages/user-management-edit-user"],
      ["Add User", "/pages/user-management-add-user"],
      ["Groups List", "/pages/user-management-groups-list"],
      ["Org Details", "/pages/user-management-org-details"],
      ["Posts List", "/pages/blog-management-posts-list"],
      ["Create Post", "/pages/blog-management-create-post"],
      ["Edit Post", "/pages/blog-management-edit-post"],
      ["Posts Admin", "/pages/blog-management-posts-admin"],
    ],
  },
  {
    id: "collapseFlows",
    icon: "repeat",
    title: "Flows",
    links: [
      ["Tenant Select", "/pages/multi-tenant-select"],
      ["Tenant Join", "/pages/multi-tenant-join"],
      ["Tenant Create", "/pages/multi-tenant-create"],
      ["Tenant Users", "/pages/multi-tenant-add-users"],
      ["Wizard", "/pages/wizard"],
    ],
  },
  {
    id: "collapseLayout",
    icon: "layout",
    title: "Layout",
    links: [
      ["Static", "/pages/layout-static"],
      ["Dark", "/pages/layout-dark"],
      ["RTL", "/pages/layout-rtl"],
      ["Boxed", "/pages/layout-boxed"],
      ["Fluid", "/pages/layout-fluid"],
      ["Header Simplified", "/pages/header-simplified"],
      ["Header Compact", "/pages/header-compact"],
      ["Header Overlap", "/pages/header-overlap"],
      ["Header Breadcrumbs", "/pages/header-breadcrumbs"],
      ["Header Light", "/pages/header-light"],
      ["Starter Default", "/pages/starter-default"],
      ["Starter Minimal", "/pages/starter-minimal"],
    ],
  },
  {
    id: "collapseComponents",
    icon: "package",
    title: "Components",
    links: [
      ["Alerts", "/pages/alerts"],
      ["Avatars", "/pages/avatars"],
      ["Badges", "/pages/badges"],
      ["Buttons", "/pages/buttons"],
      ["Cards", "/pages/cards"],
      ["Dropdowns", "/pages/dropdowns"],
      ["Forms", "/pages/forms"],
      ["Modals", "/pages/modals"],
      ["Navigation", "/pages/navigation"],
      ["Progress", "/pages/progress"],
      ["Step", "/pages/step"],
      ["Timeline", "/pages/timeline"],
      ["Toasts", "/pages/toasts"],
      ["Tooltips", "/pages/tooltips"],
    ],
  },
  {
    id: "collapseUtilities",
    icon: "tool",
    title: "Utilities",
    links: [
      ["Animations", "/pages/animations"],
      ["Background", "/pages/background"],
      ["Borders", "/pages/borders"],
      ["Lift", "/pages/lift"],
      ["Shadows", "/pages/shadows"],
      ["Typography", "/pages/typography"],
      ["Charts", "/pages/charts"],
      ["Tables", "/pages/tables"],
      ["Pricing", "/pages/pricing"],
      ["Invoice", "/pages/invoice"],
      ["Index", "/pages/index"],
    ],
  },
];

function Sidebar() {
  return (
    <nav className="sidenav shadow-right sidenav-light">
      <div className="sidenav-menu">
        <div className="nav accordion" id="accordionSidenav">
          {sections.map((section) => (
            <div key={section.id}>
              <div className="sidenav-menu-heading">{section.title}</div>
              <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target={`#${section.id}`}>
                <div className="nav-link-icon"><i data-feather={section.icon} /></div>
                {section.title}
                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id={section.id} data-bs-parent="#accordionSidenav">
                <nav className="sidenav-menu-nested nav">
                  {section.links.map(([label, to]) => (
                    <NavLink className="nav-link" to={to} key={to}>
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          ))}
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
