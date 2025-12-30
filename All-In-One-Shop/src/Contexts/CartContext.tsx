import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type Item = {
  id: number;
  title: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[]; 
  cartCount: number; 
  addToCart: (item: Item) => void; 
  updateCart: (itemId: number, quantity: number) => void; 
  emptyCart: () => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = (props: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (item: Item) => {
    setCart((existingCart: CartItem[]) => {
      const existingItem = existingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return existingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...existingCart, { ...item, quantity: 1 }];
    });
  };

  const updateCart = (itemId: number, newQuantity: number) => {
    setCart((existingCart: CartItem[]) => {
      return existingCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };
  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.warn("Failed to persist cart to localStorage", err);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateCart, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;