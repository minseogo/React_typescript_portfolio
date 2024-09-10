import React from 'react';
import '../css/main.css'

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { id: 1, filter: '개인 프로젝트', image: 'ck.png', icon : 'Boots.png|Sir.png', title: 'CK Gnuboard', description: '브랜드의 고급스러움과 미니멀리즘을 강조하며, 새로운 사용자 경험을 제공하기 위해 리뉴얼하고 그누보드를 기반으로 제작한 웹사이트입니다.', link: 'http://gominseo.dothome.co.kr/ck/'  },
    { id: 2, filter: '개인 프로젝트', image: 'ck.png',icon : 'Boots.png|Cafe24.png', title: 'CK Cafe24', description: '브랜드의 고급스러움과 미니멀리즘을 강조하며, 새로운 사용자 경험을 제공하기 위해 리뉴얼하고 카페24를 기반으로 제작한 웹사이트입니다.', link: 'https://minseogo.cafe24.com/'  },
    { id: 3, filter: '개인 프로젝트', image: 'ck.png', icon : 'Boots.png|Hard.png', title: 'CK', description: '브랜드의 고급스러움과 미니멀리즘을 강조하며, 새로운 사용자 경험을 제공하기 위해 리뉴얼하고 vercel 서버를 사용하여 제작한 웹사이트입니다.', link: 'https://gominseo-calvinklein.vercel.app/'  },
    { id: 4, filter: '팀 프로젝트', image: 'veg.png', icon : 'Boots.png|React.png', title: 'Ugly Us', description: '리뷰 컴포넌트를 개발 및 리뉴얼하여 사용자 맞춤형 경험과 리뷰 서비스를 제공하는 이커머스 웹사이트입니다.', link: 'https://team-project-reactuglyus.vercel.app/'  },
    { id: 5, filter: '팀 프로젝트', image: 'eclat.png', icon : '', title: 'Eclat', description: '브랜드 아이덴티티를 강화하고 사용자 친화적인 인터페이스를 제공하며, 시즌 추천, 이벤트, 리뷰 컴포넌트와 브랜드 스토리 페이지를 제작한 플랫폼형 웹사이트입니다.', link: 'https://i-web.kr/green05/'  },
  ];

  const [filter, setFilter] = React.useState<string>('All');

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.filter === filter);

  return (
    <section id="portfolio" className="portfolio section light-background mt-4">
      <div className="dash ms-4">
        <h1>Project</h1>
      </div>

      <div className="">
        <ul className="portfolio-filters">
          <li onClick={() => setFilter('All')} className={filter === 'All' ? 'filter-active' : ''}>All</li>
          <li onClick={() => setFilter('개인 프로젝트')} className={filter === '개인 프로젝트' ? 'filter-active' : ''}>개인 프로젝트</li>
          <li onClick={() => setFilter('팀 프로젝트')} className={filter === '팀 프로젝트' ? 'filter-active' : ''}>팀 프로젝트</li>
        </ul>

        <div className="row portfolio-container ms-md-6 ms-0 me-2">
          {filteredItems.map( item => (
            <div key={item.id} className="col-sm-6 portfolio-item">
              <div className="portfolio-content">
                <img src={`/img/${item.image}`} className="img-fluid" alt={item.title} />
              </div>
              <div className="portfolio-info mb-5">
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <h4 className='mb-0 d-flex'>
                    {item.title} 
                    <div className='ms-2'>
                      {item.icon.split('|').map((icon, i) => ( <img key={i} src={`/img/${icon}`} alt={`icon-${i}`} className={icon === 'Cafe24.png' ? 'cafe24-size' : 'icon-size'}  /> ))}
                    </div>  
                    {/* {
                      item.icon.split('|').map( i => <img src={i} alt={i} ></img> )
                    } */}
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
