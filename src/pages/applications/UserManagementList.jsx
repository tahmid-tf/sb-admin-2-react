import { useEffect } from "react";
import { Link } from "react-router-dom";
import profile1 from "../../assets/img/illustrations/profiles/profile-1.png";
import profile2 from "../../assets/img/illustrations/profiles/profile-2.png";
import profile3 from "../../assets/img/illustrations/profiles/profile-3.png";
import profile4 from "../../assets/img/illustrations/profiles/profile-4.png";
import profile5 from "../../assets/img/illustrations/profiles/profile-5.png";
import profile6 from "../../assets/img/illustrations/profiles/profile-6.png";
import { useSimpleDatatable } from "../../component/PageHelpers.jsx";

const users = [
  [profile1, "Tiger Nixon", "tiger@email.com", "Administrator", ["Sales", "Developers", "Marketing", "Managers", "Customer"], "20 Jun 2021"],
  [profile2, "Garrett Winters", "gwinterse@email.com", "Administrator", ["Sales", "Developers", "Marketing", "Managers", "Customer"], "20 Jun 2021"],
  [profile3, "Ashton Cox", "ashtonc@email.com", "Registered", ["Sales", "Marketing"], "20 Jun 2021"],
  [profile4, "Cedric Kelly", "cedrickel@email.com", "Registered", ["Sales", "Managers"], "20 Jun 2021"],
  [profile5, "Airi Satou", "asatou@email.com", "Registered", ["Customer"], "20 Jun 2021"],
  [profile6, "Brielle Williamson", "bwilliamson@email.com", "Registered", ["Customer"], "20 Jun 2021"],
  [profile1, "Herrod Chandler", "harrodc@email.com", "Registered", ["Sales"], "20 Jun 2021"],
  [profile2, "Rhona Davidson", "rhonadavidson@email.com", "Registered", ["Sales", "Managers"], "20 Jun 2021"],
  [profile3, "Colleen Hurst", "churst@email.com", "Registered", ["Developers"], "20 Jun 2021"],
  [profile4, "Sonya Frost", "sfrost@email.com", "Registered", ["Customer"], "20 Jun 2021"],
  [profile5, "Jena Gaines", "jenagaines@email.com", "Registered", ["Customer"], "20 Jun 2021"],
  [profile6, "Quinn Flynn", "qflynn@email.com", "Registered", ["Sales", "Managers"], "20 Jun 2021"],
];

const badgeClass = {
  Sales: "bg-green-soft text-green",
  Developers: "bg-blue-soft text-blue",
  Marketing: "bg-red-soft text-red",
  Managers: "bg-purple-soft text-purple",
  Customer: "bg-yellow-soft text-yellow",
};

function UserManagementList() {
  useSimpleDatatable("datatablesSimple");

  useEffect(() => {
    window.feather?.replace();
  });

  return (
    <main>
      <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
        <div className="container-fluid px-4">
          <div className="page-header-content">
            <div className="row align-items-center justify-content-between pt-3">
              <div className="col-auto mb-3">
                <h1 className="page-header-title">
                  <div className="page-header-icon"><i data-feather="user" /></div>
                  Users List
                </h1>
              </div>
              <div className="col-12 col-xl-auto mb-3">
                <Link className="btn btn-sm btn-light text-primary" to="/user-management-groups-list">
                  <i className="me-1" data-feather="users" />
                  Manage Groups
                </Link>
                <Link className="btn btn-sm btn-light text-primary ms-2" to="/user-management-add-user">
                  <i className="me-1" data-feather="user-plus" />
                  Add New User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid px-4">
        <div className="card">
          <div className="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Groups</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Groups</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map(([avatar, name, email, role, groups, joined]) => (
                  <tr key={email}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-2">
                          <img className="avatar-img img-fluid" src={avatar} alt={name} />
                        </div>
                        {name}
                      </div>
                    </td>
                    <td>{email}</td>
                    <td>{role}</td>
                    <td>
                      {groups.map((group) => (
                        <span className={`badge me-1 ${badgeClass[group]}`} key={group}>
                          {group}
                        </span>
                      ))}
                    </td>
                    <td>{joined}</td>
                    <td>
                      <Link className="btn btn-datatable btn-icon btn-transparent-dark me-2" to="/user-management-edit-user">
                        <i data-feather="edit" />
                      </Link>
                      <button className="btn btn-datatable btn-icon btn-transparent-dark" type="button">
                        <i data-feather="trash-2" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserManagementList;
