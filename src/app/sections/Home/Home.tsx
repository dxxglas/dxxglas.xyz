import * as React from 'react';
import './Home.scss';

import { useTranslation } from 'react-i18next';

import { SocialIcon } from '../../components/SocialIcon/SocialIcon';

import LinkedIn from '../../../assets/socialIcons/linkedin.svg';
import GitHub from '../../../assets/socialIcons/github.svg';
import Behance from '../../../assets/socialIcons/behance.svg';

export const Home = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <section className="home">
            <div className="socialBar">
                <SocialIcon
                    name="linkedin"
                    href="https://linkedin.com/in/dxxglas"
                    icon={LinkedIn}
                />
                <SocialIcon name="github" href="https://github.com/dxxglas" icon={GitHub} />
                <SocialIcon name="behance" href="https://behance.net/dxxglas" icon={Behance} />
            </div>
            <div className="titleBox">
                <div className="rectangleBox">
                    {[...Array(5)].map((e, i) => (
                        <div className="rectangle" key={i} style={{ top: 5 * i }}></div>
                    ))}
                </div>
                <h1 className="title">{t('home.title')}</h1>
                <div className="blueElements">
                    <div className="rectangleBlue"></div>
                    <div className="squareBlue"></div>
                </div>
                <div className="redElements">
                    <div className="circleRed"></div>
                    <div className="circleOutline"></div>
                </div>
                <div className="blackElements">
                    <div className="squareBlack"></div>
                    <div className="squareOutline"></div>
                </div>
            </div>
        </section>
    );
};
