import React, { useState } from 'react';
import { X, Sparkles, Shield, Check, Ruler, MessageCircle, Truck, RefreshCw, ShoppingBag } from 'lucide-react';
import { Product, ProductColor, Size } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, size: Size, quantity: number) => void;
  onOpenSizeGuide: () => void;
  onOpenConcierge: () => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  onOpenConcierge
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.primaryImage);
  const [added, setAdded] = useState(false);

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

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0f1116] border border-[#262936] rounded-sm shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#9a958a] hover:text-white bg-[#161822]/80 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="md:w-1/2 p-6 flex flex-col bg-[#0b0c10] border-b md:border-b-0 md:border-r border-[#1f222d]">
          {/* Main Visual */}
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-[#12141a] mb-4">
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.isLimitedEdition && (
              <span className="absolute top-3 left-3 bg-[#0a0b0e]/90 border border-[#c5a880]/60 text-[#dfcaa9] text-[9px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-sm">
                Edição Numerada • {product.editionLimit || 120} Unidades
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveImage(product.primaryImage)}
              className={`relative aspect-square w-16 rounded overflow-hidden border-2 transition-all ${
                activeImage === product.primaryImage ? 'border-[#c5a880]' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={product.primaryImage} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setActiveImage(product.secondaryImage)}
              className={`relative aspect-square w-16 rounded overflow-hidden border-2 transition-all ${
                activeImage === product.secondaryImage ? 'border-[#c5a880]' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={product.secondaryImage} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        {/* Right Column: Details & Customization */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Collection tag & Category */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-sans-clean font-semibold">
                {product.collection}
              </span>
              <span className="text-[11px] text-[#78756d] font-sans-clean">
                Ref: AF-{product.id.slice(0, 6).toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#f6f4ef] leading-snug mb-2">
              {product.name}
            </h2>

            {/* Subtitle */}
            <p className="text-xs text-[#a39e93] font-sans-clean mb-4">
              {product.subtitle}
            </p>

            {/* Price */}
            <div className="pb-4 mb-4 border-b border-[#1f222d]">
              <div className="text-2xl font-serif-luxury text-[#f6f4ef] font-medium">
                {formattedPrice}
              </div>
              <p className="text-xs text-[#8c887d] font-sans-clean">
                10x de {parcelPrice} sem juros ou 5% off no Pix
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#a6a196] uppercase tracking-wider text-[11px]">Cor Selecionada:</span>
                <span className="text-[#f4f2ee] font-medium">{selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-sans-clean transition-all ${
                      selectedColor.name === c.name
                        ? 'border-[#c5a880] bg-[#1a1c25] text-[#f4f2ee]'
                        : 'border-[#262935] text-[#9a958b] hover:border-white/30'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection & Guide */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#a6a196] uppercase tracking-wider text-[11px]">Tamanho:</span>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-[#c5a880] hover:underline flex items-center gap-1 text-[11px] tracking-wide"
                >
                  <Ruler className="w-3 h-3" />
                  Guia de Medidas & Silhueta
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-2 text-xs font-medium rounded transition-all ${
                      selectedSize === s
                        ? 'bg-[#c5a880] text-[#0d0e12] font-semibold shadow-md'
                        : 'bg-[#161821] text-[#dedbd4] hover:bg-[#202330] border border-[#262835]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric & Origin Blueprint */}
            <div className="p-3.5 rounded bg-[#13151c] border border-[#212430] mb-5 text-xs font-sans-clean space-y-1.5">
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#c5a880] font-semibold">
                Certificação Têxtil Italiana
              </div>
              <p className="text-[#cac6bd] leading-relaxed">
                <strong className="text-white">Composição:</strong> {product.fabricComposition}
              </p>
              <p className="text-[#9e9a90] text-[11px]">
                <strong className="text-white">Origem:</strong> {product.origin}
              </p>
            </div>

            {/* Technical Benefits Bullets */}
            <div className="space-y-1.5 mb-6 text-xs text-[#b8b3a8]">
              {product.benefits.slice(0, 3).map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#c5a880] mt-0.5">•</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-[#1f222d]">
            <div className="flex items-center gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-[#272b38] rounded bg-[#13151c]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-[#b0aba0] hover:text-white"
                >
                  -
                </button>
                <span className="px-3 text-xs font-medium text-[#f4f2ee]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-[#b0aba0] hover:text-white"
                >
                  +
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded text-xs font-sans-clean uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] shadow-lg'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionado à Sacola</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar à Sacola • {formattedPrice}</span>
                  </>
                )}
              </button>
            </div>

            {/* Secondary actions: Concierge & White Glove Guarantee */}
            <div className="flex items-center justify-between text-[11px] text-[#908c83] pt-2">
              <button
                onClick={onOpenConcierge}
                className="hover:text-[#c5a880] flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#c5a880]" />
                Dúvida no caimento? Fale com nosso Concierge
              </button>
              <span className="flex items-center gap-1 text-[#b8b3aa]">
                <Truck className="w-3.5 h-3.5 text-[#c5a880]" />
                Entrega White Glove Cortesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
