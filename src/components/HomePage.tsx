'use client';

import { useState } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';

export default function HomePage() {
  const [language, setLanguage] = useState<'kr' | 'en'>('en');

  return (
    <main className="app-container">
      <div className="header-section" role="region" aria-label="Profile section">
        <Header language={language} setLanguage={setLanguage} />
      </div>
      <div className="portfolio-section" role="region" aria-label="Portfolio section">
        <Portfolio language={language} setLanguage={setLanguage} />
      </div>
    </main>
  );
}
