import { Link } from "react-router-dom";
import { AuthShell } from "../../component/PageHelpers.jsx";

function AuthPasswordBasic() {
  return (
    <AuthShell
      title="Password Recovery"
      subtitle="Enter your email address and we will send you password reset instructions."
      footerLink={<Link to="/auth-login-basic">Return to login</Link>}
    >
      <form>
        <div className="mb-3">
          <label className="small mb-1" htmlFor="recoveryEmail">Email</label>
          <input className="form-control" id="recoveryEmail" type="email" placeholder="name@example.com" />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Reset Password</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthPasswordBasic;
