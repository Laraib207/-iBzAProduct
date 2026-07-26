"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="section-sm">
      <div className="container">
        <div className="newsletter-wrap">
          <span className="eyebrow">Stay in the Loop</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
            Early Access & Exclusive Drops
          </h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 0' }}>
            Join the iBzA Universe community. Get early access to new collections, limited editions, and members-only offers.
          </p>

          {submitted ? (
            <p style={{ marginTop: '2rem', color: 'var(--gold)', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              ✦ You're on the list. Welcome to the Universe.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-gold">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
