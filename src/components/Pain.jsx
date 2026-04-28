import { RevealOnScroll } from '../hooks/useScrollReveal'

export default function Pain() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <RevealOnScroll>
          <p className="font-body text-neutral-400 text-lg md:text-xl leading-relaxed mb-6">
            Você investiu em um carro — novo, seminovo, ou o que você mais cuida. Mas o tempo é cruel:{' '}
            <span className="text-white">riscos aparecem, a pintura perde o brilho, o interior acumula odor, os faróis ficam amarelados.</span>
          </p>
          <p className="font-body text-neutral-400 text-lg md:text-xl leading-relaxed mb-8">
            E cada vez que você olha pro carro, aquela sensação incômoda bate:{' '}
            <span className="text-brand-red italic">"Tá ficando feio. Devia ter cuidado antes."</span>
          </p>
          <p className="font-heading font-bold text-2xl md:text-3xl text-white">
            A boa notícia: isso tem solução.{' '}
            <span className="text-brand-red">Rápida, profissional e com resultado que você vai querer fotografar.</span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
