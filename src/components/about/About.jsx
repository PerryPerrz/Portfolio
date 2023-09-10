import React from 'react';

import './About.css';

import Image from "../../assets/avatar-1.png";
import AboutBox from './AboutBox';

import { useTranslation } from 'react-i18next';

function About() {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="about container section" id="about">
      <h2 className="section-title">{t("about.title")}</h2>

      <div className="about-container grid">
        <img src={Image} alt="" className="about-img" />

        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">{t("about.description")}</p>
            <a href="" className="btn">{t("about.button")}</a>
          </div>

          <div className="about-skills grid">

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">{t("about.skill-1")}</h3>
                <span className="skills-number">100%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage development"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">{t("about.skill-2")}</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage ui-design"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">{t("about.skill-3")}</h3>
                <span className="skills-number">80%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About