import { Award, GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { certifications, education } from '../data/cv.js'

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">certifications</span>
          </h2>
        </Reveal>

        <div className="creds">
          <Reveal>
            <div className="card cred-group">
              <h4>Education</h4>
              {education.map((item) => (
                <div className="cred-item" key={item.title}>
                  <GraduationCap size={18} className="cred-item__icon" />
                  <div>
                    <div className="cred-item__title">{item.title}</div>
                    <div className="cred-item__org">{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card cred-group">
              <h4>Certifications</h4>
              {certifications.map((item) => (
                <div className="cred-item" key={item.title}>
                  <Award size={18} className="cred-item__icon" />
                  <div>
                    <div className="cred-item__title">{item.title}</div>
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
