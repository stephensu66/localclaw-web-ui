import React from 'react';
import './ServiceSection.css';

function ServiceSection({ section }) {
  return (
    <section className="service-section" id="services">
      <div className="container">
        <h2 className="section-title">{section.title}</h2>
        <p className="service-subtitle">{section.subtitle}</p>

        <div className="service-grid">
          {section.plans.map((plan) => (
            <article
              className={`service-plan ${plan.key === 'advanced' ? 'service-plan-highlight' : ''}`}
              key={plan.key}
            >
              <div className="service-plan-head">
                <h3>{plan.name}</h3>
                {plan.badge && <span className="service-badge">{plan.badge}</span>}
              </div>

              <div className="service-price-row">
                <span className="service-price">{plan.price}</span>
                <span className="service-period">{plan.period}</span>
              </div>

              <p className="service-desc">{plan.description}</p>

              <button className="service-btn" disabled={plan.buttonDisabled} type="button">
                {plan.buttonText}
              </button>

              <ul className="service-feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
