"use client";

import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Aryan Mehta',
    loc: 'Mumbai, India',
    rating: 5,
    text: 'The Aero Shift is genuinely the most premium water bottle I\'ve ever owned. The build quality is extraordinary — feels like holding a piece of luxury equipment.',
    initials: 'AM',
  },
  {
    name: 'Priya Sharma',
    loc: 'Delhi, India',
    rating: 5,
    text: 'I bought the Volt Surge for the gym and I can\'t believe the difference. Lightweight, grips perfectly, and the water stays cold for hours. Zero regrets.',
    initials: 'PS',
  },
  {
    name: 'Rohan Kapoor',
    loc: 'Bangalore, India',
    rating: 5,
    text: 'The Apex Guard is a beast. I\'ve dropped it, thrown it in a bag, taken it on hikes — not a scratch. The PureLock seal is insane. Worth every rupee.',
    initials: 'RK',
  },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Customer Stories</span>
          <h2 className="section-title">What Our Community Says</h2>
          <div className="divider center" />
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="testimonial-stars">{'★'.repeat(r.rating)}</div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.initials}</div>
                <div>
                  <p className="testimonial-name">{r.name}</p>
                  <p className="testimonial-loc">{r.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
