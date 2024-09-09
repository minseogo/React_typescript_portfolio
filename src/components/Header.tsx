import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import '../css/main.css';
import Reactsvg from '../img/React_logo.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div id="header" className=" d-flex flex-column mt-4 ms-4">
        <div className=''>
            <h1 className="sitename mb-3">Portfolio</h1>
            <i className="header-toggle d-xl-none bi bi-list" onClick={toggleNavMenu}></i>
            <div className='d-flex flex-row'>
                <div className="profile-img col-6">
                    <img src="/img/me.jpg" alt="" className="img-fluid" />
                    <div className='info mt-3'>
                        <p className='d-flex flex-column'>내 소개 간단하게 2-3줄 내 소개 간단하게 2-3줄내 소개 간단하게
                            <span>내 소개 간단하게 2-3줄 내 소개 간단하게 2-3줄내 소개 간단하게</span>
                            <span>내 소개 간단하게 2-3줄 내 소개 간단하게 2-3줄내 소개 간단하게</span>
                        </p>
                    </div>
                </div>
                <div className="resume section d-flex flex-column col-5">
                    <div className='hello'>
                    <h3 className='d-flex flex-column'>
                        <ReactTyped
                        strings={['프론트엔드 개발자', '웹퍼블리셔']}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        />
                        고민서입니다.
                    </h3>
                    </div>
                    <div className='personal mb-5 mt-2'>
                        <ul className='list-unstyled'>
                            <li>1994. 11. 12</li>
                            <li>010 - 5042 - 9412</li>
                            <li>gominseo1112@gmail.com</li>
                            <li>https://github.com/minseogo</li>
                            <li>boggy-forgery-956</li>
                        </ul>
                    </div>
                    <div className='skills mt-5 mb-4'>
                        <h2 className="">What I Do</h2>
                        <div className="d-flex flex-column align-items-stretch">
                            <div className="skills-content">
                                <div className='d-flex align-items-center mt-1'>
                                    <div className='text-center me-3'><img className='reactlogo' src={Reactsvg} alt="React svg" /></div>
                                    <div className='text-center me-2'><img className='figmalogo' src={`${process.env.PUBLIC_URL}/img/Figma_logo.png`} alt="Figma png" /></div>
                                    <div className='text-center me-2'><img src={`${process.env.PUBLIC_URL}/img/Cafe24_logo.png`} alt="Cafe24 png" /></div>
                                    <div className='text-center'><img src={`${process.env.PUBLIC_URL}/img/Gnuboard_logo.png`} alt="Gnuboard png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='experience mt-5'>
                        {/* <h2>Experience</h2> */}
                        <div className="d-flex">
                            <div className='education'>
                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                <h4>웹퍼블리셔(UI/UX)&프론트엔드개발</h4>
                                    <h5>2024.03 ~ 2024.09</h5>
                                </div>
                                <div className="resume-item d-flex flex-column">
                                    <h4>IH LONDON</h4>
                                    <h5>2020.09 ~ 2020.11</h5>
                                    <h5>2019.04 ~ 2019.07</h5>
                                    <p className='lo_font'><em>영국, 런던</em></p>
                                </div>
                                <div className="resume-item d-flex flex-column">
                                    <h4>수원과학대학교 / 공연연기과</h4>
                                    <h5>2014.03 ~ 2018.03</h5>
                                </div>
                                <div className="resume-item">
                                    <h4>목동고등학교</h4>
                                    <h5>2010.03 ~ 2013.03</h5>
                                </div>
                            </div>
                            <div className="work pt-md-0 pt-5 ms-5">
                                <h3 className="resume-title">Work Experience</h3>
                                <div className="resume-item">
                                    <h4>온라인 MD</h4>
                                    <h5>2023.10 ~ 2024.01</h5>
                                    <p className='lo_font'><em>웹뜰 / 대한민국, 서울</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인 마케팅, 바리스타</h4>
                                    <h5>2022.10 ~ 2023.05</h5>
                                    <p className='lo_font'><em>Cocomelt / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>바리스타</h4>
                                    <h5>2022.05 ~ 2022.08</h5>
                                    <p className='lo_font'><em>Knockbox / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인MD 인턴</h4>
                                    <h5>2021.12 ~ 2022.03</h5>
                                    <p className='lo_font'><em>Globalon / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인MD</h4>
                                    <h5>2021.03 ~ 2021.09</h5>
                                    <p className='lo_font'><em>세븐제이스 / 대한민국, 경기도</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
