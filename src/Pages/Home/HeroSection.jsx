import React from 'react'

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hello, I'm Mitakshi</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Technology</span>{" "}
          <br />
          Enthusiast
        </h1>
        <p className="hero--section-description">
          I have worked on MERN stack technology.
          <br />I also have hands on experience on Machine Learning using Python.
        </p>
      </div>
      <a href="https://github.com/ChandnaM/cv/raw/main/Mitakshi_Chandna_cv.pdf" download="Mitakshi_Chandna_cv.pdf">
      <button className="btn btn-primary">View CV</button>
      </a>
    </div>
    <div className="hero--section--img">
      <img src="./img/heron11.png" alt="Hero Section" />
    </div>
  </section>
  )
}

export default HeroSection;
