import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Crown, Shield, Check, Clock, Phone, MapPin } from 'lucide-react';

interface ConciergeVIPProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeVIP: React.FC<ConciergeVIPProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('São Paulo (Jardins)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá, Concierge Atelier Forma. Gostaria de atendimento personalizado para a coleção fitness de luxo e agendamento de fitting privativo.`
    );
    window.open(`https://api.whatsapp.com/send?phone=5511999998888&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0f1117] border border-[#2b2e3e] rounded-sm p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-60 h-20 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8c887e] hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#c5a880]">
              <Crown className="w-4 h-4" />
              <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.22em]">
                Atelier Forma Privée
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#fcfbfa] mb-3">
              Atendimento Concierge VIP
            </h2>

            <p className="text-xs sm:text-sm text-[#aba79e] font-sans-clean leading-relaxed mb-6 font-light">
              Nossos consultores de estilo e fisiologia biomecânica estão à disposição para orientar caimento, reservas antecipadas de peças esgotadas e personalização com monograma bordado.
            </p>

            {/* Privée Perks */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded bg-[#13151f] border border-[#222534] text-xs font-sans-clean">
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                <span className="text-[#d8d5ce]">Acesso a Drops 24h antes</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                <span className="text-[#d8d5ce]">Monograma Gratuito em 24k</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                <span className="text-[#d8d5ce]">Fitting Privado nos Jardins</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                <span className="text-[#d8d5ce]">Atendimento 7 dias por semana</span>
              </div>
            </div>

            {/* Direct Instant WhatsApp CTA */}
            <button
              onClick={handleDirectWhatsApp}
              className="w-full py-3.5 mb-5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#54f08e] rounded text-xs font-sans-clean uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Iniciar Chat Instantâneo com Concierge
            </button>

            <div className="relative flex items-center justify-center mb-5">
              <div className="border-t border-[#222533] w-full" />
              <span className="bg-[#0f1117] px-3 text-[10px] text-[#78756d] uppercase tracking-widest font-sans-clean">
                ou agende retorno exclusivo
              </span>
            </div>

            {/* Invitation Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans-clean">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#938e83] block mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dra. Helena Albuquerque"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141620] border border-[#272b3b] rounded text-[#eeebe5] focus:outline-none focus:border-[#c5a880] text-xs placeholder:text-[#55534d]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#938e83] block mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141620] border border-[#272b3b] rounded text-[#eeebe5] focus:outline-none focus:border-[#c5a880] text-xs placeholder:text-[#55534d]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#938e83] block mb-1">
                  Cidade de Atendimento Preferencial
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141620] border border-[#272b3b] rounded text-[#eeebe5] focus:outline-none focus:border-[#c5a880] text-xs"
                >
                  <option value="São Paulo (Jardins)">São Paulo — Flagship Jardins</option>
                  <option value="Rio de Janeiro (Leblon)">Rio de Janeiro — Suíte Privée Leblon</option>
                  <option value="Miami (Design District)">Miami — Flagship Design District</option>
                  <option value="Milão (Montenapoleone)">Milão — Via Montenapoleone Ateliê</option>
                  <option value="Atendimento Digital">Atendimento Digital White-Glove (Brasil)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] font-semibold rounded text-xs uppercase tracking-[0.2em] transition-all shadow-lg mt-2"
              >
                Solicitar Contato & Convite Privée
              </button>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a880]/20 border border-[#c5a880] flex items-center justify-center text-[#c5a880]">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-serif-luxury text-[#fcfbfa]">
              Solicitação Recebida com Sucesso
            </h3>

            <p className="text-sm text-[#b8b3a8] font-sans-clean max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-white">{name}</strong>. Nosso Concierge entrará em contato via WhatsApp no número <strong className="text-[#c5a880]">{phone}</strong> em até 30 minutos com seus privilégios exclusivos.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-[#191c28] hover:bg-[#212536] text-[#dedbd3] border border-[#2d3142] rounded text-xs uppercase tracking-wider font-semibold"
            >
              Retornar à Coleção
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
