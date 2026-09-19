import React, { useState } from 'react';
import { Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { Product, ProductColor, Size } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: Size) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickSize, setShowQuickSize] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddWithFeedback = (sizeToUse: Size) => {
    onAddToCart(product, selectedColor, sizeToUse);
    setAddedSuccess(true);
    setShowQuickSize(false);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(product.price);

  const parcelPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(Math.round(product.price / 10));

  return (
    <div
      className="group relative flex flex-col bg-[#101217] rounded-sm border border-[#20232d] hover:border-[#c5a880]/50 transition-all duration-500 overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickSize(false);
      }}
    >
      {/* Product Image Container (Aspect Ratio 3:4) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d0e12]">
        <img
          src={isHovered ? product.secondaryImage : product.primaryImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none z-10">
          <div className="flex flex-col gap-1.5">
            {product.isLimitedEdition && (
              <span className="inline-flex items-center gap-1 bg-[#0b0c10]/90 border border-[#c5a880]/60 text-[#d8c2a3] text-[9px] font-sans-clean font-semibold uppercase tracking-[0.16em] px-2 py-0.5 rounded-sm backdrop-blur-md">
                <Sparkles className="w-2.5 h-2.5 text-[#c5a880]" />
                Limitada ({product.editionLimit || 100} un)
              </span>
            )}
            {product.collection.includes('Black Label') && (
              <span className="bg-[#171922] text-[#e0ded8] text-[9px] font-sans-clean font-medium uppercase tracking-[0.14em] px-2 py-0.5 rounded-sm border border-white/10">
                Black Label
              </span>
            )}
          </div>

          {product.isBestseller && (
            <span className="bg-[#c5a880] text-[#0d0e12] text-[9px] font-sans-clean font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-sm shadow-sm">
              Bestseller
            </span>
          )}
        </div>

        {/* Action Overlay Bottom on Hover */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/80 to-transparent transition-opacity duration-300 flex flex-col gap-2 ${
            isHovered || showQuickSize ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {showQuickSize ? (
            <div className="bg-[#14161f] border border-[#c5a880]/40 p-2.5 rounded shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#b8afa3]">Selecione o Tamanho:</span>
                <button
                  onClick={() => setShowQuickSize(false)}
                  className="text-[10px] text-[#8e8a83] hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleAddWithFeedback(size)}
                    className="flex-1 py-1.5 bg-[#1e212b] hover:bg-[#c5a880] hover:text-[#0d0e12] text-[#f4f2ee] text-[11px] font-medium rounded transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowQuickSize(true)}
                className={`flex-1 py-2.5 px-3 text-[11px] uppercase tracking-[0.16em] font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c5a880] hover:bg-[#d4bc97] text-[#0d0e12]'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Adicionado</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Adicionar à Sacola</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onQuickView(product)}
                className="p-2.5 bg-[#181a24]/90 hover:bg-[#202330] text-[#e0ded8] hover:text-[#c5a880] border border-[#2b2e3c] rounded-sm transition-colors"
                title="Visualização Rápida"
                aria-label="Visualização Rápida"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#0f1116]">
        <div>
          {/* Fabric Highlight & Color Swatches */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-[#c5a880] font-sans-clean tracking-[0.14em] uppercase font-medium">
              {product.fabricName}
            </span>

            {/* Colors picker */}
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`w-3.5 h-3.5 rounded-full transition-all border ${
                    selectedColor.name === c.name
                      ? 'border-[#c5a880] scale-125'
                      : 'border-white/20 hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base sm:text-lg font-serif-luxury text-[#f4f2ed] hover:text-[#c5a880] transition-colors cursor-pointer leading-snug tracking-wide line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Key benefit */}
          <p className="text-xs text-[#959187] font-sans-clean line-clamp-2 leading-relaxed mb-4">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Installments */}
        <div className="pt-3 border-t border-[#1e2029] flex items-end justify-between">
          <div>
            <span className="text-lg sm:text-xl font-serif-luxury font-medium text-[#f6f4ef]">
              {formattedPrice}
            </span>
            <div className="text-[10px] text-[#86837a] font-sans-clean tracking-wider">
              10x de {parcelPrice} sem juros
            </div>
          </div>

          <span className="text-[10px] tracking-[0.16em] uppercase text-[#b8afa3] font-medium">
            {selectedColor.name}
          </span>
        </div>
      </div>
    </div>
  );
};
