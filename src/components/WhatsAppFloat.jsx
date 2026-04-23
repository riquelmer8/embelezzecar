import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511992144209?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-20" />
        <div className="relative w-16 h-16 bg-whatsapp hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 transition-all duration-300 group-hover:scale-110">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-brand-dark font-body font-semibold text-sm px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
    </a>
  )
}
