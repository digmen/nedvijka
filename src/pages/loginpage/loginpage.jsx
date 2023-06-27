import React, { useState } from 'react';
import axios from 'axios';
import loginstyle from './loginpage.module.css';
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
    <div className={loginstyle.container}>
      <form className={loginstyle.login} onSubmit={handleSubmit}>
        <span>Регистрация</span>
        <div className={loginstyle.inp_login}>
          <input
            placeholder="Почта/Email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Пароль"
            type={showPass ? 'text' : 'password'}
            required
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={loginstyle.btn}>
          <button type="button" onClick={() => setShowPass(!showPass)}>
            {showPass ? 'Скрыть' : 'Показать'}
          </button>
          <button type="submit">Зарегистрироваться</button>
        </div>
        <div>
          <a href="#">Забыли пароль?</a>
          <a href="#">Уже зарегистрированы?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
