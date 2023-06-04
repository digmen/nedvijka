import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, API, BESTAPI } from '../utils/const';
import axios from 'axios';

const productContext = createContext();

export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  products: [],
  oneProduct: null,
  bestproducts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.bestproducts:
      return { ...state, bestproducts: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProduct() {
    try {
      const resProduct = await axios.get(API);
      dispatch({
        type: ACTIONS.products,
        payload: resProduct.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function getOneProduct(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getBestProduct() {
    try {
      const resBestProduct = await axios.get(BESTAPI);
      dispatch({
        type: ACTIONS.bestproducts,
        payload: resBestProduct.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    getProduct,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    getBestProduct,
    bestproducts: state.bestproducts,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
