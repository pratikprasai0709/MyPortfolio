import React from "react";

function Myprojects() {
  return (
    <section className="projects-container" id="projects" aria-labelledby="projects-title">
      <h1 id="projects-title">My Projects</h1>
      <p className="projects-intro">
        A selection of creative work I’ve designed.
      </p>
      <article className="project-card">
        <a
          className="project-preview"
          href={`${process.env.PUBLIC_URL}/poster.pdf`}
          target="_blank"
          rel="noreferrer"
          aria-label="Open the four-page early childhood hygiene poster project PDF"
        >
          <img
            src={`${process.env.PUBLIC_URL}/poster-preview.jpg`}
            alt="Preview of an illustrated early childhood hygiene poster"
            loading="lazy"
          />
        </a>
        <div className="project-details">
          <p className="project-label">Educational poster · Canva</p>
          <h2>Hygiene in Early Childhood</h2>
          <p>
            An illustrated hand-washing poster and playful activity designed
            to introduce healthy routines to young children.
          </p>
          <a
            className="project-link"
            href={`${process.env.PUBLIC_URL}/poster.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            View the four-page project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </section>
  );
}

export default Myprojects;

