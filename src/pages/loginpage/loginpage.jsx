import React, { useState } from 'react';
import axios from 'axios';
import loginstyle from './loginpage.module.css';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { BASE_URL } from '../../utils/const';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

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
      console.log(data);

      if (response.status === 200) {
        console.log('Регистрация прошла успешно');
      } else {
        console.error('Ошибка регистрации');
      }
    } catch (error) {
      console.error('Ошибка соединения', error);
    }
  };

  return (
    <div className={loginstyle.container}>
      <span>Регистрация</span>
      <form onSubmit={handleSubmit}>
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
  );
};

export default LoginPage;
