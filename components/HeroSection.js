"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero-bg">
        <Image
          src="/products/aero-shift-gold-poster.jpeg"
          alt="iBzA Aero Shift premium bottle"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="hero-line" />
            <span className="hero-tag">iBzA Universe — Est. 2024</span>
          </div>

          <h1 className="hero-title">
            Hydration<br />
            <em>Elevated</em> to<br />
            an Art Form.
          </h1>

          <p className="hero-desc">
            Precision-engineered, aesthetically flawless water bottles for those who demand the extraordinary. Every bottle tells a story of purity.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="btn btn-gold btn-lg">
              Shop Collection
            </Link>
            <Link href="/#about" className="btn btn-outline btn-lg">
              Our Story
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-num">99.99%</span>
              <span className="hero-stat-label">Purity Certified</span>
            </div>
            <div>
              <span className="hero-stat-num">3</span>
              <span className="hero-stat-label">Signature Models</span>
            </div>
            <div>
              <span className="hero-stat-num">5K+</span>
              <span className="hero-stat-label">Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <span>★ 4.9</span>
        <span>Rated</span>
      </motion.div>
    </section>
  );
}
