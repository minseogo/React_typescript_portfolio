'use client';

import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Link2 } from 'lucide-react';
import data from '../data/data.json';

interface PortfolioProps {
  language: 'kr' | 'en';
  setLanguage: Dispatch<SetStateAction<'kr' | 'en'>>;
}

const ALL_FILTER = 'All';
const FILTERS = {
  kr: {
    all: '\uBAA8\uB450',
    professional: '\uC2E4\uBB34 \uD504\uB85C\uC81D\uD2B8',
    personal: '\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8',
    team: '\uD300 \uD504\uB85C\uC81D\uD2B8',
  },
  en: {
    all: 'All',
    professional: 'Professional Projects',
    personal: 'Personal Projects',
    team: 'Team Projects',
  },
} as const;
const ITEMS_PER_PAGE = 4;

function renderStackBadge(icon: string, index: number) {
  const badgeClassName =
    'rounded-full border border-black/10 px-2 py-1 text-[11px] font-semibold leading-none text-slate-700';

  switch (icon) {
    case 'React.png':
      return (
        <span key={index} className={badgeClassName}>
          React
        </span>
      );
    case 'Type.png':
      return (
        <span key={index} className={badgeClassName}>
          TypeScript
        </span>
      );
    case 'Next.png':
      return (
        <span key={index} className={badgeClassName}>
          Next.js
        </span>
      );
    case 'Boots.png':
      return (
        <span key={index} className={badgeClassName}>
          Bootstrap
        </span>
      );
    case 'Mysql.png':
      return (
        <span key={index} className={badgeClassName}>
          MySQL
        </span>
      );
    case 'Tailwind.png':
      return (
        <span key={index} className={badgeClassName}>
          Tailwind CSS
        </span>
      );
    case 'Hard.png':
      return (
        <span key={index} className={badgeClassName}>
          Vercel
        </span>
      );
    case 'AiApi.png':
      return (
        <span key={index} className={badgeClassName}>
          AI API
        </span>
      );
    case 'RestApi.png':
      return (
        <span key={index} className={badgeClassName}>
          REST API
        </span>
      );
    case 'php.png':
      return (
        <span key={index} className={badgeClassName}>
          PHP
        </span>
      );
    case 'Cafe24.png':
      return (
        <span key={index} className={badgeClassName}>
          Cafe24
        </span>
      );
    case 'Vite.png':
      return (
        <span key={index} className={badgeClassName}>
          Vite
        </span>
      );
    default:
      return null;
  }
}

export default function Portfolio({ language, setLanguage }: PortfolioProps) {
  const [filter, setFilter] = useState(ALL_FILTER);
  const [page, setPage] = useState(1);
  const langData = data[language].portfolio;
  const switchTimeoutRef = useRef<number | null>(null);

  const filterOptions = [
    { value: ALL_FILTER, label: FILTERS[language].all },
    { value: FILTERS.kr.professional, label: FILTERS[language].professional },
    { value: FILTERS.kr.personal, label: FILTERS[language].personal },
    { value: FILTERS.kr.team, label: FILTERS[language].team },
  ];

  const filteredItems = useMemo(
    () => langData.items.filter((item) => filter === ALL_FILTER || item.filter === filter),
    [filter, langData.items]
  );
  const totalPages = useMemo(() => Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE)), [filteredItems.length]);
  const paginatedItems = useMemo(
    () => filteredItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [filteredItems, page]
  );
  const [displayedItems, setDisplayedItems] = useState(paginatedItems);
  const [isSwitching, setIsSwitching] = useState(false);
  const isSparseLastPage = page === totalPages && displayedItems.length < ITEMS_PER_PAGE;

  useEffect(() => {
    setDisplayedItems(paginatedItems);
  }, [paginatedItems]);

  useEffect(() => {
    return () => {
      if (switchTimeoutRef.current !== null) {
        window.clearTimeout(switchTimeoutRef.current);
      }
    };
  }, []);

  const startViewSwitch = (callback: () => void) => {
    if (switchTimeoutRef.current !== null) {
      window.clearTimeout(switchTimeoutRef.current);
    }

    setIsSwitching(true);
    switchTimeoutRef.current = window.setTimeout(() => {
      callback();
      switchTimeoutRef.current = window.setTimeout(() => {
        setIsSwitching(false);
      }, 180);
    }, 110);
  };

  const handleFilterChange = (nextFilter: string) => {
    if (nextFilter === filter) {
      return;
    }

    startViewSwitch(() => {
      setFilter(nextFilter);
      setPage(1);
    });
  };

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="ml-4 flex items-center justify-between lg:mt-0 mt-4">
        <div className="dash">
          <h1 className="text-3xl font-medium leading-none md:text-4xl">{langData.title}</h1>
        </div>
        <div className="lang_btns hidden lg:flex">
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

      <div className="portfolio-results">
        <nav aria-label="Project category filters">
          <ul className="portfolio-filters">
            {filterOptions.map((option) => (
              <li key={option.value} className={filter === option.value ? 'filter-active' : ''}>
                <button
                  type="button"
                  onClick={() => handleFilterChange(option.value)}
                  aria-pressed={filter === option.value}
                  className="border-0 bg-transparent p-0"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`portfolio-container ml-2 mr-2 grid grid-cols-1 gap-x-4 md:ml-6 lg:grid-cols-2 ${
            isSparseLastPage ? 'portfolio-container--compact' : ''
          } ${
            isSwitching ? 'portfolio-container--switching' : ''
          }`}
        >
          {displayedItems.map((item) => {
            const isLinkDisabled = !item.link || item.link === '#';

            return (
              <article key={item.id} className="portfolio-item">
                <div className="portfolio-content mb-2">
                  <Image
                    src={`/img/${item.image}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="portfolio-info mb-3">
                  <div className="flex flex-row items-start justify-between gap-3">
                    <div>
                      <h2 className="mb-2 text-lg font-medium">{item.title}</h2>
                      <div className="pt_gap mb-3 flex flex-wrap items-center">
                        {item.icon.split('|').map((icon, index) => icon && renderStackBadge(icon, index))}
                      </div>
                    </div>
                    {isLinkDisabled ? (
                      <span
                        className="details-link mt-1 cursor-not-allowed text-gray-400"
                        aria-label={`${item.title} link is not available yet`}
                        aria-disabled="true"
                      >
                        <Link2 className="h-5 w-5" strokeWidth={2} />
                      </span>
                    ) : (
                      <a
                        href={item.link}
                        className="details-link mt-1 text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.title}`}
                      >
                        <Link2 className="h-5 w-5" strokeWidth={2} />
                      </a>
                    )}
                  </div>
                  <p className="des_font">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        {filteredItems.length > ITEMS_PER_PAGE ? (
          <div className="portfolio-pagination mt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() =>
                startViewSwitch(() => {
                  setPage((prev) => Math.max(1, prev - 1));
                })
              }
              disabled={page === 1}
              aria-label={language === 'kr' ? '\uC774\uC804 \uD398\uC774\uC9C0' : 'Previous page'}
              className="px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() =>
                  startViewSwitch(() => {
                    setPage(num);
                  })
                }
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
              onClick={() =>
                startViewSwitch(() => {
                  setPage((prev) => Math.min(totalPages, prev + 1));
                })
              }
              disabled={page === totalPages}
              aria-label={language === 'kr' ? '\uB2E4\uC74C \uD398\uC774\uC9C0' : 'Next page'}
              className="px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
