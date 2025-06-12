import React from "react";
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <span style={{ fontWeight: 100 }}>Hi, my name is</span>{" "}
        <span style={{ fontWeight: 500 }}>An</span>.
      </h1>
      <h3 className="home__subtitle">
        <span style={{ fontWeight: 400 }}>
          I'm an independent creative developer.
        </span>
      </h3>
      <p className="home__description">
        <span style={{ fontWeight: 300 }}>
          I turn ideas into intuitive, user-friendly web experiences. <br />
          Loving the challenge of building things that work{" "}
          <em>(and sometimes breaking them to learn how they work better)</em>.
        </span>
      </p>
    </div>
  );
};

export default Data;
