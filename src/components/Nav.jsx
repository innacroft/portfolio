import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'cases', label: 'Impact' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'tour', label: 'Experience' },
  { id: 'brands', label: 'Brands' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav ${stuck ? 'nav--stuck' : ''}`}>
      <div className="container">
        <div className="nav__inner">
          <a href="#top" className="brand" aria-label="Back to top">
            <span className="brand__mark">IR</span>
            <span className="brand__text">
              inna<span>.dev</span>
            </span>
          </a>

          <nav className="nav__links">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className={`nav__mobile ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
