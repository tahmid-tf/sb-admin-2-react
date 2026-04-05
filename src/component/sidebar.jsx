import { NavLink } from "react-router-dom";
import { sidebarSections } from "../routes/routeConfig.jsx";

function SidebarLink({ item }) {
  return (
    <NavLink className="nav-link" to={item.path}>
      {item.label}
    </NavLink>
  );
}

function SidebarCollapse({ item, parentId }) {
  const childHasNestedCollapses = item.children?.some((child) => child.type === "collapse");
  const childNavClass = childHasNestedCollapses
    ? "sidenav-menu-nested nav accordion"
    : "sidenav-menu-nested nav";

  return (
    <>
      <a
        className="nav-link collapsed"
        href="#!"
        data-bs-toggle="collapse"
        data-bs-target={`#${item.id}`}
        aria-expanded="false"
        aria-controls={item.id}
      >
        {item.icon ? (
          <div className="nav-link-icon">
            <i data-feather={item.icon} />
          </div>
        ) : null}
        {item.label}
        <div className="sidenav-collapse-arrow">
          <i className="fas fa-angle-down" />
        </div>
      </a>

      <div className="collapse" id={item.id} data-bs-parent={parentId ? `#${parentId}` : undefined}>
        <nav className={childNavClass} id={item.menuId}>
          <SidebarItems items={item.children} parentId={item.menuId} />
        </nav>
      </div>
    </>
  );
}

function SidebarItems({ items, parentId }) {
  return items.map((item) => {
    if (item.type === "heading") {
      return (
        <div className="sidenav-menu-heading" key={item.label}>
          {item.label}
        </div>
      );
    }

    if (item.type === "collapse") {
      return <SidebarCollapse item={item} parentId={parentId} key={item.id} />;
    }

    return <SidebarLink item={item} key={item.path} />;
  });
}

function Sidebar() {
  return (
    <nav className="sidenav shadow-right sidenav-light">
      <div className="sidenav-menu">
        <div className="nav accordion" id="accordionSidenav">
          <SidebarItems items={sidebarSections} parentId="accordionSidenav" />
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
