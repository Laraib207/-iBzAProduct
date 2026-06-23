"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';
import { products } from '../../lib/products';

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <main className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>Our Product Collection</h2>
          <p>Click a product to view the 3D-style loop and purchase details.</p>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <article key={p.id} className="product-card">
              <div style={{ display: 'flex', gap: 18 }}>
                <Image src={p.image} alt={p.name} width={160} height={260} />
                <div className="product-card-copy">
                  <h3>{p.name}</h3>
                  <p className="product-meta">₹{p.price.toLocaleString('en-IN')}</p>
                  <div className="product-actions" style={{ marginTop: 12 }}>
                    <Link href={`/products/${p.id}`} className="button button-primary">View 3D</Link>
                    <button className="button button-secondary" onClick={() => addToCart(p)}>Buy</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
