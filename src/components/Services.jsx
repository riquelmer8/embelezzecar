import { Check, ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'
import { useTilt } from '../hooks/useTilt'

const services = [
  {
    title: 'INSULFILM',
    image: '/images/servicos/insulfilm.jpg',
    alt: 'Aplicação de insulfilm automotivo com proteção UV em carro na EmbelezzeCar Arujá SP',
    description: 'Películas automotivas de última geração com proteção UV e controle térmico. Maior conforto e privacidade.',
    benefits: ['Proteção UV 99%', 'Redução de calor', 'Garantia de fábrica'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20INSULFILM.',
  },
  {
    title: 'POLIMENTO TÉCNICO',
    image: '/images/servicos/polimento.jpg',
    alt: 'Polimento técnico removendo riscos e manchas da pintura de carro na EmbelezzeCar Arujá SP',
    description: 'Recuperação profunda da pintura original removendo riscos, manchas e imperfeições. Resultado espelhado garantido.',
    benefits: ['Remove riscos e manchas', 'Brilho espelhado', 'Profissionais certificados'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20POLIMENTO.',
  },
  {
    title: 'VITRIFICAÇÃO',
    image: '/images/servicos/vitrificacao.jpg',
    alt: 'Vitrificação automotiva com nanotecnologia aplicada em carro na EmbelezzeCar Arujá SP',
    description: 'Proteção de longa duração com nanotecnologia. Cria camada protetora contra agentes externos e facilita limpeza.',
    benefits: ['Proteção até 2 anos', 'Nanotecnologia', 'Efeito autolimpante'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20VITRIFICA%C3%87%C3%83O.',
  },
  {
    title: 'HIGIENIZAÇÃO COMPLETA',
    image: '/images/servicos/higienizacao.jpg',
    alt: 'Higienização completa do interior de carro eliminando odores e bactérias na EmbelezzeCar Arujá SP',
    description: 'Limpeza profunda interna e externa com produtos especializados. Eliminação de odores, bactérias e ácaros.',
    benefits: ['Limpeza profunda', 'Elimina odores', 'Produtos especializados'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20HIGIENIZA%C3%87%C3%83O.',
  },
  {
    title: 'RECUPERAÇÃO DE FARÓIS',
    image: '/images/servicos/farois.jpg',
    alt: 'Recuperação de faróis amarelados e opacos de carro na EmbelezzeCar Arujá SP',
    description: 'Restauração de faróis amarelados e opacos. Melhora a iluminação e a aparência do veículo.',
    benefits: ['Remove amarelamento', 'Melhora iluminação', 'Proteção UV'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20RECUPERA%C3%87%C3%83O%20DE%20FAR%C3%93IS.',
  },
  {
    title: 'DETAILING PREMIUM',
    image: '/images/servicos/detailing.jpg',
    alt: 'Detailing premium completo em carro de luxo na EmbelezzeCar Arujá SP',
    description: 'Serviço completo de alta performance. Seu carro recebe todos os cuidados necessários para brilhar como novo.',
    benefits: ['Pacote completo', 'Alta performance', 'Resultado premium'],
    whatsapp: '?text=Ol%C3%A1!%20Gostaria%20de%20or%C3%A7amento%20para%20DETAILING%20PREMIUM.',
  },
]

function ServiceCard({ service }) {
  const tilt = useTilt(6)

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="tilt-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200 hover:border-brand-red/50 h-full"
    >
      <div className="relative h-56 overflow-hidden shine-effect">
        <img
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute bottom-4 left-4 bg-brand-red text-white font-heading font-bold text-xs tracking-wider px-3 py-1.5 rounded-full">
          {service.title}
        </span>
      </div>

      <div className="p-8">
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3">
          {service.title}
        </h3>
        <p className="font-body text-neutral-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm text-neutral-700">
              <Check size={16} className="text-brand-red shrink-0" />
              <span className="font-body">{benefit}</span>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/5511992144209${service.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-red font-heading font-bold text-sm tracking-wider group-hover:gap-3 transition-all duration-300"
        >
          Solicitar Orçamento
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-5 py-2 mb-6">
            <span className="font-heading font-semibold text-sm tracking-wider text-brand-red uppercase">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark">
            Excelência em Cada <span className="text-brand-red">Detalhe</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 100}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
