import React, { Component } from "react";

import logo from "./dic.png";
import monster from "./monster.png";
import monster2 from "./monster2.png";

import "./App.css";

import Feed from "./Feed";

function App() {
  return (
    <div className="dic-app">
      <header>
        <img src={logo} className="dic-icon" alt="dictionary icon" />
        <p className="header-p">
          Dictionary App <br />
          <span className="header-p2">If you don't know, now you know!</span>
        </p>
      </header>
      <main className="monsters">
        <div>
          <p className="dic-monster">
            DIC-MONSTER <br />
            <span className="monster-def">
              A beautiful rare creature that feeds off knowledge.
            </span>
          </p>
          <br />
          <Feed />
          <img src={monster} className="monster1" alt="monster1" />
          <img src={monster2} className="monster2" alt="monster2" />
        </div>
      </main>
      <footer>
        <p>
          <a
            className="github-link"
            href="https://github.com/ROBYN13Y/dic-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-emoji">🔗</span> Open-Sourced Code
          </a>{" "}
          |{" "}
          <a
            className="ig-link"
            href="https://www.instagram.com/robyn13y/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Robyn Young <span className="footer-emoji">👩‍💻</span>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
