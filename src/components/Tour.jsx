import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { experience } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

function Gig({ gig, open, onToggle, t }) {
  return (
    <div className="gig">
      <button className="gig__head" onClick={onToggle} aria-expanded={open}>
        <div className="gig__date">
          <b>{gig.year}</b>
          {t(gig.period)}
        </div>
        <div>
          <h3 className="gig__title">{gig.company}</h3>
          <div className="gig__role">{t(gig.role)}</div>
        </div>
        <div className="gig__right">
          {gig.current && <span className="badge-live">{t(ui.experience.current)}</span>}
          <ChevronDown size={20} className={`gig__chevron ${open ? 'open' : ''}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="gig__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gig__body-inner">
              <ul className="gig__bullets">
                {t(gig.bullets).map((b) => (
                  <li key={b.slice(0, 28)}>{b}</li>
                ))}
              </ul>
              <div className="gig__tags">
                {gig.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Tour() {
  const { t } = useI18n()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="tour">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{t(ui.experience.eyebrow)}</span>
          <h2 className="section-title">
            {t(ui.experience.titleA)}{' '}
            <span className="gradient-text">{t(ui.experience.titleB)}</span>
          </h2>
          <p className="section-lead">{t(ui.experience.lead)}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tour">
            {experience.map((gig, i) => (
              <Gig
                key={gig.company}
                gig={gig}
                t={t}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
