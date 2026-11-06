export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">The shop</p>
          <h1>
            A quiet bay.
            <em> Loud standards.</em>
          </h1>
          <p className="lede">
            Autobhan opened in 2008 as a two-bay independent. Today we run a six-bay shop with master techs,
            dealer-level software, and a waiting lounge that doesn’t feel like a waiting lounge.
          </p>
        </div>
      </section>

      <section className="split split--about">
        <div className="split__media">
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80"
            alt="Autobhan technician inspecting an engine bay"
          />
        </div>
        <div className="split__copy">
          <p className="eyebrow">People</p>
          <h2>
            Named technicians,
            <em> not a ticket number.</em>
          </h2>
          <p>
            You’ll know who is on your car. Advisors stay with the job from drop-off to delivery. We hire for
            curiosity and keep people long enough that they know your vehicle history by heart.
          </p>
          <div className="people">
            <div>
              <strong>Marcus Hale</strong>
              <span>Owner · ASE Master, L1</span>
            </div>
            <div>
              <strong>Sofia Chen</strong>
              <span>Lead diagnostician</span>
            </div>
            <div>
              <strong>Andre Brooks</strong>
              <span>European specialist</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container amenity-grid">
          <article>
            <h3>Equipment</h3>
            <p>Hunter HawkEye alignment, Snap-on diagnostics, Bosch A/C, torque-controlled lifts.</p>
          </article>
          <article>
            <h3>Makes we know</h3>
            <p>BMW, Mercedes, Porsche, Toyota, Honda, Ford, GM, Tesla service (non-HV battery).</p>
          </article>
          <article>
            <h3>Lounge</h3>
            <p>Wi-Fi, espresso, workspace, and a glass wall to the bays if you like to watch.</p>
          </article>
          <article>
            <h3>Warranty</h3>
            <p>24 months / 24,000 miles on workmanship. Nationwide roadside partners.</p>
          </article>
        </div>
      </section>
    </>
  )
}
