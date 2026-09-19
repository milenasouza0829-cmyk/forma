import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickTerms = ['Macacão Sculpt', 'Black Label', 'Grafeno', 'Compressão', 'Titânio', 'Masculino'];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.fabricName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f1117] border border-[#242736] rounded-sm shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#868278] hover:text-white"
          aria-label="Fechar busca"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c5a880]" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por peça, tecido italiano, silhueta ou tecnologia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-[#141620] border border-[#262a3a] rounded text-sm text-[#f6f4ef] placeholder:text-[#6a665d] focus:outline-none focus:border-[#c5a880]"
          />
        </div>

        {/* Quick Terms */}
        <div className="mb-6 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[#78756c] font-sans-clean uppercase tracking-wider text-[10px]">
            Sugestões Privée:
          </span>
          {quickTerms.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded bg-[#171924] hover:bg-[#202330] text-[#c0bcb2] hover:text-[#c5a880] border border-[#232737] text-xs transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="border-t border-[#1e212d] pt-4 max-h-80 overflow-y-auto space-y-2">
            <span className="text-[10px] tracking-widest uppercase text-[#88847a] block mb-2">
              {results.length} resultado(s) encontrado(s):
            </span>
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="flex items-center gap-3 p-2.5 rounded bg-[#13151d] hover:bg-[#1b1e2a] border border-[#202330] transition-colors cursor-pointer group"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-14 object-cover rounded-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-serif-luxury text-[#f2efe9] group-hover:text-[#c5a880] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-[#938e83] truncate">{product.subtitle}</p>
                    <span className="text-xs font-medium text-[#c5a880]">
                      R$ {product.price.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#858177] group-hover:text-[#c5a880] transition-colors" />
                </div>
              ))
            ) : (
              <p className="text-xs text-[#8c887f] py-4 text-center">
                Nenhuma peça correspondente a "{query}". Explore nossa coleção completa no catálogo.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
