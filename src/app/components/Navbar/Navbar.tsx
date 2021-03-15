import * as React from 'react';
import './Navbar.scss';

import { Link } from 'react-scroll';

import { useTranslation } from 'react-i18next';

export const Navbar = ({
    isOpen,
    setNavbarStatus,
}: {
    isOpen: boolean;
    setNavbarStatus: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    const { t, i18n } = useTranslation();

    const language: string = i18n.language;
    const languageSecondary: string = i18n.language === 'en' ? 'br' : 'en';

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    const navbar = [
        {
            title: t('navbar.about.title'),
            subtitle: t('navbar.about.subtitle'),
            url: t('navbar.about.url'),
        },
        {
            title: t('navbar.projects.title'),
            subtitle: t('navbar.projects.subtitle'),
            url: t('navbar.projects.url'),
        },
    ];

    return (
        <nav className={isOpen ? 'navbar open' : 'navbar'}>
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
                    <Link
                        activeClass="active"
                        to={obj.url}
                        spy={true}
                        smooth={true}
                        duration={800}
                        className="navbarBox"
                        key={index}
                        onClick={() => {
                            setNavbarStatus(false);
                        }}
                    >
                        <p className="title">{obj.title}</p>
                        <p className="subtitle">{obj.subtitle}</p>
                    </Link>
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
        </nav>
    );
};
