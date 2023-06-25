import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../utils/const';
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

  // Функция регистрации пользователя
  async function registerUser(email, password) {
    try {
      const response = await axios.post('/api/register', {
        email: email,
        password: password,
      });

      // Обновление состояния пользователя
      dispatch({
        type: ACTIONS.user,
        payload: response.data.user,
      });

      // Дополнительные действия после успешной регистрации
      console.log('Регистрация прошла успешно!');
      console.log(response.data);
    } catch (error) {
      // Обработка ошибки при регистрации
      console.error('Ошибка при регистрации:', error.response.data);
    }
  }

  // Значение контекста, доступное для дочерних компонентов
  const value = {
    user: state.user,
    registerUser: registerUser,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
