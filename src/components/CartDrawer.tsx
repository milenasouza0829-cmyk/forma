import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Sparkles, Check, CreditCard, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const subtotal = rawSubtotal - discount;

  // Free shipping threshold: R$ 1.500
  const freeShippingThreshold = 1500;
  const shippingProgress = Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const formattedSubtotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(subtotal);

  const formattedDiscount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(discount);

  const formattedInstallment = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(Math.round(subtotal / 10));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PRIVEE10' || couponCode.trim().toUpperCase() === 'ATELIER') {
      setCouponApplied(true);
    } else {
      alert('Cupom inválido. Tente usar "PRIVEE10" para 10% de cortesia.');
    }
  };

  const handleSimulatePayment = () => {
    setIsProcessingCheckout(true);
    setTimeout(() => {
      setIsProcessingCheckout(false);
      setOrderComplete(true);
      onClearCart();
    }, 1800);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#0e1015] border-l border-[#232635] shadow-2xl flex flex-col justify-between animate-slide-left">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#1f2230]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c5a880]" />
              <h2 className="text-lg font-serif-luxury tracking-wider text-[#f8f6f2] font-medium">
                Sua Sacola Privée
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8f8b82] hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          <div className="pt-2">
            <div className="flex justify-between text-[11px] font-sans-clean mb-1.5">
              <span className="text-[#a49f94]">
                {rawSubtotal >= freeShippingThreshold ? (
                  <span className="text-[#c5a880] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Frete White Glove Cortesia Desbloqueado!
                  </span>
                ) : (
                  <span>
                    Faltam <strong>R$ {remainingForFreeShipping}</strong> para Frete White Glove Cortesia
                  </span>
                )}
              </span>
              <span className="text-[#c5a880] font-semibold">{shippingProgress}%</span>
            </div>
            <div className="w-full h-1 bg-[#1c1f2b] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#b3956d] to-[#e4ceb0] transition-all duration-500 rounded-full"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#3a3d4c] stroke-[1.2]" />
              <p className="text-sm font-serif-luxury text-[#e0ded8]">
                Sua sacola de compras está vazia.
              </p>
              <p className="text-xs text-[#8c887d] max-w-xs mx-auto">
                Explore nossas peças de alta performance e silhuetas esculturais.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-[#c5a880] text-[#0d0e12] text-xs font-semibold uppercase tracking-[0.16em] rounded"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                className="flex gap-4 p-3.5 rounded bg-[#13151c] border border-[#212431]"
              >
                {/* Thumb */}
                <div className="w-20 h-24 rounded-sm overflow-hidden bg-[#0d0e12] shrink-0">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-serif-luxury text-[#f2efe9] font-medium truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#6d6a62] hover:text-red-400 p-0.5 transition-colors"
                        title="Remover"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-[#9a958b] mt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.selectedColor.hex }} />
                        {item.selectedColor.name}
                      </span>
                      <span>•</span>
                      <span>Tam: {item.selectedSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#2b2f3f] rounded bg-[#0d0f14] text-xs">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="px-2 py-0.5 text-[#9a958b] hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-[11px] text-white font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-[#9a958b] hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-serif-luxury text-[#c5a880] font-semibold">
                      R$ {(item.product.price * item.quantity).toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Complimentary Luxury Packaging Box */}
          {items.length > 0 && (
            <div className="p-3.5 rounded bg-[#141620] border border-[#252837] space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="mt-0.5 accent-[#c5a880]"
                />
                <div className="text-xs">
                  <span className="text-[#f4f2ee] font-medium flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#c5a880]" />
                    Embalagem de Luxo Magnética com Perfume de Assinatura
                  </span>
                  <p className="text-[10px] text-[#8e8a82] mt-0.5">
                    Caixa rígida preta acetinada com fita de gorgurão e cartão com gravação personalizada (Cortesia).
                  </p>
                </div>
              </label>
            </div>
          )}

          {/* Promo code input */}
          {items.length > 0 && (
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Código Privée (Ex: PRIVEE10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#12141c] border border-[#242735] rounded text-xs text-[#ece9e2] uppercase placeholder:normal-case placeholder:text-[#65625b] focus:outline-none focus:border-[#c5a880]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#1f2230] hover:bg-[#282c3e] text-[#c5a880] text-xs font-medium rounded uppercase tracking-wider transition-colors"
              >
                Aplicar
              </button>
            </form>
          )}

          {couponApplied && (
            <div className="text-[11px] text-[#4ade80] flex items-center gap-1.5 bg-[#4ade80]/10 px-3 py-1.5 rounded border border-[#4ade80]/20">
              <Check className="w-3 h-3" />
              <span>Privilégio de 10% off concedido à sua sacola.</span>
            </div>
          )}
        </div>

        {/* Bottom Checkout Actions */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#0c0d12] border-t border-[#1f2230] space-y-3">
            <div className="space-y-1.5 text-xs font-sans-clean">
              <div className="flex justify-between text-[#8f8b82]">
                <span>Subtotal ({items.reduce((a, b) => a + b.quantity, 0)} itens):</span>
                <span className="text-[#dedad2]">R$ {rawSubtotal.toLocaleString('pt-BR')}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-[#4ade80]">
                  <span>Desconto Exclusivo Privée:</span>
                  <span>- {formattedDiscount}</span>
                </div>
              )}
              <div className="flex justify-between text-[#8f8b82]">
                <span>Entrega White Glove:</span>
                <span className="text-[#c5a880] font-medium">
                  {rawSubtotal >= freeShippingThreshold ? 'Cortesia' : 'R$ 65'}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif-luxury pt-2 border-t border-[#1d202b] text-[#f7f5f0] font-semibold">
                <span>Total:</span>
                <span className="text-[#c5a880]">{formattedSubtotal}</span>
              </div>
              <div className="text-[10px] text-right text-[#7f7b73]">
                ou 10x de {formattedInstallment} sem juros no cartão
              </div>
            </div>

            <button
              onClick={() => setShowCheckoutModal(true)}
              className="w-full py-4 bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Finalizar Pedido com Concierge</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#78756d]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#c5a880]" />
                Checkout Criptografado 256-bit
              </span>
              <span>•</span>
              <span>Troca Cortesia em 30 Dias</span>
            </div>
          </div>
        )}
      </div>

      {/* Simulated Luxury Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0e1016] border border-[#2a2d3d] rounded-sm p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => {
                setShowCheckoutModal(false);
                setOrderComplete(false);
              }}
              className="absolute top-4 right-4 text-[#8f8b82] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderComplete ? (
              <div className="space-y-5">
                <div className="border-b border-[#212433] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-1">
                    Atelier Forma • Checkout Seguro
                  </span>
                  <h3 className="text-xl font-serif-luxury text-[#fbfaf8]">
                    Confirmação de Encomenda White Glove
                  </h3>
                </div>

                <div className="p-3.5 rounded bg-[#13151f] border border-[#222535] text-xs space-y-1">
                  <div className="flex justify-between text-[#d6d3cb]">
                    <span>Total da Aquisição:</span>
                    <strong className="text-[#c5a880] text-sm">{formattedSubtotal}</strong>
                  </div>
                  <p className="text-[10px] text-[#8e8a82]">
                    Itens acondicionados em embalagem rígida perfumada com rastreamento prioritário.
                  </p>
                </div>

                {/* Simulated Payment Methods */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#938e83] block">
                    Forma de Pagamento Exclusiva
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded bg-[#161924] border border-[#c5a880] text-[#f4f2ee]">
                      <div className="font-semibold flex items-center gap-1.5 text-[#c5a880]">
                        <CreditCard className="w-3.5 h-3.5" />
                        Cartão Black / Infinite
                      </div>
                      <div className="text-[10px] text-[#8f8a81] mt-0.5">10x sem juros de {formattedInstallment}</div>
                    </div>

                    <div className="p-3 rounded bg-[#13151f] border border-[#232737] text-[#8f8a81]">
                      <div className="font-medium flex items-center gap-1.5 text-[#d0ccc3]">
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                        Pix com 5% de Desconto
                      </div>
                      <div className="text-[10px] text-[#6d6961] mt-0.5">Aprovação imediata</div>
                    </div>
                  </div>
                </div>

                {/* Shipping address fields */}
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#8e8a82] block mb-1">
                      Endereço de Entrega VIP (Residência ou Ateliê)
                    </label>
                    <input
                      type="text"
                      defaultValue="Av. Europa, Jardins - São Paulo, SP"
                      className="w-full px-3 py-2 bg-[#141620] border border-[#252837] rounded text-[#eeebe5] text-xs"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSimulatePayment}
                  disabled={isProcessingCheckout}
                  className="w-full py-4 bg-[#c5a880] hover:bg-[#d8be97] text-[#0d0e12] font-semibold text-xs tracking-[0.2em] uppercase rounded transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  {isProcessingCheckout ? (
                    <span>Autenticando com Concierge Financeiro...</span>
                  ) : (
                    <span>Concluir Aquisição • {formattedSubtotal}</span>
                  )}
                </button>
              </div>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#c5a880]/15 border border-[#c5a880] flex items-center justify-center text-[#c5a880]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif-luxury text-[#fcfbfa]">
                  Pedido Privée Registrado com Distinção
                </h3>
                <p className="text-xs text-[#a9a59b] max-w-sm mx-auto leading-relaxed">
                  Código de Rastreamento: <strong className="text-white">#AF-89421-BR</strong>.
                  Sua caixa rígida com acabamento aveludado e perfume de assinatura está sendo preparada por nossos alfaiates.
                </p>
                <div className="p-3 rounded bg-[#13151f] border border-[#222534] text-xs text-[#dedad2] text-left max-w-xs mx-auto">
                  <div className="font-semibold text-[#c5a880] mb-0.5">Serviço White Glove Ativado:</div>
                  <div className="text-[11px] text-[#9a968d]">Você receberá atualizações em tempo real pelo WhatsApp.</div>
                </div>
                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#c5a880] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded"
                >
                  Continuar Experiência
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
