import React from 'react';
import Navigation from '../Navigation';
import './Header.scss';

function Header() {
  return (
    <header class='header'>
      <Navigation />
      <div class='container'>
        <ol class='header-list'>
          <li class='header-list-item'>
            <a href='#'>Новинки</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>Идеи подарков</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>Кухня</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>Дом и климат</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>Красота и здоровье</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>BORK Home</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>BORK Voyage</a>
          </li>
          <li class='header-list-item'>
            <a href='#'>BORK Interior</a>
          </li>
        </ol>
      </div>
    </header>
  );
}

export default Header;
