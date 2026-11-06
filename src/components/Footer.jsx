import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="logo">
            <span className="logo__mark">A</span>
            <span className="logo__text">
              Autobhan<span>Garage</span>
            </span>
          </div>
          <p className="footer__blurb">
            Independent ASE-certified service for daily drivers and performance cars.
            Honest diagnostics. Factory-grade finish.
          </p>
        </div>

        <div>
          <h3>Visit</h3>
          <p>
            1840 Industrial Way
            <br />
            Austin, TX 78741
          </p>
          <p>
            Mon–Fri 7:30a–6:00p
            <br />
            Sat 8:00a–2:00p
          </p>
        </div>

        <div>
          <h3>Shop</h3>
          <Link to="/services">Services</Link>
          <Link to="/about">The shop</Link>
          <Link to="/contact">Book &amp; contact</Link>
          <a href="tel:+15550142847">(555) 014-2847</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Autobhan. Demo site for client presentation.</span>
        <span>ASE · EPA · Texas licensed</span>
      </div>
    </footer>
  )
}
