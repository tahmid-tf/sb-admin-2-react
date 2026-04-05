import { useEffect } from "react";
import { Link } from "react-router-dom";

export function useFeatherRefresh() {
  useEffect(() => {
    window.feather?.replace();
  });
}

export function CompactHeader({ icon = "file-text", title, subtitle }) {
  useFeatherRefresh();

  return (
    <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
      <div className="container-xl px-4">
        <div className="page-header-content">
          <div className="row align-items-center justify-content-between pt-3">
            <div className="col-auto mb-3">
              <h1 className="page-header-title">
                <div className="page-header-icon">
                  <i data-feather={icon} />
                </div>
                {title}
              </h1>
              {subtitle ? <div className="page-header-subtitle">{subtitle}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AuthShell({ title, subtitle, children, footerLink }) {
  useFeatherRefresh();

  return (
    <main>
      <div className="container-xl px-4 d-flex justify-content-center">
        <div className="col-lg-5">
          <div className="text-center mt-5 mb-4">
            <h1 className="fw-bold">{title}</h1>
            <p className="text-muted mb-0">{subtitle}</p>
          </div>
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-body p-5">{children}</div>
            {footerLink ? (
              <div className="card-footer text-center py-3">
                <div className="small">{footerLink}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export function ErrorShell({ code, title, description, image }) {
  useFeatherRefresh();

  return (
    <main>
      <div className="container-xl px-4">
        <div className="text-center mt-5">
          <div className="display-1 fw-bold text-primary">{code}</div>
          <p className="lead">{title}</p>
          <p className="text-gray-600 mb-5">{description}</p>
          <img className="img-fluid p-4" src={image} alt={title} style={{ maxHeight: "18rem" }} />
          <div>
            <Link className="btn btn-primary" to="/dashboard">
              <i className="me-1" data-feather="arrow-left" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export function SectionCard({ title, children, footer }) {
  return (
    <div className="card mb-4">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </div>
  );
}

export function useSimpleDatatable(tableId) {
  useEffect(() => {
    const table = document.getElementById(tableId);
    let dataTable;

    if (table && window.simpleDatatables?.DataTable) {
      dataTable = new window.simpleDatatables.DataTable(table);
    }

    return () => {
      dataTable?.destroy?.();
    };
  }, [tableId]);
}
