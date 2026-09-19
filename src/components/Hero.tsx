import React from 'react';
import { ArrowDown, ShieldCheck, Sparkles, Award, Compass } from 'lucide-react';
import { heroImg, BRAND_STATS } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onEngineeringClick: () => void;
  onConciergeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onEngineeringClick,
  onConciergeClick
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end justify-center pt-32 pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden bg-[#0a0b0d]">
      {/* Background Editorial Image with subtle zoom & luxury grade */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Atelier Forma Alta Performance Editorial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial gradient overlays for legibility & quiet luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/70 to-[#0a0b0d]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0a0b0d]/40 to-[#0a0b0d]/90 pointer-events-none" />
      </div>

      {/* Atmospheric Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c5a880]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle drop label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161822]/80 border border-[#c5a880]/30 backdrop-blur-md mb-6 shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.24em] text-[#e3d1ba] uppercase">
            DROP 04 BLACK LABEL • EDIÇÃO LIMITADA INTERNACIONAL
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif-luxury text-[#fbfaf8] leading-[1.12] tracking-[0.06em] font-medium max-w-4xl drop-shadow-sm mb-6">
          ALTA-COSTURA ESPORTIVA.
          <span className="block italic font-editorial font-normal text-[#d6b78d] mt-1">
            Precisão Biomecânica Absoluta.
          </span>
        </h1>

        {/* Lead subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-[#ccc8be] font-sans-clean font-light leading-relaxed tracking-wide mb-10">
          A união definitiva entre tecelagens de luxo de Biella, microfilamentos de seda italiana e nanotubos de grafeno. Silhuetas esculturais criadas para o corpo em máxima performance atlética.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a880] text-[#0d0e12] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-[#d8be97] transition-all duration-300 shadow-[0_4px_25px_rgba(197,168,128,0.25)] flex items-center justify-center gap-2 group"
          >
            <span>Explorar Cápsula Privée</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <button
            onClick={onEngineeringClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#14161f]/80 text-[#e6e2da] hover:text-[#c5a880] border border-[#2d313f] hover:border-[#c5a880]/60 font-medium text-xs tracking-[0.2em] uppercase rounded-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#c5a880]" />
            <span>Engenharia Têxtil Italiana</span>
          </button>

          <button
            onClick={onConciergeClick}
            className="w-full sm:w-auto px-6 py-4 text-[#b8afa3] hover:text-[#f3efe9] text-xs tracking-[0.16em] uppercase transition-colors"
          >
            Atendimento Privé
          </button>
        </div>

        {/* Hallmark luxury credentials bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#232633]/60">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 rounded bg-[#0f1117]/40 backdrop-blur-sm border border-[#1f222d]/40">
              <span className="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#f1ede6] tracking-wider mb-1">
                {stat.value}
              </span>
              <span className="text-[11px] font-sans-clean font-medium text-[#c5a880] uppercase tracking-wider mb-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] text-[#8e8a82] font-light">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
