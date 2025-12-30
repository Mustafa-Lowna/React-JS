import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

const Cart = () => {
  const cartContext = useCart();
  const total = cartContext.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDeleteItem = (id: number | string) => {
    if (window.confirm("Remove this item from cart?")) {
      cartContext.updateCart(id as any, 0);
    }
  };

  if (cartContext.cart.length === 0)
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center p-5 border rounded-3 shadow-sm">
              <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
              <h4 className="fw-bold text-dark mb-3">Your cart is empty</h4>
              <p className="text-muted mb-4">Add items to get started</p>
              <Link to="/" className="btn btn-success px-4 py-2">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold mb-0">Shopping Cart</h3>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm px-3 "
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to clear the cart?")
                ) {
                  cartContext.emptyCart();
                }
              }}
            >
              <i className="fas fa-trash me-1"></i>Clear Cart
            </button>
          </div>

          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th style={{ padding: "1rem" }}>Product</th>
                    <th className="text-center" style={{ padding: "1rem" }}>
                      Qty
                    </th>
                    <th className="text-end" style={{ padding: "1rem" }}>
                      Price
                    </th>
                    <th className="text-end" style={{ padding: "1rem" }}>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartContext.cart.map((item, index) => (
                    <tr key={item.id || index}>
                      <td style={{ padding: "1rem", verticalAlign: "middle" }}>
                        <div className="d-flex align-items-center gap-2">
                          <div className="bg-light rounded p-2 flex-shrink-0">
                            <i className="fas fa-box text-muted"></i>
                          </div>
                          <div className="flex-grow-1">
                            <div className="fw-semibold mb-1">{item.title}</div>
                            <small className="text-muted d-block">
                              Unit price: ${item.price}
                            </small>
                          </div>
                          <button
                            type="button"
                            className="p-2 bg-white border border-danger rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0"
                            style={{
                              width: "36px",
                              height: "36px",
                              lineHeight: "1",
                            }}
                            onClick={() => handleDeleteItem(item.id)}
                            title="Remove item"
                          >
                            <i
                              className="bi bi-trash"
                              style={{ fontSize: "14px", color: "#dc3545" }}
                            ></i>
                          </button>
                        </div>
                      </td>
                      <td
                        className="text-center py-4"
                        style={{ verticalAlign: "middle" }}
                      >
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              cartContext.updateCart(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 bg-light rounded fw-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              cartContext.updateCart(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td
                        className="text-end py-4 fw-semibold"
                        style={{ verticalAlign: "middle" }}
                      >
                        ${item.price.toFixed(2)}
                      </td>
                      <td
                        className="text-end py-4 fw-bold text-success"
                        style={{ verticalAlign: "middle" }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <Link to="/" className="btn btn-outline-secondary px-4 py-2 me-3">
                ← Continue Shopping
              </Link>
            </div>
            <div className="col-md-5 text-end">
              <div className="card border-0 shadow-sm p-4 rounded-3">
                <div className="d-flex justify-content-between mb-3">
                  <span>Total ({cartContext.cart.length} items):</span>
                  <span className="fw-bold fs-5">${total.toFixed(2)}</span>
                </div>
                <Link
                  to="/address"
                  className="btn btn-success w-100 py-3 fw-bold"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
