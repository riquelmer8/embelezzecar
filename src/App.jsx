import { useEffect } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Portfolio from './components/Portfolio'
import Location from './components/Location'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { DividerAngle, DividerWave } from './components/SectionDivider'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
<ProgressBar />
      <Navbar />
      <Hero />
      <Pain />
      <DividerAngle from="#1A1A1A" to="#f5f5f5" />
      <Services />
      <DividerWave from="#f5f5f5" to="#1A1A1A" />
      <Differentials />
      <DividerAngle from="#1A1A1A" to="#f5f5f5" flip />
      <Portfolio />
      <DividerWave from="#f5f5f5" to="#1A1A1A" />
      <Location />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
