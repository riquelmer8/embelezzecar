import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#localizacao' },
]

const serviceLinks = [
  'Insulfilm',
  'Polimento Técnico',
  'Vitrificação',
  'Higienização',
  'Detailing Premium',
  'Recuperação de Faróis',
]

export default function Footer() {
  return (
    <footer className="bg-brand-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                EMBELEZZE<span className="text-brand-red">CAR</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-body">
                Os cuidados que seu carro precisa
              </span>
            </div>
            <p className="font-body text-neutral-400 text-sm leading-relaxed mb-6">
              Referência em estética automotiva em Arujá desde 2009.
              Qualidade e excelência em cada detalhe.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/embelezzecar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-brand-red hover:border-brand-red/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/embelezzecar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-brand-red hover:border-brand-red/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider text-white uppercase mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-neutral-400 hover:text-brand-red transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider text-white uppercase mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="font-body text-sm text-neutral-400 hover:text-brand-red transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider text-white uppercase mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span className="font-body text-sm text-neutral-400">
                  Av. dos Expedicionários, 341A<br />Arujá, SP
                </span>
              </li>
              <li>
                <a href="tel:+5511992144209" className="flex items-center gap-3 text-neutral-400 hover:text-brand-red transition-colors">
                  <Phone size={16} className="text-brand-red shrink-0" />
                  <span className="font-body text-sm">(11) 99214-4209</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@embelezzecar.com.br" className="flex items-center gap-3 text-neutral-400 hover:text-brand-red transition-colors">
                  <Mail size={16} className="text-brand-red shrink-0" />
                  <span className="font-body text-sm">contato@embelezzecar.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span className="font-body text-sm text-neutral-400">
                  Seg-Sex: 8h às 18h<br />Sáb: 8h às 14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} EmbelezzeCar - Todos os direitos reservados | CNPJ: 30.647.415/0001-12
          </p>
        </div>
      </div>
    </footer>
  )
}
