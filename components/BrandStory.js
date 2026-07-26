"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandStory() {
  const feats = [
    { icon: '💧', title: '7-Stage Filtration', desc: 'Removes 99.99% of contaminants for absolute purity.' },
    { icon: '⚗️', title: 'Mineral Balanced', desc: 'Essential minerals retained at optimal ratios.' },
    { icon: '🔩', title: 'Aero-Grade Build', desc: 'Military-spec alloy construction, built to endure.' },
    { icon: '🌍', title: 'Zero-Waste Design', desc: 'Designed for decades of use, not disposal.' },
  ];

  return (
    <section className="section" id="about" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="brand-strip">
          {/* Image side */}
          <motion.div
            className="brand-img-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/products/manufacturing-process.jpeg"
              alt="iBzA manufacturing process"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="brand-img-accent">
              <strong>2024</strong>
              <span>Founded</span>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="brand-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title">Born from the Belief that<br />Water Deserves More</h2>
              <div className="divider" />
              <p className="section-sub">
                iBzA Universe started with a single obsession — what if your water bottle was as carefully designed as the watch on your wrist? We blended aerospace engineering with luxury aesthetics to create something truly different.
              </p>
            </div>

            <div className="brand-features">
              {feats.map((f, i) => (
                <div className="brand-feat" key={i}>
                  <span className="brand-feat-icon">{f.icon}</span>
                  <div className="brand-feat-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
