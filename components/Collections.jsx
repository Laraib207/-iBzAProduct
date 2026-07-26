"use client";

import Image from 'next/image';
import Link from 'next/link';
import { products } from '../lib/products';

export default function Collections() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Collections</p>
          <h2>Crafted for the Bold</h2>
          <p>Each bottle in our lineup is engineered for a different mission. Find yours.</p>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-card-image">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={280}
                  height={380}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                {p.badge && <span className="product-badge">{p.badge}</span>}
              </div>
              <div className="product-card-copy">
                <h3>{p.name}</h3>
                <p className="product-meta">{p.tagline}</p>
                <p className="product-price">₹{p.price.toLocaleString('en-IN')}</p>
                <div className="product-actions">
                  <Link href={`/products/${p.id}`} className="button button-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
