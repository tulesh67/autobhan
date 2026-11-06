import { Link } from 'react-router-dom'

const catalog = [
  {
    title: 'Factory diagnostics',
    price: 'From $149',
    img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    points: ['OEM-level scan tools', 'Live data & road test', 'Written findings, not a code printout'],
  },
  {
    title: 'Brakes & suspension',
    price: 'From $289',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80',
    points: ['Pads, rotors, calipers', 'Bushings, struts, alignment', 'Low-dust, quiet compounds'],
  },
  {
    title: 'Scheduled maintenance',
    price: 'From $89',
    img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80',
    points: ['Oil, filters, fluids', 'Timing belts & water pumps', 'Manufacturer interval tracking'],
  },
  {
    title: 'A/C & electrical',
    price: 'From $129',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    points: ['R1234yf / R134a recovery', 'Module programming', 'Battery & charging systems'],
  },
  {
    title: 'Tires & alignment',
    price: 'From $99',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    points: ['Hunter alignment', 'Road-force balancing', 'TPMS & winter setups'],
  },
  {
    title: 'Detail & protection',
    price: 'From $179',
    img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    points: ['Paint-safe wash', 'Interior restoration', 'Ceramic & PPF partners'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Menu</p>
          <h1>
            Service, not
            <em> a parts catalog.</em>
          </h1>
          <p className="lede">
            Every job starts with inspection. Pricing below is a starting range — your estimate is specific to
            the vehicle in front of us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-list">
          {catalog.map((item) => (
            <article className="service" key={item.title}>
              <img src={item.img} alt="" />
              <div>
                <div className="service__top">
                  <h2>{item.title}</h2>
                  <span>{item.price}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="text-link" to="/contact">
                  Book this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
