import React from 'react';
import { ReactTyped } from 'react-typed';
import '../css/main.css';
import {
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiNotion,
  SiVercel,
} from 'react-icons/si';
import data from '../data/data.json';
import YouTube from 'react-youtube';

type IconComponent = React.ComponentType<{ className?: string; title?: string }>;
const ReactIcon = SiReact as IconComponent;
const TypescriptIcon = SiTypescript as IconComponent;
const BootstrapIcon = SiBootstrap as IconComponent;
const TailwindIcon = SiTailwindcss as IconComponent;
const MysqlIcon = SiMysql as IconComponent;
const GithubIcon = SiGithub as IconComponent;
const NotionIcon = SiNotion as IconComponent;
const VercelIcon = SiVercel as IconComponent;

interface HeaderProps {
  language: 'kr' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'kr' | 'en'>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const notionLinks: Record<'kr' | 'en', string> = {
    kr: 'https://boggy-forgery-956.notion.site/1014eece51c480a4a96cd75198f2e8c2?source=copy_link',
    en: 'https://boggy-forgery-956.notion.site/Minseo-Go-Portfolio-3194eece51c48072bbf6e33a19e4dd72?source=copy_link',
  };

  const typedStrings =
    language === 'kr'
      ? ['프론트엔드 개발자']
      : ['Frontend Developer'];

  const description =
    language === 'kr'
      ? '영국 어학연수를 통해 소통 능력과 유연한 사고를 기르고, 프론트엔드 개발 경험을 통해 문제 해결력과 구현 역량을 강화했습니다. | 사용자 관점에서 고민하고 완성도 높은 결과물을 만들어내는 개발자로 성장하고 있으며, 프로젝트 성과에 실질적으로 기여하는 프론트엔드 개발자가 되고자 합니다.'
      : "Through language study in the UK, I developed communication skills and adaptable thinking, and through front-end development experience I strengthened my problem-solving and implementation capabilities. | I am growing into a developer who thinks from the user's perspective and delivers high-quality outcomes, and I aim to be a front-end developer who contributes tangibly to project performance.";

  return (
    <header id="header" className="ml-2 mr-2 mt-1 flex flex-col sm:ml-4 sm:mr-0 sm:mt-4">
      <div>
        <div className="dash_f ml-0 flex items-baseline justify-between md:ml-4 sm:inline-block">
          <h1 className="sitename mb-3 text-3xl font-medium leading-none md:text-4xl">{data[language].siteName}</h1>
          <div className="lang_btns flex sm:hidden">
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

        <div className="flex flex-col sm:flex-row">
          <div className="profile-img sm:w-1/2">
            <img src="/img/me.jpg" alt="Profile portrait of Minseo Go" className="h-auto w-full" />
            <div className="info mt-3 sm:pr-4 lg:pr-0">
              <p className="info_font flex flex-col text-center sm:text-left">
                {description.split('|').map((item, index) => (
                  <React.Fragment key={`${item}-${index}`}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div
              className="youtube-player flex flex-col items-center sm:flex-row sm:pr-4"
              role="region"
              aria-label="Introduction video"
            >
              <YouTube videoId="wmO7MrHiB2A" opts={{ height: '185', width: '100%' }} />
            </div>
          </div>

          <div className="resume section flex flex-col sm:w-5/12">
            <div className="hello">
              <h3 className="flex flex-col">
                {data[language].hello}
                <ReactTyped strings={typedStrings} typeSpeed={70} backSpeed={50} loop />
                {data[language].name}
              </h3>
            </div>

            <div className="personal mt-2 mb-2 text-center sm:text-left lg:mb-5">
              <ul className="mb-2 list-none p-0">
                <li>{data[language].personal.birthdate}</li>
                <li>{data[language].personal.email}</li>
              </ul>
              <button
                className="info_btns border border-black bg-white px-2 py-1 text-black"
                onClick={() => window.open('https://github.com/minseogo', '_blank')}
                type="button"
                aria-label="Open GitHub profile in a new tab"
              >
                {data[language].buttons.github}
              </button>
              {/* 
              <button
                className="info_btns ml-2 border border-black bg-white px-2 py-1 text-black"
                onClick={() =>
                  window.open(
                    'https://www.figma.com/design/chnxRjxPKX40REZtT5p6Sl/%EB%AF%BC%EC%84%9C?node-id=0-1&t=BJScLCAEXnBR6d5a-1',
                    '_blank'
                  )
                }
                type="button"
                aria-label="Open Figma design in a new tab"
              >
                {data[language].buttons.figma}
              </button>
              */}
              <button
                className="info_btns ml-2 border border-black bg-white px-2 py-1 text-black"
                onClick={() => window.open(notionLinks[language], '_blank')}
                type="button"
                aria-label="Open Notion page in a new tab"
              >
                Notion
              </button>
            </div>

            <div className="skills mt-5 mb-0 lg:mb-4">
              <h2 className="mb-3 text-center sm:text-left">{data[language].skills.title}</h2>
              <div className="flex flex-col items-stretch">
                <div className="skills-content">
                  <div className="mt-1 flex flex-col items-center justify-evenly sm:items-start sm:justify-start lg:items-start">
                    <div className="logo_gap flex items-center">
                      <ReactIcon className="text-[2.1rem] text-[#61DAFB]" title="React" />
                      <TypescriptIcon className="text-[2rem] text-[#3178C6]" title="TypeScript" />
                      <BootstrapIcon className="text-[2.1rem] text-[#7952B3]" title="Bootstrap" />
                      <TailwindIcon className="text-[2.1rem] text-[#38BDF8]" title="Tailwind CSS" />
                    </div>
                    <div className="logo_gap mt-3 flex items-center">
                      <MysqlIcon className="text-[2rem] text-[#4479A1]" title="MySQL" />
                      <span className="text-sm font-semibold tracking-wide text-black">AI API</span>
                      <span className="text-sm font-semibold tracking-wide text-black">REST API</span>
                    </div>
                    <div className="logo_gap solu_margin mt-3 flex items-center">
                      <img src={`${process.env.PUBLIC_URL}/img/Sir.png`} alt="SIR png" className="h-7 w-auto" />
                      <img src={`${process.env.PUBLIC_URL}/img/Cafe24.png`} alt="Cafe24 png" className="h-6 w-auto" />
                    </div>
                    <div className="logo_gap git_margin mt-3 mr-1 flex items-center sm:mr-0">
                      <GithubIcon className="mr-0 text-[2.3rem] text-black sm:mr-1" title="GitHub" />
                      {/* <img src={`${process.env.PUBLIC_URL}/img/Figma.png`} alt="Figma png" className="mr-1 h-9 w-auto" /> */}
                      <NotionIcon className="mr-1 text-[2rem] text-black" title="Notion" />
                      <VercelIcon className="ml-1 text-[2rem] text-black" title="Vercel" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience mt-3 lg:mt-5">
              <div className="flex flex-col items-center justify-between sm:flex-col sm:items-start sm:justify-start lg:flex-row">
                <div className="education text-center sm:text-left">
                  <h3 className="resume-title text-center sm:text-left">{data[language].education.title}</h3>
                  {data[language].education.schools.map((school, index) => (
                    <div className="resume-item" key={index}>
                      <h4>{school.name}</h4>
                      <h5>{school.years}</h5>
                      {school.location && (
                        <p className="lo_font">
                          <em>{school.location}</em>
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="work pt-0 text-center sm:text-left lg:ml-5">
                  <h3 className="resume-title">{data[language].workExperience.title}</h3>
                  {data[language].workExperience.jobs.map((job, index) => (
                    <div className="resume-item" key={index}>
                      <h4>{job.role}</h4>
                      <h5 className="mb-0 pb-2">{job.years}</h5>
                      <p className="lo_font">
                        <em>{job.company}</em>
                      </p>
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
};

export default Header;


