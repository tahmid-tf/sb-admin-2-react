import { CompactHeader, SectionCard, useFeatherRefresh } from "../../component/PageHelpers.jsx";

function KnowledgeBaseArticle() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="file-text" title="Knowledge Base Article" subtitle="Setting up your account and team workspace." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Overview">
          <p>Start by creating your workspace, inviting collaborators, and reviewing the dashboard layout. This article gives you a quick path to becoming productive.</p>
          <p className="mb-0">Once the workspace is ready, configure your account preferences, notification settings, and billing details from the account menu.</p>
        </SectionCard>
        <SectionCard title="Steps">
          <ol className="mb-0">
            <li>Create your account and verify your email.</li>
            <li>Open the dashboard and review your main navigation.</li>
            <li>Invite team members and assign permissions.</li>
            <li>Complete your billing and notification preferences.</li>
          </ol>
        </SectionCard>
      </div>
    </main>
  );
}

export default KnowledgeBaseArticle;
