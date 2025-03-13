import React, { createContext, useContext } from "react";

// Create context with a default value
const PriceContext = createContext("₦");

// Provider component
export const PriceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PriceContext.Provider value="₦">{children}</PriceContext.Provider>;
};

// Custom hook to use the currency
export const useCurrency = () => useContext(PriceContext);
