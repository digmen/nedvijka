import React, { useState } from 'react';
import axios from 'axios';
import styles from './loginpag.css';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      login: login,
      password: password,
    };

    try {
      const response = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/users/',
        data
      );

      if (response.status >= 200 && response.status < 300) {
        console.log('Регистрация прошла успешно');
        setRegistrationSuccess(true);
      } else {
        console.error('Ошибка регистрации');
      }
    } catch (error) {
      console.error('Ошибка соединения', error);
    }
  };

  if (registrationSuccess) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Запрос GET для получения данных суперпользователя
      const superUserResponse = await axios.get(
        'https://vm4506017.43ssd.had.wf/api/users?limit=10000000'
      );
      const superUserData = superUserResponse.data.results;

      // Запрос POST для выполнения входа
      const data = {
        login: login,
        password: password,
      };
      const response = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/token/login/',
        data
      );
      // Обработка успешного входа
      console.log('Вход выполнен успешно', response);
      setLoginSuccess(true);

      // Проверка, является ли пользователь суперпользователем

      if (superUserData === false) {
        console.log('Пользователь - суперпользователь');
        // Действия для суперпользователя
      } else {
        console.log('Пользователь - обычный пользователь');
        // Действия для обычного пользователя
      }
    } catch (error) {
      // Обработка ошибок входа
      console.error('Ошибка входа', error);
    }
    // if (loginSuccess) {
    //   return <Navigate to="/" />;
    // }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     login: login,
  //     password: password,
  //   };
  //   try {
  //     const response = await axios.post(
  //       'https://vm4506017.43ssd.had.wf/api/token/login/',
  //       data
  //     );
  //     localStorage.setItem('access', response.data.access);
  //     localStorage.setItem('refresh', response.data.refresh);
  //     localStorage.setItem('login', data.login);

  //     if (response.status >= 200 && response.status < 300) {
  //       console.log('Вход выполнен успешно', response);
  //       setLoginSuccess(true);
  //       const isSuperUser = response.data.is_superuser === true;
  //       if (
  //         isSuperUser &&
  //         response.data.login === data.login &&
  //         response.data.password === data.password
  //       ) {
  //         console.log('Пользователь - суперпользователь');
  //         return <Navigate to="/" />;
  //       } else {
  //         console.log('Пользователь - обычный пользователь');
  //         return <Navigate to="/" />;
  //       }
  //     } else {
  //       console.error('Ошибка входа', response);
  //     }
  //   } catch (error) {
  //     console.error('Ошибка соединения', error);
  //   }
  // };

  // if (loginSuccess) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="lmain">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="llogin">
          <form onSubmit={handleLogin} className="lform">
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="linput"
              name="email"
              placeholder="Имя"
              required=""
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className="linput"
              type="password"
              name="pswd"
              placeholder="Пароль"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Войти</button>
          </form>
        </div>

        <div className="lregister">
          <form onSubmit={handleSubmit} className="lform">
            <label for="chk" aria-hidden="true">
              Регистрации
            </label>
            <input
              className="linput"
              placeholder="Имя"
              value={login}
              autoComplete="username"
              onChange={(e) => setLogin(e.target.value)}
              required=""
            />
            <input
              className="linput"
              placeholder="Пароль"
              required
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
