import { Award, GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { certifications, education } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

export default function Credentials() {
  const { t } = useI18n()

  return (
    <section id="credentials">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{t(ui.credentials.eyebrow)}</span>
          <h2 className="section-title">
            {t(ui.credentials.titleA)}{' '}
            <span className="gradient-text">{t(ui.credentials.titleB)}</span>
          </h2>
        </Reveal>

        <div className="creds">
          <Reveal>
            <div className="card cred-group">
              <h4>{t(ui.credentials.education)}</h4>
              {education.map((item) => (
                <div className="cred-item" key={item.org}>
                  <GraduationCap size={18} className="cred-item__icon" />
                  <div>
                    <div className="cred-item__title">{t(item.title)}</div>
                    <div className="cred-item__org">
                      {item.org} · {t(item.year)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card cred-group">
              <h4>{t(ui.credentials.certifications)}</h4>
              {certifications.map((item) => (
                <div className="cred-item" key={item.title.en}>
                  <Award size={18} className="cred-item__icon" />
                  <div>
                    <div className="cred-item__title">{t(item.title)}</div>
                    <div className="cred-item__org">{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
