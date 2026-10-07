import React from "react";

function About() {
  return (
    <section className="about-container" id="about" aria-labelledby="about-title">
      <div className="check">
        <h1 id="about-title">About Me</h1>
        <div className="about-paragraph">
          <p>
            I’m interested in how thoughtful design and technology come
            together to make digital experiences clear, useful, and easy to
            use. My areas of focus include user interface design, web
            development, and desktop applications.
          </p>
        </div>
        <div className="item-section">
          <article className="items">
            <h2>🎨 UI/UX Design</h2>
            <p>Explore layouts and user flows that make digital products easier to understand.</p>
          </article>
          <article className="items">
            <h2>🌐 Web Development</h2>
            <p>Build responsive websites with a clear layout and straightforward navigation.</p>
          </article>
          <article className="items">
            <h2>💻 Desktop Application Development</h2>
            <p>Create practical desktop interfaces designed around everyday tasks.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;

