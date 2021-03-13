import * as React from 'react';
import './Navbar.scss';

import { useTranslation } from 'react-i18next';

export const Navbar = ({
    isOpen,
    setNavbarStatus,
}: {
    isOpen: boolean;
    setNavbarStatus: any;
}): JSX.Element => {
    const { t, i18n } = useTranslation();

    const language: string = i18n.language;
    const languageSecondary: string = i18n.language === 'en' ? 'br' : 'en';

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    const navbar = [
        {
            title: t('navbar.frist', { returnObjects: true })[0],
            subtitle: t('navbar.frist', { returnObjects: true })[1],
        },
        {
            title: t('navbar.second', { returnObjects: true })[0],
            subtitle: t('navbar.second', { returnObjects: true })[1],
        },
    ];

    return (
        <div className={isOpen ? 'navbar open' : 'navbar'}>
            <p
                className="closeTitle"
                onClick={() => {
                    setNavbarStatus(false);
                }}
            >
                {t('navbar.close')}
            </p>
            <div className="navbarContainer">
                {navbar.map((obj, index) => (
                    <div className="navbarBox" key={index}>
                        <p className="title">{obj.title}</p>
                        <p className="subtitle">{obj.subtitle}</p>
                    </div>
                ))}
            </div>
            <div className="languageBox">
                <p
                    className="secondary"
                    onClick={() => {
                        changeLanguage(languageSecondary);
                    }}
                >
                    {languageSecondary === 'br' ? 'PT-BR' : 'EN'}
                </p>
                <p
                    className="principal"
                    onClick={() => {
                        changeLanguage(language);
                    }}
                >
                    {language === 'br' ? 'PT-BR' : 'EN'}
                </p>
            </div>
        </div>
    );
};
