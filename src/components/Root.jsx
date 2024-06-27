import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createContext,useState } from "react";

export const productContext = createContext([])
export const CartContext = createContext([])
export default function Root() {
  //const products = useLoaderData();
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart)
  //console.log(products) 
  return (
    <productContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </productContext.Provider>
  );
}