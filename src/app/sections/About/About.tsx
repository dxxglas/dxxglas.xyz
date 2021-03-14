import * as React from 'react';
import './About.scss';

import { useTranslation } from 'react-i18next';

export const About = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="content">
                <div className="elements">
                    <div className="circle">
                        <div className="circleBackground"></div>
                        <div className="circleOutline"></div>
                    </div>
                    <div className="triangle"></div>
                </div>
                <div className="descriptionBox">
                    <div className="rectangleBox">
                        {[...Array(8)].map((e, i) => (
                            <div className="rectangle" key={i} style={{ right: 10 * i }}></div>
                        ))}
                    </div>
                    <div className="description">
                        <p>
                            {t('about.name')}
                            <span className="name" data-text="dxxglas"></span>
                        </p>
                        <p>{t('about.text')}</p>
                        <a href="mailto: me@dxxglas.xyz">
                            <p>{t('about.contact')}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="titleBox">
                <p className="subtitle">{t('navbar.frist', { returnObjects: true })[1]}</p>
                <h2 className="title">{t('navbar.frist', { returnObjects: true })[0]}</h2>
            </div>
        </section>
    );
};
