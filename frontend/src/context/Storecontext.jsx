import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [catalogue, setCatalogue] = useState([]);

  const addToCart =async (itemId) => {
    if (!cartItems[itemId]){
    setCartItems((prev) => ({...prev,[itemId]: (prev[itemId] || 0) + 1,}))
    console.log("Item added to cart:", itemId)}// Debugging: Log the item added to cart
    else{
      setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1,}))
    }
    if (token){
      await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev)=> ({...prev,[itemId]: prev[itemId] - 1,}))
    if (token){
      await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
  }
}



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
