import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/sidebar.jsx";
import TopNav from "./component/TopNav.jsx";
import "./css/styles.css";
import useTemplateVendors from "./hooks/useTemplateVendors.js";
import AppRoutes from "./routes/AppRoutes.jsx";

function DashboardLayout() {
  const vendorsReady = useTemplateVendors();

  return (
    <>
      <TopNav />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>

        <div id="layoutSidenav_content">{vendorsReady ? <AppRoutes /> : null}</div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout />
    </BrowserRouter>
  );
}

export default App;
