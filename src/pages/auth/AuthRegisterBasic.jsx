import { Link } from "react-router-dom";
import { AuthShell } from "../../component/PageHelpers.jsx";

function AuthRegisterBasic() {
  return (
    <AuthShell
      title="Create Account"
      subtitle="Get started with a simple email and password."
      footerLink={<Link to="/auth-login-basic">Already have an account? Login!</Link>}
    >
      <form>
        <div className="row gx-3 mb-3">
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="firstName">First Name</label>
            <input className="form-control" id="firstName" type="text" placeholder="Enter first name" />
          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="lastName">Last Name</label>
            <input className="form-control" id="lastName" type="text" placeholder="Enter last name" />
          </div>
        </div>
        <div className="mb-3">
          <label className="small mb-1" htmlFor="registerEmail">Email</label>
          <input className="form-control" id="registerEmail" type="email" placeholder="name@example.com" />
        </div>
        <div className="row gx-3 mb-3">
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="password">Password</label>
            <input className="form-control" id="password" type="password" placeholder="Create password" />
          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm password" />
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button">Create Account</button>
        </div>
      </form>
    </AuthShell>
  );
}

export default AuthRegisterBasic;
