import { Link } from "react-router-dom";
import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function KnowledgeBaseHomeOne() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="book-open" title="Knowledge Base" subtitle="Browse support topics and popular answers." />
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-lg-8">
            <SectionCard title="Popular Topics">
              <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action" to="/knowledge-base-category">Getting Started</Link>
                <Link className="list-group-item list-group-item-action" to="/knowledge-base-category">Billing & Plans</Link>
                <Link className="list-group-item list-group-item-action" to="/knowledge-base-category">Team Management</Link>
              </div>
            </SectionCard>
          </div>
          <div className="col-lg-4">
            <SectionCard title="Need More Help?">
              <p className="mb-3">Our support team is ready to help you solve technical issues and workflow questions.</p>
              <button className="btn btn-primary" type="button">Contact Support</button>
            </SectionCard>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KnowledgeBaseHomeOne;
