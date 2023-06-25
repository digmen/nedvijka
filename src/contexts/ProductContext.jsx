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
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.review:
      return { ...state, review: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getOneProduct(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/apartment/`);
      dispatch({
        type: ACTIONS.products,
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getReview() {
    try {
      const { data } = await axios.get(`${BASE_URL}/review/`);
      console.log(data);
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
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
