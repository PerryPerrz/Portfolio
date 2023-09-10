import React from 'react';

import './Services.css';

import { useTranslation } from 'react-i18next';

import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

function Services() {
    const [t, i18n] = useTranslation("global");

    const data = [
        {
            id: 1,
            image: Image1,
            title: t("services.service-1"),
            description:
                t("services.description-1"),
        },
        {
            id: 2,
            image: Image2,
            title: t("services.service-2"),
            description:
                t("services.description-2"),
        },
        {
            id: 3,
            image: Image3,
            title: t("services.service-3"),
            description:
                t("services.description-3"),
        },
    ];

    return (
        <section className="services container section" id="services">
            <h2 className="section-title">{t("services.title")}</h2>

            <div className="services-container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services-card" key={id}>
                            <img src={image} alt="" className="services-img" />

                            <h3 className="services-title">{title}</h3>
                            <p className="services-description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Services