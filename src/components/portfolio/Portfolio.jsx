import React, { useState } from 'react';

import './Portfolio.css';

import Menu from './Menu';

import { useTranslation } from 'react-i18next';

function Portfolio() {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((elem) => {
            return elem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    const renderTechnologyImage = (technology) => {
        if (technology && typeof technology === 'string' && technology.trim() !== "") {
            return <img src={technology} alt="" className="technology" />;
        }
        return null;
    };

    const [t, i18n] = useTranslation("global");

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section-title">{t("portfolio.title")}</h2>

            <div className="work-filters">
                <span className="work-item" onClick={() => setItems(Menu)}>{t("portfolio.everything")}</span>
                <span className="work-item" onClick={() => filterItem("Personal")}>{t("portfolio.Personal")}</span>
                <span className="work-item" onClick={() => filterItem("School")}>{t("portfolio.School")}</span>
            </div>

            <div className="work-container grid">
                {items.map((elem) => {
                    const { id, image, title, category, link, technology1, technology2, technology3 } = elem;
                    return (
                        <div className="work-card" key={id}>
                            <div className="work-thumbnail">
                                <img src={image} alt="" className="work-img" />
                                <div className="work-mask">
                                    <div className="technologies-container">
                                        {renderTechnologyImage(technology1)}
                                        {renderTechnologyImage(technology2)}
                                        {renderTechnologyImage(technology3)}
                                    </div>
                                </div>
                            </div>
                            <span className="work-category">{t(`portfolio.${category}`)}</span>

                            <h3 className="work-title">{title}</h3>
                            <a href={link} className="work-button">
                                <i className="icon-link work-button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio