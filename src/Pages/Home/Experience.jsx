import React from 'react';
import data from "../../data/index.json";

const Experience = () => {
  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Experience</p>
        <h2 className="skills--section--heading">Companies</h2>
      </div>
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="exp-text-md" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
