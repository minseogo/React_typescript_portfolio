import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import '../css/main.css';
import Reactsvg from '../img/React.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/data.json';
import YouTube from 'react-youtube';

interface HeaderProps {
  language: 'kr' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'kr' | 'en'>>;
}
const Header: React.FC<HeaderProps> = ({ language,  setLanguage  }) => {
  const typedStrings = language === 'kr' 
  ? ['프론트엔드 개발자', '웹 퍼블리셔']
  : ['Frontend Developer', 'Web Publisher'];

const description = language === 'kr' 
  ? '영국 어학연수와 MD 업무를 통해 소통 능력과 실무 역량을 키웠으며, 프론트엔드 개발에 대한 흥미를 넓혔습니다. 사용자 중심의 웹 경험을 제공하며 향후 프로젝트 성공에 기여하고 싶습니다.'
  : 'Through studying in the UK and working as an MD, I developed communication skills and practical abilities. I expanded my interest in frontend development and want to contribute to the success of future projects by providing user-centered web experiences.';
  const review = language === 'kr' 
  ? '팀 프로젝트 Ugly Us에 대한 리뷰입니다.'
  : 'Review of the Team Project "Ugly Us';
  return (
    <div id="header" className="d-flex flex-column mt-sm-4 mt-1 ms-sm-4 ms-2 me-2 me-sm-0">
      <div>
        <div className='dash_f ms-md-4 ms-0 d-sm-inline-block d-flex align-items-baseline justify-content-between'>
          <h1 className="sitename mb-3">{data[language].siteName}</h1>
          <div className='d-sm-none d-flex lang_btns'>
            <button className="border-0 bg-white text-black " onClick={() => setLanguage('kr')}>KR</button>
            <button className="border-0 bg-white text-black me-4 ms-2" onClick={() => setLanguage('en')}>EN</button>
          </div>
        </div>
        <div className='d-flex flex-sm-row flex-column'>
          <div className="profile-img col-sm-6">
            <img src="/img/me.jpg" alt="" className="img-fluid" />
            <div className='info mt-3 pe-sm-4 pe-lg-0'>
              <p className='d-flex flex-column info_font text-sm-start text-center'>
                {description}
              </p>
            </div>
            <div className="youtube-player pe-sm-4 d-flex flex-sm-row flex-column align-items-center">
              <YouTube videoId="wmO7MrHiB2A" opts={{ height: '185', width: '100%' }} />
            </div>
          </div>
          <div className="resume section d-flex flex-column col-sm-5">
            <div className='hello'>
              <h3 className='d-flex flex-column'>
              {data[language].hello}
                <ReactTyped
                  strings={typedStrings}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />
                 {data[language].name}
              </h3>
            </div>
            <div className='personal mb-lg-5 mb-2 mt-2 text-sm-start text-center'>
              <ul className='list-unstyled'>
                <li>{data[language].personal.birthdate}</li>
                <li>{data[language].personal.phone}</li>
                <li>{data[language].personal.email}</li>
              </ul>
              <button
                className='info_btns border-1 bg-white text-black'
                onClick={() => window.open('https://github.com/minseogo', '_blank')}
              >
                {data[language].buttons.github}
              </button>
              <button
                className='info_btns border-1 bg-white text-black ms-2'
                onClick={() => window.open('https://www.figma.com/design/chnxRjxPKX40REZtT5p6Sl/%EB%AF%BC%EC%84%9C?node-id=0-1&t=BJScLCAEXnBR6d5a-1', '_blank')}
              >
                {data[language].buttons.figma}
              </button>
            </div>
            <div className='skills mt-5 mb-lg-4 mb-0'>
                <h2 className="text-sm-start text-center mb-3">{data[language].skills.title}</h2>
                <div className="d-flex flex-column align-items-stretch">
                    <div className="skills-content">
                        <div className=' d-flex mt-1 align-items-lg-start flex-column justify-content-evenly align-items-sm-start flex-sm-column align-items-center justify-content-sm-start '>
                            <div className='logo_gap d-flex align-items-center '>
                                <div className='text-lg-center text-start '><img className='reactlogo' src={Reactsvg} alt="React svg" /></div>
                                <div className='text-lg-center text-start '><img className='typelogo' src={`${process.env.PUBLIC_URL}/img/Type.png`} alt="Typescript png" /></div>
                                <div className='text-lg-center text-start '><img className='bootlogo' src={`${process.env.PUBLIC_URL}/img/Boots.png`} alt="Bootstrap png" /></div>
                            </div>
                            <div className='logo_gap d-flex align-items-center mt-3 solu_margin'>
                                <div className='text-lg-center text-start'><img className='sirlogo' src={`${process.env.PUBLIC_URL}/img/Sir.png`} alt="Sir png" /></div>
                                <div className='text-lg-center text-start '><img className='cafelogo' src={`${process.env.PUBLIC_URL}/img/Cafe24.png`} alt="Cafe24 png" /></div>
                            </div>
                            <div className='logo_gap d-flex align-items-center mt-3 me-1 me-sm-0 git_margin'>
                                <div className='text-lg-center text-start me-sm-1 me-0 '><img className='gitlogo' src={`${process.env.PUBLIC_URL}/img/Github.png`} alt="Github png" /></div>
                                <div className='text-lg-center text-start me-1 '><img className='figmalogo' src={`${process.env.PUBLIC_URL}/img/Figma.png`} alt="Figma png" /></div>
                            </div>
                            <div className='logo_gap d-flex align-items-center mt-md-3 mt-3 tool_margin'>
                                <div className='text-lg-center text-start me-1 '><img className='pslogo' src={`${process.env.PUBLIC_URL}/img/Ps.png`} alt="Ps png" /></div>
                                <div className='text-lg-center text-start'><img className='ailogo' src={`${process.env.PUBLIC_URL}/img/Ai.png`} alt="Ai png" /></div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience mt-lg-5 mt-3'>
              <div className="d-flex flex-lg-row flex-sm-column flex-column justify-content-sm-start justify-content-between align-items-sm-start align-items-center">
                <div className='education text-sm-start text-center'>
                  <h3 className="resume-title text-sm-start text-center">{data[language].education.title}</h3>
                  {data[language].education.schools.map((school, index) => (
                    <div className="resume-item" key={index}>
                      <h4>{school.name}</h4>
                      <h5>{school.years}</h5>
                      {school.location && <p className='lo_font'><em>{school.location}</em></p>}
                    </div>
                  ))}
                </div>
                <div className="work pt-md-0 ms-lg-5 ms-0 text-sm-start text-center">                                              
                  <h3 className="resume-title">{data[language].workExperience.title}</h3>
                  {data[language].workExperience.jobs.map((job, index) => (
                    <div className="resume-item" key={index}>
                      <h4>{job.role}</h4>
                      <h5 className='pb-2 mb-0'>{job.years}</h5>
                      <p className='lo_font'><em>{job.company}</em></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
