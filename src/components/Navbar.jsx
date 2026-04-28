import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-2xl shadow-black/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="font-heading font-bold text-2xl lg:text-3xl tracking-wider text-white group-hover:text-brand-red transition-colors duration-300">
              EMBELEZZE<span className="text-brand-red group-hover:text-white transition-colors duration-300">CAR</span>
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-heading font-semibold text-sm tracking-wider uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand-red after:transition-all after:duration-300 ${
                activeSection === link.href
                  ? 'text-white after:w-full'
                  : 'text-neutral-400 hover:text-white after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-heading font-bold text-sm tracking-wider px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-900/30"
          >
            <Phone size={16} />
            ORÇAMENTO
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:text-brand-red transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand-black/98 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-heading font-semibold text-lg tracking-wider py-3 px-4 rounded-lg transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-brand-red bg-white/5'
                  : 'text-neutral-300 hover:text-brand-red hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-red text-white font-heading font-bold tracking-wider py-3 rounded-lg mt-4"
          >
            <Phone size={18} />
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </nav>
  )
}
