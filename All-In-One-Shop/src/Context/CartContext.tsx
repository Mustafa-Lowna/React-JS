import { createContext, useContext, useState, type ReactNode } from "react";

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
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider =(props: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartCount = cart.reduce((total, item)=> total + item.quantity, 0);

  const addToCart =(item:Item)=>{
    setCart((exisitingCart: CartItem[])=>[...exisitingCart, {...item, quantity:1}]);

    return(
        <CartContext.Provider value={{cart,cartCount,addToCart}} > {props.children}</CartContext.Provider>
    );
    
  };

export default CartContext;
