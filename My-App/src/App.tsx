import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Instructors from "./Components/Instructors";
import Courses from "./Components/Courses";
import Feedback from "./Components/Feedback";
function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div className="container my-3">
          <h1 className="mb-4 text-center">My React App</h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                NovaHub
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/instructors">
                      Instructors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/feedback/" element={<Feedback />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
