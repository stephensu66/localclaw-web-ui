import React from 'react';
import './FeatureBar.css';

function FeatureBar({ items }) {
  return (
    <section className="feature-bar">
      <div className="container feature-bar-inner">
        {items.map((item) => (
          <button
            className={`feature-pill ${item.highlight ? 'feature-pill-highlight' : ''}`}
            type="button"
            key={item.label}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FeatureBar;
