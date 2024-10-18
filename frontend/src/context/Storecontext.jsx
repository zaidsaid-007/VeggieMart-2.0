import axios from "axios";
import { createContext, useEffect, useState,useMemo } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [catalogue, setCatalogue] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    console.log("Item added to cart:", itemId); // Debugging: Log the item added to cart
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
    }));
    console.log("Item removed from cart:", itemId); // Debugging: Log the item removed from cart
  };



  const getTotalCart = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = catalogue.find((catalogueItem) => catalogueItem._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchCatalogue = async () => {
    try {
      const response = await axios.get(`${url}/api/catalogue/list`);
      setCatalogue(response.data);
    } catch (error) {
      console.error("Error fetching catalogue:", error);
    }
  };

  useEffect(() => {
    console.log("Component mounted, fetching data...");
    async function loadData() {
      await fetchCatalogue();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    console.log("Catalogue updated:", catalogue); // Debugging: Log the updated catalogue
  }, [catalogue]);

  const contextValue = {
    catalogue,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    url,
    token,
    setToken,
    getTotalCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
