import './App.css'
import { SiteHeader } from './components/layout/SiteHeader'
import { Contact } from './components/sections/Contact'
import { Expertise } from './components/sections/Expertise'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Stack } from './components/sections/Stack'
import { Work } from './components/sections/Work'

function App() {
  return (
    <main className="portfolio-shell">
      <SiteHeader />
      <Hero />

      <section className="intro-band">
        <p>Premium interfaces. Scalable systems. Real product execution.</p>
      </section>

      <Work />
      <Expertise />
      <Process />
      <Stack />
      <Contact />
    </main>
  )
}

export default App
