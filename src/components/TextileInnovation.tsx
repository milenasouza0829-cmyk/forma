import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, Zap, Thermometer, Wind, CheckCircle2 } from 'lucide-react';
import { TEXTILE_TECHNOLOGIES } from '../data/products';

export const TextileInnovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TEXTILE_TECHNOLOGIES[0].id);

  const selectedTech = TEXTILE_TECHNOLOGIES.find((t) => t.id === activeTab) || TEXTILE_TECHNOLOGIES[0];

  return (
    <section id="engenharia" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0c0d11] relative overflow-hidden border-t border-[#1d202b]">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3d4253]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[11px] font-sans-clean font-medium tracking-[0.24em] text-[#c5a880] uppercase">
              Laboratório & Ateliê em Biella, Itália
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-[#fbfaf8] tracking-[0.06em] font-medium mb-4">
            A Ciência do Luxo Ativo
          </h2>
          <p className="text-sm sm:text-base text-[#a6a298] font-sans-clean font-light leading-relaxed">
            Nossos fios não são sintéticos genéricos. Fundimos microfibras italianas ultrafinas, seda Mulberry e nanotubos condutores de grafeno para criar uma segunda pele inteligente que reage à temperatura corporal.
          </p>
        </div>

        {/* Tech Selector Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {TEXTILE_TECHNOLOGIES.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`px-6 py-3 rounded text-xs font-sans-clean tracking-[0.16em] uppercase transition-all duration-300 ${
                activeTab === tech.id
                  ? 'bg-[#181a24] text-[#c5a880] border border-[#c5a880]/70 shadow-lg'
                  : 'bg-[#101217] text-[#938f86] hover:text-[#e4e1db] border border-[#212431]'
              }`}
            >
              {tech.name}
            </button>
          ))}
        </div>

        {/* Interactive Feature Display */}
        <div className="bg-[#101218] border border-[#212431] rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 cols: Descriptive specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-[#c5a880]/15 text-[#d8c2a3] text-[10px] font-sans-clean uppercase tracking-[0.2em] font-semibold">
                Patente Têxtil Exclusiva
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fbf9f5] font-medium">
                {selectedTech.name}
              </h3>

              <p className="text-sm font-editorial italic text-[#c5a880] text-lg">
                "{selectedTech.tagline}"
              </p>

              <p className="text-sm text-[#cac6bc] font-sans-clean leading-relaxed">
                {selectedTech.description}
              </p>

              <div className="p-4 rounded bg-[#151722] border border-[#262939] text-xs font-sans-clean space-y-1">
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#a09c93] block font-medium">
                  Composição Molecular:
                </span>
                <p className="text-[#ece9e2] font-medium">{selectedTech.composition}</p>
              </div>

              {/* 4 Key Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {selectedTech.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded bg-[#13151d] border border-[#1f222d]">
                    <div className="text-[10px] uppercase tracking-wider text-[#8a867e] mb-1 font-sans-clean">
                      {spec.name}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#f1eee7] font-sans-clean flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{spec.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Luxury Engineering vs Standard Activewear Comparison */}
            <div className="lg:col-span-5 bg-[#0b0c10] border border-[#232734] rounded-sm p-6 space-y-6">
              <div className="text-center pb-4 border-b border-[#1f222e]">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#c5a880] font-sans-clean font-semibold block mb-1">
                  Padrão de Precisão
                </span>
                <h4 className="text-lg font-serif-luxury text-[#f4f2ee]">
                  Atelier Forma vs. Fitness Comum
                </h4>
              </div>

              <div className="space-y-4 text-xs font-sans-clean">
                <div className="flex items-start justify-between pb-3 border-b border-[#1a1c26]">
                  <span className="text-[#969288] w-1/3">Densidade de Fios:</span>
                  <div className="w-2/3 text-right">
                    <span className="text-[#c5a880] font-medium block">44 agulhas/pol (Ultra Compacto)</span>
                    <span className="text-[10px] text-[#6d6a62]">vs. 28 agulhas/pol do mercado</span>
                  </div>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1a1c26]">
                  <span className="text-[#969288] w-1/3">Costuras & Fricção:</span>
                  <div className="w-2/3 text-right">
                    <span className="text-[#c5a880] font-medium block">Ultrassom & Vulcanização 0.2mm</span>
                    <span className="text-[10px] text-[#6d6a62]">vs. Overloque grosso que atrita na pele</span>
                  </div>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1a1c26]">
                  <span className="text-[#969288] w-1/3">Anti-Odor & Higiene:</span>
                  <div className="w-2/3 text-right">
                    <span className="text-[#c5a880] font-medium block">Nanoíons de Prata & Grafeno</span>
                    <span className="text-[10px] text-[#6d6a62]">vs. Tratamento químico superficial efêmero</span>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-[#969288] w-1/3">Sustentabilidade:</span>
                  <div className="w-2/3 text-right">
                    <span className="text-[#c5a880] font-medium block">Certificação OEKO-TEX® Classe I</span>
                    <span className="text-[10px] text-[#6d6a62]">Zero químicos nocivos aos poros</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] tracking-widest uppercase text-[#7a776f] italic">
                  Certificado de Autenticidade emitido com cada pedido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
