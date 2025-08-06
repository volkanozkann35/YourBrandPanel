import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{translations.select_language}</h2>
      <button onClick={() => changeLanguage("tr")}>🇹🇷 Türkçe</button>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
      <p>✅ {language.toUpperCase()} seçildi.</p>
    </div>
  );
};

export default LanguageSelector;
