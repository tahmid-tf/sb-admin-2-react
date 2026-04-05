import { CompactHeader, SectionCard, useFeatherRefresh } from "../component/PageHelpers.jsx";

function Pricing() {
  useFeatherRefresh();

  const plans = [
    ["Freelancer", "$20", ["1 user", "Basic analytics", "Email support"]],
    ["Startup", "$75", ["5 users", "Advanced analytics", "Priority email support"]],
    ["Enterprise", "$250", ["Unlimited users", "Custom reporting", "Dedicated support"]],
  ];

  return (
    <main>
      <CompactHeader icon="credit-card" title="Pricing" subtitle="Flexible plans for teams of every size." />
      <div className="container-xl px-4 mt-4">
        <div className="row">
          {plans.map(([name, price, features]) => (
            <div className="col-lg-4 mb-4" key={name}>
              <div className="card h-100">
                <div className="card-header text-center">{name}</div>
                <div className="card-body text-center">
                  <div className="display-5 fw-bold">{price}</div>
                  <div className="text-muted mb-4">per month</div>
                  {features.map((feature) => (
                    <div className="small mb-2" key={feature}>{feature}</div>
                  ))}
                  <button className="btn btn-primary mt-3" type="button">Choose Plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SectionCard title="Need a custom plan?">
          <p className="mb-0">Contact our team for a tailored package with onboarding, training, and enterprise support.</p>
        </SectionCard>
      </div>
    </main>
  );
}

export default Pricing;
