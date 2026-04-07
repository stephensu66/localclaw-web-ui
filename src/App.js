import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import mockData from './data/mockData';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ProductSection from './components/ProductSection/ProductSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

const ROUTES = ['#home', '#products', '#problems', '#about'];
const ABOUT_CONTACT_HASHES = new Set(['#about-contact', '#contact']);

function normalizeRoute(hash) {
  if (!hash || hash === '#' || hash === '#/') {
    return '#home';
  }

  const lower = hash.toLowerCase();
  if (ABOUT_CONTACT_HASHES.has(lower)) {
    return '#about';
  }

  if (ROUTES.includes(lower)) {
    return lower;
  }

  if (lower.startsWith('#/')) {
    const converted = `#${lower.slice(2)}`;
    if (ROUTES.includes(converted)) {
      return converted;
    }
  }

  if (lower === '#download' || lower === '#services') {
    return '#home';
  }

  return '#home';
}

function App() {
  const [language, setLanguage] = useState('zh');
  const [activeRoute, setActiveRoute] = useState(() =>
    typeof window !== 'undefined' ? normalizeRoute(window.location.hash) : '#home'
  );

  const content = useMemo(() => mockData[language], [language]);
  const currentPageMeta = content.pages?.[activeRoute.replace('#', '')];

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const syncRoute = () => {
      const currentHash = window.location.hash || '#home';
      const lowerHash = currentHash.toLowerCase();
      const isAboutContactTarget = ABOUT_CONTACT_HASHES.has(lowerHash);
      const nextRoute = normalizeRoute(currentHash);

      setActiveRoute(nextRoute);

      if (window.location.hash !== nextRoute && !isAboutContactTarget) {
        window.history.replaceState(null, '', nextRoute);
      }

      if (isAboutContactTarget) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            const target = document.getElementById('about-contact');
            if (target) {
              target.scrollIntoView({ block: 'start', behavior: 'auto' });
            } else {
              window.scrollTo({ top: 0, behavior: 'auto' });
            }
          });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const renderPage = () => {
    switch (activeRoute) {
      case '#products':
        return <ProductSection section={content.productSection} />;
      case '#problems':
        return <ProblemSection section={content.problemSection} />;
      case '#about':
        return <AboutSection section={content.aboutSection} />;
      case '#home':
      default:
        return (
          <>
            <Hero hero={content.hero} />
            <ServiceSection section={content.serviceSection} />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navbar
        brandName={content.brandName}
        navItems={content.navItems}
        activeRoute={activeRoute}
        language={language}
        languageOptions={content.languageOptions}
        onLanguageChange={setLanguage}
      />

      <main id="home">
        {activeRoute !== '#home' && currentPageMeta && (
          <section className="page-intro">
            <div className="container">
              <h1>{currentPageMeta.title}</h1>
              <p>{currentPageMeta.description}</p>
            </div>
          </section>
        )}
        {renderPage()}
      </main>

      <Footer footer={content.footer} />
    </div>
  );
}

export default App;
