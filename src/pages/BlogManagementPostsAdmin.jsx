import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function BlogManagementPostsAdmin() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="shield" title="Posts Admin" subtitle="Moderate content and publication settings." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Post Administration">
          <div className="list-group list-group-flush">
            <div className="list-group-item">Review pending posts</div>
            <div className="list-group-item">Approve scheduled content</div>
            <div className="list-group-item">Manage authors and permissions</div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}

export default BlogManagementPostsAdmin;
