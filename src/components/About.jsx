import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { languages, profile } from '../data/cv.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__body">
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              A bit <span className="gradient-text">about me</span>
            </h2>
            {profile.summary.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card about__panel">
              <h4>Languages</h4>
              {languages.map((lang, i) => (
                <div className="lang" key={lang.name}>
                  <div className="lang__top">
                    <span className="lang__name">{lang.name}</span>
                    <span className="lang__level">{lang.level}</span>
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

              <h4 style={{ marginTop: 30 }}>Currently</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.94rem' }}>
                Backend engineer at Zebrands, building services and data pipelines that keep
                retail and logistics operations running.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
