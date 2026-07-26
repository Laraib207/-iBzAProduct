"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';

function CheckoutContent() {
  const { cart, cartCount, cartTotal, removeFromCart, clearCart, addToCart, decrementCart } = useCart();
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  const handleCheckout = async () => {
    if (cart.length === 0) return alert('Your cart is empty.');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Could not start payment session.');
      }
    } catch (e) {
      alert(e.message || String(e));
    }
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>✦</div>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: 'var(--gold)' }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          Thank you for your order. We're preparing your iBzA Universe bottle with care. You'll receive a confirmation email shortly.
        </p>
        <Link href="/products" className="btn btn-gold btn-lg">Continue Shopping</Link>
      </div>
    );
  }

  if (canceled) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>◌</div>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>Payment Canceled</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 400, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          No worries — your cart is still saved. Head back whenever you're ready.
        </p>
        <Link href="/checkout" className="btn btn-outline-gold btn-lg">Back to Cart</Link>
      </div>
    );
  }

  const shipping = cartTotal >= 999 ? 0 : 99;
  const total = cartTotal + shipping;

  return (
    <div className="checkout-grid">
      {/* Cart items */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem' }}>Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h2>
          {cart.length > 0 && (
            <button className="btn btn-ghost btn-sm" onClick={clearCart}>
              Clear All
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛍</div>
            <h3>Your cart is empty</h3>
            <p>Add some premium bottles to get started.</p>
            <Link href="/products" className="btn btn-gold">Shop Collection</Link>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="70px"
                  />
                </div>
                <div className="cart-item-body">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')} each</p>
                  {/* Qty controls */}
                  <div className="qty-selector" style={{ marginTop: '0.6rem', padding: '0.2rem', gap: '0.6rem' }}>
                    <button
                      className="qty-btn"
                      style={{ width: 26, height: 26, fontSize: '1rem' }}
                      onClick={() => decrementCart(item.id)}
                    >−</button>
                    <span className="qty-val" style={{ fontSize: '0.85rem' }}>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      style={{ width: 26, height: 26, fontSize: '1rem' }}
                      onClick={() => addToCart(item)}
                    >+</button>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                  <span className="cart-item-total">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem' }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order summary */}
      <aside className="order-summary">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Order Summary</h2>

        <div>
          <div className="order-line">
            <span style={{ color: 'var(--muted)' }}>Subtotal ({cartCount} items)</span>
            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="order-line">
            <span style={{ color: 'var(--muted)' }}>Shipping</span>
            <span style={{ color: shipping === 0 ? 'var(--gold)' : 'var(--primary)' }}>
              {shipping === 0 ? 'Free' : `₹${shipping}`}
            </span>
          </div>
          {shipping > 0 && (
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
              Add ₹{(999 - cartTotal).toLocaleString('en-IN')} more for free shipping
            </p>
          )}
          <div className="order-line" style={{ marginTop: '0.5rem', paddingTop: '1rem' }}>
            <span className="order-total">Total</span>
            <span className="order-total-val">₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button
          className="btn btn-gold btn-lg btn-full"
          style={{ marginTop: '1.75rem' }}
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Proceed to Payment
        </button>
        <Link href="/products" className="btn btn-ghost btn-full" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
          Continue Shopping
        </Link>

        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
          {['🔒 Secure', '✓ Verified', '↩ Easy Returns'].map((b) => (
            <span key={b} style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'Poppins, sans-serif' }}>{b}</span>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      <div style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--line)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <span className="eyebrow">Checkout</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginTop: '0.4rem' }}>Your Cart</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Suspense fallback={<p style={{ color: 'var(--muted)' }}>Loading cart...</p>}>
            <CheckoutContent />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
