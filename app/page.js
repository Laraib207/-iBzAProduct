'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 'aero-shift',
    name: 'Aero Shift',
    tagline: 'The Source of Purity',
    price: 1299,
    rating: 4.9,
    badge: 'Best Seller',
    color: 'blue',
    image: '/products/aero-shift-gold-poster.jpeg',
    purity: '99.99%',
    description: 'Purified beyond ordinary. Every drop. Every time. iBzA Purity. Pure clarity.',
    features: ['7-stage purification', 'Mineral balanced', 'pH optimized', 'Flow verified'],
    mission: 'Hydration for a higher state of play.'
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
    mission: 'Precision engineered for endurance.'
  },
  {
    id: 'volt-surge',
    name: 'Volt Surge',
    tagline: 'Fast. Focused. Fearless.',
    price: 1199,
    rating: 4.7,
    badge: 'Energy Edition',
    color: 'volt',
    image: '/products/aero-shift-red-poster.jpeg',
    purity: '98.7%',
    description: 'Built for every challenge, every victory, and every move that demands clean power.',
    features: ['Quick-sip cap', 'Lightweight shell', 'Grip texture', 'City-ready design'],
    mission: 'Power your move.'
  },
  {
    id: 'momentum-flow',
    name: 'Momentum Flow',
    tagline: 'Clear Mind. Stronger You.',
    price: 1099,
    rating: 4.8,
    badge: 'Calm Focus',
    color: 'teal',
    image: '/products/aero-shift-gold-poster.jpeg',
    purity: '99.2%',
    description: 'Designed for calm, clarity, and long sessions where focus matters most.',
    features: ['Leak-proof seal', 'Calm grip finish', 'Balanced minerals', 'Daily carry form'],
    mission: 'Clarity fuels everything.'
  }
];

const brandPages = [
  {
    title: 'Brand Story',
    text: 'iBzA is not just a bottle. It is a symbol of clarity, discipline, and premium performance for people who move with purpose.'
  },
  {
    title: 'Technology',
    text: 'Every bottle is inspired by aerospace-grade thinking: purity, flow, durability, and a future-ready design language.'
  },
  {
    title: 'Quality Promise',
    text: 'From flow verification to mineral balance, iBzA makes water feel tested, trusted, and intentionally crafted.'
  },
  {
    title: 'Community',
    text: 'A part of the @iBzA Universe: hydration, identity, performance, and digital culture in one powerful ecosystem.'
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Aero-grade hydration • Part of @iBzA Universe</p>
              <h1>Pure water. Powerful identity. Future-ready bottle.</h1>
              <p className="hero-text">
                A premium 3D e-commerce experience for the iBzA water bottle collection — built for purity, performance,
                style, and everyday mission focus.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">Shop bottles</a>
                <a className="button button-secondary" href="#brand">Explore brand</a>
              </div>

              <div className="trust-row" aria-label="Product trust signals">
                <span>99.99% purity verified</span>
                <span>7-stage purification</span>
                <span>Premium build</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-orbit orbit-one" />
              <div className="floating-orbit orbit-two" />
              <div className="bottle-stage">
                <div className="bottle-cap" />
                <div className="bottle-neck" />
                <div className="bottle-body">
                  <div className="bottle-label">
                    <Image src="/logo.svg" alt="" width={42} height={42} />
                    <strong>{selectedProduct.name}</strong>
                    <span>{selectedProduct.tagline}</span>
                  </div>
                  <div className="bottle-shine" />
                </div>
                <div className="bottle-base" />
              </div>
              <div className="hero-metric metric-one">
                <strong>{selectedProduct.purity}</strong>
                <span>Purity Verified</span>
              </div>
              <div className="hero-metric metric-two">
                <strong>{selectedProduct.rating}</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Shop the collection</p>
              <h2>Choose your iBzA mission bottle.</h2>
              <p>Each product is designed as a premium hydration system with brand power, visual identity, and everyday utility.</p>
            </div>

            <div className="product-layout">
              <div className="product-grid">
                {products.map((product) => (
                  <article key={product.id} className={`product-card ${selectedProduct.id === product.id ? 'selected' : ''}`}>
                    <div className={`mini-bottle ${product.color}`}>
                      <span className="mini-cap" />
                      <span className="mini-label">{product.name}</span>
                    </div>
                    <div className="product-card-copy">
                      <span className="product-badge">{product.badge}</span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="product-meta">
                        <span>₹{product.price.toLocaleString('en-IN')}</span>
                        <span>★ {product.rating}</span>
                      </div>
                      <div className="product-actions">
                        <button type="button" onClick={() => setSelectedProduct(product)}>
                          Preview
                        </button>
                        <button type="button" className="primary" onClick={() => addToCart(product)}>
                          Add item
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="product-console" id="cart">
                <p className="eyebrow">Live product console</p>
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.mission}</p>
                <div className="console-stats">
                  <div>
                    <strong>{selectedProduct.purity}</strong>
                    <span>Purity</span>
                  </div>
                  <div>
                    <strong>{selectedProduct.features.length}</strong>
                    <span>Features</span>
                  </div>
                  <div>
                    <strong>₹{selectedProduct.price.toLocaleString('en-IN')}</strong>
                    <span>Price</span>
                  </div>
                </div>
                <ul>
                  {selectedProduct.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button type="button" className="button button-primary full" onClick={() => addToCart(selectedProduct)}>
                  Add to cart
                </button>

                <div className="cart-summary">
                  <h4>Cart</h4>
                  {cart.length === 0 ? (
                    <p>Your cart is empty. Add a bottle to begin.</p>
                  ) : (
                    cart.map((item) => (
                      <div className="cart-line" key={item.id}>
                        <span>{item.name}</span>
                        <strong>× {item.quantity}</strong>
                      </div>
                    ))
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section why-section" id="why">
          <div className="container why-grid">
            <div>
              <p className="eyebrow">Why it is important</p>
              <h2>Hydration is not basic. It is part of your identity.</h2>
              <p>
                A water bottle is used every day, carried everywhere, seen by everyone, and connected to health,
                productivity, sport, work, travel, and personal style. iBzA turns that daily object into a premium brand
                experience.
              </p>
            </div>
            <div className="importance-cards">
              <article>
                <strong>Health</strong>
                <span>Encourages clean hydration habits throughout the day.</span>
              </article>
              <article>
                <strong>Identity</strong>
                <span>Makes your daily carry feel premium, focused, and recognizable.</span>
              </article>
              <article>
                <strong>Sustainability</strong>
                <span>Reusable design helps reduce single-use plastic dependence.</span>
              </article>
              <article>
                <strong>Performance</strong>
                <span>Designed for work, gym, travel, gaming, and everyday missions.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section advantages" id="advantages">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Product advantages</p>
              <h2>Why iBzA feels like an amazing brand.</h2>
              <p>Premium visuals, strong storytelling, verified quality, and a product system that can become a lifestyle.</p>
            </div>

            <div className="advantage-grid">
              <article>
                <span>01</span>
                <h3>Purity-first design</h3>
                <p>Clear messaging around purification, mineral balance, and flow verification.</p>
              </article>
              <article>
                <span>02</span>
                <h3>3D product presence</h3>
                <p>A future-ready bottle visual makes the product feel premium before the first purchase.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Strong brand universe</h3>
                <p>iBzA can expand into bottles, apparel, accessories, digital products, and community drops.</p>
              </article>
              <article>
                <span>04</span>
                <h3>E-commerce ready</h3>
                <p>Product cards, cart interaction, pre-order CTA, and brand pages are ready to scale.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section brand-section" id="brand">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Brand pages</p>
                <h2>Build the @iBzA Universe around the bottle.</h2>
              </div>
              <p>These pages can become separate routes later: /brand, /technology, /quality, /community.</p>
            </div>

            <div className="brand-grid">
              {brandPages.map((page) => (
                <article className="brand-card" key={page.title}>
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                  <a href="#contact">Start with this page →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section launch-section">
          <div className="container launch-panel">
            <div>
              <p className="eyebrow">Launch feature</p>
              <h2>Drop system for limited iBzA editions.</h2>
              <p>
                Add limited colorways, founder editions, athlete bundles, corporate gifting, and seasonal drops to create
                urgency and brand demand.
              </p>
            </div>
            <div className="drop-card">
              <span>Next drop</span>
              <strong>Aero Shift Blue</strong>
              <p>500 bottles • Verified purity • Collector packaging</p>
              <a href="#products" className="button button-secondary">View collection</a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Pre-order / brand partnership</p>
              <h2>Bring iBzA hydration into the real world.</h2>
              <p>Use this section for pre-orders, dealer inquiries, bulk orders, or brand collaboration requests.</p>
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Interest</span>
                <select>
                  <option>Pre-order bottle</option>
                  <option>Bulk order</option>
                  <option>Brand partnership</option>
                  <option>Dealer / retail</option>
                </select>
              </label>
              <button className="button button-primary" type="submit">Send request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand" href="#top">
              <Image src="/logo.svg" alt="iBzA official logo" width={38} height={38} />
              <span>iBzA<small>@iBzA Universe</small></span>
            </a>
            <p>Premium hydration products, brand identity, and future-ready e-commerce experiences.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#products">Products</a>
            <a href="#why">Why Important</a>
            <a href="#brand">Brand Pages</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Brand</h3>
            <a href="#advantages">Advantages</a>
            <a href="#products">Shop</a>
            <a href="#contact">Pre-order</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} iBzA. Part of @iBzA Universe.</p>
      </footer>
    </div>
  );
}
