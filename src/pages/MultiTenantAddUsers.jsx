import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function MultiTenantAddUsers() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="user-plus" title="Add Users" subtitle="Invite collaborators during workspace setup." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Invite Users">
          <textarea className="form-control mb-3" rows="5" placeholder="Enter email addresses, one per line" />
          <button className="btn btn-primary" type="button">Send Invites</button>
        </SectionCard>
      </div>
    </main>
  );
}

export default MultiTenantAddUsers;
