import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function UserManagementEditUser() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="edit-3" title="Edit User" subtitle="Update user details, permissions, and role settings." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="User Details">
          <form>
            <div className="row gx-3 mb-3">
              <div className="col-md-6"><input className="form-control" defaultValue="Valerie" /></div>
              <div className="col-md-6"><input className="form-control" defaultValue="Luna" /></div>
            </div>
            <div className="mb-3"><input className="form-control" defaultValue="vluna@example.com" /></div>
            <div className="mb-3">
              <select className="form-select" defaultValue="Admin">
                <option>Admin</option>
                <option>Editor</option>
                <option>Support</option>
              </select>
            </div>
            <button className="btn btn-primary" type="button">Save User</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}

export default UserManagementEditUser;
