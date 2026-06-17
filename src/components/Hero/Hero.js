import React from 'react';
import './Hero.css';

function Hero({ hero }) {
  return (
    <section className="hero" id="download">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>

          <div className="hero-actions">
            {hero.macOptions?.length > 0 && (
              <details className="download-menu">
                <summary className="btn btn-primary">
                  <span>{hero.macButton}</span>
                  <span className="download-menu-icon" aria-hidden="true" />
                </summary>
                <div className="download-menu-list">
                  {hero.macOptions.map((option) => (
                    <a key={option.label} href={option.href} className="download-menu-item">
                      <span>{option.label}</span>
                      {option.description && <small>{option.description}</small>}
                    </a>
                  ))}
                </div>
              </details>
            )}
          </div>

          <div className="hero-meta">
            <span>
              {hero.versionLabel}: <strong>{hero.versionValue}</strong>
            </span>
            <span>
              {hero.systemLabel}: <strong>{hero.systemValue}</strong>
            </span>
            <a href={hero.installGuideHref}>{hero.installGuideLabel}</a>
          </div>

          {hero.legalNoticePrefix && (
            <p className="hero-legal-notice">
              <span>{hero.legalNoticePrefix} </span>
              <a href={hero.privacyPolicyHref}>{hero.privacyPolicyLabel}</a>
              <span> / </span>
              <a href={hero.userAgreementHref}>{hero.userAgreementLabel}</a>
              <span> / </span>
              <a href={hero.downloadNoteHref}>{hero.downloadNoteLabel}</a>
            </p>
          )}
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-rings" />
          <div className="hero-visual-card">
            <div className="hero-visual-badge">LC</div>
            <div className="hero-visual-line hero-visual-line-a" />
            <div className="hero-visual-line hero-visual-line-b" />
            <div className="hero-visual-line hero-visual-line-c" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
