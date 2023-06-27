import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, BASE_URL } from '../utils/const';
import axios from 'axios';

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const initState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function registerUser(email, password) {
    try {
      const response = await axios.post(`${BASE_URL}/users`, {
        login: email,
        password: password,
      });
      dispatch({
        type: ACTIONS.user,
        payload: response.data.user,
      });
      console.log('Регистрация прошла успешно!');
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при регистрации:', error.response.data);
    }
  }

  const value = {
    user: state.user,
    registerUser: registerUser,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
