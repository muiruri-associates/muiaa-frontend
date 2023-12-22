import React, { useState, createContext } from "react";
import { productCardData } from "./ProductData";
import PropTypes from "prop-types";

ProductContextProvider.propTypes = {
  children: PropTypes.object,
};
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [data, setData] = useState(productCardData);

  return (
    <ProductContext.Provider value={{ contextData: [data, setData] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
