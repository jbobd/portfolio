import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutContent">
        <div className="aboutPortfolio">
          <MediaQuery minWidth={1001}>
            <img
              alt="Calm, zen workspace built for productivity"
              className="homeContent__cam"
              src={require("../img/camara.jpg")}
            ></img>
          </MediaQuery>
        </div>
        <div className="aboutContent__info">
          <div className="aboutContent__bio">
            <h2 className="subtitle aboutContent__bio-subtitle aboutContent__bio-subtitle-1">
              My office is everywhere
            </h2>
            <p className="aboutContent__info-bio aboutContent__bio-body-1">
              <p className="homeContent__p3">
                I have worked two and a half years in Europe, where I gained a
                lot of experiences and new perspectives, So I am very
                experienced in working with people from different countries and
                places.
              </p>
              <p className="homeContent__p3">
                I am also a hobbyst photographer!
              </p>
            </p>
          </div>
          <div className="aboutContent__skills">
            <h2 className="subtitle aboutContent__skills-subtitle aboutContent__skills-subtitle-2">
              Skills
            </h2>
            <div className="skills">
              <ul className="skills__frontEnd">
                <li className="skills__frontEnd-title">
                  <b>Front-End Development</b>
                </li>
                <li className="skills__frontEnd-item">JavaScript</li>
                <li className="skills__frontEnd-item">React</li>
                <li className="skills__frontEnd-item">React Hooks</li>
                <li className="skills__frontEnd-item">HTML + CSS +S CSS</li>
                <li className="skills__frontEnd-item">GraphQL</li>
              </ul>
              <ul className="skills__backEnd">
                <li className="skills__backEnd-title">
                  <b>Back-end Development</b>
                </li>
                <li className="skills__backEnd-item">Node.js + Express</li>
                <li className="skills__backEnd-item">REST API's</li>
                <li className="skills__backEnd-item">
                  MongoDB, and the main realational databases
                </li>
                <li className="skills__backEnd-item">
                  Sequelize, mongoose, Firebase
                </li>
              </ul>
              <ul className="skills__qa">
                <li className="skills__qa-title">
                  <b>Languages</b>
                </li>
                <li className="skills__qa-item">Spanish</li>
                <li className="skills__qa-item">English</li>
                <li className="skills__qa-item">French</li>
                <li className="skills__qa-item">Catalan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
