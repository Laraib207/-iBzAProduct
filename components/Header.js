"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const { cartCount } = useCart();

  useEffect(() => {
    const savedTheme = localStorage.getItem('ibza_theme') || 'dark';
    setTheme(savedTheme);
    document.body.dataset.theme = savedTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'bright' : 'dark';
    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;
    localStorage.setItem('ibza_theme', nextTheme);
  };

  return (
    <header className="site-header">
      <nav className="nav container">
        <Link className="brand" href="/" aria-label="iBzA home">
          <Image src="/logo.svg" alt="iBzA official logo" width={44} height={44} priority />
          <span>
            iBzA
            <small>@iBzA Universe</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${mobileOpen ? 'is-open' : ''}`}>
          <Link href="/products">Products</Link>
          <Link href="/">Home</Link>
          <Link href="/#brand">Brand</Link>
          <Link href="/checkout">Checkout</Link>
        </div>

        <Link className="cart-pill" href="/checkout">
          Cart <strong>{cartCount}</strong>
        </Link>

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'bright' : 'dark'} mode`}
          aria-pressed={theme === 'bright'}
          onClick={toggleTheme}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
          </span>
          <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Bright'}</span>
        </button>
      </nav>
    </header>
  );
}
