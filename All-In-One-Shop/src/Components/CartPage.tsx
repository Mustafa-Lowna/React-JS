import { CartItem } from "../../types";

interface CartPageProps {
  cartItems: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div>
      <h2 className="mb-3">Your Cart</h2>
      <p className="text-muted">
        Unique products: {cartItems.length} · Total items: {totalItems}
      </p>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <div>{item.title}</div>
                <small className="text-muted">
                  Qty: {item.qty}
                </small>
              </div>
              <span>
                ₹{(item.price * 85 * item.qty).toFixed(0)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
