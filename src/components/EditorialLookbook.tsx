import React, { useState } from 'react';
import { Camera, MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { LOOKBOOK_ITEMS, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface EditorialLookbookProps {
  onQuickView: (product: Product) => void;
}

export const EditorialLookbook: React.FC<EditorialLookbookProps> = ({ onQuickView }) => {
  const [activeItem, setActiveItem] = useState(LOOKBOOK_ITEMS[0]);

  const handleShopLook = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      onQuickView(found);
    }
  };

  return (
    <section id="lookbook" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0c0d12] border-t border-[#1d202d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Camera className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.24em] text-[#c5a880] uppercase">
                Campanha Internacional
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-[#fbfaf8] tracking-[0.06em] font-medium">
              Editorial & Passarela
            </h2>
          </div>
          <p className="text-sm text-[#9f9b91] font-sans-clean max-w-md font-light">
            Locações arquitetônicas selecionadas ao redor do mundo demonstrando a versatilidade estética e a rigidez técnica das nossas peças.
          </p>
        </div>

        {/* Featured Big Stage Look */}
        <div className="relative rounded-sm overflow-hidden bg-[#101219] border border-[#232737] mb-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
            {/* Visual Column */}
            <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#0a0b0f]/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-xs text-[#d6b78d] font-sans-clean flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{activeItem.location}</span>
              </div>
            </div>

            {/* Editorial Text Column */}
            <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between bg-[#11131b]">
              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#c5a880] font-sans-clean font-semibold block mb-3">
                  Editorial • Look 0{LOOKBOOK_ITEMS.findIndex((i) => i.id === activeItem.id) + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fcfbfa] mb-4 leading-tight font-medium">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#a8a49a] font-sans-clean leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <div className="p-4 rounded bg-[#161823] border border-[#262939] space-y-2 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#737068] block font-sans-clean">
                    Silhueta em Destaque:
                  </span>
                  <div className="text-sm font-serif-luxury text-[#f2efe9] font-medium">
                    {PRODUCTS.find((p) => p.id === activeItem.featuredProductId)?.name}
                  </div>
                  <div className="text-xs text-[#c5a880] font-sans-clean">
                    R$ {PRODUCTS.find((p) => p.id === activeItem.featuredProductId)?.price.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleShopLook(activeItem.featuredProductId)}
                className="w-full py-4 bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Ver Detalhes do Look</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LOOKBOOK_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`text-left p-3 rounded bg-[#11131a] border transition-all duration-300 group ${
                activeItem.id === item.id
                  ? 'border-[#c5a880] ring-1 ring-[#c5a880]/50'
                  : 'border-[#202330] opacity-75 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <div className="aspect-[4/3] rounded overflow-hidden mb-2.5 bg-[#0b0c0f]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-[10px] text-[#c5a880] font-sans-clean uppercase tracking-wider font-semibold">
                Look 0{index + 1}
              </div>
              <div className="text-xs font-serif-luxury text-[#f4f2ee] truncate font-medium">
                {item.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
