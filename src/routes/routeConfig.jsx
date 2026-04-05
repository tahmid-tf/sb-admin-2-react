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

const defineRoute = (path, label, element) => ({ path, label, element });

export const routes = {
  dashboardAffiliate: defineRoute("/dashboard", "Affiliate", Dashboard),
  dashboardDefault: defineRoute("/default-dashboard", "Default", DefaultDashboard),

  accountProfile: defineRoute("/account-profile", "Profile", AccountProfile),
  accountBilling: defineRoute("/account-billing", "Billing", AccountBilling),
  accountSecurity: defineRoute("/account-security", "Security", AccountSecurity),
  accountNotifications: defineRoute("/account-notifications", "Notifications", AccountNotifications),

  authLoginBasic: defineRoute("/auth-login-basic", "Login", AuthLoginBasic),
  authRegisterBasic: defineRoute("/auth-register-basic", "Register", AuthRegisterBasic),
  authPasswordBasic: defineRoute("/auth-password-basic", "Forgot Password", AuthPasswordBasic),
  authLoginSocial: defineRoute("/auth-login-social", "Login", AuthLoginSocial),
  authRegisterSocial: defineRoute("/auth-register-social", "Register", AuthRegisterSocial),
  authPasswordSocial: defineRoute("/auth-password-social", "Forgot Password", AuthPasswordSocial),
  authRedirect: defineRoute("/auth-redirect", "Redirect", AuthRedirect),

  error400: defineRoute("/error-400", "400 Error", Error400),
  error401: defineRoute("/error-401", "401 Error", Error401),
  error403: defineRoute("/error-403", "403 Error", Error403),
  error404One: defineRoute("/error-404-1", "404 Error 1", Error404One),
  error404Two: defineRoute("/error-404-2", "404 Error 2", Error404Two),
  error500: defineRoute("/error-500", "500 Error", Error500),
  error503: defineRoute("/error-503", "503 Error", Error503),
  error504: defineRoute("/error-504", "504 Error", Error504),

  pricing: defineRoute("/pricing", "Pricing", Pricing),
  invoice: defineRoute("/invoice", "Invoice", Invoice),

  knowledgeBaseHomeOne: defineRoute("/knowledge-base-home-1", "Home 1", KnowledgeBaseHomeOne),
  knowledgeBaseHomeTwo: defineRoute("/knowledge-base-home-2", "Home 2", KnowledgeBaseHomeTwo),
  knowledgeBaseCategory: defineRoute("/knowledge-base-category", "Category", KnowledgeBaseCategory),
  knowledgeBaseArticle: defineRoute("/knowledge-base-article", "Article", KnowledgeBaseArticle),

  userManagementList: defineRoute("/user-management-list", "Users List", UserManagementList),
  userManagementEditUser: defineRoute("/user-management-edit-user", "Edit User", UserManagementEditUser),
  userManagementAddUser: defineRoute("/user-management-add-user", "Add User", UserManagementAddUser),
  userManagementGroupsList: defineRoute(
    "/user-management-groups-list",
    "Groups List",
    UserManagementGroupsList,
  ),
  userManagementOrgDetails: defineRoute(
    "/user-management-org-details",
    "Organization Details",
    UserManagementOrgDetails,
  ),

  blogPostsList: defineRoute("/blog-management-posts-list", "Posts List", BlogManagementPostsList),
  blogCreatePost: defineRoute("/blog-management-create-post", "Create Post", BlogManagementCreatePost),
  blogEditPost: defineRoute("/blog-management-edit-post", "Edit Post", BlogManagementEditPost),
  blogPostsAdmin: defineRoute("/blog-management-posts-admin", "Posts Admin", BlogManagementPostsAdmin),

  multiTenantSelect: defineRoute(
    "/multi-tenant-select",
    "Multi-Tenant Registration",
    MultiTenantSelect,
  ),
  multiTenantJoin: defineRoute("/multi-tenant-join", "Join", MultiTenantJoin),
  multiTenantCreate: defineRoute("/multi-tenant-create", "Create", MultiTenantCreate),
  multiTenantAddUsers: defineRoute("/multi-tenant-add-users", "Add Users", MultiTenantAddUsers),
  wizard: defineRoute("/wizard", "Wizard", Wizard),
};

export const appRoutes = Object.values(routes);

export const sidebarSections = [
  { type: "heading", label: "Core" },
  {
    type: "collapse",
    id: "collapseDashboards",
    label: "Dashboards",
    icon: "activity",
    children: [routes.dashboardDefault, routes.dashboardAffiliate],
  },
  { type: "heading", label: "Custom" },
  {
    type: "collapse",
    id: "collapsePages",
    label: "Pages",
    icon: "grid",
    menuId: "accordionSidenavPagesMenu",
    children: [
      {
        type: "collapse",
        id: "pagesCollapseAccount",
        label: "Account",
        children: [
          routes.accountProfile,
          routes.accountBilling,
          routes.accountSecurity,
          routes.accountNotifications,
        ],
      },
      {
        type: "collapse",
        id: "pagesCollapseAuth",
        label: "Authentication",
        menuId: "accordionSidenavPagesAuth",
        children: [
          {
            type: "collapse",
            id: "pagesCollapseAuthBasic",
            label: "Basic",
            children: [routes.authLoginBasic, routes.authRegisterBasic, routes.authPasswordBasic],
          },
          {
            type: "collapse",
            id: "pagesCollapseAuthSocial",
            label: "Social",
            children: [routes.authLoginSocial, routes.authRegisterSocial, routes.authPasswordSocial],
          },
        ],
      },
      {
        type: "collapse",
        id: "pagesCollapseError",
        label: "Error",
        children: [
          routes.error400,
          routes.error401,
          routes.error403,
          routes.error404One,
          routes.error404Two,
          routes.error500,
          routes.error503,
          routes.error504,
        ],
      },
      routes.pricing,
      routes.invoice,
    ],
  },
  {
    type: "collapse",
    id: "collapseApps",
    label: "Applications",
    icon: "globe",
    menuId: "accordionSidenavAppsMenu",
    children: [
      {
        type: "collapse",
        id: "appsCollapseKnowledgeBase",
        label: "Knowledge Base",
        children: [
          routes.knowledgeBaseHomeOne,
          routes.knowledgeBaseHomeTwo,
          routes.knowledgeBaseCategory,
          routes.knowledgeBaseArticle,
        ],
      },
      {
        type: "collapse",
        id: "appsCollapseUserManagement",
        label: "User Management",
        children: [
          routes.userManagementList,
          routes.userManagementEditUser,
          routes.userManagementAddUser,
          routes.userManagementGroupsList,
          routes.userManagementOrgDetails,
        ],
      },
      {
        type: "collapse",
        id: "appsCollapsePostsManagement",
        label: "Posts Management",
        children: [
          routes.blogPostsList,
          routes.blogCreatePost,
          routes.blogEditPost,
          routes.blogPostsAdmin,
        ],
      },
    ],
  },
  {
    type: "collapse",
    id: "collapseFlows",
    label: "Flows",
    icon: "repeat",
    children: [routes.multiTenantSelect, routes.wizard],
  },
];
