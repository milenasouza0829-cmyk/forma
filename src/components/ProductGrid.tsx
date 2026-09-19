import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Sparkles, Check } from 'lucide-react';
import { Product, Category, ProductColor, Size } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: Size) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart
}) => {
  const [sortBy, setSortBy] = useState<'exclusividade' | 'menor-preco' | 'maior-preco' | 'avaliacoes'>('exclusividade');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('todos');

  const categories: { id: Category; label: string; badge?: string }[] = [
    { id: 'todos', label: 'Toda a Coleção' },
    { id: 'feminino', label: 'Linha Feminina' },
    { id: 'masculino', label: 'Linha Masculina' },
    { id: 'black-label', label: 'Drop Black Label 04', badge: 'Limitado' },
    { id: 'acessorios', label: 'Titânio & Couro' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory === 'todos') return true;
        if (selectedCategory === 'black-label') return p.isLimitedEdition || p.collection.includes('Black Label');
        return p.category === selectedCategory;
      })
      .filter((p) => {
        if (selectedSizeFilter === 'todos') return true;
        return p.sizes.includes(selectedSizeFilter as Size);
      })
      .sort((a, b) => {
        if (sortBy === 'menor-preco') return a.price - b.price;
        if (sortBy === 'maior-preco') return b.price - a.price;
        if (sortBy === 'avaliacoes') return b.rating - a.rating;
        // Default: exclusividade (limited editions first, then bestsellers)
        return (b.isLimitedEdition ? 1 : 0) - (a.isLimitedEdition ? 1 : 0);
      });
  }, [products, selectedCategory, selectedSizeFilter, sortBy]);

  return (
    <section id="catalogo" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0a0b0e] border-t border-[#1a1c24]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#c5a880]/60"></span>
            <span className="text-[11px] font-sans-clean font-medium tracking-[0.24em] text-[#c5a880] uppercase">
              Cápsula Ativa • Drop 04
            </span>
            <span className="h-[1px] w-6 bg-[#c5a880]/60"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-[#fcfbfa] tracking-[0.08em] font-medium mb-4">
            A Coleção Atelier Forma
          </h2>
          <p className="text-sm sm:text-base text-[#a6a29a] font-sans-clean font-light leading-relaxed">
            Peças cortadas a laser e costuradas por mestres alfaiates em tiragens rigorosamente restritas. Projetadas para conferir compressão nobre e postura impecável.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans-clean tracking-[0.14em] uppercase transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a880] text-[#0d0e12] font-semibold shadow-[0_2px_15px_rgba(197,168,128,0.3)]'
                  : 'bg-[#13151c] text-[#b0aba0] hover:text-[#f4f2ee] hover:bg-[#1c1e28] border border-[#232633]'
              }`}
            >
              <span>{cat.label}</span>
              {cat.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                    selectedCategory === cat.id ? 'bg-[#0d0e12] text-[#c5a880]' : 'bg-[#c5a880]/20 text-[#c5a880]'
                  }`}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Filter & Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-5 rounded bg-[#101218] border border-[#1e212b] mb-10 text-xs font-sans-clean text-[#9a958b]">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <span className="tracking-[0.12em] uppercase font-medium text-[#dedad2]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Silhueta Encontrada' : 'Silhuetas Disponíveis'}
            </span>

            {/* Size Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-wider text-[#737068]">Tam:</span>
              {['todos', 'PP', 'P', 'M', 'G', 'GG'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSizeFilter(size)}
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-medium transition-colors ${
                    selectedSizeFilter === size
                      ? 'bg-[#c5a880] text-[#0d0e12]'
                      : 'bg-[#181a24] text-[#a9a59c] hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-wider text-[#737068]">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#171922] text-[#e5e2db] border border-[#2b2e3c] rounded px-3 py-1.5 text-xs outline-none focus:border-[#c5a880] cursor-pointer"
            >
              <option value="exclusividade">Exclusividade & Edição</option>
              <option value="maior-preco">Maior Valor</option>
              <option value="menor-preco">Menor Valor</option>
              <option value="avaliacoes">Mais Avaliados (5.0★)</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#101217] rounded border border-[#20232e] p-8">
            <p className="text-lg font-serif-luxury text-[#e0ded8] mb-2">
              Nenhuma peça encontrada com estes filtros.
            </p>
            <p className="text-xs text-[#8c887f] font-sans-clean mb-6">
              Tente redefinir o tamanho selecionado ou explore toda a coleção disponível.
            </p>
            <button
              onClick={() => {
                onSelectCategory('todos');
                setSelectedSizeFilter('todos');
              }}
              className="px-6 py-2.5 bg-[#c5a880] text-[#0d0e12] text-xs font-semibold uppercase tracking-[0.16em] rounded"
            >
              Ver Toda a Coleção
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
