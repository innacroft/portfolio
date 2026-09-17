import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { languages, profile } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__body">
            <span className="eyebrow">{t(ui.about.eyebrow)}</span>
            <h2 className="section-title">
              {t(ui.about.titleA)} <span className="gradient-text">{t(ui.about.titleB)}</span>
            </h2>
            {t(profile.summary).map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card about__panel">
              <h4>{t(ui.about.languages)}</h4>
              {languages.map((lang, i) => (
                <div className="lang-row" key={lang.value}>
                  <div className="lang__top">
                    <span className="lang__name">{t(lang.name)}</span>
                    <span className="lang__level">{t(lang.level)}</span>
                  </div>
                  <div className="lang__bar">
                    <motion.div
                      className="lang__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}

              <h4 style={{ marginTop: 30 }}>{t(ui.about.currently)}</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.94rem' }}>
                {t(ui.about.currentlyText)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
