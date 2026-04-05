import { useEffect } from "react";
import AccountNav from "../../component/AccountNav.jsx";

function AccountSecurity() {
  useEffect(() => {
    window.feather?.replace();
  }, []);

  return (
    <main>
      <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
        <div className="container-xl px-4">
          <div className="page-header-content">
            <div className="row align-items-center justify-content-between pt-3">
              <div className="col-auto mb-3">
                <h1 className="page-header-title">
                  <div className="page-header-icon"><i data-feather="user" /></div>
                  Account Settings - Security
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-xl px-4 mt-4">
        <AccountNav />
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="currentPassword">Current Password</label>
                    <input className="form-control" id="currentPassword" type="password" placeholder="Enter current password" />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="newPassword">New Password</label>
                    <input className="form-control" id="newPassword" type="password" placeholder="Enter new password" />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm new password" />
                  </div>
                  <button className="btn btn-primary" type="button">Save</button>
                </form>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">Security Preferences</div>
              <div className="card-body">
                <h5 className="mb-1">Account Privacy</h5>
                <p className="small text-muted">By setting your account to private, your profile information and posts will not be visible to users outside of your user groups.</p>
                <form>
                  <div className="form-check">
                    <input className="form-check-input" id="radioPrivacy1" type="radio" name="radioPrivacy" defaultChecked />
                    <label className="form-check-label" htmlFor="radioPrivacy1">Public (posts are available to all users)</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="radioPrivacy2" type="radio" name="radioPrivacy" />
                    <label className="form-check-label" htmlFor="radioPrivacy2">Private (posts are available to only users in your groups)</label>
                  </div>
                </form>
                <hr className="my-4" />
                <h5 className="mb-1">Data Sharing</h5>
                <p className="small text-muted">Sharing usage data can help us to improve our products and better serve our users as they navigate through our application.</p>
                <form>
                  <div className="form-check">
                    <input className="form-check-input" id="radioUsage1" type="radio" name="radioUsage" defaultChecked />
                    <label className="form-check-label" htmlFor="radioUsage1">Yes, share data and crash reports with app developers</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="radioUsage2" type="radio" name="radioUsage" />
                    <label className="form-check-label" htmlFor="radioUsage2">No, limit my data sharing with app developers</label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Two-Factor Authentication</div>
              <div className="card-body">
                <p>Add another level of security to your account by enabling two-factor authentication.</p>
                <form>
                  <div className="form-check">
                    <input className="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" defaultChecked />
                    <label className="form-check-label" htmlFor="twoFactorOn">On</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="twoFactorOff" type="radio" name="twoFactor" />
                    <label className="form-check-label" htmlFor="twoFactorOff">Off</label>
                  </div>
                  <div className="mt-3">
                    <label className="small mb-1" htmlFor="twoFactorSMS">SMS Number</label>
                    <input className="form-control" id="twoFactorSMS" type="tel" placeholder="Enter a phone number" defaultValue="555-123-4567" />
                  </div>
                </form>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">Delete Account</div>
              <div className="card-body">
                <p>Deleting your account is a permanent action and cannot be undone.</p>
                <button className="btn btn-danger-soft text-danger" type="button">I understand, delete my account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountSecurity;
