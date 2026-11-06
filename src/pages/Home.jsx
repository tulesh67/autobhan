import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Diagnostics',
    copy: 'Factory scan tools and road tests — we find the real issue, not a guess.',
  },
  {
    title: 'Brakes & chassis',
    copy: 'Pads, rotors, suspension, and alignment for a confident, quiet stop.',
  },
  {
    title: 'Maintenance',
    copy: 'Oil, fluids, belts, and filters on manufacturer intervals — no upsells.',
  },
  {
    title: 'Performance & detail',
    copy: 'ECU-aware service and paint-safe detailing that respects the car.',
  },
]

const steps = [
  { n: '01', title: 'Drop in or book', copy: 'Same-day slots most weekdays. Shuttle and loaner available.' },
  { n: '02', title: 'Diagnose, then decide', copy: 'Photos, findings, and a clear estimate before any work starts.' },
  { n: '03', title: 'Approve & repair', copy: 'OEM or better parts. You approve. We wrench.' },
  { n: '04', title: 'Road test & handoff', copy: 'We drive it, wash it, and walk you through what we did.' },
]

const reviews = [
  {
    quote:
      'They treated my 911 like it was theirs. Transparent estimate, finished a day early, and the car feels new.',
    name: 'Priya M.',
    meta: 'Carrera S · annual service',
  },
  {
    quote:
      'Finally a shop that doesn’t talk down to you. Explained the misfire, showed the coil, and didn’t pad the bill.',
    name: 'James R.',
    meta: 'F-150 · drivability',
  },
  {
    quote:
      'Booked online, dropped the keys, got photo updates. Brakes are silent and the loaner was clean.',
    name: 'Elena V.',
    meta: 'CX-5 · brake job',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero__img"
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=80"
          alt="Luxury sports car in a professional studio"
        />
        <div className="hero__veil" />
        <div className="container hero__content">
          <p className="eyebrow">Austin · ASE Master Technicians</p>
          <h1>
            Precision care
            <em> for every mile.</em>
          </h1>
          <p className="hero__lede">
            Autobhan is an independent garage built like a dealer — without the dealer runaround.
            Diagnostics you can trust. Work you can see.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--gold" to="/contact">
              Schedule service
            </Link>
            <Link className="btn btn--ghost" to="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__row">
          <div>
            <strong>18</strong>
            <span>years in the bay</span>
          </div>
          <div>
            <strong>12k+</strong>
            <span>vehicles serviced</span>
          </div>
          <div>
            <strong>ASE</strong>
            <span>master certified team</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>client rating</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Capabilities</p>
            <h2>
              Built for commuters,
              <em> tuned for enthusiasts.</em>
            </h2>
            <p>
              From oil changes to drivability hunts, every bay is equipped for European, Asian, and domestic
              platforms.
            </p>
          </div>
          <div className="card-grid">
            {services.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link to="/services" className="text-link">
                  View details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split__media">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
            alt="Performance car in a low-light studio"
          />
        </div>
        <div className="split__copy">
          <p className="eyebrow">Why Autobhan</p>
          <h2>
            No mystery invoices.
            <em> No rushed wrenches.</em>
          </h2>
          <p>
            We photograph findings, explain options in plain language, and only proceed with your approval.
            Parts are OEM or equivalent — never the cheapest that will “probably hold.”
          </p>
          <ul className="checklist">
            <li>Written estimates before work begins</li>
            <li>Digital vehicle inspections on every visit</li>
            <li>Loaner cars and rideshare credit</li>
            <li>24-month / 24,000-mile workmanship warranty</li>
          </ul>
          <Link className="btn btn--gold" to="/about">
            Meet the shop
          </Link>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Process</p>
            <h2>
              Four steps.
              <em> Zero surprises.</em>
            </h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Clients</p>
            <h2>
              What drivers say
              <em> after the handoff.</em>
            </h2>
          </div>
          <div className="reviews">
            {reviews.map((review) => (
              <blockquote className="review" key={review.name}>
                <p>“{review.quote}”</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.meta}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Book a bay. We’ll take it from there.</h2>
          </div>
          <Link className="btn btn--dark" to="/contact">
            Request an appointment
          </Link>
        </div>
      </section>
    </>
  )
}
