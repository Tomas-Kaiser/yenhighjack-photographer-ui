import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // language resources
        resources: {
            en: {
                translation: {
                    // Landing Page 
                    welcomeSlogan: 'Photography is a poetry for an eye',
                    ctaBtn: 'Explore My Art',
                    heading: 'Show Case of My Art',
                    subHeading: 'Click on a photo to see it in full size'
                }
            },
            cz: {
                translation: {
                    // Landing Page
                    welcomeSlogan: 'Fotografie je poezie pro oko',
                    ctaBtn: 'Prozkoumejte moje umění',
                    heading: 'Ukázka mé práce',
                    subHeading: 'Klikněte na fotografii pro zobrazení v plné velikosti'
                }
            },
        }
    });

export default i18n;