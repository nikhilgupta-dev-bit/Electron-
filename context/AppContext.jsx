"use client";

import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY;

  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isSeller, setIsSeller] = useState(true);
  const [cartItems, setCartItems] = useState({});

  // Dummy Fetchers (CSR Simulated)
  useEffect(() => {
    setProducts(productsDummyData);
  }, []);

  useEffect(() => {
    setUserData(userDummyData);
  }, []);

  // Add to cart
  const addToCart = (itemId) => {
    const cartData = { ...cartItems };
    cartData[itemId] = (cartData[itemId] || 0) + 1;
    setCartItems(cartData);
  };

  // Update quantity
  const updateCartQuantity = (itemId, quantity) => {
    const cartData = { ...cartItems };
    if (quantity <= 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  // Count
  const getCartCount = () =>
    Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  // Amount
  const getCartAmount = () =>
    Math.floor(
      Object.entries(cartItems).reduce((acc, [id, qty]) => {
        const product = products.find((p) => p._id === id);
        return product ? acc + product.offerPrice * qty : acc;
      }, 0) * 100
    ) / 100;

  const value = {
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    products,
    cartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Optional custom hook for consuming
export const useAppContext = () => useContext(AppContext);
