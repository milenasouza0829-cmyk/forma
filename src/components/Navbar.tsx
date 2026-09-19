import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Sparkles, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenConcierge: () => void;
  onSelectCategory: (cat: Category) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenConcierge,
  onSelectCategory
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, category?: Category) => {
    if (category) {
      onSelectCategory(category);
    }
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top luxury announcement bar */}
      <div className="bg-[#121318] border-b border-[#252833]/60 text-[11px] text-[#b8afa3] py-2 px-4 tracking-[0.18em] uppercase text-center font-sans-clean flex items-center justify-center gap-3 overflow-hidden">
        <span className="flex items-center gap-1.5 text-[#c5a880] font-medium">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          DROP 04 BLACK LABEL
        </span>
        <span className="hidden md:inline text-white/30">•</span>
        <span className="hidden sm:inline">EDIÇÕES LIMITADAS COM GRAVURA EM OURO 18K</span>
        <span className="hidden md:inline text-white/30">•</span>
        <span className="text-[#e2ded9]">FRETE WHITE GLOVE BRASIL & INTERNACIONAL</span>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-500 px-6 lg:px-12 ${
          scrolled
            ? 'bg-[#0b0c0f]/95 backdrop-blur-md py-4 border-b border-[#22242d]/80 shadow-2xl'
            : 'bg-gradient-to-b from-[#0b0c0f]/90 via-[#0b0c0f]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e4e2dd] hover:text-[#c5a880] transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#e4e2dd] hover:text-[#c5a880] transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.16em] uppercase font-sans-clean text-[#c8c5be]">
            <button
              onClick={() => handleNavClick('catalogo', 'feminino')}
              className="hover:text-[#c5a880] transition-colors relative py-1 group"
            >
              Feminino
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('catalogo', 'masculino')}
              className="hover:text-[#c5a880] transition-colors relative py-1 group"
            >
              Masculino
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('catalogo', 'black-label')}
              className="text-[#c5a880] hover:text-[#e4cfb2] transition-colors relative py-1 font-semibold flex items-center gap-1"
            >
              Black Label
              <span className="text-[9px] bg-[#c5a880]/15 text-[#c5a880] px-1.5 py-0.5 rounded tracking-normal">04</span>
            </button>
            <button
              onClick={() => handleNavClick('engenharia')}
              className="hover:text-[#c5a880] transition-colors relative py-1 group"
            >
              Engenharia Têxtil
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* Luxury Brand Logo / Monogram */}
          <div className="text-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <span className="h-[1px] w-4 bg-[#c5a880]/60 hidden sm:block"></span>
              <span className="text-[9px] tracking-[0.35em] text-[#c5a880] font-sans-clean uppercase font-medium">
                HAUTE PERFORMANCE
              </span>
              <span className="h-[1px] w-4 bg-[#c5a880]/60 hidden sm:block"></span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-serif-luxury tracking-[0.22em] text-[#f7f5f0] group-hover:text-[#c5a880] transition-colors duration-300 font-semibold">
              ATELIER FORMA
            </h1>
            <p className="text-[8px] tracking-[0.3em] text-[#8e8a83] uppercase">
              BIELLA • MILANO • SÃO PAULO
            </p>
          </div>

          {/* Desktop Right Links & Icons */}
          <div className="flex items-center gap-6 text-[12px] tracking-[0.16em] uppercase font-sans-clean">
            <button
              onClick={() => handleNavClick('lookbook')}
              className="hidden xl:inline-block hover:text-[#c5a880] text-[#c8c5be] transition-colors py-1"
            >
              Editorial
            </button>

            <button
              onClick={() => handleNavClick('provador-virtual')}
              className="hidden lg:inline-block hover:text-[#c5a880] text-[#c8c5be] transition-colors py-1"
            >
              Guia de Medidas
            </button>

            {/* Concierge Button */}
            <button
              onClick={onOpenConcierge}
              className="hidden sm:flex items-center gap-2 border border-[#c5a880]/40 px-3 py-1.5 rounded-sm text-[#e5d2b9] hover:bg-[#c5a880]/10 hover:border-[#c5a880] transition-all text-[11px] tracking-[0.14em]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Concierge VIP</span>
            </button>

            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center text-[#e4e2dd] hover:text-[#c5a880] transition-colors p-1"
              aria-label="Buscar produtos"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Shopping Bag Icon with counter badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#f4f2ed] hover:text-[#c5a880] transition-colors flex items-center gap-2"
              aria-label="Sacola de Compras"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#c5a880] text-[#0d0e12] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans shadow-md animate-scale">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-[11px] text-[#e0ded9] font-medium tracking-[0.12em]">
                Sacola
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#232631] bg-[#0c0d11]/98 backdrop-blur-xl px-4 pb-6 rounded-b-xl space-y-4">
            <div className="grid grid-cols-2 gap-2 text-[12px] tracking-[0.16em] uppercase font-sans-clean">
              <button
                onClick={() => handleNavClick('catalogo', 'todos')}
                className="text-left py-2.5 px-3 bg-[#151720] rounded text-[#eeebe5] hover:text-[#c5a880]"
              >
                Ver Catálogo
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'black-label')}
                className="text-left py-2.5 px-3 bg-[#1a1c27] border border-[#c5a880]/30 rounded text-[#c5a880]"
              >
                Drop Black Label
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'feminino')}
                className="text-left py-2.5 px-3 bg-[#151720] rounded text-[#eeebe5] hover:text-[#c5a880]"
              >
                Linha Feminina
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'masculino')}
                className="text-left py-2.5 px-3 bg-[#151720] rounded text-[#eeebe5] hover:text-[#c5a880]"
              >
                Linha Masculina
              </button>
            </div>

            <div className="pt-2 border-t border-[#1d202b] flex flex-col gap-2 text-[12px] tracking-[0.14em] uppercase text-[#a9a59d]">
              <button
                onClick={() => handleNavClick('engenharia')}
                className="text-left py-2 hover:text-[#c5a880] flex items-center justify-between"
              >
                <span>Engenharia Têxtil Biella</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
              </button>
              <button
                onClick={() => handleNavClick('lookbook')}
                className="text-left py-2 hover:text-[#c5a880] flex items-center justify-between"
              >
                <span>Editorial Runway</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
              </button>
              <button
                onClick={() => handleNavClick('provador-virtual')}
                className="text-left py-2 hover:text-[#c5a880] flex items-center justify-between"
              >
                <span>Provador Virtual & Silhueta</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="w-full mt-2 py-3 bg-[#c5a880] text-[#0d0e12] font-semibold text-center rounded text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Atendimento Concierge Privé
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
