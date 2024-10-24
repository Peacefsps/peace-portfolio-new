import React from 'react';
import '../styles/Home.css';
import Icons from '../components/Icons';
import { Link } from 'react-router-dom';



export default function Home () {
    return (
      <div className="Home">
        <main className="main">
          <Icons />
          <div className="intro">
            <h1>PEACE OYEWOLE</h1>
            <p>Front-End Developer / Blogger</p>
          </div>
          <nav className="hero">
              <ul>
                <li>
                  <Link to="/Work">WORK</Link>
                </li>
                <li>
                  <Link to="/Experience">EXPERIENCE</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
                <li>
                  <a href="https://peaceblogsite.wordpress.com/">BLOG</a>
                </li>
              </ul>
          </nav>
        </main>
        {/* <foooter>
          <small>Built with ReactJS</small>
        </foooter> */}
      </div>
    );
}