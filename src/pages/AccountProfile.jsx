import { useEffect } from "react";
import profile1 from "../assets/img/illustrations/profiles/profile-1.png";
import AccountNav from "../component/AccountNav.jsx";

function AccountProfile() {
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
                  Account Settings - Profile
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-xl px-4 mt-4">
        <AccountNav />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img className="img-account-profile rounded-circle mb-2" src={profile1} alt="Profile" />
                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                <button className="btn btn-primary" type="button">Upload new image</button>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                    <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" defaultValue="username" />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                      <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="Valerie" />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                      <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="Luna" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                      <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue="Start Bootstrap" />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Location</label>
                      <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue="name@example.com" />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                      <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue="555-123-4567" />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                      <input className="form-control" id="inputBirthday" type="text" placeholder="Enter your birthday" defaultValue="06/10/1988" />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button">Save changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountProfile;
