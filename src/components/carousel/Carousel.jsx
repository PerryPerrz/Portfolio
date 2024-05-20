import React from 'react'

import './Carousel.css'

import AmazonAWS from '../../assets/logo/amazonaws.svg'
import AndroidStudio from '../../assets/logo/android-studio.svg'
import Angular from '../../assets/logo/angular.svg'
import C from '../../assets/logo/c.svg'
import Git from '../../assets/logo/git.svg'
import HTMLCSS from '../../assets/logo/html-css.svg'
import Java from '../../assets/logo/java.svg'
import Jetbrains from '../../assets/logo/jetbrains.svg'
import Javascript from '../../assets/logo/js.svg'
import LibGDX from '../../assets/logo/libgdx.svg'
import MySQL from '../../assets/logo/mysql.svg'
import NodeJS from '../../assets/logo/nodejs.svg'
import PHP from '../../assets/logo/php.svg'
import Python from '../../assets/logo/python.svg'
import ReactJS from '../../assets/logo/react.svg'
import TypeScript from '../../assets/logo/typescript.svg'
import VSCode from '../../assets/logo/vs-code.svg'

import { useTranslation } from 'react-i18next';

const Carousel = () => {
    const [t, i18n] = useTranslation("global");

    const items = (
        <>
            <div className="logos-slide">
                <div className="item">
                    <img src={AmazonAWS} alt="" />
                    <h4>Amazon AWS</h4>
                </div>

                <div className="item">
                    <img src={AndroidStudio} alt="" />
                    <h4>Android Studio</h4>
                </div>

                <div className="item">
                    <img src={Angular} alt="" />
                    <h4>Angular</h4>
                </div>

                <div className="item">
                    <img src={C} alt="" />
                    <h4>C</h4>
                </div>

                <div className="item">
                    <img src={Git} alt="" />
                    <h4>Git</h4>
                </div>

                <div className="item">
                    <img src={HTMLCSS} alt="" />
                    <h4>HTML5/CSS3</h4>
                </div>

                <div className="item">
                    <img src={Java} alt="" />
                    <h4>Java</h4>
                </div>

                <div className="item">
                    <img src={Jetbrains} alt="" />
                    <h4>IDE Jetbrains</h4>
                </div>

                <div className="item">
                    <img src={Javascript} alt="" />
                    <h4>JavaScript</h4>
                </div>

                <div className="item">
                    <img src={LibGDX} alt="" />
                    <h4>LibGDX</h4>
                </div>

                <div className="item">
                    <img src={MySQL} alt="" />
                    <h4>MySQL</h4>
                </div>

                <div className="item">
                    <img src={NodeJS} alt="" />
                    <h4>NodeJS</h4>
                </div>

                <div className="item">
                    <img src={PHP} alt="" />
                    <h4>PHP</h4>
                </div>

                <div className="item">
                    <img src={Python} alt="" />
                    <h4>Python</h4>
                </div>

                <div className="item">
                    <img src={ReactJS} alt="" />
                    <h4>ReactJS</h4>
                </div>

                <div className="item">
                    <img src={TypeScript} alt="" />
                    <h4>TypeScript</h4>
                </div>

                <div className="item">
                    <img src={VSCode} alt="" />
                    <h4>VS Code</h4>
                </div>
            </div>

        </>
    );

    return (
        <section className="carousel container section" id="carousel">
            <h2 className="section-title">{t("carousel.technologies")}</h2>

            <div className="carousel-container">
                <div className="logos">
                    {items}
                    {window.innerWidth > 1024 ? items : ''}
                </div>
            </div>
        </section>
    );
}

export default Carousel