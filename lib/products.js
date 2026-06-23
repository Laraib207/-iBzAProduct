export const products = [
  {
    id: 'aero-shift',
    name: 'Aero Shift',
    tagline: 'The Source of Purity',
    price: 1299,
    rating: 4.9,
    badge: 'Best Seller',
    color: 'gold',
    image: '/products/aero-shift-gold-poster.jpeg',
    purity: '99.99%',
    description: 'Purified beyond ordinary. Every drop. Every time. iBzA Purity. Pure clarity.',
    features: ['7-stage purification', 'Mineral balanced', 'pH optimized', 'Flow verified'],
    mission: 'Hydration for a higher state of play.',
    sku: 'IBZ-AERO-GOLD-001'
  },
  {
    id: 'apex-guard',
    name: 'Apex Guard',
    tagline: 'Engineered Beyond Limits',
    price: 1499,
    rating: 4.8,
    badge: 'Premium Build',
    color: 'amber',
    image: '/products/aero-shift-poster.jpeg',
    purity: '97.8%',
    description: 'Aero-grade alloy, thermal shield, impact core, and PureLock seal for mission-critical hydration.',
    features: ['Impact core', 'Thermal mastery', 'PureLock seal', 'Blueprint durability'],
    mission: 'Precision engineered for endurance.',
    sku: 'IBZ-APEX-AMBER-002'
  },
  {
    id: 'volt-surge',
    name: 'Volt Surge',
    tagline: 'Fast. Focused. Fearless.',
    price: 1199,
    rating: 4.7,
    badge: 'Energy Edition',
    color: 'red',
    image: '/products/aero-shift-red-poster.jpeg',
    purity: '98.7%',
    description: 'Built for every challenge, every victory, and every move that demands clean power.',
    features: ['Quick-sip cap', 'Lightweight shell', 'Grip texture', 'City-ready design'],
    mission: 'Power your move.',
    sku: 'IBZ-VOLT-RED-003'
  }
];

export const productMap = Object.fromEntries(products.map((p) => [p.id, p]));
