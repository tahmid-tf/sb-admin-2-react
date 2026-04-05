import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function UserManagementGroupsList() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="layers" title="Groups List" subtitle="Review user groups and organization access." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Groups">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Administrators</li>
            <li className="list-group-item">Content Editors</li>
            <li className="list-group-item">Support Team</li>
          </ul>
        </SectionCard>
      </div>
    </main>
  );
}

export default UserManagementGroupsList;
