import React from "react";
import myPhoto from "../../assets/portfolio photo.png";

const Home = () => (
  <section className="container" id="home" aria-labelledby="home-title">
    <div className="section1">
      <div className="home-text">
        <h1 id="home-title">
          Hey! My name is <span className="highlight">Pratik Prasai</span>
        </h1>
        <p>
          I’m a creative developer interested in designing clear, user-friendly
          experiences and turning ideas into polished digital work.
        </p>
        <a className="btn" href="#contact">Hire Me</a>
      </div>
    </div>
    <div className="section2">
      <img src={myPhoto} alt="Pratik Prasai" fetchPriority="high" />
    </div>
  </section>
);

export default Home;

