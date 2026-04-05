import { Link } from "react-router-dom";
import { AuthShell } from "../../component/PageHelpers.jsx";

function AuthLoginBasic() {
  return (
    <AuthShell
      title="Welcome Back"
      subtitle="Login to your account with your email and password."
      footerLink={<Link to="/auth-register-basic">Need an account? Sign up!</Link>}
    >
      <form>
        <div className="mb-3">
          <label className="small mb-1" htmlFor="loginEmail">Email</label>
          <input className="form-control" id="loginEmail" type="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="small mb-1" htmlFor="loginPassword">Password</label>
          <input className="form-control" id="loginPassword" type="password" placeholder="Enter password" />
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-between">
          <div className="form-check">
            <input className="form-check-input" id="rememberMe" type="checkbox" />
            <label className="form-check-label" htmlFor="rememberMe">Remember password</label>
          </div>
          <Link className="small" to="/auth-password-basic">Forgot password?</Link>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Login</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthLoginBasic;
