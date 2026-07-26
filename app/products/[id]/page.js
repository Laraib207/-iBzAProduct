"use client";

import { use, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../components/CartContext';
import { productMap, products } from '../../../lib/products';

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const product = productMap[id] || productMap['aero-shift'];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  // Related products (others)
  const related = products.filter((p) => p.id !== product.id);

  return (
    <main style={{ paddingTop: '5rem' }}>
      <div className="section">
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '2.5rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            <Link href="/" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>Home</Link>
            <span>›</span>
            <Link href="/products" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>Products</Link>
            <span>›</span>
            <span style={{ color: 'var(--primary)' }}>{product.name}</span>
          </div>

          <div className="product-detail-grid">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bottle-display"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'contain', padding: '2rem' }}
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              {product.badge && (
                <span className="p-card-badge" style={{ top: '1.5rem', left: '1.5rem', fontSize: '0.72rem', padding: '0.3rem 0.85rem' }}>
                  {product.badge}
                </span>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.aside
              className="product-console"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>{product.tagline}</span>
              <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>{product.name}</h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.75rem 0' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{'★'.repeat(Math.floor(product.rating))}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{product.rating} out of 5</span>
              </div>

              {/* Purity */}
              <span className="purity-badge">
                ⬡ Verified Purity: {product.purity}
              </span>

              {/* Price */}
              <div style={{ margin: '1.25rem 0', paddingBottom: '1.25rem', borderBottom: '1px solid var(--line)' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>incl. of all taxes</span>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {product.description}
              </p>

              {/* Features */}
              <ul className="features-list">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              {/* Quantity */}
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                  Quantity
                </p>
                <div className="qty-selector">
                  <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                  <span className="qty-val">{qty}</span>
                  <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem' }}>
                <button
                  className={`btn btn-lg ${added ? 'btn-outline-gold' : 'btn-gold'}`}
                  style={{ flex: 1 }}
                  onClick={handleAdd}
                >
                  {added ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <Link href="/checkout" className="btn btn-ghost btn-lg">
                  Buy Now
                </Link>
              </div>

              {/* Mission */}
              <p style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-3)', borderRadius: '12px', color: 'var(--gold)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.9rem', borderLeft: '3px solid var(--gold)' }}>
                "{product.mission}"
              </p>

              {/* SKU */}
              <p style={{ marginTop: '1rem', fontSize: '0.72rem', color: 'var(--faint)', fontFamily: 'Poppins, sans-serif' }}>
                SKU: {product.sku}
              </p>
            </motion.aside>
          </div>

          {/* Related products */}
          <div style={{ marginTop: '5rem' }}>
            <div className="section-header">
              <span className="eyebrow">You May Also Like</span>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>More from the Collection</h2>
            </div>
            <div className="products-grid" style={{ marginTop: '2rem' }}>
              {related.map((p) => (
                <article key={p.id} className="p-card">
                  <div className="p-card-img">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                    {p.badge && <span className="p-card-badge">{p.badge}</span>}
                  </div>
                  <div className="p-card-body">
                    <h3 className="p-card-name">{p.name}</h3>
                    <p className="p-card-tag">{p.tagline}</p>
                    <div className="p-card-footer">
                      <span className="p-card-price">₹{p.price.toLocaleString('en-IN')}</span>
                      <Link href={`/products/${p.id}`} className="btn btn-gold btn-sm">View</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
