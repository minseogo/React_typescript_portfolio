import React, { useState } from 'react';
import { Link2 } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiVercel,
} from 'react-icons/si';
import '../css/main.css';
import data from '../data/data.json';

type IconComponent = React.ComponentType<{ className?: string; title?: string }>;
const ReactIcon = SiReact as IconComponent;
const TypescriptIcon = SiTypescript as IconComponent;
const BootstrapIcon = SiBootstrap as IconComponent;
const VercelIcon = SiVercel as IconComponent;

interface PortfolioProps {
  language: 'kr' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'kr' | 'en'>>;
}

const ALL_FILTER = 'All';
const PERSONAL_FILTER = '개인 프로젝트';
const TEAM_FILTER = '팀 프로젝트';

const renderStackIcon = (icon: string, index: number) => {
  switch (icon) {
    case 'React.png':
      return <ReactIcon key={index} className="text-[1.25rem] text-[#61DAFB]" title="React" />;
    case 'Type.png':
      return <TypescriptIcon key={index} className="text-[1.2rem] text-[#3178C6]" title="TypeScript" />;
    case 'Boots.png':
      return <BootstrapIcon key={index} className="text-[1.2rem] text-[#7952B3]" title="Bootstrap" />;
    case 'Hard.png':
      return <VercelIcon key={index} className="text-[1.1rem] text-black" title="Vercel" />;
    case 'Sir.png':
      return <img key={index} src={`${process.env.PUBLIC_URL}/img/Sir.png`} alt="SIR png" className="h-5 w-auto" />;
    case 'Cafe24.png':
      return <img key={index} src={`${process.env.PUBLIC_URL}/img/Cafe24.png`} alt="Cafe24 png" className="h-4 w-auto" />;
    default:
      return null;
  }
};

const Portfolio: React.FC<PortfolioProps> = ({ language, setLanguage }) => {
  const [filter, setFilter] = useState(ALL_FILTER);
  const langData = data[language].portfolio;
  const filteredItems = langData.items.filter((item) => filter === ALL_FILTER || item.filter === filter);

  return (
    <section id="portfolio" className="portfolio section light-background mt-4">
      <div className="ml-4 flex items-center justify-between">
        <div className="dash">
          <h1>{data[language].portfolio.title}</h1>
        </div>
        <div className="lang_btns hidden sm:flex">
          <button className="border-0 bg-white text-black" onClick={() => setLanguage('kr')}>
            KR
          </button>
          <button className="ml-2 mr-4 border-0 bg-white text-black" onClick={() => setLanguage('en')}>
            EN
          </button>
        </div>
      </div>

      <div>
        <ul className="portfolio-filters">
          <li onClick={() => setFilter(ALL_FILTER)} className={filter === ALL_FILTER ? 'filter-active' : ''}>
            {language === 'kr' ? '모두' : 'All'}
          </li>
          <li onClick={() => setFilter(PERSONAL_FILTER)} className={filter === PERSONAL_FILTER ? 'filter-active' : ''}>
            {language === 'kr' ? PERSONAL_FILTER : 'Personal Projects'}
          </li>
          <li onClick={() => setFilter(TEAM_FILTER)} className={filter === TEAM_FILTER ? 'filter-active' : ''}>
            {language === 'kr' ? TEAM_FILTER : 'Team Projects'}
          </li>
        </ul>

        <div className="portfolio-container ml-0 mr-2 grid grid-cols-1 gap-x-4 md:ml-6 sm:grid-cols-2">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-content">
                <img src={`/img/${item.image}`} className="h-auto w-full" alt={item.title} />
              </div>
              <div className="portfolio-info mb-3">
                <div className="flex flex-row items-center justify-between">
                  <h4 className="title_nowrap mb-2 flex items-center">
                    {item.title}
                    <div className="pt_gap ml-2 flex items-center">
                      {item.icon.split('|').map((icon, i) => icon && renderStackIcon(icon, i))}
                    </div>
                  </h4>
                  <a
                    href={item.link}
                    className="details-link text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title}`}
                  >
                    <Link2 className="h-5 w-5" strokeWidth={2} />
                  </a>
                </div>
                <p className="des_font">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
