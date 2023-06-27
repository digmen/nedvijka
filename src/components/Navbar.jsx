import React from 'react';
import logo from '../pages/mainpage/imghome/start_logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';

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
          </div>
          <Link to="/" className="nav_logo">
            <img src={logo} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <PhoneIcon />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="#">0555 555 555</a>
                <a href="#">0555 555 555</a>
              </div>
            </div>
            <Link to="/login">
              <span className="nav_text">Вход</span>
            </Link>
            <div>
              <button className="button">
                <span className="pulse-button__text">
                  <AddIcon boxSize={3} /> Добавить обявление
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
