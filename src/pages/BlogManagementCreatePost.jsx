import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function BlogManagementCreatePost() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="edit" title="Create Post" subtitle="Draft a new post for your content team." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Post Editor">
          <form>
            <div className="mb-3"><input className="form-control" placeholder="Post title" /></div>
            <div className="mb-3"><textarea className="form-control" rows="8" placeholder="Write your post..." /></div>
            <button className="btn btn-primary" type="button">Save Draft</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}

export default BlogManagementCreatePost;
