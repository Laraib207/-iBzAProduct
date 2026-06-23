"use client";

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../components/CartContext';
import { productMap } from '../../../lib/products';

function RotatingBottle({ src, alt }) {
  return (
    <div className="bottle-3d-stage">
      <div className="bottle-3d">
        <model-viewer src={src.replace('.jpeg', '.glb').replace('.jpg', '.glb')} alt={alt} ar ios-src={src.replace('.jpeg', '.usdz')} exposure="1" camera-controls touch-action="pan-y" style={{ width: '100%', height: '100%' }}>
          <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 720px) 320px, 480px" />
        </model-viewer>
      </div>
    </div>
  );
}

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const product = productMap[id] || productMap['aero-shift'];
  const { addToCart } = useCart();

  return (
    <main className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 420px', gap: 28 }}>
          <div>
            <h2>{product.name}</h2>
            <p className="eyebrow">Purity • {product.purity}</p>
            <p style={{ color: 'var(--muted)', marginTop: 12 }}>A premium loop-style presentation that simulates a 3D rotating product visual. The image gently rotates in a continuous loop for an immersive product showcase.</p>

            <div style={{ marginTop: 28 }}>
              <RotatingBottle src={product.image} alt={product.name} />
            </div>
          </div>

          <aside className="product-console">
            <h3>{product.name}</h3>
            <p style={{ color: 'var(--muted)' }}>Price: ₹{product.price.toLocaleString('en-IN')}</p>
            <p style={{ marginTop: 12 }}>Verified purity: <strong style={{ color: 'var(--cyan)' }}>{product.purity}</strong></p>
            <div style={{ marginTop: 20 }}>
              <button className="button button-primary" onClick={() => addToCart(product)}>Add to cart</button>
              <Link href="/products" className="button button-secondary" style={{ marginLeft: 12 }}>Back to products</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
