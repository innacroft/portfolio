import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { apis, brands } from '../data/cv.js'

/** `title` va en negrita y `sub` debajo. El logo ya identifica la marca, así que
 *  el texto aporta el contexto: nicho + país para las marcas, portal para las APIs. */
function LogoCard({ item, title, sub, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        className="logo-card"
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.name} — abrir sitio oficial`}
      >
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
  return (
    <>
      <section id="brands">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Clients &amp; brands</span>
            <h2 className="section-title">
              Brands I have <span className="gradient-text">shipped for</span>
            </h2>
            <p className="section-lead">
              Product brands whose backend, integrations and data flows I have built and kept
              running. Each logo opens its official site.
            </p>
          </Reveal>

          <div className="logo-wall">
            {brands.map((b, i) => (
              <LogoCard
                key={`${b.name}-${b.country}`}
                item={b}
                title={b.niche}
                sub={b.country}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="apis">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Integrations</span>
            <h2 className="section-title">
              APIs I have <span className="gradient-text">integrated</span>
            </h2>
            <p className="section-lead">
              Third-party platforms wired into production — carriers, reviews, messaging and 3D
              configurators: label generation, tracking, review sync and notifications.
            </p>
          </Reveal>

          <div className="logo-wall logo-wall--apis">
            {apis.map((a, i) => (
              <LogoCard key={a.name} item={a} title={a.name} sub={a.linkLabel} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
