import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function MultiTenantJoin() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="log-in" title="Join Workspace" subtitle="Accept an invitation or join with an access code." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Join Form">
          <input className="form-control mb-3" placeholder="Invitation code" />
          <button className="btn btn-primary" type="button">Join</button>
        </SectionCard>
      </div>
    </main>
  );
}

export default MultiTenantJoin;
