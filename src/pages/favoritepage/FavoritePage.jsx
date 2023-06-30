import React from 'react';
import favoritestyle from './favorite.module.css';
import { Link } from 'react-router-dom';

function FavoritePage(props) {
  return (
    <>
      <div className={favoritestyle.container}>
        <h1 style={{ marginTop: '50px', fontSize: '30px' }}>Избранные</h1>
        <div className={favoritestyle.add}>
          <span>Тут пока нет избранных...</span>
          <Link to="/">
            <button>Добавить</button>
          </Link>
        </div>
        <div className='sss'>
        
        </div>
      </div>
    </>
  );
}

export default FavoritePage;
