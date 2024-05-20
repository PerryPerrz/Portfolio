import React from 'react';

import './Home.css';

import Me from "../../assets/avatar-1.png";

import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { useTranslation } from 'react-i18next';

function Home() {
  const [t, i18n] = useTranslation("global")

  const words = [
    t('home.words.0'),
    t('home.words.1'),
    t('home.words.2'),
  ];

  const [text] = useTypewriter({
    words: words,
    loop: {},
    speed: 100,
    delay: 1000,
  });

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home-img" />
        <h1 className="home-name">Hugo <span className="important">Iopeti</span></h1>

        <span className="home-education">{t('home.title')}<span className="important">{text}</span></span>
        <Cursor />

        <HeaderSocials />

        <a href="#contact" className="btn">{t("home.button")}</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home