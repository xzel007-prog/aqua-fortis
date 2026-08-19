import "./Industries.css";

const sectors = [
  {
    title: "Oil and Gas",
    text: "Operators, contractors, and service companies working onshore and offshore across the Niger Delta and West Africa.",
  },
  {
    title: "Offshore and Marine Support",
    text: "Platforms, vessels, and logistics crews who need induction, survival awareness, and emergency readiness.",
  },
  {
    title: "Construction and Fabrication",
    text: "Yards, EPC contractors, and project teams managing height, lifting, confined space, and site traffic risks.",
  },
  {
    title: "Manufacturing and Warehouses",
    text: "Plants and distribution centres building everyday HSE discipline, fire readiness, and equipment safety.",
  },
  {
    title: "Chemical and Allied Industries",
    text: "Process environments where gas hazards, spill response, and permit discipline are non-negotiable.",
  },
  {
    title: "Logistics and Fleet Operations",
    text: "Transport and journey management teams focused on defensive driving and roadside risk control.",
  },
  {
    title: "Government and Parastatals",
    text: "Public-sector organisations strengthening workforce safety competence and compliance culture.",
    full: true,
  },
];

function Industries() {
  return (
    <main className="page">
      {/* Hero */}
      <div className="color">
         <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Sectors</p>
          <h1>Industry contexts we train for.</h1>
          <p className="hero-sub">
            Aqua Fortis programmes are shaped for the hazards, schedules, and
            compliance expectations of high-risk work across Nigeria and
            West Africa.
          </p>
        </div>
      </section>
      </div>
     

      {/* Sector grid */}
      <section className="sectors">
        <div className="sectors-grid">
          {sectors.map((s) => (
            <div className={`sector${s.full ? " sector--full" : ""}`} key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta">
        <div className="cta-inner">
          <p className="eyebrow eyebrow--light">Corporate programmes</p>
          <h2>Match training to your operational calendar.</h2>
          <p className="cta-sub">
            Whether you need open courses for individuals or in-plant
            delivery for project teams, we align content and scheduling to
            your site realities.
          </p>
          <div className="cta-actions">
            <button className="btn btn--primary">Browse courses</button>
            <button className="btn btn--outline">Request corporate training</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Industries;
