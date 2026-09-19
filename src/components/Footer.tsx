import React from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (cat: Category) => void;
  onOpenConcierge: () => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenConcierge,
  onOpenSizeGuide
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-[#9a968c] border-t border-[#1b1c24] text-xs font-sans-clean pt-16 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1b1c24]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a880] block mb-1">
                HAUTE PERFORMANCE
              </span>
              <h3 className="text-2xl font-serif-luxury tracking-[0.18em] text-[#f7f5f0] font-semibold">
                ATELIER FORMA
              </h3>
            </div>
            <p className="text-xs text-[#8a867c] max-w-sm leading-relaxed font-light">
              A convergência máxima entre a alfaiataria italiana e a biomecânica de alta performance. Vestuário concebido com tecidos tecnológicos certificados de Biella e Como.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConcierge}
                className="inline-flex items-center gap-2 text-[#c5a880] hover:text-[#dfcaa9] text-xs uppercase tracking-wider font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Atendimento Concierge WhatsApp (24/7)</span>
              </button>
            </div>
          </div>

          {/* Coleções */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif-luxury tracking-widest text-[#f0ede6] uppercase font-semibold">
              Coleções
            </h4>
            <ul className="space-y-2 text-[#8b877d]">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('black-label');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Drop 04 Black Label
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('feminino');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Linha Feminina Sculpt
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('masculino');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Linha Masculina Armour
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('acessorios');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Titânio & Couro Florença
                </button>
              </li>
            </ul>
          </div>

          {/* Ateliê & Ciência */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif-luxury tracking-widest text-[#f0ede6] uppercase font-semibold">
              Ateliê & Experiência
            </h4>
            <ul className="space-y-2 text-[#8b877d]">
              <li>
                <button onClick={() => scrollTo('engenharia')} className="hover:text-[#c5a880] transition-colors">
                  Engenharia Têxtil AeroSilk™
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('lookbook')} className="hover:text-[#c5a880] transition-colors">
                  Editorial & Campanha
                </button>
              </li>
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-[#c5a880] transition-colors">
                  Provador Virtual 3D
                </button>
              </li>
              <li>
                <button onClick={onOpenConcierge} className="hover:text-[#c5a880] transition-colors">
                  Fitting Privado em Domicílio
                </button>
              </li>
              <li>
                <span className="text-[#6d6a62]">Cuidados de Lavagem Fina</span>
              </li>
            </ul>
          </div>

          {/* Flagships */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif-luxury tracking-widest text-[#f0ede6] uppercase font-semibold">
              Flagships & Salons
            </h4>
            <div className="space-y-2.5 text-[11px] text-[#848076]">
              <div>
                <strong className="text-[#d8d5ce] block">São Paulo — Jardins</strong>
                <span>Rua Oscar Freire, 1024</span>
              </div>
              <div>
                <strong className="text-[#d8d5ce] block">Miami — Design District</strong>
                <span>140 NE 39th Street</span>
              </div>
              <div>
                <strong className="text-[#d8d5ce] block">Milão — Quadrilatero</strong>
                <span>Via Montenapoleone, 8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6d6a62]">
          <p>© 2026 Atelier Forma Haute Performance S/A. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#c5a880] cursor-pointer">Termos de Serviço Privée</span>
            <span className="hover:text-[#c5a880] cursor-pointer">Privacidade & Cookies</span>
            <span className="hover:text-[#c5a880] cursor-pointer">Certificado OEKO-TEX®</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
