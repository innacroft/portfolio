import Reveal from './Reveal.jsx'
import { stages } from '../data/cv.js'

const TONES = {
  magenta: 'var(--magenta)',
  cyan: 'var(--cyan)',
  violet: 'var(--violet)',
  acid: 'var(--acid)',
}

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Tech stack</span>
          <h2 className="section-title">
            What I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-lead">
            Grouped by what it does — from the languages doing the heavy lifting to the tooling
            that keeps a release predictable.
          </p>
        </Reveal>

        <div className="stack-grid">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 0.08}>
              <div className="card stage-card" style={{ '--tone': TONES[stage.tone] }}>
                <div className="stage-card__head">
                  <h3 className="stage-card__name">{stage.stage}</h3>
                  <span className="stage-card__note">{stage.note}</span>
                </div>
                <div className="chips">
                  {stage.skills.map((skill) => (
                    <span className="chip" key={skill}>
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
