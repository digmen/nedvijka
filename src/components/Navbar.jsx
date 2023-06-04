import React, { useEffect, useState } from 'react';
import logo from '../pages/mainpage/imghome/start_logo.png';
import search from './img/Search.png';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fade-in">
          <nav className="nav">
            <Link to="/" className="nav_logo">
              <img src={logo} />
            </Link>
            <div className="search">
              <input className="search_inp" placeholder="Search" />
              <button className="btn_search">
                <img className="search_img" src={search}></img>
              </button>
            </div>
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
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
