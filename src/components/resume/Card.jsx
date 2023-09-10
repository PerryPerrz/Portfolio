import React from 'react'

import { useTranslation } from 'react-i18next';

const Card = (props) => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="timeline-item">
            <i className={props.icon}></i>
            <span className="timeline-date">{t(`${props.category}`.year)} {props.year}</span>
            <h3 className="timeline-title">{t(`${props.category}.${props.title}`)}</h3>
            <p className="timeline-text">{t(`${props.category}.${props.desc}`)}</p>
        </div>
    )
}

export default Card;