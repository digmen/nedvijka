import React, { useState, useContext } from 'react';
import axios from 'axios';
import styles from './loginpag.css';
import { Navigate } from 'react-router-dom';



const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Функция для регистрации
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

  //! функция входа
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const superUserResponse = await axios.get(
        'https://vm4506017.43ssd.had.wf/api/users?limit=500000'
      );
      const superUserData = superUserResponse.data.results;

      const data = {
        login: login,
        password: password,
      };
      const response = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/token/login/',
        data
      );
      console.log('Вход выполнен успешно');
      setLoginSuccess(true);

      const user = superUserData.find((result) => result.login === login);
      if (user && user.is_superuser === false) {
        localStorage.setItem('login', data.login);
        localStorage.setItem('adminAccess', response.data.access);
        localStorage.setItem('adminRefresh', response.data.refresh);
        localStorage.setItem('id', user.id);
      } else {
        localStorage.setItem('login', user.first_name);
        localStorage.setItem('lastNameAdmin', user.last_name);
        localStorage.setItem('superUser', user.is_superuser);
        localStorage.setItem('id', user.id);
        localStorage.setItem('adminAccess', response.data.access);
        localStorage.setItem('adminRefresh', response.data.refresh);
      }
    } catch (error) {
      console.error('Ошибка входа', error);
    }
  };
  if (loginSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="lmain">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="llogin">
          <form onSubmit={handleLogin} className="lform">
            <label for="chk" aria-hidden="true">
              Войти <br /> <span>Еще не зарегистрирован ?</span>
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
