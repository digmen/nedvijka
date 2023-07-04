import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, BASE_URL } from '../utils/const';
import axios from 'axios';

const productContext = createContext();

export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  products: [],
  oneProduct: null,
  review: [],
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

  async function getOneProduct(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/apartment/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getBestProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/apartment/`);
      const filteredProducts = data.results.filter(
        (product) => product.best === true
      );
      dispatch({
        type: ACTIONS.bestproducts,
        payload: filteredProducts,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/apartment/`);
      const Products = data.results.filter((product) => product.best === false);
      dispatch({
        type: ACTIONS.products,
        payload: Products,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getReview() {
    try {
      const { data } = await axios.get(`${BASE_URL}/review/`);
      dispatch({
        type: ACTIONS.review,
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    getReview,
    review: state.review,
    getBestProducts,
    bestproducts: state.bestproducts,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
