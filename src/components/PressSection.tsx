import React, { useState } from 'react';
import { Quote, Award, Sparkles, Check, Globe2, ShieldCheck, Leaf } from 'lucide-react';
import { PRESS_QUOTES } from '../data/products';

export const PressSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#090a0d] border-t border-[#1d202c]">
      <div className="max-w-7xl mx-auto">
        {/* Press Quotes Grid */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#c5a880] font-sans-clean font-semibold block mb-2">
            Reconhecimento Internacional
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury text-[#fbfaf8] font-medium">
            A Crítica Especializada
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {PRESS_QUOTES.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-sm bg-[#101218] border border-[#212431] flex flex-col justify-between relative shadow-xl hover:border-[#c5a880]/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#c5a880]/30 mb-4 stroke-[1.2]" />
                <p className="text-xs sm:text-sm text-[#cac5ba] font-sans-clean leading-relaxed font-light italic mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#1d202b]">
                <div className="text-xs font-serif-luxury tracking-widest text-[#f5f3ed] font-semibold">
                  {item.publication}
                </div>
                <div className="text-[10px] text-[#868379] font-sans-clean tracking-wider">
                  {item.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-[#1c1f2b] mb-20 text-center">
          <div className="flex flex-col items-center">
            <Globe2 className="w-6 h-6 text-[#c5a880] mb-2 stroke-[1.5]" />
            <h4 className="text-xs font-serif-luxury text-[#f1eee8] mb-0.5">Biella & Milão</h4>
            <p className="text-[10px] text-[#7a776e]">100% Manufatura Italiana</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-[#c5a880] mb-2 stroke-[1.5]" />
            <h4 className="text-xs font-serif-luxury text-[#f1eee8] mb-0.5">OEKO-TEX® Classe I</h4>
            <p className="text-[10px] text-[#7a776e]">Zero Contaminantes Químicos</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-6 h-6 text-[#c5a880] mb-2 stroke-[1.5]" />
            <h4 className="text-xs font-serif-luxury text-[#f1eee8] mb-0.5">Carbono Neutro</h4>
            <p className="text-[10px] text-[#7a776e]">Compensação Integral da Cadeia</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-6 h-6 text-[#c5a880] mb-2 stroke-[1.5]" />
            <h4 className="text-xs font-serif-luxury text-[#f1eee8] mb-0.5">Edições Numeradas</h4>
            <p className="text-[10px] text-[#7a776e]">Certificado Físico Assinado</p>
          </div>
        </div>

        {/* Exclusive VIP Drop Newsletter Banner */}
        <div className="relative rounded-sm overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-[#12141c] via-[#151722] to-[#11131a] border border-[#262a39] text-center shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#c5a880]/15 text-[#c5a880] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3" />
              Lista Exclusiva Atelier Privée
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fcfbfa] font-medium">
              Receba o Convite do Drop 05 Antes do Público
            </h3>
            <p className="text-xs sm:text-sm text-[#aba79c] font-sans-clean font-light leading-relaxed">
              Devido à tiragem restrita por lote de tecido italiano, nossas edições costumam esgotar nas primeiras 48 horas. Inscreva-se para ter acesso privativo.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail corporativo ou pessoal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#0d0f14] border border-[#272a39] rounded text-xs text-[#f5f3ed] placeholder:text-[#636058] focus:outline-none focus:border-[#c5a880]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] font-semibold text-xs uppercase tracking-[0.16em] rounded transition-all"
                >
                  Solicitar Acesso
                </button>
              </form>
            ) : (
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#4ade80] font-sans-clean">
                <Check className="w-4 h-4" />
                <span>Seu endereço foi inserido no Livro de Clientes Privée. Verifique sua caixa de entrada.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
