import { NavLink } from "react-router-dom";

function AccountNav() {
  return (
    <>
      <nav className="nav nav-borders">
        <NavLink className="nav-link ms-0" to="/account-profile">Profile</NavLink>
        <NavLink className="nav-link" to="/account-billing">Billing</NavLink>
        <NavLink className="nav-link" to="/account-security">Security</NavLink>
        <NavLink className="nav-link" to="/account-notifications">Notifications</NavLink>
      </nav>
      <hr className="mt-0 mb-4" />
    </>
  );
}

export default AccountNav;
