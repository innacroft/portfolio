import { profile } from '../data/cv.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name} {profile.lastName}
          </span>
          <span>Built with React · Bogotá, CO</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
