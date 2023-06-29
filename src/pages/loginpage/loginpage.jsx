import React, { useState } from 'react';
import axios from 'axios';
import styles from './loginpage.css';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      login: email,
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

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form className="form">
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Имя"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Пароль"
              required=""
            />
            <button>Войти</button>
          </form>
        </div>

        <div className="register">
          <form onSubmit={handleSubmit} className="form">
            <label for="chk" aria-hidden="true">
              Регистрации
            </label>
            <input
              className="input"
              placeholder="Имя"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              className="input"
              placeholder="Пароль"
              type={showPass ? 'text' : 'password'}
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
