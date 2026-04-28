import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'

const faqs = [
  {
    question: 'Quanto tempo leva um polimento técnico?',
    answer: 'Em média de 4 a 8 horas, dependendo do tamanho do veículo e do nível de correção necessária. Recomendamos deixar o carro conosco por um dia inteiro para garantir o melhor resultado.',
  },
  {
    question: 'Qual a diferença entre vitrificação e cera?',
    answer: 'A cera é uma proteção temporária que dura de 1 a 3 meses. A vitrificação usa nanotecnologia para criar uma camada protetora de longa duração — até 2 anos — com efeito autolimpante e resistência muito superior a riscos leves, chuva ácida e contaminantes.',
  },
  {
    question: 'O insulfilm é legal? Qual percentual posso usar?',
    answer: 'Sim, é legal quando dentro dos limites do Contran. O para-brisa dianteiro não pode ter película. Nos vidros laterais dianteiros é permitido até 70% de transparência. Nos demais vidros não há restrição. Nossos profissionais orientam o melhor percentual para cada caso.',
  },
  {
    question: 'Precisa agendar ou posso ir direto?',
    answer: 'Recomendamos agendar pelo WhatsApp para garantir disponibilidade e atendimento prioritário. Mas também recebemos visitas para orçamento sem compromisso de segunda a sexta das 8h às 18h e sábado das 8h às 14h.',
  },
  {
    question: 'Vocês atendem somente em Arujá ou também na região?',
    answer: 'Nossa loja fica em Arujá/SP, mas atendemos clientes de toda a região: Santa Isabel, Itaquaquecetuba, Guararema, Salesópolis e cidades vizinhas. Vale a viagem pelo resultado!',
  },
  {
    question: 'Os serviços têm garantia?',
    answer: 'Sim. Todos os serviços executados possuem garantia. A vitrificação, por exemplo, tem garantia de até 2 anos. Utilizamos apenas produtos de primeira linha, nacionais e importados, para assegurar durabilidade e resultado.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <RevealOnScroll delay={index * 80}>
      <div className="border border-white/10 rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors duration-300"
        >
          <span className="font-heading font-semibold text-white text-base md:text-lg">
            {faq.question}
          </span>
          <span className="shrink-0 w-7 h-7 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-64' : 'max-h-0'}`}>
          <p className="font-body text-neutral-400 text-sm md:text-base leading-relaxed px-6 pb-5">
            {faq.answer}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  )
}

export default function FAQ() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <RevealOnScroll className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 rounded-full px-5 py-2 mb-6">
            <span className="font-heading font-semibold text-sm tracking-wider text-brand-red uppercase">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Perguntas <span className="text-brand-red">Frequentes</span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
