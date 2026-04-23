import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  const item = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Fechar"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Próximo"
      >
        <ChevronRight size={40} />
      </button>

      <div
        className="max-w-5xl max-h-[85vh] mx-4 animate-[scaleIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-contain rounded-lg"
        />
        <div className="text-center mt-4">
          <span className="inline-block bg-brand-red text-white font-heading font-bold text-xs tracking-wider px-3 py-1 rounded-full mr-2">
            {item.service}
          </span>
          <span className="font-heading font-bold text-lg text-white">{item.title}</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-brand-red w-6' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
