import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import resources from './translation.json';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(languageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    // debug: process.env.NODE_ENV === 'development',
  });

export default i18next;
