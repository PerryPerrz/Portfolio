import React from 'react';

import './Home.css';

import Me from "../../assets/avatar-1.svg";

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
        <h1 className="home-name">Perry Perrz</h1>
        <span className="home-education">I'm a {text}</span>
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