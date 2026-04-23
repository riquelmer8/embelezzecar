import { Check, Star, MessageCircle } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

const differentials = [
  'Profissionais certificados e treinados constantemente',
  'Produtos de primeira linha importados e nacionais',
  'Equipamentos de última geração para melhor resultado',
  'Atendimento personalizado e orçamento sem compromisso',
  'Garantia em todos os serviços executados',
  'Localização privilegiada em Arujá',
]

function StatCard({ value, label, suffix = '', hasStars = false }) {
  const [ref, count, isVisible] = useCounter(value, 2000)

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="font-heading font-bold text-4xl md:text-5xl text-brand-red mb-2">
        {hasStars ? (
          <div className="flex items-center justify-center gap-1">
            <span>{count}</span>
            <Star size={28} className="fill-brand-red text-brand-red" />
          </div>
        ) : (
          <span>{count}{suffix}</span>
        )}
      </div>
      <span className="font-body text-sm text-neutral-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-brand-dark py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <RevealOnScroll direction="left">
              <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 rounded-full px-5 py-2 mb-6">
                <span className="font-heading font-semibold text-sm tracking-wider text-brand-red uppercase">
                  Por que escolher a EmbelezzeCar
                </span>
              </div>

              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Qualidade que você pode{' '}
                <span className="text-brand-red">ver e sentir</span>
              </h2>

              <p className="font-body text-neutral-400 text-lg leading-relaxed mb-10">
                Com mais de <strong className="text-white">15 anos de experiência</strong> no
                mercado de estética automotiva, a EmbelezzeCar se consolidou como
                referência em Arujá e região. Nossa equipe é apaixonada pelo que faz.
              </p>
            </RevealOnScroll>

            <ul className="space-y-4 mb-10">
              {differentials.map((item, i) => (
                <RevealOnScroll key={item} delay={i * 80} direction="left">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-brand-red" />
                    </div>
                    <span className="font-body text-neutral-300">{item}</span>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>

            <RevealOnScroll delay={500} direction="left">
              <a
                href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/30"
              >
                <MessageCircle size={22} />
                FALE COM ESPECIALISTA
              </a>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <StatCard value="2500" suffix="+" label="Carros Atendidos" />
            <StatCard value="98" suffix="%" label="Satisfação" />
            <StatCard value="15" suffix="+" label="Anos Experiência" />
            <StatCard value="5" label="Avaliação Média" hasStars />
          </div>
        </div>
      </div>
    </section>
  )
}
