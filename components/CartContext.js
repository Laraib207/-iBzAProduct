"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Hydrate from localStorage client-side only (avoids SSR mismatch)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('ibza_cart');
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ibza_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((p) => p.id === product.id);
      if (existing) {
        return current.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const decrementCart = (id) => {
    setCart((current) => {
      const item = current.find((p) => p.id === id);
      if (!item) return current;
      if (item.quantity <= 1) return current.filter((p) => p.id !== id);
      return current.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, i) => s + (i.quantity || 0), 0);
  const cartTotal = cart.reduce((s, i) => s + (i.quantity || 0) * (i.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, decrementCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export default CartContext;
