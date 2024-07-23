import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import "./style/App.css";

function App() {
  return (
    <div className="app">
      {/* eslint-disable */}
      <div className="nav-menu-items">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1HiWjAGNcKjxoN5Ke5-bG9mL0qq7Eqkwo/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
