import React from 'react';
import logo from '../pages/mainpage/imghome/start_logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="fade-in">
        <nav className="nav">
          <div className="nav_title">
            <Link to="/">
              <span className="nav_text">Домой</span>
            </Link>
            <Link to="/favorite">
              <span className="nav_text">Избранное</span>
            </Link>
            <Link to="/services">
              <span className="nav_text">Услуги</span>
            </Link>
            <Link to="/aboutus">
              <span className="nav_text">О нас</span>
            </Link>
            <Link to="/contact">
              <span className="nav_text">Контакты</span>
            </Link>
            <Link to="/login">
              <span className="nav_text">Вход</span>
            </Link>
          </div>
          <Link to="/" className="nav_logo">
            <img src={logo} />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
