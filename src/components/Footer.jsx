import { profile } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name} {profile.lastName}
          </span>
          <span>{t(ui.footer.built)}</span>
          <a href="#top">{t(ui.nav.backToTop)} ↑</a>
        </div>
      </div>
    </footer>
  )
}
