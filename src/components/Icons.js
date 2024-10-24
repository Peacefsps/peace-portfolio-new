import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Home.css';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
    return (
        <div className="icons">
          <a href="https://twitter.com/Peacefsps">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/Peacefsps">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/peace-oyewole-a67131127/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/ikira_by_tinu/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
    );
}