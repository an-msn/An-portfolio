import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { RiWechatLine } from "react-icons/ri";
import { FaChessKnight } from "react-icons/fa";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://x.com/_anmsn_"
        className="home__social-icon"
        target="_blank"
      >
        <FiTwitter />
      </a>
      <a
        href="https://www.github.com/an-msn/"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ananthu-n-ab289a2a3"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
      <a href="#contact" className="home__social-icon">
        <RiWechatLine />
      </a>
      <a
        href="https://link.chess.com/play/gpJXkh"
        className="home__social-icon"
        target="_blank"
      >
        <FaChessKnight />
      </a>
    </div>
  );
};

export default Social;
