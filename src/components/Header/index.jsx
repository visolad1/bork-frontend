import React from 'react';
import Navigation from '../Navigation';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Navigation />
      <div className='container'>
        <ol className='header-list'>
          <li className='header-list-item'>
            <a href='#'>Новинки</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>Идеи подарков</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>Кухня</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>Дом и климат</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>Красота и здоровье</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>BORK Home</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>BORK Voyage</a>
          </li>
          <li className='header-list-item'>
            <a href='#'>BORK Interior</a>
          </li>
        </ol>
      </div>
    </header>
  );
}

export default Header;
