import { useState, useCallback } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'
import { RevealOnScroll } from '../hooks/useScrollReveal'
import Lightbox from './Lightbox'

const portfolioItems = [
  {
    image: '/images/portfolio/bmw-m8.jpg',
    title: 'BMW M8 Competition',
    service: 'Vitrificação',
    alt: 'BMW M8 roxo fosco com vitrificação na EmbelezzeCar',
  },
  {
    image: '/images/portfolio/porsche-cayenne.jpg',
    title: 'Porsche Cayenne',
    service: 'Detailing Completo',
    alt: 'Porsche Cayenne cinza escuro no estúdio EmbelezzeCar',
  },
  {
    image: '/images/portfolio/PPF fosco.jpeg',
    title: 'PPF Fosco',
    service: 'PPF Fosco',
    alt: 'Aplicação de PPF fosco na EmbelezzeCar',
  },
  {
    image: '/images/portfolio/instalação de led interno.jpeg',
    title: 'LED Interno',
    service: 'Instalação de LED',
    alt: 'Instalação de LED interno na EmbelezzeCar',
  },
  {
    image: '/images/portfolio/pintura de pinça.jpeg',
    title: 'Pintura de Pinça',
    service: 'Pintura de Pinça',
    alt: 'Pintura de pinça de freio na EmbelezzeCar',
  },
  {
    image: '/images/portfolio/Troca de cor interna (1).jpeg',
    title: 'Troca de Cor Interna',
    service: 'Customização Interior',
    alt: 'Troca de cor interna na EmbelezzeCar',
  },
]

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : portfolioItems.length - 1))
  }, [])
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i < portfolioItems.length - 1 ? i + 1 : 0))
  }, [])

  return (
    <section id="portfolio" className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-5 py-2 mb-6">
            <span className="font-heading font-semibold text-sm tracking-wider text-brand-red uppercase">
              Portfólio
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark">
            Nossos Trabalhos <span className="text-brand-red">Recentes</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                onClick={() => setLightboxIndex(i)}
                data-cursor-hover
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block bg-brand-red text-white font-heading font-bold text-xs tracking-wider px-3 py-1 rounded-full mb-2">
                    {item.service}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-16 text-center">
          <p className="font-body text-neutral-600 mb-6 text-lg">
            Acompanhe nosso dia a dia e mais trabalhos no Instagram
          </p>
          <a
            href="https://www.instagram.com/embelezzecar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          >
            <Instagram size={22} />
            @embelezzecar
            <ExternalLink size={16} />
          </a>
        </RevealOnScroll>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={portfolioItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
