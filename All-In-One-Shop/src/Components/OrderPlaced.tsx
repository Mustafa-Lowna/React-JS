import { useEffect, useState } from "react";
import { useCart } from "../Contexts/CartContext";

type AddressData = {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const OrderPlaced = () => {
  const [address, setAddress] = useState<AddressData | null>(null);
  const { emptyCart } = useCart();

  useEffect(() => {
    const storedAddress = localStorage.getItem("orderAddress");

    if (storedAddress) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      setAddress(parsedAddress);
    }
    emptyCart();
    const storedCart = localStorage.getItem("cart");
    if (storedAddress && storedCart) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      const parsedCart = JSON.parse(storedCart);
      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: parsedCart, address: parsedAddress }),
      })
        .then((res) => {
          if (res.ok) {
            localStorage.removeItem("cart");
            localStorage.removeItem("orderAddress");
          }
        })
        .catch((err) => {
          console.error("Failed to place order", err);
        });
    }
  }, []);

  if (!address) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center py-5">
              <i className="fas fa-exclamation-triangle text-warning fa-2x mb-3"></i>
              <h5 className="fw-bold text-dark mb-3">Order Not Found</h5>
              <p className="text-muted mb-4">Please complete the address form first.</p>
              <a href="/cart" className="btn btn-primary">Back to Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{minHeight: '100vh'}}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark mb-2">Order Confirmed!</h3>
            <p className="text-muted">Your order has been placed successfully</p>
          </div>

          <div className="card border-0 shadow-sm rounded-3" style={{pageBreakInside: 'avoid'}}>
            <div className="card-header bg-success text-white py-3 px-4">
              <h6 className="mb-0 fw-semibold">Order Confirmation</h6>
            </div>

            <div className="card-body p-4">
              <h6 className="fw-semibold mb-4">Delivery Address</h6>
              
              <div className="bg-light p-4 rounded-2 mb-3">
                <div className="mb-2">
                  <strong>Street:</strong> {address.street}
                </div>
                {address.apartment && (
                  <div className="mb-2">
                    <strong>Apartment:</strong> {address.apartment}
                  </div>
                )}
                <div className="mb-2">
                  <strong>City:</strong> {address.city}
                </div>
                <div className="mb-2">
                  <strong>State:</strong> {address.state}
                </div>
                <div className="mb-2">
                  <strong>PIN Code:</strong> {address.zipCode}
                </div>
                <div className="mb-0">
                  <strong>Country:</strong> {address.country}
                </div>
              </div>

              <div className="row align-items-center mb-4 mt-4">
                <div className="col-md-8 mb-3 mb-md-0">
                  <small className="text-muted d-block">Estimated Delivery</small>
                  <div className="fw-semibold text-success">2-3 Business Days</div>
                </div>
                <div className="col-md-4 text-md-end">
                  <span className="bg-success text-white rounded px-3 py-2">Confirmed</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-outline-success px-5 py-2 fw-semibold border-1"
                  onClick={() => window.print()}
                  style={{minWidth: '200px'}}
                >
                  <i className="fas fa-print me-2"></i>
                  Print Confirmation
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
