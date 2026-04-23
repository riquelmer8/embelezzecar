import { MessageCircle, Phone, Shield, Award, ThumbsUp } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'

const badges = [
  { icon: Shield, text: '100% Seguro' },
  { icon: Award, text: 'Profissionais Certificados' },
  { icon: ThumbsUp, text: 'Satisfação Garantida' },
]

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red/95 to-brand-dark" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Pronto para transformar
            <br />
            <span className="text-white/90">seu carro?</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Entre em contato agora e agende seu horário. Atendimento rápido e profissional.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-red font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
            >
              <MessageCircle size={22} />
              AGENDAR PELO WHATSAPP
            </a>
            <a
              href="tel:+5511992144209"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/40 hover:border-white text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <Phone size={22} />
              LIGAR AGORA
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={450}>
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <Icon size={18} />
                <span className="font-body text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
