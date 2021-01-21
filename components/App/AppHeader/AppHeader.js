import gsap from 'gsap';
import React, { useCallback } from 'react';
import style from './AppHeader.module.scss';

function AppHeader() {
  const onLinkClick = useCallback((e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute('href') });
  });

  return (
    <header className={style.header}>
      <div className="logo">Logo</div>
      <nav>
        <ul className={style.navigation}>
          <li>
            <a href="#Home" onClick={onLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" onClick={onLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#Service" onClick={onLinkClick}>
              Service
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={onLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
