import Reveal from './Reveal.jsx'
import { stages } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

const TONES = {
  magenta: 'var(--magenta)',
  cyan: 'var(--cyan)',
  violet: 'var(--violet)',
  acid: 'var(--acid)',
}

export default function Stack() {
  const { t } = useI18n()

  return (
    <section id="stack">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{t(ui.stack.eyebrow)}</span>
          <h2 className="section-title">
            {t(ui.stack.titleA)} <span className="gradient-text">{t(ui.stack.titleB)}</span>
          </h2>
          <p className="section-lead">{t(ui.stack.lead)}</p>
        </Reveal>

        <div className="stack-grid">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 0.08}>
              <div className="card stage-card" style={{ '--tone': TONES[stage.tone] }}>
                <div className="stage-card__head">
                  <h3 className="stage-card__name">{t(stage.stage)}</h3>
                  <span className="stage-card__note">{t(stage.note)}</span>
                </div>
                <div className="chips">
                  {stage.skills.map((skill) => (
                    <span
                      className={`chip ${stage.core.includes(skill) ? 'chip--core' : ''}`}
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
