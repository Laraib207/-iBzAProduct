"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';
import { products } from '../lib/products';

function StarRating({ rating }) {
  return (
    <div className="p-card-rating">
      <span className="stars">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
      <span className="rating-num">{rating}</span>
    </div>
  );
}

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Featured Collection</span>
          <h2 className="section-title">Crafted for the Bold</h2>
          <div className="divider center" />
          <p className="section-sub">
            Each bottle in our lineup is engineered with a different mission — find the one that matches yours.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              className="p-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="p-card-img">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                {p.badge && <span className="p-card-badge">{p.badge}</span>}
                <div className="p-card-quick">
                  <button
                    className="btn btn-gold btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="p-card-body">
                <StarRating rating={p.rating} />
                <h3 className="p-card-name">{p.name}</h3>
                <p className="p-card-tag">{p.tagline}</p>
                <div className="p-card-footer">
                  <span className="p-card-price">₹{p.price.toLocaleString('en-IN')}</span>
                  <Link href={`/products/${p.id}`} className="p-card-add" aria-label={`View ${p.name}`}>
                    →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/products" className="btn btn-outline-gold btn-lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
