import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Instructors from "./Components/Instructors";
import Courses from "./Components/Courses";
import PostList from "./Components/PostList";
import EmployeeList from "./Components/EmployeeList";
import UserList from "./Components/UserList";
import ProductList from "./Components/ProductList";
import RecipePages from "./Components/RecipePages";
import RecipeSearch from "./Components/RecipeSearch";
import CourseList5 from "./Components/CourseList5";
import CourseAdd from "./Components/CourseAdd";
import CourseEdit from "./Components/CourseEdit";
import EmployeeCard from "./Components/EmployeeCard";
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
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user-register">
                      User Registration
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employees">
                      Employee List
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/courselist">
                      Course List
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="moreMenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="moreMenu">
                      <li>
                        <Link className="dropdown-item" to="/products">
                          Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/courses">
                          Courses
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/users">
                          User List
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/recipes">
                          Recipes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/posts">
                          Post List
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/recipe-search">
                          Recipe Search
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/instructors">
                          Instructors
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <EmployeeCard
            name="Ayesha Khan"
            position="UI/UX Designer"
            department="Design"
            salary={2800}
          >
            <h4 className="text-secondary">More Info</h4>
            <p className="text-muted">
              Ayesha Khan designs modern, user-friendly interfaces and has led
              multiple successful redesign projects for the company.
            </p>
          </EmployeeCard>

          <EmployeeCard
            name="Rahul Sharma"
            position="Full Stack Developer"
            department="Engineering"
            salary={3200}
          >
            <p className="text-muted">
              Rahul Sharma works on both frontend and backend services and
              maintains the company's core web applications.
            </p>
          </EmployeeCard>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<CourseAdd />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/posts" element={<PostList />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/courselist" element={<CourseList5 />} />
              <Route path="/courseadd" element={<CourseAdd />} />
              <Route path="/edit-course/:id" element={<CourseEdit />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/recipes" element={<RecipePages />} />
              ``
              <Route path="/recipe-search" element={<RecipeSearch />} />
              <Route path="/instructors" element={<Instructors />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
