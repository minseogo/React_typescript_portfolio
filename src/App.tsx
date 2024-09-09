import React from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="header-section">
        <Header />
      </div>
      <div className="portfolio-section">
        <Portfolio />
      </div>
    </div>
  );
};

export default App;