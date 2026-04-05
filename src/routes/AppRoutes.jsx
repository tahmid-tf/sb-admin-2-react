import { Navigate, Route, Routes } from "react-router-dom";
import Invoice from "../pages/Invoice.jsx";
import Pricing from "../pages/Pricing.jsx";
import AccountBilling from "../pages/account/AccountBilling.jsx";
import AccountNotifications from "../pages/account/AccountNotifications.jsx";
import AccountProfile from "../pages/account/AccountProfile.jsx";
import AccountSecurity from "../pages/account/AccountSecurity.jsx";
import BlogManagementCreatePost from "../pages/applications/BlogManagementCreatePost.jsx";
import BlogManagementEditPost from "../pages/applications/BlogManagementEditPost.jsx";
import BlogManagementPostsAdmin from "../pages/applications/BlogManagementPostsAdmin.jsx";
import BlogManagementPostsList from "../pages/applications/BlogManagementPostsList.jsx";
import KnowledgeBaseArticle from "../pages/applications/KnowledgeBaseArticle.jsx";
import KnowledgeBaseCategory from "../pages/applications/KnowledgeBaseCategory.jsx";
import KnowledgeBaseHomeOne from "../pages/applications/KnowledgeBaseHomeOne.jsx";
import KnowledgeBaseHomeTwo from "../pages/applications/KnowledgeBaseHomeTwo.jsx";
import UserManagementAddUser from "../pages/applications/UserManagementAddUser.jsx";
import UserManagementEditUser from "../pages/applications/UserManagementEditUser.jsx";
import UserManagementGroupsList from "../pages/applications/UserManagementGroupsList.jsx";
import UserManagementList from "../pages/applications/UserManagementList.jsx";
import UserManagementOrgDetails from "../pages/applications/UserManagementOrgDetails.jsx";
import AuthLoginBasic from "../pages/auth/AuthLoginBasic.jsx";
import AuthLoginSocial from "../pages/auth/AuthLoginSocial.jsx";
import AuthPasswordBasic from "../pages/auth/AuthPasswordBasic.jsx";
import AuthPasswordSocial from "../pages/auth/AuthPasswordSocial.jsx";
import AuthRedirect from "../pages/auth/AuthRedirect.jsx";
import AuthRegisterBasic from "../pages/auth/AuthRegisterBasic.jsx";
import AuthRegisterSocial from "../pages/auth/AuthRegisterSocial.jsx";
import Dashboard from "../pages/dashboards/Dashboard.jsx";
import DefaultDashboard from "../pages/dashboards/DefaultDashboard.jsx";
import Error400 from "../pages/errors/Error400.jsx";
import Error401 from "../pages/errors/Error401.jsx";
import Error403 from "../pages/errors/Error403.jsx";
import Error404One from "../pages/errors/Error404One.jsx";
import Error404Two from "../pages/errors/Error404Two.jsx";
import Error500 from "../pages/errors/Error500.jsx";
import Error503 from "../pages/errors/Error503.jsx";
import Error504 from "../pages/errors/Error504.jsx";
import MultiTenantAddUsers from "../pages/flows/MultiTenantAddUsers.jsx";
import MultiTenantCreate from "../pages/flows/MultiTenantCreate.jsx";
import MultiTenantJoin from "../pages/flows/MultiTenantJoin.jsx";
import MultiTenantSelect from "../pages/flows/MultiTenantSelect.jsx";
import Wizard from "../pages/flows/Wizard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/default-dashboard" element={<DefaultDashboard />} />

      <Route path="/account-profile" element={<AccountProfile />} />
      <Route path="/account-billing" element={<AccountBilling />} />
      <Route path="/account-security" element={<AccountSecurity />} />
      <Route path="/account-notifications" element={<AccountNotifications />} />

      <Route path="/auth-login-basic" element={<AuthLoginBasic />} />
      <Route path="/auth-register-basic" element={<AuthRegisterBasic />} />
      <Route path="/auth-password-basic" element={<AuthPasswordBasic />} />
      <Route path="/auth-login-social" element={<AuthLoginSocial />} />
      <Route path="/auth-register-social" element={<AuthRegisterSocial />} />
      <Route path="/auth-password-social" element={<AuthPasswordSocial />} />
      <Route path="/auth-redirect" element={<AuthRedirect />} />

      <Route path="/error-400" element={<Error400 />} />
      <Route path="/error-401" element={<Error401 />} />
      <Route path="/error-403" element={<Error403 />} />
      <Route path="/error-404-1" element={<Error404One />} />
      <Route path="/error-404-2" element={<Error404Two />} />
      <Route path="/error-500" element={<Error500 />} />
      <Route path="/error-503" element={<Error503 />} />
      <Route path="/error-504" element={<Error504 />} />

      <Route path="/pricing" element={<Pricing />} />
      <Route path="/invoice" element={<Invoice />} />

      <Route path="/knowledge-base-home-1" element={<KnowledgeBaseHomeOne />} />
      <Route path="/knowledge-base-home-2" element={<KnowledgeBaseHomeTwo />} />
      <Route path="/knowledge-base-category" element={<KnowledgeBaseCategory />} />
      <Route path="/knowledge-base-article" element={<KnowledgeBaseArticle />} />
      <Route path="/user-management-list" element={<UserManagementList />} />
      <Route path="/user-management-edit-user" element={<UserManagementEditUser />} />
      <Route path="/user-management-add-user" element={<UserManagementAddUser />} />
      <Route path="/user-management-groups-list" element={<UserManagementGroupsList />} />
      <Route path="/user-management-org-details" element={<UserManagementOrgDetails />} />
      <Route path="/blog-management-posts-list" element={<BlogManagementPostsList />} />
      <Route path="/blog-management-create-post" element={<BlogManagementCreatePost />} />
      <Route path="/blog-management-edit-post" element={<BlogManagementEditPost />} />
      <Route path="/blog-management-posts-admin" element={<BlogManagementPostsAdmin />} />

      <Route path="/multi-tenant-select" element={<MultiTenantSelect />} />
      <Route path="/multi-tenant-join" element={<MultiTenantJoin />} />
      <Route path="/multi-tenant-create" element={<MultiTenantCreate />} />
      <Route path="/multi-tenant-add-users" element={<MultiTenantAddUsers />} />
      <Route path="/wizard" element={<Wizard />} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
