import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'The Shop' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__bar">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">A</span>
          <span className="logo__text">
            Autobhan<span>Garage</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__phone" href="tel:+15550142847">
            (555) 014-2847
          </a>
          <Link className="btn btn--gold" to="/contact">
            Book service
          </Link>
          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Link className="btn btn--gold" to="/contact" onClick={() => setOpen(false)}>
          Book service
        </Link>
      </div>
    </header>
  )
}
