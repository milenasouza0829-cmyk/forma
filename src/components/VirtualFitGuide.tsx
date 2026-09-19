import React, { useState } from 'react';
import { Ruler, Sparkles, Check, ArrowRight, User, HeartHandshake } from 'lucide-react';
import { Size, Product } from '../types';

interface VirtualFitGuideProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenConcierge: () => void;
}

export const VirtualFitGuide: React.FC<VirtualFitGuideProps> = ({
  products,
  onSelectProduct,
  onOpenConcierge
}) => {
  const [gender, setGender] = useState<'feminino' | 'masculino'>('feminino');
  const [height, setHeight] = useState<number>(168);
  const [weight, setWeight] = useState<number>(62);
  const [workoutType, setWorkoutType] = useState<string>('musculacao');
  const [fitPreference, setFitPreference] = useState<'segunda-pele' | 'conforto' | 'relaxed'>('segunda-pele');
  const [calculated, setCalculated] = useState(true);

  // Calculation algorithm for luxury activewear fit
  const getRecommendedSize = (): { size: Size; description: string; precision: number } => {
    let bmi = weight / ((height / 100) * (height / 100));

    // Adjustment for fit preference
    if (fitPreference === 'conforto') bmi += 0.8;
    if (fitPreference === 'relaxed') bmi += 1.6;

    if (gender === 'feminino') {
      if (bmi < 19) return { size: 'PP', description: 'Caimento escultural de precisão anatômica com zero folga.', precision: 99 };
      if (bmi < 22) return { size: 'P', description: 'Compressão perfeita que valoriza o contorno muscular com máxima elasticidade.', precision: 98 };
      if (bmi < 25.5) return { size: 'M', description: 'Equilíbrio ideal entre compressão graduada e conforto térmico.', precision: 97 };
      if (bmi < 28.5) return { size: 'G', description: 'Sustentação estruturada com cós firme que não desce no agachamento.', precision: 96 };
      return { size: 'GG', description: 'Máxima amplitude de movimento com firmeza elástica.', precision: 95 };
    } else {
      if (bmi < 20.5) return { size: 'P', description: 'Corte aerodinâmico rente ao tórax e ombros.', precision: 98 };
      if (bmi < 24.5) return { size: 'M', description: 'Proporção atlética ideal com mobilidade nos dorsais.', precision: 99 };
      if (bmi < 27.5) return { size: 'G', description: 'Estruturação confortável para peitorais e braços desenvolvidos.', precision: 97 };
      return { size: 'GG', description: 'Caimento estruturado com excelente respirabilidade.', precision: 96 };
    }
  };

  const recommendation = getRecommendedSize();

  const recommendedItems = products
    .filter((p) => (gender === 'feminino' ? p.category === 'feminino' : p.category === 'masculino'))
    .slice(0, 2);

  return (
    <section id="provador-virtual" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#090a0d] border-t border-[#1d202c]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Ruler className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[11px] font-sans-clean font-medium tracking-[0.24em] text-[#c5a880] uppercase">
              Alfaiataria Sob Medida
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-[#fbfaf8] tracking-[0.06em] font-medium mb-4">
            Provador Virtual & Guia de Silhueta
          </h2>
          <p className="text-sm sm:text-base text-[#a6a297] font-sans-clean font-light leading-relaxed">
            Nossas modelagens utilizam mapeamento tridimensional do corpo atlético. Calibre suas dimensões para receber a recomendação exata da nossa equipe de modelistas de Milão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (7 Cols) */}
          <div className="lg:col-span-7 bg-[#11131a] border border-[#212533] p-6 sm:p-8 rounded-sm space-y-6 shadow-xl">
            {/* Gender Toggle */}
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-[#a6a298] font-sans-clean block mb-2.5">
                1. Linha Desejada
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setGender('feminino')}
                  className={`py-3 rounded text-xs font-sans-clean uppercase tracking-[0.16em] font-semibold transition-all ${
                    gender === 'feminino'
                      ? 'bg-[#c5a880] text-[#0d0e12] shadow-md'
                      : 'bg-[#181a24] text-[#b8b3a9] hover:text-white border border-[#262936]'
                  }`}
                >
                  Linha Feminina
                </button>
                <button
                  onClick={() => setGender('masculino')}
                  className={`py-3 rounded text-xs font-sans-clean uppercase tracking-[0.16em] font-semibold transition-all ${
                    gender === 'masculino'
                      ? 'bg-[#c5a880] text-[#0d0e12] shadow-md'
                      : 'bg-[#181a24] text-[#b8b3a9] hover:text-white border border-[#262936]'
                  }`}
                >
                  Linha Masculina
                </button>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean mb-2">
                <span className="uppercase tracking-[0.16em] text-[#a6a298]">2. Altura</span>
                <span className="text-base font-serif-luxury text-[#f4f2ee] font-semibold">{height} cm</span>
              </div>
              <input
                type="range"
                min="150"
                max="205"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-1.5 bg-[#202330] rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
              />
              <div className="flex justify-between text-[10px] text-[#6d6a62] mt-1 font-sans-clean">
                <span>150 cm</span>
                <span>175 cm</span>
                <span>205 cm</span>
              </div>
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean mb-2">
                <span className="uppercase tracking-[0.16em] text-[#a6a298]">3. Peso Aproximado</span>
                <span className="text-base font-serif-luxury text-[#f4f2ee] font-semibold">{weight} kg</span>
              </div>
              <input
                type="range"
                min="45"
                max="125"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-1.5 bg-[#202330] rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
              />
              <div className="flex justify-between text-[10px] text-[#6d6a62] mt-1 font-sans-clean">
                <span>45 kg</span>
                <span>85 kg</span>
                <span>125 kg</span>
              </div>
            </div>

            {/* Workout Focus */}
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-[#a6a298] font-sans-clean block mb-2.5">
                4. Modalidade Principal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'musculacao', label: 'Musculação' },
                  { id: 'pilates', label: 'Pilates & Yoga' },
                  { id: 'corrida', label: 'Corrida & Hyrox' },
                  { id: 'tennis', label: 'Tennis & Clube' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWorkoutType(item.id)}
                    className={`py-2 px-2 text-[11px] rounded font-sans-clean tracking-wider uppercase transition-all ${
                      workoutType === item.id
                        ? 'bg-[#1e2230] border border-[#c5a880] text-[#c5a880] font-medium'
                        : 'bg-[#151722] border border-[#212432] text-[#918d84] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fit Preference */}
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-[#a6a298] font-sans-clean block mb-2.5">
                5. Preferência de Sensação na Pele
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'segunda-pele', label: 'Segunda Pele', desc: 'Alta compressão' },
                  { id: 'conforto', label: 'Suave & Fluida', desc: 'Média firmeza' },
                  { id: 'relaxed', label: 'Alfaiataria', desc: 'Mais solto' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFitPreference(opt.id as any)}
                    className={`p-3 rounded text-left transition-all border ${
                      fitPreference === opt.id
                        ? 'bg-[#1b1e2a] border-[#c5a880] text-[#f4f2ee]'
                        : 'bg-[#141620] border-[#222533] text-[#8e8a81] hover:border-white/20'
                    }`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#e6e3dd]">
                      {opt.label}
                    </div>
                    <div className="text-[10px] text-[#a6a297]">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Box (5 Cols) */}
          <div className="lg:col-span-5 bg-[#12141c] border border-[#262a39] p-6 sm:p-8 rounded-sm shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#212433]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-sans-clean font-semibold">
                Resultado Personalizado
              </span>
              <span className="text-[11px] text-[#4ade80] flex items-center gap-1 font-sans-clean font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                {recommendation.precision}% de Precisão
              </span>
            </div>

            {/* Size Card */}
            <div className="text-center py-6 bg-[#0c0d12] rounded border border-[#1f222e]">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#908c83] font-sans-clean block mb-1">
                Seu Tamanho Recomendado:
              </span>
              <div className="text-5xl sm:text-6xl font-serif-luxury font-bold text-[#c5a880] tracking-widest my-2">
                TAMANHO {recommendation.size}
              </div>
              <p className="text-xs text-[#dedad1] font-sans-clean max-w-xs mx-auto px-4 mt-2">
                {recommendation.description}
              </p>
            </div>

            {/* Recommended Products for this fit */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#908c83] font-sans-clean block mb-3">
                Peças Ideais para seu Perfil:
              </span>
              <div className="space-y-3">
                {recommendedItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProduct(item)}
                    className="flex items-center gap-3 p-2.5 rounded bg-[#161822] hover:bg-[#1d202c] border border-[#252838] transition-colors cursor-pointer group"
                  >
                    <img
                      src={item.primaryImage}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-serif-luxury text-[#f2efea] group-hover:text-[#c5a880] transition-colors truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#969288] truncate">{item.fabricName}</p>
                      <span className="text-xs font-medium text-[#c5a880]">
                        R$ {item.price.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8a867c] group-hover:text-[#c5a880] transition-colors mr-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Concierge Assistance */}
            <div className="pt-2">
              <button
                onClick={onOpenConcierge}
                className="w-full py-3 bg-[#191c27] hover:bg-[#202433] text-[#e0ded8] border border-[#2c3042] hover:border-[#c5a880]/50 rounded text-xs font-sans-clean uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
                Deseja um Fitting Presencial no Ateliê?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
