import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { apis, brands } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

/** `title` va en negrita y `sub` debajo. El logo ya identifica la marca, así que
 *  el texto aporta el contexto: nicho + país para las marcas, destino para las APIs. */
function LogoCard({ item, title, sub, delay, ariaLabel }) {
  return (
    <Reveal delay={delay}>
      <a className="logo-card" href={item.url} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        <span className="logo-card__frame">
          {item.logo ? (
            <img src={item.logo} alt={item.name} loading="lazy" />
          ) : (
            <span className="logo-card__wordmark">{item.wordmark}</span>
          )}
        </span>
        <span className="logo-card__meta">
          <span className="logo-card__name">{title}</span>
          <span className="logo-card__note">{sub}</span>
        </span>
        <ArrowUpRight size={15} className="logo-card__arrow" />
      </a>
    </Reveal>
  )
}

export default function Brands() {
  const { t } = useI18n()
  const label = (name) => `${name} — ${t(ui.brands.openSite)}`

  return (
    <>
      <section id="brands">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t(ui.brands.eyebrow)}</span>
            <h2 className="section-title">
              {t(ui.brands.titleA)} <span className="gradient-text">{t(ui.brands.titleB)}</span>
            </h2>
            <p className="section-lead">{t(ui.brands.lead)}</p>
          </Reveal>

          <div className="logo-wall">
            {brands.map((b, i) => (
              <LogoCard
                key={`${b.name}-${b.country.en}`}
                item={b}
                title={t(b.niche)}
                sub={t(b.country)}
                ariaLabel={label(b.name)}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="apis">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t(ui.apis.eyebrow)}</span>
            <h2 className="section-title">
              {t(ui.apis.titleA)} <span className="gradient-text">{t(ui.apis.titleB)}</span>
            </h2>
            <p className="section-lead">{t(ui.apis.lead)}</p>
          </Reveal>

          <div className="logo-wall logo-wall--apis">
            {apis.map((a, i) => (
              <LogoCard
                key={a.name}
                item={a}
                title={a.name}
                sub={t(a.linkLabel)}
                ariaLabel={label(a.name)}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
