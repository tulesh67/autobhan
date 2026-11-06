import { useState } from 'react'

const services = [
  'Diagnostics',
  'Brakes & suspension',
  'Scheduled maintenance',
  'A/C & electrical',
  'Tires & alignment',
  'Detail & protection',
  'Not sure — inspect it',
]

const empty = {
  name: '',
  phone: '',
  email: '',
  vehicle: '',
  service: 'Diagnostics',
  date: '',
  notes: '',
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Book & contact</p>
          <h1>
            Tell us the car.
            <em> We’ll make a plan.</em>
          </h1>
          <p className="lede">
            Most appointments are confirmed within two hours during shop hours. For warning lights or no-starts,
            call the desk — we’ll try to get you in the same day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>The desk</h2>
            <p>
              1840 Industrial Way
              <br />
              Austin, TX 78741
            </p>
            <p>
              <a href="tel:+15550142847">(555) 014-2847</a>
              <br />
              <a href="mailto:service@autobhan.demo">service@autobhan.demo</a>
            </p>
            <p>
              Mon–Fri 7:30a–6:00p
              <br />
              Saturday 8:00a–2:00p
              <br />
              Sunday closed
            </p>
            <div className="map-frame">
              <iframe
                title="Autobhan map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=1840%20Industrial%20Way%20Austin%20TX&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {sent ? (
            <div className="form-success">
              <p className="eyebrow">Request received</p>
              <h2>We’ll confirm your bay shortly.</h2>
              <p>
                Thanks, {form.name.split(' ')[0] || 'there'}. This is a demo — in a live site this would land in
                the shop’s inbox. Call (555) 014-2847 if you need a same-day slot.
              </p>
              <button className="btn btn--gold" type="button" onClick={() => setSent(false)}>
                Send another request
              </button>
            </div>
          ) : (
            <form className="book-form" onSubmit={submit}>
              <h2>Request an appointment</h2>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" value={form.name} onChange={update} required autoComplete="name" />
                </label>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={update} required autoComplete="tel" />
                </label>
              </div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Vehicle (year, make, model)
                <input
                  name="vehicle"
                  value={form.vehicle}
                  onChange={update}
                  required
                  placeholder="2021 BMW M340i"
                />
              </label>
              <div className="form-row">
                <label>
                  Service
                  <select name="service" value={form.service} onChange={update}>
                    {services.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preferred date
                  <input type="date" name="date" value={form.date} onChange={update} required />
                </label>
              </div>
              <label>
                Notes
                <textarea
                  name="notes"
                  rows="4"
                  value={form.notes}
                  onChange={update}
                  placeholder="Warning lights, noises, last service…"
                />
              </label>
              <button className="btn btn--gold" type="submit">
                Request appointment
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
