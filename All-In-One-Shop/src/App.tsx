import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div className="container my-3">
          <h1 className="mb-4 text-center">All In One Shop</h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
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
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/products" element={<ProductList />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
