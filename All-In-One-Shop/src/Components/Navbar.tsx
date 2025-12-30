import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

function Navbar() {
  const context = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm border-bottom bg-white px-3 px-lg-4 py-3 z-50">
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold fs-4 lh-1 text-dark text-decoration-none"
            to="/"
          >
            <i className="fas fa-store me-2 text-success"></i>
            All In One Shop
          </Link>

          <button
            className="navbar-toggler navbar-toggler-right border-0 p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold px-3 py-2 rounded-3"
                  to="/"
                  onClick={() => {
                    const navbarCollapse = document.getElementById('navbarResponsive');
                    if (navbarCollapse) {
                      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                      });
                      bsCollapse.hide();
                    }
                  }}
                >
                  <i className="fas fa-th-large me-1"></i>
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold px-3 py-2 rounded-3 position-relative d-flex align-items-center"
                  to="/cart"
                  onClick={() => {
                    const navbarCollapse = document.getElementById('navbarResponsive');
                    if (navbarCollapse) {
                      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                      });
                      bsCollapse.hide();
                    }
                  }}
                >
                  Cart 🛒
                  {context.cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white small px-2 py-1 shadow-sm">
                      {context.cartCount > 99 ? "99+" : context.cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ height: "80px" }}></div>
    </>
  );
}

export default Navbar;
