import React, { createContext, useState, useContext, useEffect } from "react";
import tr from "../locales/tr.json";
import en from "../locales/en.json";

const languages = { tr, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");
  const [translations, setTranslations] = useState(languages[language]);

  useEffect(() => {
    setTranslations(languages[language]);
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
