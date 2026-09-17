import { motion } from 'framer-motion'
import { ArrowDownRight, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '../data/cv.js'

const BARS = [0.9, 0.35, 0.65, 1, 0.5, 0.8, 0.28, 0.72, 0.45]
const STAT_COLORS = ['var(--cyan)', 'var(--violet)', 'var(--magenta)']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            className="hero__ticket"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="live-dot" />
            {profile.location}
            <b>Open to work</b>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Ingrid</span>
            <span className="outline">Natalia</span>
            <span className="gradient-text">Rodríguez</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            style={{ display: 'grid', gap: 22 }}
          >
            <div className="hero__roles">
              <div className="eq" aria-hidden="true">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 100}%`, animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
              {profile.tagline.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < profile.tagline.length - 1 && <i> /</i>}
                </span>
              ))}
            </div>

            <p className="hero__role-main">
              {profile.role} — 5+ years building scalable APIs and optimizing critical systems
              for retail, logistics and fintech.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#tour">
                See my work <ArrowDownRight size={16} />
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
            </div>

            <div className="hero__meta">
              <span>
                <MapPin size={12} style={{ display: 'inline', marginRight: 6 }} />
                {profile.location}
              </span>
              <a href={`mailto:${profile.email}`}>
                <Mail size={12} style={{ display: 'inline', marginRight: 6 }} />
                {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            {stats.map((s, i) => (
              <div className="stat" key={s.label} style={{ '--accent': STAT_COLORS[i] }}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
