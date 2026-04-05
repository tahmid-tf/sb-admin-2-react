import { Link } from "react-router-dom";
import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function KnowledgeBaseCategory() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="folder" title="Knowledge Base Category" subtitle="Getting Started articles for new users and teams." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Articles">
          <div className="list-group list-group-flush">
            {["Setting up your account", "Understanding your dashboard", "Managing users and teams", "Billing basics"].map((item) => (
              <Link className="list-group-item list-group-item-action" to="/knowledge-base-article" key={item}>
                {item}
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>
    </main>
  );
}

export default KnowledgeBaseCategory;
