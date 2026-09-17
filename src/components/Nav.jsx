import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

const LINKS = [
  { id: 'cases', key: 'impact' },
  { id: 'about', key: 'about' },
  { id: 'stack', key: 'stack' },
  { id: 'tour', key: 'experience' },
  { id: 'brands', key: 'brands' },
  { id: 'credentials', key: 'credentials' },
  { id: 'contact', key: 'contact' },
]

function LangToggle({ lang, toggle, t }) {
  return (
    <button className="lang" onClick={toggle} aria-label={t(ui.nav.switchTo)} title={t(ui.nav.switchTo)}>
      <span className={lang === 'en' ? 'lang__on' : ''}>EN</span>
      <span className="lang__sep" aria-hidden="true" />
      <span className={lang === 'es' ? 'lang__on' : ''}>ES</span>
    </button>
  )
}

export default function Nav() {
  const { t, lang, toggle } = useI18n()
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
          <a href="#top" className="brand" aria-label={t(ui.nav.backToTop)}>
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
                {t(ui.nav[link.key])}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <LangToggle lang={lang} toggle={toggle} t={t} />
            <button
              className="nav__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t(ui.nav.closeMenu) : t(ui.nav.openMenu)}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <nav className={`nav__mobile ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {t(ui.nav[link.key])}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
