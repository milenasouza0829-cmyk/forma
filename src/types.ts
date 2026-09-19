export type Category = 'todos' | 'feminino' | 'masculino' | 'black-label' | 'acessorios';

export type Size = 'PP' | 'P' | 'M' | 'G' | 'GG';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: 'feminino' | 'masculino' | 'acessorios';
  collection: string; // e.g. "Black Label Edição 04", "Atelier Core", "AeroSilk 2026"
  isLimitedEdition?: boolean;
  editionLimit?: number; // e.g. 150 peças
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewCount: number;
  primaryImage: string;
  secondaryImage: string;
  colors: ProductColor[];
  sizes: Size[];
  fabricName: string;
  fabricComposition: string;
  origin: string; // e.g. "Tecido fiado em Biella, Itália. Alfaiataria artesanal."
  benefits: string[];
  description: string;
  stylingTip: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: Size;
  quantity: number;
}

export interface LookbookItem {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  featuredProductId: string;
}
