import React from "react";
import "./about.css";
import { IoDocumentAttachOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About.</h2>
      <span className="about__subtitle">
        A little about me and my background.
      </span>
      <div className="about__container container grid">
        {/* <img src={AboutImg} alt="about" className="about__img" /> */}
        <div className="about__data">
          <p className="about__description">
            Growing up on the lush western slopes of the Western Ghats, in
            Kerala’s culturally rich landscapes, I developed a deep appreciation
            for tech, art and culture. Hello, I’m Ananthu. I'm a software
            developer with expertise in JavaScript, ReactJS and Java Spring. I
            build user-centric solutions that balance functionality, aesthetics,
            and accessibility, all backed by solid research. <br />
            My fascination with coding began in college, where I discovered the
            thrill of crafting innovative solutions. I challenge the status quo
            by envisioning smarter, more strategic possibilities. Through system
            design, problem-solving, and continuous learning, I stay focused on
            long-term improvement and innovation. If you're looking for a
            dedicated and motivated web developer with a strong foundation in
            data structures and algorithms, I’d love to connect.
          </p>
          <p className="about__description">
            Minimalist approach: Less, but better. I believe in curating tools,
            ideas, and experiences that promote a joyful, intentional lifestyle,
            celebrating clarity and peace over excess. <br />
            Beyond coding, you’ll often find me playing cricket or racquet
            sports or occasionally challenging someone to a game of chess (If
            you're up for it, click the horse icon and send an invite. I’ll join
            in, or we’ll set a time.)
          </p>
          <p className="about__description">
            I’m also passionate about photography, especially vintage 35mm film.
            I’ll be updating this space soon with a full About page and a
            gallery of my favourite clicks. Until then, thanks for stopping by.
          </p>
          <a
            download=""
            href="https://drive.google.com/file/d/1gLOIqL72YkeQZzw8hZcoC8g7Wtogn_Q_/view?usp=drive_link"
            className="resume_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
            <IoDocumentAttachOutline className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
