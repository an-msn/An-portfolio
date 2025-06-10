import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";
import Avatar from "./avatar";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <Data />
            <Social />
            <Scroll />
          </div>
          <div className="home__avatar-wrapper">
            <Avatar className="home__avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
