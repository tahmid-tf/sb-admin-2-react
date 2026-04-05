import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function BlogManagementPostsList() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="file" title="Posts List" subtitle="Browse and manage published and draft posts." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Posts">
          <div className="table-responsive">
            <table className="table">
              <thead><tr><th>Title</th><th>Status</th><th>Author</th></tr></thead>
              <tbody>
                <tr><td>How to launch a dashboard</td><td>Published</td><td>Valerie Luna</td></tr>
                <tr><td>New billing tools</td><td>Draft</td><td>Emily Fowler</td></tr>
                <tr><td>Team collaboration tips</td><td>Scheduled</td><td>Thomas Wilcox</td></tr>
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}

export default BlogManagementPostsList;
