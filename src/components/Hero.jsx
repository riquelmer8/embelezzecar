import { ArrowRight } from 'lucide-react'
import { useParallax } from '../hooks/useParallax'

export default function Hero() {
  const parallaxOffset = useParallax(0.4)

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/capa.png"
          alt="EmbelezzeCar - Fachada da loja com BMW em destaque"
          className="w-full h-[120%] object-cover object-center animate-ken-burns"
          style={{ transform: `translateY(${parallaxOffset}px) scale(${1.12 - Math.min(parallaxOffset * 0.0003, 0.12)}) rotate(-1.5deg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/75 via-brand-black/40 to-transparent animate-overlay-fade" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/10 animate-overlay-fade" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-56">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            <span className="font-heading font-medium text-xs tracking-[0.2em] text-neutral-300 uppercase">
              Estética Automotiva em Arujá/SP
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-5 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="text-white">Seu carro está pedindo socorro</span>
            <br />
            <span className="text-brand-red">— e a gente responde.</span>
          </h1>

          <p className="font-body text-base md:text-lg text-neutral-400 max-w-md mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Há 15 anos em Arujá, a EmbelezzeCar transforma carros comuns em carros que causam inveja — com técnica, produtos premium e resultado garantido.
          </p>

          <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
            <a
              href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brand-red hover:bg-red-700 text-white font-heading font-bold tracking-wider px-7 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/40"
            >
              AGENDAR AGORA
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#servicos"
              className="font-heading font-semibold text-sm tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-end gap-3 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-6 text-neutral-500">
          <span className="font-heading text-xs tracking-[0.3em] uppercase">+2500 carros</span>
          <span className="w-8 h-[1px] bg-neutral-600" />
          <span className="font-heading text-xs tracking-[0.3em] uppercase">15+ anos</span>
          <span className="w-8 h-[1px] bg-neutral-600" />
          <span className="font-heading text-xs tracking-[0.3em] uppercase">5★</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <a href="#servicos" className="flex flex-col items-center gap-2 text-neutral-600 hover:text-brand-red transition-colors">
          <span className="text-[10px] font-heading tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-[1px] bg-gradient-to-b from-brand-red/60 to-transparent animate-line-grow" />
        </a>
      </div>
    </section>
  )
}
