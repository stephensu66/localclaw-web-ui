import React from 'react';
import './AboutSection.css';

function AboutSection({ section }) {
  const contacts = section.contacts ?? [];
  const hasContactModule = contacts.length > 0 || Boolean(section.button);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className={`about-grid ${hasContactModule ? '' : 'is-single'}`}>
          <article className="about-card about-card-intro">
            <h2 className="section-title">{section.title}</h2>
            <p>{section.description}</p>
          </article>

          {hasContactModule && (
            <article className="about-card about-card-contact" id="about-contact">
              <h2 className="section-title">{section.contactTitle || section.button || '联系我们'}</h2>

              {contacts.length > 0 && (
                <ul className="about-contact-list">
                  {contacts.map((item) => (
                    <li key={item.label}>
                      <span className="about-contact-label">{item.label}:</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="about-contact-link"
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="about-contact-value">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

            </article>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
