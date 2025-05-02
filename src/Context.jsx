import { createContext, useContext, useState, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [existence, setExistence] = useState(true);
  const [singleProduct, setSingleProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [loader, setLoader] = useState(true);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContext.Provider
      value={{ products, setProducts, category, setCategory, loader, setLoader, singleProduct, setSingleProduct, existence, setExistence, cartVisibility, setCartVisibility, cartItems, setCartItems }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
