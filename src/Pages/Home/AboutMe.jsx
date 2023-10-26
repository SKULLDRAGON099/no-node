export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            {/* <p className="section--title">About</p> */}
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I am currently pursuing a B.E. degree in Electrical & Computer Engineering at Thapar Institute of Engineering & Technology, current CGPA: 9.15. 
            </p>
            <p className="hero--section-description">
            I have gained valuable industry exposure during my internship at Accenture, where I worked as an Advanced Application Engineering Analyst. I played a crucial role in frontend development, leveraging ReactJS to design and implement various components. Additionally, I skillfully utilized the Material-UI library to enhance the user experience by creating high-quality and user-friendly components
            </p>
          </div>
        </div>
      </section>
    );
  }