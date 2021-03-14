import * as React from 'react';
import './About.scss';

import { useTranslation } from 'react-i18next';

import { SocialIcon } from '../../components/SocialIcon/SocialIcon';

import LinkedIn from '../../../assets/socialIcons/linkedin.svg';
import GitHub from '../../../assets/socialIcons/github.svg';
import Behance from '../../../assets/socialIcons/behance.svg';

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
                        <div className="socialBar">
                            <SocialIcon
                                name="linkedin"
                                href="https://linkedin.com/in/dxxglas"
                                icon={LinkedIn}
                            />
                            <SocialIcon
                                name="github"
                                href="https://github.com/dxxglas"
                                icon={GitHub}
                            />
                            <SocialIcon
                                name="behance"
                                href="https://behance.net/dxxglas"
                                icon={Behance}
                            />
                        </div>
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
