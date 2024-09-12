import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'kr' | 'en'>('kr'); // 언어 상태

  return (
    <div className="app-container">
      <div className="header-section">
        <Header language={language} setLanguage={setLanguage} />
      </div>
      <div className="portfolio-section">
        <Portfolio language={language} setLanguage={setLanguage} />
      </div>

    </div>
  );
};

export default App;
