import { Product, LookbookItem } from '../types';

import heroImg from '../assets/images/luxury_fitness_hero_1789830517438.jpg';
import womanImg from '../assets/images/luxury_active_woman_1789830531228.jpg';
import manImg from '../assets/images/luxury_active_man_1789830546893.jpg';

export { heroImg, womanImg, manImg };

export const PRODUCTS: Product[] = [
  {
    id: 'macacao-sculpt-noir',
    name: 'Macacão Sculpt 4D Obsidian',
    subtitle: 'Silhueta Escultural & Compressão Gradiente com Fios de Seda',
    price: 1890,
    category: 'feminino',
    collection: 'Black Label Edição 04',
    isLimitedEdition: true,
    editionLimit: 120,
    isBestseller: true,
    rating: 4.98,
    reviewCount: 42,
    primaryImage: womanImg,
    secondaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Obsidian Noir', hex: '#111215' },
      { name: 'Champagne Taupe', hex: '#c5b8a5' },
      { name: 'Espresso Intenso', hex: '#2b211d' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    fabricName: 'AeroSilk™ SculptWeave',
    fabricComposition: '68% Poliamida Italiana 6.6 Micro-Ribbed, 22% Elastano creora® de alta densidade, 10% Fios de Seda Natural',
    origin: 'Desenvolvido nos alpes de Biella, Itália. Montagem em ateliê de alta-costura.',
    benefits: [
      'Memória elástica com suporte postural dinâmico',
      'Termorregulação biônica para treinos de alta frequência cardíaca',
      'Acabamento mate aveludado e zero transparência em agachamento profundo',
      'Zíper embutido de titânio escovado suíço Riri®'
    ],
    description: 'Concebido para quem exige a elegância da passarela na alta performance. O Macacão Sculpt 4D molda a musculatura sem restringir os movimentos, conferindo sustentação biomecânica precisa.',
    stylingTip: 'Combine com o Trench Coat Técnico de Aquecimento e sneakers minimalistas para transitar do treino ao lounge VIP.'
  },
  {
    id: 'top-corset-tech',
    name: 'Top Corset Estruturado Nero',
    subtitle: 'Sustentação Arquitetônica Sem Costura e Acabamento Seda',
    price: 890,
    category: 'feminino',
    collection: 'Atelier Core',
    isNew: true,
    rating: 4.95,
    reviewCount: 38,
    primaryImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Nero Satin', hex: '#0e0f11' },
      { name: 'Pérola Acetinada', hex: '#eae6df' },
      { name: 'Verde Eucalipto Silvestre', hex: '#2c3e35' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    fabricName: 'PureForm™ 360',
    fabricComposition: '74% Poliamida Ultrafina, 26% Lycra® Adaptiv com nanoíons de prata antiodor',
    origin: 'Tricotado em Florença, acabamento manual individual.',
    benefits: [
      'Alças ergonômicas que distribuem o peso escapular',
      'Bojo removível em espuma viscoelástica respirável',
      'Resistente a atrito com barras olímpicas e halteres pesados'
    ],
    description: 'Inspirado na alfaiataria parisiense, o Top Corset Tech oferece firmeza sem aros rígidos, através de costuras ultrassônicas que fundem as fibras perfeitamente à pele.',
    stylingTip: 'Harmoniza com a Calça Legging Cós Infinito e sobreposição de cashmere leve.'
  },
  {
    id: 'legging-cos-infinito',
    name: 'Legging Cós Infinito Monograma Ouro',
    subtitle: 'Compressão Milimétrica com Detalhes Gravados a Laser',
    price: 1190,
    category: 'feminino',
    collection: 'Black Label Edição 04',
    isBestseller: true,
    rating: 5.0,
    reviewCount: 89,
    primaryImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: womanImg,
    colors: [
      { name: 'Obsidian Noir', hex: '#111215' },
      { name: 'Cacau Imperial', hex: '#3d2b24' },
      { name: 'Azul Meia-Noite', hex: '#181f2c' }
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    fabricName: 'AeroSilk™ Compression',
    fabricComposition: '72% Poliamida Italiana, 28% Elastano creora® com proteção UV50+',
    origin: 'Manufaturado na Lombardia, Itália.',
    benefits: [
      'Cós duplo alto anatômico que nunca dobra ou desliza',
      'Tecnologia de microporos hidrofílicos que evapora o suor em segundos',
      'Placa em metal nobre banhado a ouro 18k na parte posterior'
    ],
    description: 'A joia máxima do armário fitness de luxo. Proporciona efeito tensor imediato e sensação de segunda pele incomparável com toque gelado constante.',
    stylingTip: 'Use com o Top Corset para um visual monocromático imponente.'
  },
  {
    id: 'camisa-compressao-carbon-man',
    name: 'Compression Armour Carbon',
    subtitle: 'Manga Longa Biomecânica Masculina com Fios de Grafeno',
    price: 1450,
    category: 'masculino',
    collection: 'Black Label Edição 04',
    isLimitedEdition: true,
    editionLimit: 85,
    isBestseller: true,
    rating: 4.97,
    reviewCount: 51,
    primaryImage: manImg,
    secondaryImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Carbon Black', hex: '#151619' },
      { name: 'Titânio Mudo', hex: '#40434b' },
      { name: 'Verde Tático Oliva', hex: '#2b332b' }
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    fabricName: 'GrapheneShield™ Tech',
    fabricComposition: '65% Micro-Poliamida, 25% Fios Infundidos de Grafeno Puro, 10% Elastano Ciré',
    origin: 'Engenharia têxtil desenvolvida no Japão com montagem na Itália.',
    benefits: [
      'Condutividade térmica do grafeno dissipa o calor corpóreo instantaneamente',
      'Sustentação na região do deltóide e core abdominal',
      'Fibras antibacterianas permanentes com absorção nula de odores'
    ],
    description: 'Projetada para homens que encaram treinos intensos sem abrir mão de um corte aristocrático e impecável. Texturas micro-onduladas esculpem a silhueta masculina com discrição.',
    stylingTip: 'Acompanha perfeitamente a Bermuda Modular 2 em 1 e casaco impermeável cortavento.'
  },
  {
    id: 'short-modular-tailored-man',
    name: 'Bermuda Modular 2-em-1 Titan',
    subtitle: 'Shorts de Corrida e Musculação com Alfaiataria e Bolso Oculto Magnético',
    price: 980,
    category: 'masculino',
    collection: 'Atelier Core',
    rating: 4.92,
    reviewCount: 34,
    primaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: manImg,
    colors: [
      { name: 'Grafite Fosco', hex: '#1e2025' },
      { name: 'Nero Profondo', hex: '#101114' },
      { name: 'Areia do Saara', hex: '#8a8275' }
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    fabricName: 'FlexTech™ HydroRepel',
    fabricComposition: 'Externo: 88% Poliamida reciclada ultraleve, 12% Elastano. Forro interno: 80% Fios de bambu e poliamida.',
    origin: 'Confeccionado na região de Como, Itália.',
    benefits: [
      'Compressão interna com bolso hermético para smartphone ou fones',
      'Fecho magnético silencioso Fidlock® nos bolsos laterais',
      'Secagem ultrarrápida (menos de 6 minutos)'
    ],
    description: 'A reinvenção da bermuda esportiva. Caimento estruturado de alfaiataria com elasticidade multidirecional de 360 graus.',
    stylingTip: 'Ideal para sessões de musculação pesada, treinos de velocidade e esportes com raquete.'
  },
  {
    id: 'jaqueta-trench-performance',
    name: 'Jaqueta Corta-Vento Aerodynamic',
    subtitle: 'Parka Ultraleve com Membrana Hidrofóbica e Cordões em Titânio',
    price: 2490,
    category: 'feminino',
    collection: 'Black Label Edição 04',
    isLimitedEdition: true,
    editionLimit: 60,
    rating: 5.0,
    reviewCount: 22,
    primaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Obsidian Noir', hex: '#121316' },
      { name: 'Gelo Translúcido', hex: '#d9dcde' }
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    fabricName: 'VapourWeave™ NanoAir',
    fabricComposition: '100% Micro-Ripstop de Poliamida Hidrofóbica com barreira de titânio corta-vento',
    origin: 'Milão, Itália. Peça numerada individualmente.',
    benefits: [
      'Peso pluma: apenas 118 gramas que se dobram no próprio bolso',
      'Capuz anatômico com visor integrado para corrida sob chuva',
      'Ferragens usinadas em titânio aeroespacial maciço'
    ],
    description: 'Uma escultura funcional para aquecimento e dias frios. Cria um escudo impenetrável contra rajadas de vento enquanto libera vapor quente do corpo.',
    stylingTip: 'Use aberta sobre o Macacão Sculpt ou com calça de compressão para corrida matinal.'
  },
  {
    id: 'bolsa-duffle-couro-titânio',
    name: 'Gym Holdall Duffle em Couro Bovino & Kevlar',
    subtitle: 'Mala de Academia de Alto Luxo com Compartimento Ventilado',
    price: 3650,
    category: 'acessorios',
    collection: 'Acessórios Privée',
    isLimitedEdition: true,
    editionLimit: 40,
    rating: 4.99,
    reviewCount: 19,
    primaryImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Couro Nero Flotter', hex: '#1a1a1c' },
      { name: 'Couro Cuoio Toscano', hex: '#5c3a21' }
    ],
    sizes: ['M'],
    fabricName: 'Full Grain Leather & Kevlar®',
    fabricComposition: 'Couro bovino integral encerado à mão, forro impermeável antimicrobiano e zíperes selados',
    origin: 'Curtume artesanal em Florença, Itália.',
    benefits: [
      'Compartimento isolado termicamente com ventilação de ozônio para calçados',
      'Alça de ombro ergonômica acolchoada com memory foam',
      'Bolso magnético com forro de veludo para relógios e joias'
    ],
    description: 'A mala de academia definitiva para o executivo e atleta exigente. Espaço sob medida para roupas de treino, shaker de titânio e alfaiataria reserva.',
    stylingTip: 'Personalização cortesia: gravações de iniciais em folha de ouro 24k no tag de couro.'
  },
  {
    id: 'garrafa-titanio-termica',
    name: 'Garrafa Isotérmica em Titânio Puro Grado 1',
    subtitle: '750ml com Tampa Magnética e Conservação Térmica 36 Horas',
    price: 680,
    category: 'acessorios',
    collection: 'Atelier Core',
    isBestseller: true,
    rating: 4.96,
    reviewCount: 95,
    primaryImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    colors: [
      { name: 'Titânio Fosco Jateado', hex: '#5f6368' },
      { name: 'Obsidian DLC Black', hex: '#1b1b1d' },
      { name: 'Champagne PVD', hex: '#b8a379' }
    ],
    sizes: ['M'],
    fabricName: 'Titanium Grade 1',
    fabricComposition: '100% Titânio Biomédico de parede dupla com vácuo térmico e revestimento cerâmico interno',
    origin: 'Produzido em Osaka, Japão.',
    benefits: [
      'Zero alteração de sabor na água ou eletrólitos suplementares',
      '60% mais leve que o aço inoxidável convencional',
      'Garantia vitalícia contra corrosão e vazamentos'
    ],
    description: 'Leveza incomparável e pureza cristalina. Mantém sua hidratação glacial mesmo nas sessões mais extenuantes de treinamento.',
    stylingTip: 'Encaixa com precisão milimétrica no bolso externo da Duffle Holdall.'
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Aura Matutina em Zurique',
    location: 'Santuário Privado de Treinamento, Suíça',
    image: womanImg,
    description: 'Silhueta escultural esculpida pelo Macacão Sculpt 4D em contraste com a arquitetura brutalista de mármore e concreto.',
    featuredProductId: 'macacao-sculpt-noir'
  },
  {
    id: 'look-2',
    title: 'Potência Minimalista em Mônaco',
    location: 'Rooftop Athletic Club, Monte Carlo',
    image: manImg,
    description: 'A precisão milimétrica da Compression Armour Carbon em harmonia com a brisa do Mediterrâneo.',
    featuredProductId: 'camisa-compressao-carbon-man'
  },
  {
    id: 'look-3',
    title: 'A Maestria do Pilates Contemporâneo',
    location: 'Estúdio Privée, Rue du Faubourg Saint-Honoré, Paris',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    description: 'O Top Corset Tech e a Legging Cós Infinito entregam fluidez e sofisticação em cada extensão muscular.',
    featuredProductId: 'top-corset-tech'
  },
  {
    id: 'look-4',
    title: 'Transição Urbana de Alta Performance',
    location: 'Jardins, São Paulo',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    description: 'A Jaqueta Corta-Vento Aerodynamic em sobreposição funcional: elegância irretocável do treino à reunião de negócios.',
    featuredProductId: 'jaqueta-trench-performance'
  }
];

export const BRAND_STATS = [
  { label: 'Tecelagens em Biella', value: '100%', detail: 'Fibras Italianas Certificadas' },
  { label: 'Unidades por Drop', value: 'Limitadas', detail: 'Peças Numeradas à Mão' },
  { label: 'Costuras Vulcanizadas', value: '0.2mm', detail: 'Zero Fricção na Pele' },
  { label: 'Entrega White Glove', value: '24h-48h', detail: 'Embalagem Rígida Perfumada' }
];

export const TEXTILE_TECHNOLOGIES = [
  {
    id: 'aerosilk',
    name: 'AeroSilk™ 4D',
    tagline: 'O Toque da Seda com a Potência da Fibra Elastomérica',
    description: 'Desenvolvido com microfilamentos de poliamida italiana tecidos em teares circulares de 44 agulhas por polegada. O resultado é uma compressão graduada que ativa o fluxo venoso sem apertar ou vincar a pele.',
    composition: '68% Poliamida 6.6 Microfina, 22% Elastano creora® black, 10% Seda Mulberry',
    specs: [
      { name: 'Opacidade em Agachamento', score: '100% Opaco' },
      { name: 'Retenção de Forma', score: 'Grau 5 (Inalterável)' },
      { name: 'Secagem', score: '3.4x mais veloz que algodão pima' },
      { name: 'Toque Térmico', score: 'Efeito Ice-Touch Contínuo' }
    ]
  },
  {
    id: 'grapheneshield',
    name: 'GrapheneShield™ Tech',
    tagline: 'Nanoengenharia Térmica para Esforço Máximo',
    description: 'Nanopartículas de grafeno puro incorporadas diretamente ao núcleo polimérico. Essa estrutura molecular atua como um radiador microscópico, dissipando calor excessivo e eliminando 99,9% das bactérias causadoras de odor.',
    composition: 'Fios híbridos condutores com nanopartículas de carbono e titânio ionizado',
    specs: [
      { name: 'Condutividade Térmica', score: 'Acelera a dissipação em 42%' },
      { name: 'Ação Antimicrobiana', score: 'Permanente (não sai na lavagem)' },
      { name: 'Resistência ao Rasgo', score: '300 N / Força Balística' },
      { name: 'Proteção Solar', score: 'UPF 50+ Real' }
    ]
  },
  {
    id: 'sculptweave',
    name: 'SculptWeave 360',
    tagline: 'Sustentação Tridimensional e Memória Muscular',
    description: 'Arquitetura têxtil com diferentes tensões de elasticidade em zonas estratégicas: reforço lombar, elevação glútea e contenção abdominal suave que melhora a consciência corporal e propriocepção durante o exercício.',
    composition: 'Micro-ribbing anatômico em poliamida texturizada a ar com memória elástica',
    specs: [
      { name: 'Sustentação Escapular', score: 'Apoio biomecânico calibrado' },
      { name: 'Elasticidade 4D', score: 'Recuperação de 98% pós-tensão' },
      { name: 'Espessura', score: '220 g/m² - Equilíbrio perfeito' },
      { name: 'Origem', score: 'Biella & Como, Itália' }
    ]
  }
];

export const PRESS_QUOTES = [
  {
    quote: 'A Atelier Forma redefiniu o conceito de athleisure no Brasil e no mundo. Não é apenas roupa de academia, é alta-costura esculpida para o corpo em movimento.',
    publication: 'VOGUE BRASIL',
    author: 'Diretoria de Moda & Lifestyle'
  },
  {
    quote: 'A fusão inédita de microfibras italianas com fios de grafeno cria uma armadura de alfaiataria silenciosa para homens que treinam no limite.',
    publication: 'GQ EDITION',
    author: 'Especial Homem Contemporâneo'
  },
  {
    quote: 'O que o Hermès é para as selas e o Loro Piana é para o cashmere, a Atelier Forma se tornou para o universo fitness de luxo.',
    publication: 'ROBB REPORT LUXURY',
    author: 'The Best of High Performance'
  }
];
