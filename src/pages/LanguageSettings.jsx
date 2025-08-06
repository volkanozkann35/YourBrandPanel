import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        padding: "5px 10px",
        borderRadius: 4,
        border: "1px solid #ccc",
        backgroundColor: "white",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Dil Seçimi"
    >
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSelector;
