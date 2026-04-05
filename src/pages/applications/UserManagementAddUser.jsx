import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function UserManagementAddUser() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="user-plus" title="Add User" subtitle="Invite a new member to your organization." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="New User">
          <form>
            <div className="row gx-3 mb-3">
              <div className="col-md-6"><input className="form-control" placeholder="First name" /></div>
              <div className="col-md-6"><input className="form-control" placeholder="Last name" /></div>
            </div>
            <div className="mb-3"><input className="form-control" placeholder="Email address" /></div>
            <div className="mb-3">
              <select className="form-select">
                <option>Choose role</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Support</option>
              </select>
            </div>
            <button className="btn btn-primary" type="button">Send Invite</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}

export default UserManagementAddUser;
