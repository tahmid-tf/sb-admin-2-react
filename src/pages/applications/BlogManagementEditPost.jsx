import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function BlogManagementEditPost() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="edit-2" title="Edit Post" subtitle="Update an existing article before publishing changes." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Edit Content">
          <form>
            <div className="mb-3"><input className="form-control" defaultValue="How to launch a dashboard" /></div>
            <div className="mb-3"><textarea className="form-control" rows="8" defaultValue="This post content can be edited here." /></div>
            <button className="btn btn-primary" type="button">Update Post</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}

export default BlogManagementEditPost;
