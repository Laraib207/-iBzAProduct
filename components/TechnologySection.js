"use client";

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Source Collection', desc: 'Water sourced from deep-earth artesian reserves, naturally mineral-rich and cold-filtered through rock strata.' },
  { num: '02', title: '7-Stage Purification', desc: 'Multi-layer filtration: sediment removal, activated carbon, UV sterilisation, reverse osmosis, and mineral re-addition.' },
  { num: '03', title: 'pH Optimisation', desc: 'Electrolyte calibration ensures a perfect pH of 7.4 — matching your body\'s natural balance for peak absorption.' },
  { num: '04', title: 'Aero-Seal Bottling', desc: 'Nitrogen-flushed, airtight sealing in our aerospace-grade alloy vessels ensures zero contamination post-fill.' },
];

export default function TechnologySection() {
  return (
    <section className="section" id="technology">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">The Science</span>
          <h2 className="section-title">Engineering Purity,<br />Step by Step</h2>
          <div className="divider center" />
          <p className="section-sub">
            Every drop goes through a rigorous four-stage journey before it reaches you. Nothing left to chance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '1rem' }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
              }}
            >
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>
                {s.num}
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
