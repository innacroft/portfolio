import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/cv.js'
import { useI18n } from '../i18n/index.jsx'
import { ui } from '../i18n/ui.js'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="card contact__card">
            <span className="eyebrow">{t(ui.contact.eyebrow)}</span>
            <h2 className="contact__title">
              {t(ui.contact.titleA)}{' '}
              <span className="gradient-text">{t(ui.contact.titleB)}</span>
            </h2>
            <p className="contact__lead">{t(ui.contact.lead)}</p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Mail size={16} /> {profile.email}
              </a>
              <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <div className="socials">
              <a className="social" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a className="social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
              <a className="social" href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
