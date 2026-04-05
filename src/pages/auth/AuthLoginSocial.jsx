import { Link } from "react-router-dom";
import { AuthShell } from "../../component/PageHelpers.jsx";

function AuthLoginSocial() {
  return (
    <AuthShell
      title="Login With Social"
      subtitle="Use a connected account to sign in quickly."
      footerLink={<Link to="/auth-register-social">Need an account? Sign up!</Link>}
    >
      <div className="d-grid gap-2 mb-4">
        <button className="btn btn-google btn-block" type="button"><i className="fab fa-google me-2" />Login with Google</button>
        <button className="btn btn-facebook btn-block" type="button"><i className="fab fa-facebook-f me-2" />Login with Facebook</button>
      </div>
      <div className="text-center small text-muted mb-3">or use your email</div>
      <form>
        <div className="mb-3">
          <input className="form-control" type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input className="form-control" type="password" placeholder="Password" />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Login</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthLoginSocial;
