import Ambience from './components/Ambience.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Cases from './components/Cases.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Tour from './components/Tour.jsx'
import Brands from './components/Brands.jsx'
import Credentials from './components/Credentials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Ambience />
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Cases />
          <About />
          <Stack />
          <Tour />
          <Brands />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
