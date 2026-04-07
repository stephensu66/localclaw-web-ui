import React, { useEffect, useMemo, useState } from 'react';
import './ProblemSection.css';

function renderRichInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>;
  });
}

function renderRichParagraphs(text, paragraphClassName) {
  return text
    .split(/\n{2,}/)
    .filter((paragraph) => paragraph.trim())
    .map((paragraph, paragraphIndex) => (
      <p className={paragraphClassName} key={`${paragraphClassName}-${paragraphIndex}`}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <React.Fragment key={`${paragraphClassName}-${paragraphIndex}-${lineIndex}`}>
            {lineIndex > 0 && <br />}
            {renderRichInline(line)}
          </React.Fragment>
        ))}
      </p>
    ));
}

function ProblemSection({ section }) {
  const categories = useMemo(
    () =>
      section.categories?.length
        ? section.categories
        : section.cards?.length
          ? [
              {
                key: 'all',
                label: section.defaultCategoryLabel || '全部',
                items: section.cards.map((card) => ({
                  title: card.title,
                  summary: card.description,
                  sources: []
                }))
              }
            ]
          : [],
    [section]
  );

  const [expandedMap, setExpandedMap] = useState(() => {
    const initial = {};
    categories.forEach((category) => {
      initial[category.key] = false;
    });
    return initial;
  });

  useEffect(() => {
    if (categories.length === 0) {
      setExpandedMap({});
      return;
    }

    setExpandedMap((prev) => {
      const next = {};
      categories.forEach((category) => {
        next[category.key] = prev[category.key] ?? false;
      });
      return next;
    });
  }, [categories]);

  const toggleCategory = (key) => {
    setExpandedMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalItems = categories.reduce((sum, category) => sum + (category.items?.length || 0), 0);
  const isEnglish = section.sourceLabel === 'Source';
  const problemMetaPrefix = isEnglish ? 'Covered domains: ' : '覆盖板块：';
  const problemMetaSuffix = isEnglish
    ? `. Total ${categories.length} domains, ${totalItems} problems.`
    : `。共 ${categories.length} 个板块，${totalItems} 个问题。`;

  const handleMetaLinkClick = (event, key) => {
    event.preventDefault();

    setExpandedMap((prev) => ({
      ...prev,
      [key]: true
    }));

    window.requestAnimationFrame(() => {
      const target = document.getElementById(`problems-${key}`);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  };

  return (
    <section className="problem-section" id="problems">
      <div className="container">
        <h2 className="section-title">{section.title}</h2>
        {section.subtitle && <div className="problem-subtitle">{renderRichParagraphs(section.subtitle, 'problem-subtitle-paragraph')}</div>}
        {categories.length > 0 && (
          <p className="problem-meta">
            <span>{problemMetaPrefix}</span>
            {categories.map((category, index) => (
              <React.Fragment key={`meta-${category.key}`}>
                {index > 0 && <span className="problem-meta-separator">{isEnglish ? ', ' : '、'}</span>}
                <a
                  className="problem-meta-link"
                  href={`#problems-${category.key}`}
                  onClick={(event) => handleMetaLinkClick(event, category.key)}
                >
                  {category.label}
                </a>
              </React.Fragment>
            ))}
            <span>{problemMetaSuffix}</span>
          </p>
        )}

        {categories.length > 0 && (
          <div className="problem-panels">
            {categories.map((category) => (
              <section className="problem-panel" id={`problems-${category.key}`} key={category.key}>
                <button
                  type="button"
                  className="problem-panel-trigger"
                  onClick={() => toggleCategory(category.key)}
                  aria-expanded={Boolean(expandedMap[category.key])}
                >
                  <span className="problem-panel-title">{category.label}</span>
                  <span
                    className={`problem-panel-arrow ${expandedMap[category.key] ? 'is-expanded' : ''}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
                      <path
                        d="M3.3 6.1a1 1 0 0 1 1.4 0L8 9.4l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>

                {expandedMap[category.key] && (
                  <div className="problem-items">
                    {(category.items || []).map((item, index) => (
                      <article className="problem-item" key={`${category.key}-${item.title}`}>
                        <div className="problem-item-head">
                          <div className="problem-index">{String(index + 1).padStart(2, '0')}</div>
                          <h4>{item.title}</h4>
                        </div>
                        <div className="problem-item-body">
                          <p>{item.summary || item.description}</p>

                          {item.sources?.length > 0 && (
                            <div className="problem-sources">
                              <span>{section.sourceLabel || '来源'}:</span>
                              <div className="problem-source-links">
                                {item.sources.map((source) => (
                                  <a
                                    key={`${item.title}-${source.label}-${source.href}`}
                                    href={source.href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {source.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {categories.length === 0 && (
          <div className="card-grid problem-grid">
            {(section.cards || []).map((card, index) => (
              <article className="problem-card" key={card.title}>
                <div className="problem-index">0{index + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProblemSection;
