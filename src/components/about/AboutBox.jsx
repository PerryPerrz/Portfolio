import React from 'react'

import { useTranslation } from 'react-i18next';

function AboutBox() {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="about-boxes grid">
            <div className="about-box">
                <i className="about-icon icon-fire"></i>

                <div>
                    <h3 className="about-title">54</h3>
                    <span className="about-subtitle">{t("aboutBox.subtitle-1")}</span>
                </div>
            </div>

            <div className="about-box">
                <i className="about-icon icon-cup"></i>

                <div>
                    <h3 className="about-title">6942</h3>
                    <span className="about-subtitle">{t("aboutBox.subtitle-2")}</span>
                </div>
            </div>

            <div className="about-box">
                <i className="about-icon icon-people"></i>

                <div>
                    <h3 className="about-title">1</h3>
                    <span className="about-subtitle">{t("aboutBox.subtitle-3")}</span>
                </div>
            </div>

            <div className="about-box">
                <i className="about-icon icon-badge"></i>

                <div>
                    <h3 className="about-title">5</h3>
                    <span className="about-subtitle">{t("aboutBox.subtitle-4")}</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox