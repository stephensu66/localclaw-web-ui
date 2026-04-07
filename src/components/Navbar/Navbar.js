import React from 'react';
import './Navbar.css';

function Navbar({ brandName, navItems, language, languageOptions, onLanguageChange, activeRoute }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo" aria-hidden="true">
            <span className="logo-mark logo-mark-a" />
            <span className="logo-mark logo-mark-b" />
            <span className="logo-mark logo-mark-c" />
          </div>
          <span className="navbar-brand-name">{brandName}</span>
        </div>

        <nav className="navbar-nav" aria-label="primary navigation">
          {navItems.map((item) => (
            <a
              className={`navbar-link ${item.href === activeRoute ? 'navbar-link-active' : ''}`}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-lang">
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            aria-label="language switch"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
