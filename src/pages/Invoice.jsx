import { CompactHeader, useFeatherRefresh } from "../component/PageHelpers.jsx";

function Invoice() {
  useFeatherRefresh();

  return (
    <main>
      <CompactHeader icon="file-text" title="Invoice" subtitle="Invoice #39201 issued on June 15, 2021." />
      <div className="container-xl px-4 mt-4">
        <div className="card">
          <div className="card-body p-5">
            <div className="row justify-content-between align-items-center mb-4">
              <div className="col-md-6">
                <div className="fw-bold text-primary">Start Bootstrap</div>
                <div className="small text-muted">123 Market Street<br />San Francisco, CA 94103</div>
              </div>
              <div className="col-md-4 text-md-end mt-4 mt-md-0">
                <div className="fw-bold">Billed To</div>
                <div className="small text-muted">Valerie Luna<br />456 Elm Street<br />San Francisco, CA 94108</div>
              </div>
            </div>
            <div className="table-responsive mb-4">
              <table className="table table-borderless">
                <thead className="border-bottom">
                  <tr>
                    <th>Description</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Freelancer Plan - June</td><td className="text-end">$20.00</td></tr>
                  <tr><td>Additional Seats</td><td className="text-end">$10.00</td></tr>
                  <tr><td>Priority Support</td><td className="text-end">$5.00</td></tr>
                </tbody>
                <tfoot className="border-top">
                  <tr><td className="fw-bold">Total</td><td className="text-end fw-bold">$35.00</td></tr>
                </tfoot>
              </table>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-light" type="button">Download PDF</button>
              <button className="btn btn-primary" type="button">Pay Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Invoice;
