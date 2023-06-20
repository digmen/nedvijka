import React from 'react';
import loginstyle from './loginpage.module.css';

function loginpage() {
  return (
    <>
      <div className={loginstyle.container}>
        <span>Регистрация</span>
        <div className={loginstyle.inp_login}>
          <input placeholder="Почта/Email" type="email"></input>
          <input placeholder="Пароль" type="password"></input>
          <input placeholder="Имя"></input>
        </div>
        <div>
          <a href="#">Забыли пароль?</a>
          <a href="#">Уже зарегистрированы?</a>
        </div>
      </div>
    </>
  );
}

export default loginpage;
