import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function Wizard() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="sliders" title="Wizard" subtitle="A guided multi-step setup experience." />
      <div className="container-xl px-4 mt-4">
        <SectionCard title="Step 1 of 3">
          <p>Configure the basics of your project, then continue through the remaining setup steps.</p>
          <div className="progress mb-3">
            <div className="progress-bar" role="progressbar" style={{ width: "33%" }} />
          </div>
          <button className="btn btn-primary" type="button">Continue</button>
        </SectionCard>
      </div>
    </main>
  );
}

export default Wizard;
