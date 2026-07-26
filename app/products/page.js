"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';
import { products } from '../../lib/products';

export default function ProductsPage() {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (p) => {
    addToCart(p);
    setAdded((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [p.id]: false })), 1400);
  };

  const inCart = (id) => cart.some((i) => i.id === id);

  return (
    <main style={{ paddingTop: '5rem' }}>
      {/* Page header */}
      <div style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--line)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="eyebrow">Our Collection</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '0.5rem' }}>
            Every Bottle, a Statement
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', maxWidth: 520, lineHeight: 1.75 }}>
            Three signature models. One philosophy: water should be experienced, not just consumed.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                className="p-card"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {/* Image */}
                <div className="p-card-img">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {p.badge && <span className="p-card-badge">{p.badge}</span>}
                </div>

                {/* Body */}
                <div className="p-card-body">
                  <div className="p-card-rating">
                    <span className="stars">{'★'.repeat(Math.floor(p.rating))}</span>
                    <span className="rating-num">{p.rating} · {inCart(p.id) && <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>In Cart</span>}</span>
                  </div>

                  <h2 className="p-card-name">{p.name}</h2>
                  <p className="p-card-tag">{p.tagline}</p>

                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.65, marginTop: '0.75rem' }}>
                    {p.description}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className="tag">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-card-footer">
                    <span className="p-card-price">₹{p.price.toLocaleString('en-IN')}</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className={`btn btn-sm ${added[p.id] ? 'btn-outline-gold' : 'btn-gold'}`}
                        onClick={() => handleAdd(p)}
                      >
                        {added[p.id] ? '✓ Added' : 'Add to Cart'}
                      </button>
                      <Link href={`/products/${p.id}`} className="btn btn-ghost btn-sm">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
