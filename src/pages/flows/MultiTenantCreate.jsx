import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function MultiTenantCreate() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="plus-circle" title="Create Workspace" subtitle="Set up a brand-new tenant for your team." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Workspace Details">
          <form>
            <input className="form-control mb-3" placeholder="Workspace name" />
            <input className="form-control mb-3" placeholder="Workspace URL" />
            <button className="btn btn-primary" type="button">Create</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}

export default MultiTenantCreate;
