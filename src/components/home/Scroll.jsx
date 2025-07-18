import React from "react";
import { SiScrollreveal } from "react-icons/si";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const Scroll = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <SiScrollreveal className="home__scroll-mouse" />

        <span className="home__scroll-name" style={{ fontWeight: 400 }}>
          Scroll
        </span>
        <HiOutlineArrowSmDown className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default Scroll;
