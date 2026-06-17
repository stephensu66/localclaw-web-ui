import React from 'react';
import './ProductSection.css';

function ProductSection({ section }) {
  const products =
    section.products ??
    (section.cards || []).map((card, index) => ({
      key: card.title || `product-${index}`,
      name: card.title,
      summary: card.description,
      cta: {
        label: card.button,
        href: '#'
      }
    }));

  return (
    <section className="product-section" id="products">
      <div className="container">
        <h2 className="section-title">{section.title}</h2>
        {section.subtitle && <p className="product-subtitle">{section.subtitle}</p>}

        <div className="product-grid">
          {products.map((product) => {
            const detail = product.detail ?? {};
            const corePoints = detail.corePoints ?? product.highlights ?? [];
            const scenarios = detail.scenarios ?? [];
            const actions = detail.actions ?? [];
            const hasDualColumns = corePoints.length > 0 && scenarios.length > 0;
            const downloads = product.downloads ?? [];
            const hasSideContent =
              downloads.length > 0 || Boolean(product.cta?.label) || actions.length > 0;

            return (
              <article className="product-card" key={product.key}>
                <header className="product-head">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <h3>{product.name}</h3>
                  {product.tagline && <p className="product-tagline">{product.tagline}</p>}
                </header>

                <div className={`product-layout ${hasSideContent ? '' : 'is-no-side'}`}>
                  <div className="product-main">
                    <p className="product-summary">{product.summary}</p>

                    <div className={`product-main-columns ${hasDualColumns ? '' : 'is-single'}`}>
                      {corePoints.length > 0 && (
                        <div className="product-block">
                          <h4>{detail.corePointsTitle || section.corePointsTitle || '核心能力'}</h4>
                          <ul className="product-highlights">
                            {corePoints.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {scenarios.length > 0 && (
                        <div className="product-block">
                          <h4>{detail.scenariosTitle || section.scenariosTitle || '应用场景'}</h4>
                          <ul className="product-scenarios">
                            {scenarios.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {hasSideContent && (
                    <aside className="product-side">
                      {downloads.length > 0 && (
                        <div className="product-downloads">
                          {downloads.map((item) => (
                            item.options?.length > 0 ? (
                              <details className="product-download-menu" key={item.label}>
                                <summary
                                  className={`product-download-btn product-download-btn-${item.variant || 'secondary'}`}
                                >
                                  <span>{item.label}</span>
                                  <span className="product-download-menu-icon" aria-hidden="true" />
                                </summary>
                                <div className="product-download-menu-list">
                                  {item.options.map((option) => (
                                    <a key={option.label} href={option.href}>
                                      <span>{option.label}</span>
                                      {option.description && <small>{option.description}</small>}
                                    </a>
                                  ))}
                                </div>
                              </details>
                            ) : (
                              <a
                                key={item.label}
                                href={item.href}
                                className={`product-download-btn product-download-btn-${item.variant || 'secondary'}`}
                              >
                                {item.label}
                              </a>
                            )
                          ))}
                        </div>
                      )}

                      {product.cta?.label && (
                        <a className="product-cta" href={product.cta.href}>
                          {product.cta.label}
                        </a>
                      )}

                      {actions.length > 0 && (
                        <div className="product-actions">
                          {actions.map((item) => (
                            <a key={item.label} href={item.href}>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </aside>
                  )}
                </div>

                {product.comparison?.length > 0 && (
                  <div className="product-compare product-compare-wide">
                    <h4>{product.comparisonTitle}</h4>
                    <div className="product-compare-head">
                      <span />
                      <span>{section.freeLabel}</span>
                      <span>{section.advancedLabel}</span>
                    </div>
                    {product.comparison.map((row) => (
                      <div className="product-compare-row" key={row.feature}>
                        <span>{row.feature}</span>
                        <span>{row.free}</span>
                        <span>{row.advanced}</span>
                      </div>
                    ))}
                  </div>
                )}

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
