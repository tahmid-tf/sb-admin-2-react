import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function MultiTenantSelect() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="repeat" title="Multi-Tenant Registration" subtitle="Choose how you want to join or create a workspace." />
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-md-6"><SectionCard title="Join Existing Workspace"><button className="btn btn-primary" type="button">Join Workspace</button></SectionCard></div>
          <div className="col-md-6"><SectionCard title="Create New Workspace"><button className="btn btn-outline-primary" type="button">Create Workspace</button></SectionCard></div>
        </div>
      </div>
    </main>
  );
}

export default MultiTenantSelect;
