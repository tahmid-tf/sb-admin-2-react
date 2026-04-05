import { Link } from "react-router-dom";
import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function KnowledgeBaseHomeTwo() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="search" title="Search Knowledge Base" subtitle="Quickly find guides, walkthroughs, and troubleshooting articles." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Search Articles">
          <div className="input-group mb-4">
            <input className="form-control" type="text" placeholder="Search for an article..." />
            <button className="btn btn-primary" type="button">Search</button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link className="d-block mb-3 text-decoration-none" to="/knowledge-base-article">How to invite new team members</Link>
              <Link className="d-block mb-3 text-decoration-none" to="/knowledge-base-article">How to update billing details</Link>
            </div>
            <div className="col-md-6">
              <Link className="d-block mb-3 text-decoration-none" to="/knowledge-base-article">How to configure notifications</Link>
              <Link className="d-block mb-3 text-decoration-none" to="/knowledge-base-article">How to manage user permissions</Link>
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}

export default KnowledgeBaseHomeTwo;
