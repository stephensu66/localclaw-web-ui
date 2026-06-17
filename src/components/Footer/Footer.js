import React from 'react';
import './Footer.css';

function Footer({ footer }) {
  const linkGroups = footer.linkGroups ?? [];
  const companyInfo = footer.companyInfo ?? [];
  const socialLinks = footer.socialLinks ?? [];
  const placeholderText = footer.placeholderText || '待填写';

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          {linkGroups.map((group) => (
            <section className="footer-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="footer-company">
            <p className="footer-company-copyright">{footer.copyright}</p>

            <ul className="footer-company-list">
              {companyInfo.map((item) => (
                <li key={item.label}>
                  <span className="footer-company-label">{item.label}: </span>
                  <span className={`footer-company-value ${!item.value ? 'is-placeholder' : ''}`}>
                    {item.href && item.value ? (
                      <a className="footer-company-link" href={item.href} target="_blank" rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value || placeholderText
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {socialLinks.length > 0 && (
              <div className="footer-social-links">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </section>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
