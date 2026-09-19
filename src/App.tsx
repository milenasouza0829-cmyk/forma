import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { TextileInnovation } from './components/TextileInnovation';
import { VirtualFitGuide } from './components/VirtualFitGuide';
import { EditorialLookbook } from './components/EditorialLookbook';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';
import { ProductQuickView } from './components/ProductQuickView';
import { CartDrawer } from './components/CartDrawer';
import { ConciergeVIP } from './components/ConciergeVIP';
import { SearchModal } from './components/SearchModal';
import { PRODUCTS } from './data/products';
import { Product, Category, CartItem, ProductColor, Size } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with 1 iconic item in bag for realistic luxury e-commerce experience
    {
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0],
      selectedSize: 'P',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, color: ProductColor, size: Size, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }

      return [
        ...prev,
        {
          product,
          selectedColor: color,
          selectedSize: size,
          quantity
        }
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f2efe9] flex flex-col font-sans-clean selection:bg-[#c5a880] selection:text-black">
      {/* Luxury Sticky Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalogo');
        }}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero
          onExploreClick={() => scrollToSection('catalogo')}
          onEngineeringClick={() => scrollToSection('engenharia')}
          onConciergeClick={() => setIsConciergeOpen(true)}
        />

        {/* Product Catalog with filters */}
        <ProductGrid
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* Textile Innovation & Italian Craftsmanship */}
        <TextileInnovation />

        {/* Virtual 3D Fit Guide & Silhouette Advisor */}
        <VirtualFitGuide
          products={PRODUCTS}
          onSelectProduct={(p) => setQuickViewProduct(p)}
          onOpenConcierge={() => setIsConciergeOpen(true)}
        />

        {/* Lookbook / Editorial Campaign */}
        <EditorialLookbook onQuickView={(p) => setQuickViewProduct(p)} />

        {/* Press Quotes & VIP Membership */}
        <PressSection />
      </main>

      {/* Global Luxury Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalogo');
        }}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenSizeGuide={() => scrollToSection('provador-virtual')}
      />

      {/* Modals & Slide-overs */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, c, s, q) => handleAddToCart(p, c, s, q)}
        onOpenSizeGuide={() => {
          setQuickViewProduct(null);
          scrollToSection('provador-virtual');
        }}
        onOpenConcierge={() => {
          setQuickViewProduct(null);
          setIsConciergeOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ConciergeVIP
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />
    </div>
  );
}
