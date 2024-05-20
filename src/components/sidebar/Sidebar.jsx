import React, { useState } from 'react';

import './Sidebar.css';

import Logo from '../../assets/logo.svg';

import { useTranslation } from 'react-i18next';

function Sidebar() {
  const [toggle, showMenu] = useState(false);

  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav-logo">
          <img src={Logo} alt="" />
        </a>

        <div className="language-switcher">
          <button
            className={`button ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </button>
          <button
            className={`button ${i18n.language === 'fr' ? 'active' : ''}`}
            onClick={() => handleChangeLanguage("fr")}
          >
            FR
          </button>
        </div>

        <nav className="nav">
          <div className='nav-menu'>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav-footer">
          <span className="copyright">
            &copy; 2024 | <strong>Hugo.</strong>
          </span>
        </div>
      </aside>

      <div className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  )
}

export default Sidebar