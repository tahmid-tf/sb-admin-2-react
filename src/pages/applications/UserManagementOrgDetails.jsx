import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function UserManagementOrgDetails() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="briefcase" title="Organization Details" subtitle="Manage organization profile, billing, and member counts." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Organization">
          <div className="row">
            <div className="col-md-6 mb-3"><strong>Name:</strong> Start Bootstrap</div>
            <div className="col-md-6 mb-3"><strong>Plan:</strong> Startup</div>
            <div className="col-md-6 mb-3"><strong>Members:</strong> 32</div>
            <div className="col-md-6 mb-3"><strong>Location:</strong> San Francisco, CA</div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}

export default UserManagementOrgDetails;
