import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import br from './translations/br.json';

i18n.use(initReactI18next)
    .init({
        lng: 'en',
        resources: {
            en: {
                translation: {
                    ...en,
                }
            },
            br: {
                translation: {
                    ...br,
                }
            }
        }
    });

export default i18n;
