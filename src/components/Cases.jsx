import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { cases } from '../data/cv.js'

const TONES = {
  cyan: 'var(--cyan)',
  magenta: 'var(--magenta)',
  violet: 'var(--violet)',
}

export default function Cases() {
  return (
    <section id="cases">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">
            Work that moved <span className="gradient-text">the numbers</span>
          </h2>
          <p className="section-lead">
            Three projects worth calling out — what I built, and what it changed for the business.
          </p>
        </Reveal>

        <div className="cases">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="case" style={{ '--tone': TONES[c.tone] }}>
                <header className="case__metric">
                  <span className="case__value">{c.metric}</span>
                  <span className="case__unit">{c.unit}</span>
                </header>

                <h3 className="case__title">{c.title}</h3>
                <p className="case__body">{c.body}</p>

                <ul className="case__impact">
                  {c.impact.map((line) => (
                    <li key={line}>
                      <Check size={14} />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="chips case__tags">
                  {c.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
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
