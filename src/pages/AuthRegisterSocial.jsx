import { Link } from "react-router-dom";
import { AuthShell } from "../component/PageHelpers.jsx";

function AuthRegisterSocial() {
  return (
    <AuthShell
      title="Join With Social"
      subtitle="Use a provider or create an account with your email."
      footerLink={<Link to="/auth-login-social">Already have an account? Login!</Link>}
    >
      <div className="d-grid gap-2 mb-4">
        <button className="btn btn-google btn-block" type="button"><i className="fab fa-google me-2" />Sign up with Google</button>
        <button className="btn btn-facebook btn-block" type="button"><i className="fab fa-facebook-f me-2" />Sign up with Facebook</button>
      </div>
      <form>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Full name" />
        </div>
        <div className="mb-3">
          <input className="form-control" type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input className="form-control" type="password" placeholder="Password" />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Create Account</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthRegisterSocial;
