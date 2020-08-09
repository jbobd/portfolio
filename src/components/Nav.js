import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
// SVGS
import { ReactComponent as GitHubIcon } from "../img/github-social.svg";
import { ReactComponent as LinkedInIcon } from "../img/linkedin-social.svg";

// Utils
import links from "../utils/links";
import "../styles/scss/nav.scss";

const Nav = () => {
  const cvRoute =
    "https://drive.google.com/file/d/1hO-5MH8x3ULFs_eh_kc4Vgrgnbqp-qDm/view?usp=sharing";
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [cvDisplay, setCvDisplay] = useState(false);

  const handleCv = () => {
    setCvDisplay(!cvDisplay);
  };

  const handleHamburgerState = () => {
    if (hamburgerMenu === false) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      return setHamburgerMenu(true);
    }
    setHamburgerMenu(false);
    document.body.style.overflow = "visible";
  };

  if (hamburgerMenu === true) {
    return (
      <div className="mobileMenu">
        <nav>
          <img
            className="mobileMenu__exit"
            src={require("../img/exit-icon.svg")}
            alt="Exit ixon"
            onClick={handleHamburgerState}
          ></img>
          <ul className="mobileMenu__list">
            <li
              className="mobileMenu__list-item"
              onClick={handleHamburgerState}
            >
              <NavLink className="mobileMenu__link" exact to="/">
                Home
              </NavLink>
            </li>
            <li
              className="mobileMenu__list-item"
              onClick={handleHamburgerState}
            >
              <NavLink className="mobileMenu__link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li
              className="mobileMenu__list-item"
              onClick={handleHamburgerState}
            >
              <NavLink className="mobileMenu__link" exact to="/"></NavLink>
            </li>
            <li
              className="mobileMenu__list-item mobileMenu__link"
              onClick={handleCv}
            >
              {/*     <a
                className="mobileMenu__link"
                href="https://drive.google.com/file/d/1hO-5MH8x3ULFs_eh_kc4Vgrgnbqp-qDm/view?usp=sharing"
              >
              
              </a> */}
              Resume
            </li>
            <li
              className={`mobileMenu__list-item ${
                cvDisplay ? "cvList-mobile" : "cvList-disable"
              }`}
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="mobileMenu__link"
                href="https://drive.google.com/file/d/1hO-5MH8x3ULFs_eh_kc4Vgrgnbqp-qDm/view?usp=sharing"
              >
                Spanish
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <nav className="menu">
      <div className="menu__left">
        <NavLink to="/">
          <img
            className="menu__icon"
            src={require("../img/juan-icon.png")}
            alt="Juan Bobadilla"
          ></img>
        </NavLink>
        <p className="menu__title">
          <span className="menu__title-head">Juan Bobadilla</span>
          <span className="menu__title-subhead">Software Development</span>
        </p>
        <MediaQuery minWidth={1000}>
          <ul className="menu__list">
            <li className="menu__list-item menu__list-about">
              <NavLink
                activeClassName="menu__link-selected"
                exact
                to="/"
                className="menu__link"
              >
                Home
              </NavLink>
            </li>
            <li className="menu__list-item menu__list-projects">
              <NavLink
                activeClassName="menu__link-selected"
                exact
                to="/projects"
                className="menu__link"
              >
                Projects
              </NavLink>
            </li>
            <li className="menu__list-item" onClick={handleCv}>
              <span className="menu__list-resume">Resume</span>
              <div className={`${cvDisplay ? "cvList" : "cvList-disable"}`}>
                <ul>
                  <li>
                    <a rel="noopener noreferrer" target="_blank" href={cvRoute}>
                      Spanish
                    </a>
                  </li>
                  {/*    <li>
                    <a href={cvRoute}>English</a>
                  </li> */}
                </ul>
              </div>
            </li>
            <li className="menu__list-item menu__list-">
              <NavLink
                activeClassName="menu__link-selected"
                exact
                to="/"
                className="menu__link"
              ></NavLink>
            </li>
          </ul>
        </MediaQuery>
      </div>
      <div className="menu__right">
        <MediaQuery minWidth={1000}>
          <ul className="menu__social">
            <li className="menu__social-item">
              <a className="menu__social-link" href={links.lance.linkedin}>
                <LinkedInIcon />
              </a>
            </li>
            <li className="menu__social-item">
              <a className="menu__social-link" href={links.lance.github}>
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <img
            className="menu__hamburger-icon"
            src={require("../img/hamburger-icon.svg")}
            alt="Mobile menu button"
            onClick={handleHamburgerState}
          ></img>
        </MediaQuery>
      </div>
    </nav>
  );
};

export default Nav;
