import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: MapPin,
    title: 'ENDEREÇO',
    lines: ['Av. dos Expedicionários, 341A', 'Arujá, SP - CEP 07400-560'],
    href: null,
  },
  {
    icon: Phone,
    title: 'TELEFONE / WHATSAPP',
    lines: ['(11) 99214-4209'],
    href: 'tel:+5511992144209',
  },
  {
    icon: Mail,
    title: 'E-MAIL',
    lines: ['contato@embelezzecar.com.br'],
    href: 'mailto:contato@embelezzecar.com.br',
  },
  {
    icon: Clock,
    title: 'HORÁRIO',
    lines: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 14h', 'Domingo: Fechado'],
    href: null,
  },
]

export default function Location() {
  return (
    <section id="localizacao" className="bg-brand-dark py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 rounded-full px-5 py-2 mb-6">
            <span className="font-heading font-semibold text-sm tracking-wider text-brand-red uppercase">
              Localização & Contato
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Venha nos <span className="text-brand-red">visitar</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/15 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm tracking-wider text-neutral-400 mb-1">
                        {info.title}
                      </h3>
                      {info.lines.map((line) => (
                        <p key={line} className="font-body text-white text-lg">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )

                return (
                  <RevealOnScroll key={info.title} delay={i * 100} direction="left">
                    {info.href ? (
                      <a href={info.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </RevealOnScroll>
                )
              })}
            </div>

            <RevealOnScroll delay={400} direction="left">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-heading font-bold tracking-wider px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  CHAMAR NO WHATSAPP
                </a>
                <a
                  href="https://maps.google.com/?q=Av.+dos+Expedicion%C3%A1rios,+341A,+Aruj%C3%A1,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/50 text-white font-heading font-bold tracking-wider px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                >
                  <Navigation size={20} />
                  VER NO MAPS
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="right">
            <div className="glass-card-dark rounded-2xl overflow-hidden min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.234567890123!2d-46.32!3d-23.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIzJzI0LjAiUyA0NsKwMTknMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                className="w-full h-full min-h-[500px]"
                style={{ border: 0, filter: 'grayscale(10%) brightness(95%)' }}
                allowFullScreen
                loading="lazy"
                title="Localização EmbelezzeCar no Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
