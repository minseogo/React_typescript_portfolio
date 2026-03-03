import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Link2 } from 'lucide-react';
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
const PROFESSIONAL_FILTER = '실무 프로젝트';
const ITEMS_PER_PAGE = 4;

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
  const [page, setPage] = useState(1);
  const langData = data[language].portfolio;
  const filteredItems = langData.items.filter((item) => filter === ALL_FILTER || item.filter === filter);
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const paginatedItems = filteredItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilterChange = (nextFilter: string) => {
    setFilter(nextFilter);
    setPage(1);
  };

  return (
    <section id="portfolio" className="portfolio section light-background mt-4">
      <div className="ml-4 flex items-center justify-between">
        <div className="dash">
          <h1>{data[language].portfolio.title}</h1>
        </div>
        <div className="lang_btns hidden sm:flex">
          <button
            className="border-0 bg-white text-black"
            onClick={() => setLanguage('kr')}
            aria-pressed={language === 'kr'}
            aria-label="Switch language to Korean"
            type="button"
          >
            KR
          </button>
          <button
            className="ml-2 mr-4 border-0 bg-white text-black"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="Switch language to English"
            type="button"
          >
            EN
          </button>
        </div>
      </div>

      <div>
        <nav aria-label="Project category filters">
          <ul className="portfolio-filters">
            <li className={filter === ALL_FILTER ? 'filter-active' : ''}>
              <button
                type="button"
                onClick={() => handleFilterChange(ALL_FILTER)}
                aria-pressed={filter === ALL_FILTER}
                className="border-0 bg-transparent p-0"
              >
                {language === 'kr' ? '모두' : 'All'}
              </button>
            </li>
            <li className={filter === PERSONAL_FILTER ? 'filter-active' : ''}>
              <button
                type="button"
                onClick={() => handleFilterChange(PERSONAL_FILTER)}
                aria-pressed={filter === PERSONAL_FILTER}
                className="border-0 bg-transparent p-0"
              >
                {language === 'kr' ? PERSONAL_FILTER : 'Personal Projects'}
              </button>
            </li>
            <li className={filter === TEAM_FILTER ? 'filter-active' : ''}>
              <button
                type="button"
                onClick={() => handleFilterChange(TEAM_FILTER)}
                aria-pressed={filter === TEAM_FILTER}
                className="border-0 bg-transparent p-0"
              >
                {language === 'kr' ? TEAM_FILTER : 'Team Projects'}
              </button>
            </li>
            <li className={filter === PROFESSIONAL_FILTER ? 'filter-active' : ''}>
              <button
                type="button"
                onClick={() => handleFilterChange(PROFESSIONAL_FILTER)}
                aria-pressed={filter === PROFESSIONAL_FILTER}
                className="border-0 bg-transparent p-0"
              >
                {language === 'kr' ? PROFESSIONAL_FILTER : 'Professional Projects'}
              </button>
            </li>
          </ul>
        </nav>

        <div className="portfolio-container ml-2 mr-2 grid grid-cols-1 gap-x-4 md:ml-6 sm:grid-cols-2">
          {paginatedItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-content mb-2">
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
        {filteredItems.length > ITEMS_PER_PAGE && (
          <div className="mt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              aria-label={language === 'kr' ? '이전 페이지' : 'Previous page'}
              className="px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPage(num)}
                aria-current={page === num ? 'page' : undefined}
                className={`px-2 py-1 text-xs ${
                  page === num ? 'font-semibold text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {num}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              aria-label={language === 'kr' ? '다음 페이지' : 'Next page'}
              className="px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
