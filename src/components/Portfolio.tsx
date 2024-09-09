import React from 'react';
import '../css/main.css'

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { id: 1, filter: '팀 프로젝트', image: 'veg.png', title: '팀 프로젝트', description: 'Lorem ipsum, dolor sit amet consectetur' },
    { id: 2, filter: '팀 프로젝트', image: 'eclat.png', title: '팀 프로젝트', description: 'Lorem ipsum, dolor sit amet consectetur' },
    { id: 3, filter: '개인 프로젝트', image: 'ck.png', title: '개인 프로젝트', description: 'Lorem ipsum, dolor sit amet consectetur' },
    { id: 4, filter: '개인 프로젝트', image: 'ck.png', title: '개인 프로젝트', description: 'Lorem ipsum, dolor sit amet consectetur' },
    { id: 5, filter: '개인 프로젝트', image: 'ck.png', title: '개인 프로젝트', description: 'Lorem ipsum, dolor sit amet consectetur' },
  ];

  const [filter, setFilter] = React.useState<string>('All');

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.filter === filter);

  return (
    <section id="portfolio" className="portfolio section light-background mt-4">
      <div className="">
        <h1>Project</h1>

      </div>

      <div className="">
        <ul className="portfolio-filters">
          <li onClick={() => setFilter('All')} className={filter === 'All' ? 'filter-active' : ''}>All</li>
          <li onClick={() => setFilter('개인 프로젝트')} className={filter === '개인 프로젝트' ? 'filter-active' : ''}>개인 프로젝트</li>
          <li onClick={() => setFilter('팀 프로젝트')} className={filter === '팀 프로젝트' ? 'filter-active' : ''}>팀 프로젝트</li>
        </ul>

        <div className="row portfolio-container ms-5 me-2">
          {filteredItems.map(item => (
            <div key={item.id} className="col-6 portfolio-item">
              <div className="portfolio-content">
                <img src={`/img/${item.image}`} className="img-fluid" alt={item.title} />
              </div>
              <div className="portfolio-info">
                  {/* <h4>{item.title}</h4> */}
                  <p>{item.description}</p>
                  <a href="portfolio-details.html" className="details-link">
                    <i className="bi bi-link-45deg text-black"></i>
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
