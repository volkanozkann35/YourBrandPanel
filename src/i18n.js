import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'tr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    tr: { translation: { userManagement: 'Kullanıcı Yönetimi' } },
    en: { translation: { userManagement: 'User Management' } },
  },
});

export default i18n;
