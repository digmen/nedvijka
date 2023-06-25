import React, { useState } from 'react';
import loginstyle from './loginpage.module.css';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    // register(credentials);
  };

  // if (user) {
  //   return <Navigate replace to="/" />;
  // }

  return (
    <>
      <div className={loginstyle.container}>
        <span>Регистрация</span>
        <form onSubmit={handleSubmit}>
          <div className={loginstyle.inp_login}>
            <input
              placeholder="Почта/Email"
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Пароль"
              type={showPass ? 'text' : 'password'}
              required
              value={password}
              autocomplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={() => setShowPass(!showPass)}>
            {showPass ? 'Скрыть' : 'Показать'}
          </button>
          <button type="submit">Зарегистрироваться</button>
          <div>
            <a href="#">Забыли пароль?</a>
            <a href="#">Уже зарегистрированы?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
