import React from "react";
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <span>An</span>
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a
              href="https://link.chess.com/play/gpJXkh"
              className="footer__link"
              target="_blank"
            >
              Queen's Gambit
            </a>
          </li>
          <li className="footer__separator">|</li>
          <li>
            <a href="#contact" className="footer__link">
              Get in touch
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://x.com/_anmsn_"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/ananthu-n-ab289a2a3"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a> */}
        </div>
        <span className="footer__copy">© MMXXV. Ananthu N.</span>
      </div>
    </footer>
  );
};

export default Footer;
