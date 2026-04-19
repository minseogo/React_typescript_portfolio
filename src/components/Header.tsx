'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import {
  SiBootstrap,
  SiGithub,
  SiMysql,
  SiNotion,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiPhp,
  SiNextdotjs
} from 'react-icons/si';
import data from '../data/data.json';

interface HeaderProps {
  language: 'kr' | 'en';
  setLanguage: Dispatch<SetStateAction<'kr' | 'en'>>;
}

type IconComponent = React.ComponentType<{ className?: string; title?: string }>;

const ReactIcon = SiReact as IconComponent;
const TypescriptIcon = SiTypescript as IconComponent;
const BootstrapIcon = SiBootstrap as IconComponent;
const TailwindIcon = SiTailwindcss as IconComponent;
const MysqlIcon = SiMysql as IconComponent;
const GithubIcon = SiGithub as IconComponent;
const NotionIcon = SiNotion as IconComponent;
const VercelIcon = SiVercel as IconComponent;
const VitelIcon = SiVite as IconComponent;
const SiPhpIcon = SiPhp as IconComponent;
const NextIcon = SiNextdotjs as IconComponent;

const notionLinks: Record<'kr' | 'en', string> = {
  kr: 'https://boggy-forgery-956.notion.site/1014eece51c480a4a96cd75198f2e8c2?source=copy_link',
  en: 'https://boggy-forgery-956.notion.site/Daniela-Go-Portfolio-3194eece51c48072bbf6e33a19e4dd72?source=copy_link',
};

const introDescription: Record<'kr' | 'en', string[]> = {
  kr: [
    '\uC601\uAD6D \uC5B4\uD559\uC5F0\uC218\uC640 \uB2E4\uC591\uD55C \uC2E4\uBB34 \uACBD\uD5D8\uC744 \uD1B5\uD574 \uC720\uC5F0\uD55C \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uC5ED\uB7C9\uACFC \uBB38\uC81C \uD574\uACB0\uB825\uC744 \uAE38\uB800\uC2B5\uB2C8\uB2E4.',
    '\uC0AC\uC6A9\uC790 \uAD00\uC810\uC5D0\uC11C \uAD6C\uC870\uB97C \uC124\uACC4\uD558\uACE0, \uC2E4\uC81C \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uD654\uBA74\uACFC \uD750\uB984\uC744 \uB05D\uAE4C\uC9C0 \uAD6C\uD604\uD558\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4.',
  ],
  en: [
    'Through language study in the UK and hands-on product work, I developed adaptable communication and problem-solving skills.',
    "I am a frontend developer who designs from the user's perspective and carries ideas through to polished, production-ready experiences.",
  ],
};

export default function Header({ language, setLanguage }: HeaderProps) {
  const typingTarget =
    language === 'kr'
      ? String.fromCharCode(
          0xd504,
          0xb860,
          0xd2b8,
          0xc5d4,
          0xb4dc,
          0x20,
          0xac1c,
          0xbc1c,
          0xc790
        )
      : 'Frontend Developer';
  const typingLineClassName =
    language === 'kr' ? 'typewriter-line typewriter-line--kr' : 'typewriter-line typewriter-line--en';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const typingChars = Array.from(typingTarget);
    let charIndex = 0;
    let isDeleting = false;

    const intervalId = window.setInterval(() => {
      if (!isDeleting) {
        charIndex += 1;
        setTypedText(typingChars.slice(0, charIndex).join(''));

        if (charIndex >= typingChars.length) {
          isDeleting = true;
        }

        return;
      }

      charIndex -= 1;
      setTypedText(typingChars.slice(0, charIndex).join(''));

      if (charIndex <= 0) {
        isDeleting = false;
      }
    }, 150);

    setTypedText('');

    return () => {
      window.clearInterval(intervalId);
    };
  }, [typingTarget]);

  return (
    <header id="header" className="ml-2 mr-2 mt-1 flex flex-col lg:ml-4 lg:mr-0 lg:mt-4">
      <div>
        <div className="dash_f ml-0 flex items-baseline justify-between md:ml-4 lg:inline-block">
          <h1 className="sitename mb-3 text-3xl font-medium leading-none md:text-4xl">{data[language].siteName}</h1>
          <div className="lang_btns flex lg:hidden">
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

        <div className="flex flex-col lg:flex-row">
          <div className="profile-img lg:w-1/2">
            <img src="/img/me.jpg" alt="Profile portrait of daniela Go" className="h-auto w-full" />
            <div className="hello hello-overlay lg:hidden">
              <h3 className="flex flex-col">
                {language === 'en' ? (
                  <>
                    <span>Hi, I&apos;m Daniela Go</span>
                    <span className={typingLineClassName} aria-label={typingTarget}>
                      <span className="typewriter-line__text">
                        {typedText}
                        <span className="typewriter-caret" aria-hidden="true" />
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span>{data[language].hello}</span>
                    <span className={typingLineClassName} aria-label={typingTarget}>
                      <span className="typewriter-line__text">
                        {typedText}
                        <span className="typewriter-caret" aria-hidden="true" />
                      </span>
                    </span>
                    <span>{data[language].name}</span>
                  </>
                )}
              </h3>
            </div>
            <div className="info mt-3 lg:pr-0">
              <p className="info_font flex flex-col text-center lg:text-left">
                {introDescription[language].map((item) => (
                  <span key={item} className="mb-2 last:mb-0">
                    {item}
                  </span>
                ))}
              </p>
            </div>
            <section
              className="youtube-player flex flex-col items-center lg:items-start"
              aria-label="Introduction video"
            >
              <h3 className="mb-3 text-center lg:text-left">
                {language === 'kr' ? '\uB370\uC774\uD130 \uD50C\uB85C\uC6B0 \uBC1C\uD45C' : 'Data Flow Presentation'}
              </h3>
              <div className="w-full overflow-hidden rounded-sm bg-black">
                <iframe
                  title="Data Flow Presentation"
                  src="https://www.youtube.com/embed/wmO7MrHiB2A"
                  width="100%"
                  height="185"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          </div>

          <div className="resume section flex flex-col lg:w-5/12">
            <div className="hello hidden lg:block">
              <h3 className="flex flex-col">
                {language === 'en' ? (
                  <>
                    <span>Hi, I&apos;m Daniela Go</span>
                    <span className={typingLineClassName} aria-label={typingTarget}>
                      <span className="typewriter-line__text">
                        {typedText}
                        <span className="typewriter-caret" aria-hidden="true" />
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span>{data[language].hello}</span>
                    <span className={typingLineClassName} aria-label={typingTarget}>
                      <span className="typewriter-line__text">
                        {typedText}
                        <span className="typewriter-caret" aria-hidden="true" />
                      </span>
                    </span>
                    <span>{data[language].name}</span>
                  </>
                )}
              </h3>
            </div>

            <div className="personal mt-2 mb-2 text-center lg:text-left lg:mb-5">
              <ul className="mb-2 list-none p-0">
                {data[language].personal.birthdate ? <li>{data[language].personal.birthdate}</li> : null}
                <li>{data[language].personal.email}</li>
              </ul>
              <a
                className="info_btns inline-block border border-black bg-white px-2 py-1 text-black"
                href="https://github.com/go-daniela-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile in a new tab"
              >
                {data[language].buttons.github}
              </a>
              <a
                className="info_btns ml-2 inline-block border border-black bg-white px-2 py-1 text-black"
                href={notionLinks[language]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Notion page in a new tab"
              >
                Notion
              </a>
            </div>

            <div className="skills mt-5 mb-0 lg:mb-4">
              <h2 className="mb-3 text-center lg:text-left">{data[language].skills.title}</h2>
              <div className="flex flex-col items-stretch">
                <div className="skills-content">
                  <div className="mt-1 flex flex-col items-center justify-evenly lg:items-start lg:justify-start">
                    <div className="logo_gap flex flex-wrap items-center">
                      <ReactIcon className="text-[2.1rem] text-[#61DAFB]" title="React" />
                      <TypescriptIcon className="text-[2rem] text-[#3178C6]" title="TypeScript" />
                      <BootstrapIcon className="text-[2.1rem] text-[#7952B3]" title="Bootstrap" />
                      <TailwindIcon className="text-[2.1rem] text-[#38BDF8]" title="Tailwind CSS" />
                      <SiNextdotjs className="text-4xl text-white bg-black rounded" title="Next.js" />
                    </div>
                    <div className="logo_gap mt-3 flex flex-wrap items-center">
                      <MysqlIcon className="text-[2rem] text-[#4479A1]" title="MySQL" />
                      <span className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-black">
                        AI API
                      </span>
                      <span className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-black">
                        REST API
                      </span>
                    </div>
                    <div className="logo_gap solu_margin mt-3 flex flex-wrap items-center">
                      <SiPhp className="text-[2rem] text-[#777BB4]" title="PHP" />
                      <img src="/img/Cafe24.png" alt="Cafe24" className="h-6 w-auto" />
                    </div>
                    <div className="logo_gap git_margin mt-3 mr-1 flex flex-wrap items-center sm:mr-0">
                      <GithubIcon className="text-[2.3rem] text-black" title="GitHub" />
                      <NotionIcon className="text-[2rem] text-black" title="Notion" />
                      <VercelIcon className="text-[2rem] text-black" title="Vercel" />
                      <SiVite className="text-4xl text-[#646CFF]" title="Vite" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience mt-3 lg:mt-5">
              <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start lg:justify-start">
                <div className="education text-center lg:text-left">
                  <h3 className="resume-title text-center lg:text-left">{data[language].education.title}</h3>
                  {data[language].education.schools.map((school, index) => (
                    <div className="resume-item" key={`${school.name}-${index}`}>
                      <h4>{school.name}</h4>
                      <h5>{school.years}</h5>
                      {school.location ? (
                        <p className="lo_font">
                          <em>{school.location}</em>
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="work pt-0 text-center lg:ml-5 lg:text-left">
                  <h3 className="resume-title">{data[language].workExperience.title}</h3>
                  {data[language].workExperience.jobs.map((job, index) => (
                    <div className="resume-item" key={`${job.role}-${index}`}>
                      <h4>{job.role}</h4>
                      <h5 className="mb-0 pb-2">{job.years}</h5>
                      <p className="lo_font">
                        <em>{job.company}</em>
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-neutral-700">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
