export default function FeatureStrip() {
  const features = [
    { icon: '🚚', title: 'Free Delivery', desc: 'On orders above ₹999' },
    { icon: '🔬', title: '7-Stage Purification', desc: 'Lab-certified purity' },
    { icon: '♻️', title: 'Eco Packaging', desc: '100% recyclable materials' },
    { icon: '🛡️', title: '2-Year Warranty', desc: 'Every bottle guaranteed' },
  ];

  return (
    <div className="feature-strip">
      <div className="container">
        <div className="feature-strip-grid">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-text">
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
