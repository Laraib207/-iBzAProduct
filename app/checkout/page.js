"use client";

import Link from 'next/link';
import { useCart } from '../../components/CartContext';

export default function CheckoutPage() {
  const { cart, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  return (
    <main className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Checkout</p>
          <h2>Your cart</h2>
          <p>Review items, adjust quantities, and proceed to purchase (stub).</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
          <div>
            {cart.length === 0 ? (
              <div>
                <p>Your cart is empty.</p>
                <Link href="/products" className="button button-primary">Shop products</Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: 12, border: '1px solid var(--line)', borderRadius: 12, marginBottom: 12 }}>
                    <div>
                      <strong>{item.name}</strong>
                      <div style={{ color: 'var(--muted)' }}>₹{(item.price || 0).toLocaleString('en-IN')} × {item.quantity}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <button className="button button-secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="product-console">
            <h3>Order summary</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Items</span>
                <strong>{cartCount}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span>Total</span>
                <strong>₹{(cartTotal || 0).toLocaleString('en-IN')}</strong>
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <button
                className="button button-primary"
                onClick={async () => {
                  if (cart.length === 0) return alert('Cart is empty');
                  try {
                    const res = await fetch('/api/create-checkout-session', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ items: cart })
                    });
                    const data = await res.json();
                    if (data.url) window.location.href = data.url;
                    else alert(data.error || 'Failed to create session');
                  } catch (e) {
                    alert(e.message || String(e));
                  }
                }}
              >
                Continue to payment
              </button>
              <button className="button button-secondary" style={{ marginLeft: 10 }} onClick={() => clearCart()}>Clear cart</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
