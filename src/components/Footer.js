import React from "react";
import { NavLink } from "react-router-dom";
// SVGS
import { ReactComponent as GitHubIcon } from "../img/github-social.svg";
import { ReactComponent as LinkedInIcon } from "../img/linkedin-social.svg";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer__left">
        <div className="footer__lance">
          <ul className="footer__socials">
            <li className="footer__socials-item">
              <a className="footer__socials-link" href={props.github}>
                <GitHubIcon />
              </a>
            </li>
            <li className="footer__socials-item">
              <a className="footer__socials-link" href={props.linkedin}>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__right">
        <div>
          <h4 className="footer__right-description">Navigate</h4>
        </div>
        <div>
          <ul className="footer__navigation">
            <li className="footer__navigation-item">
              <NavLink
                className="menu__link"
                activeClassName="menu__link-selected"
                exact={true}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="footer__navigation-item">
              <a className="menu__link" href={props.cvRoute}>
                Resume
              </a>
            </li>
            <li className="footer__navigation-item">
              <NavLink
                className="menu__link"
                activeClassName="menu__link-selected"
                exact={true}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
