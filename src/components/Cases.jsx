import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { cases } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

const TONES = { cyan: 'var(--cyan)', magenta: 'var(--magenta)', violet: 'var(--violet)' }

export default function Cases() {
  const { t } = useI18n()

  return (
    <section id="cases">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{t(ui.cases.eyebrow)}</span>
          <h2 className="section-title">
            {t(ui.cases.titleA)} <span className="gradient-text">{t(ui.cases.titleB)}</span>
          </h2>
          <p className="section-lead">{t(ui.cases.lead)}</p>
        </Reveal>

        <div className="cases">
          {cases.map((c, i) => (
            <Reveal key={c.metric} delay={i * 0.08}>
              <article className="case" style={{ '--tone': TONES[c.tone] }}>
                <header className="case__metric">
                  <span className="case__value">{c.metric}</span>
                  <span className="case__unit">{t(c.unit)}</span>
                </header>

                <h3 className="case__title">{t(c.title)}</h3>
                <p className="case__body">{t(c.body)}</p>

                <ul className="case__impact">
                  {t(c.impact).map((line) => (
                    <li key={line}>
                      <Check size={14} />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="chips case__tags">
                  {c.tags.map((tag) => (
                    <span className="chip" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
