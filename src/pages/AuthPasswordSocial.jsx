import { Link } from "react-router-dom";
import { AuthShell } from "../component/PageHelpers.jsx";

function AuthPasswordSocial() {
  return (
    <AuthShell
      title="Forgot Your Password?"
      subtitle="We'll email you a reset link so you can get back in."
      footerLink={<Link to="/auth-login-social">Return to login</Link>}
    >
      <form>
        <div className="mb-3">
          <input className="form-control" type="email" placeholder="name@example.com" />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Send Reset Link</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthPasswordSocial;
