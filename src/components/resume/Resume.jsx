import React from 'react';

import './Resume.css';

import Data from './Data';
import Card from './Card';

import { useTranslation } from 'react-i18next';

function Resume() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className="resume container section" id="resume">
            <h2 className="section-title">{t("resume.title")}</h2>

            <div className="resume-container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} category={val.category} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={index} icon={val.icon} category={val.category} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Resume