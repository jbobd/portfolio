import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="homeContent__main">
          <h1 className="homeContent__main-title">About me</h1>
          <p className="homeContent__main-body body-text">
            I'm Juan, a web developer, now based in Buenos Aires Argentina.
            <p className="homeContent__p2">
              I have 8+ years working in IT, and now I am searching for a new
              challenge.
            </p>
            <h2 className="subtitle homeContent__main-subtitle">
              always striving for improving myself.
            </h2>
            During all these years I have been working as a database
            administrator; now I am currently chasing my new work challenge and
            desire of becoming a Frontend developer, for which I have been doing
            multiple courses and personal projects.
          </p>
          <Link to="/projects">
            <button className="project__links-github">Click and see my portfolio!</button>
          </Link>
        </div>
        <MediaQuery minWidth={1001}>
          <img
            alt="Calm, zen workspace built for productivity"
            className="homeContent__img"
            src={require("../img/home-page.png")}
          ></img>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Landing;
