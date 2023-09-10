import React from 'react'

import { useTranslation } from 'react-i18next';

function ScrollDown() {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="scroll-down">
            <a href="#about" className="mouse-wrapper">
                <span className="home-scroll-name">{t("scrollDown.title")}</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}

export default ScrollDown