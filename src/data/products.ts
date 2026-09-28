export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  price: number;
  priceFormatted: string;
  originalPrice?: number;
  tag?: string;
  images: string[];
  description: string;
  details: string;
  careInstructions: string;
  colors: string[];
  rating: number;
  reviewCount: number;
  isNewArrival?: boolean;
  isCuratedFavorite?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
  gridSpan: 'lg' | 'md' | 'sm';
}

export const CATEGORIES: Category[] = [
  {
    id: 'handbags',
    name: 'Handbags',
    count: 14,
    image: '/bag (1).jpg',
    gridSpan: 'lg'
  },
  {
    id: 'tote-bags',
    name: 'Tote Bags',
    count: 9,
    image: '/bag (2).jpg',
    gridSpan: 'lg'
  },
  {
    id: 'phone-cases',
    name: 'Phone Cases',
    count: 18,
    image: '/phone-case.jpg',
    gridSpan: 'md'
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    count: 26,
    image: '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-1.jpg',
    gridSpan: 'md'
  },
  {
    id: 'hair-accessories',
    name: 'Hair Accessories',
    count: 15,
    image: '/images/intro_editorial.png',
    gridSpan: 'md'
  },
  {
    id: 'makeup-organizers',
    name: 'Makeup Organizers',
    count: 11,
    image: '/bag (5).jpg',
    gridSpan: 'sm'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'pc-001',
    name: 'Elysian Caramel Leather Shoulder Bag',
    category: 'handbags',
    categoryName: 'Handbags',
    price: 4850,
    priceFormatted: '৳ 4,850',
    originalPrice: 5500,
    tag: 'BESTSELLER',
    images: [
      '/bag (1).jpg',
      '/bag (2).jpg',
      '/bag (3).jpg'
    ],
    description: 'Crafted from buttery soft calfskin leather with a signature curved silhouette and warm gold-tone hardware. The Elysian shoulder bag is engineered to effortlessly hold daily luxury essentials while bestowing timeless elegance.',
    details: 'Dimensions: 26cm W x 16cm H x 7cm D; Magnetic flap closure; Inner zipped pocket & slip compartment; Adjustable leather strap.',
    careInstructions: 'Wipe gently with a soft dry cloth. Store in the original Pocket Candy cotton dust bag when not in use.',
    colors: ['Caramel Brown', 'Warm Beige', 'Deep Espresso'],
    rating: 4.9,
    reviewCount: 38,
    isCuratedFavorite: true,
    isNewArrival: true
  },
  {
    id: 'pc-002',
    name: 'Artisan Structured Leather Tote Bag',
    category: 'tote-bags',
    categoryName: 'Tote Bags',
    price: 5200,
    priceFormatted: '৳ 5,200',
    tag: 'NEW',
    images: [
      '/bag (2).jpg',
      '/bag (4).jpg',
      '/bag (5).jpg'
    ],
    description: 'A spacious luxury tote combining organic woven linen canvas with hand-stitched deep olive brown leather trim. Designed for effortless transitions from daytime meetings to weekend getaways.',
    details: 'Dimensions: 38cm W x 30cm H x 14cm D; Reinforced leather base; Padded 13-inch laptop sleeve; Magnetic brass clasp.',
    careInstructions: 'Spot clean linen with mild soap. Avoid submerging leather handles in water.',
    colors: ['Natural Canvas / Olive', 'Espresso Linen'],
    rating: 5.0,
    reviewCount: 24,
    isCuratedFavorite: true,
    isNewArrival: true
  },
  {
    id: 'pc-003',
    name: 'Monogrammed Leather iPhone Chain Case',
    category: 'phone-cases',
    categoryName: 'Phone Cases',
    price: 2450,
    priceFormatted: '৳ 2,450',
    originalPrice: 2800,
    tag: 'BESTSELLER',
    images: [
      '/phone-case.jpg',
      '/images/cat_phone_cases.png'
    ],
    description: 'A luxury pebbled leather phone case with an integrated rear card slot and detachable 18K gold-plated crossbody chain strap. Keeps your device safe while serving as a chic hands-free accessory.',
    details: 'Fits iPhone 13/14/15/16 series; Raised camera lens protection bezel; Soft microfiber internal lining; 120cm detachable gold chain.',
    careInstructions: 'Keep dry and avoid prolonged contact with oil-based lotions.',
    colors: ['Deep Olive Brown', 'Warm Cream', 'Espresso'],
    rating: 4.8,
    reviewCount: 52,
    isCuratedFavorite: true
  },
  {
    id: 'pc-004',
    name: 'Aurelia 18K Gold Pearl Drop Earrings',
    category: 'jewelry',
    categoryName: 'Jewelry',
    price: 3100,
    priceFormatted: '৳ 3,100',
    tag: 'CURATED',
    images: [
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-1.jpg',
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-2.jpg',
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-3.jpg'
    ],
    description: 'Understated luxury drop earrings with genuine freshwater pearls suspended from organic 18k gold-plated huggie hoops. Light on the ear with maximum visual charm.',
    details: 'Hypoallergenic titanium post; 18k gold vermeil over sterling silver; Pearl size ~ 12mm; Nickel-free & lead-free.',
    careInstructions: 'Avoid direct contact with perfumes, sprays, and water. Store in anti-tarnish pouch.',
    colors: ['Gold / Freshwater Pearl'],
    rating: 4.9,
    reviewCount: 41,
    isCuratedFavorite: true,
    isNewArrival: true
  },
  {
    id: 'pc-005',
    name: 'Celeste Vintage Gold Statement Earrings',
    category: 'jewelry',
    categoryName: 'Jewelry',
    price: 2900,
    priceFormatted: '৳ 2,900',
    tag: 'NEW',
    images: [
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-3.jpg',
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-4.jpg',
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-5.jpg'
    ],
    description: 'An architectural open statement piece featuring fluid organic curves. Hand-polished to a warm luster that complements both tailored blazers and evening knitwear.',
    details: 'Adjustable fit; Heavy 18k gold vermeil plating; Inner diameter: 5.8cm; Weight: 28g.',
    careInstructions: 'Wipe with jewelry polish cloth after wearing.',
    colors: ['Warm Gold'],
    rating: 4.8,
    reviewCount: 19,
    isCuratedFavorite: true,
    isNewArrival: true
  },
  {
    id: 'pc-006',
    name: 'Ophelia Sculptural Gold Hoops',
    category: 'jewelry',
    categoryName: 'Jewelry',
    price: 2650,
    priceFormatted: '৳ 2,650',
    tag: 'POPULAR',
    images: [
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-5.jpg',
      '/𝗲𝗮𝗿𝗿𝗶𝗻𝗴𝘀-6.jpg'
    ],
    description: 'Sculptural organic gold hoops designed with a hollow interior for light comfort. Beautifully textured surface reflects soft warm studio light.',
    details: '18k gold vermeil over brass; Hypoallergenic post; Diameter: 3.2cm.',
    careInstructions: 'Store in moisture-free pouch provided.',
    colors: ['Deep Gold'],
    rating: 4.9,
    reviewCount: 33,
    isCuratedFavorite: true
  },
  {
    id: 'pc-007',
    name: 'Artisan Soft Leather Crossbody Pouch',
    category: 'handbags',
    categoryName: 'Handbags',
    price: 3850,
    priceFormatted: '৳ 3,850',
    originalPrice: 4200,
    tag: 'ESSENTIAL',
    images: [
      '/bag (3).jpg',
      '/bag (4).jpg'
    ],
    description: 'Handcrafted from soft full-grain leather with a durable gold zipper. Keeps your phone, cards, and lip products secure.',
    details: 'Dimensions: 22cm x 14cm; Soft fabric lining; Inner slip pocket.',
    careInstructions: 'Wipe with soft leather conditioner.',
    colors: ['Espresso Brown', 'Caramel'],
    rating: 4.7,
    reviewCount: 29,
    isCuratedFavorite: false,
    isNewArrival: true
  },
  {
    id: 'pc-008',
    name: 'Quilted Vanity Cosmetic Organizer Bag',
    category: 'makeup-organizers',
    categoryName: 'Makeup Organizers',
    price: 3400,
    priceFormatted: '৳ 3,400',
    tag: 'NEW',
    images: [
      '/bag (5).jpg',
      '/bag (1).jpg'
    ],
    description: 'A luxurious structured vanity case featuring rich plush quilting, water-resistant interior lining, custom gold zipper pulls, and brush elastic loops.',
    details: 'Dimensions: 24cm W x 18cm H x 12cm D; Removable inner divider wall; 5 brush slots.',
    careInstructions: 'Wipe interior lining clean with moist cloth.',
    colors: ['Espresso Velvet', 'Cream Satin'],
    rating: 5.0,
    reviewCount: 16,
    isCuratedFavorite: true,
    isNewArrival: true
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Nusrat Jahan',
    location: 'Dhaka, BD',
    rating: 5,
    date: 'September 2026',
    productName: 'Elysian Caramel Leather Shoulder Bag',
    comment: 'The quality surpassed all my expectations! The leather feels insanely soft and the deep olive-brown color is so rich. It elevates every single outfit.'
  },
  {
    id: 'rev-2',
    author: 'Tahmina Anjum',
    location: 'Chittagong, BD',
    rating: 5,
    date: 'September 2026',
    productName: 'Aurelia 18K Gold Pearl Drop Earrings',
    comment: 'The overall packaging and presentation felt like unboxing a high-end luxury brand from Paris. Pocket Candy is truly unmatched in BD for curated fashion accessories!'
  },
  {
    id: 'rev-3',
    author: 'Samira Rahman',
    location: 'Sylhet, BD',
    rating: 5,
    date: 'August 2026',
    productName: 'Monogrammed Leather iPhone Chain Case',
    comment: 'I get asked where I got this phone case everywhere I go! The gold chain is sturdy and chic. Super fast delivery too.'
  }
];
