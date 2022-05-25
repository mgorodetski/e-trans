import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <img className="header__logo" src={logo} alt="e-trans logo" />

        <nav className="header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#gyroscooter" className="navigation__link">Гироскутеры</a>
            </li>
            <li className="navigation__item">
              <a href="#monowheel" className="navigation__link">Моноколеса</a>
            </li>
            <li className="navigation__item">
              <a href="#electroscooter" className="navigation__link">Электросамокаты</a>
            </li>
          </ul>
        </nav>
        <a className="header__link-phone" href="tel:+73848833812">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" fill="currentColor" />
          </svg>
          <span className="header__phone-number">+7(384)883-38-12</span>
        </a>
      </div>
    </div>
  )
}

export default Header