import React, { useState } from 'react';
import '../css/main.css';
import data from '../data/data.json';

interface PortfolioItem {
  id: number;
  filter: string;
  image: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface PortfolioProps {
  language: 'kr' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'kr' | 'en'>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ language, setLanguage }) => {
  const [filter, setFilter] = useState('All');
  const langData = data[language].portfolio; 
  const filteredItems = langData.items.filter(item => filter === 'All' || item.filter === filter);

  return (
    <section id="portfolio" className="portfolio section light-background mt-4">
      <div className="ms-4 d-flex align-items-center justify-content-between">
        <div className="dash">
          <h1>{data[language].portfolio.title}</h1> 
        </div>
        <div className='d-sm-flex d-none lang_btns'>
          <button className="border-0 bg-white text-black" onClick={() => setLanguage('kr')}>KR</button>
          <button className="border-0 bg-white text-black me-4 ms-2" onClick={() => setLanguage('en')}>EN</button>
        </div>
      </div>
      <div>
        <ul className="portfolio-filters">
          <li onClick={() => setFilter('All')} className={filter === 'All' ? 'filter-active' : ''}>
            {language === 'kr' ? '모두' : 'All'}
          </li>
          <li onClick={() => setFilter('개인 프로젝트')} className={filter === '개인 프로젝트' ? 'filter-active' : ''}>
            {language === 'kr' ? '개인 프로젝트' : 'Personal Projects'}
          </li>
          <li onClick={() => setFilter('팀 프로젝트')} className={filter === '팀 프로젝트' ? 'filter-active' : ''}>
            {language === 'kr' ? '팀 프로젝트' : 'Team Projects'}
          </li>
        </ul>
        <div className="row portfolio-container ms-md-6 ms-0 me-2">
          {filteredItems.map(item => (
            <div key={item.id} className="col-sm-6 portfolio-item">
              <div className="portfolio-content">
                <img src={`/img/${item.image}`} className="img-fluid" alt={item.title} />
              </div>
              <div className="portfolio-info mb-5">
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <h4 className='mb-0 d-flex title_nowrap'>
                    {item.title}
                    <div className='ms-2 d-flex pt_gap align-items-center'>
                      {item.icon.split('|').map((icon, i) => (
                        icon && (
                          <img
                            key={i}
                            src={`/img/${icon}`}
                            alt={`${icon}-${i}`}
                            className={icon === 'Cafe24.png' ? 'cafe24-size' : icon === 'Sir.png' ? 'sir-size' : 'icon-size'}
                          />
                        )
                      ))}
                    </div>
                  </h4>
                  <a href={item.link} className="details-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-link-45deg text-black"></i>
                  </a>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
