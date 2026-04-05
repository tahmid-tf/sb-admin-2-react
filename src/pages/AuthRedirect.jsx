import { useEffect } from "react";
import { AuthShell } from "../component/PageHelpers.jsx";

function AuthRedirect() {
  useEffect(() => {
    window.feather?.replace();
  }, []);

  return (
    <AuthShell title="Almost There" subtitle="We’re redirecting you to your destination now." footerLink={null}>
      <div className="text-center py-4">
        <div className="mb-3">
          <div className="spinner-border text-primary" role="status" />
        </div>
        <p className="text-muted mb-0">Preparing your dashboard experience.</p>
      </div>
    </AuthShell>
  );
}

export default AuthRedirect;
