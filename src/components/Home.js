import React from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


export default function Home () {
    return (
      <div className="Home">
        <main className="main">
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
              />
            </a>
          </div>
          <div className="intro">
            <h1>PEACE OYEWOLE</h1>
            <p>Front-End Developer / Blogger</p>
          </div>
          <ul className="hero">
            <li>
              <a href="#">WORK</a>
            </li>
            <li>
              <a href="#">EXPERIENCE</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </main>
        {/* <foooter>
          <small>Built with ReactJS</small>
        </foooter> */}
      </div>
    );
}