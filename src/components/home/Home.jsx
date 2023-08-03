import React from 'react';

import './Home.css';

import Me from "../../assets/avatar-1.png";

import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
  const [text] = useTypewriter({
    words: ['Software Engineer !', 'Web Developer !', 'UI/UX Designer !'],
    loop: {},
    speed: 100,
    delay: 1000,
  });

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home-img" />
        <h1 className="home-name">Hugo ^ <span className="important">Perry</span></h1>
        <span className="home-education">I'm a <span className="important">{text}</span></span>
        <Cursor />

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home