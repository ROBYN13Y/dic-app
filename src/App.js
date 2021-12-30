import logo from "./dic.png";
import "./App.css";

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
