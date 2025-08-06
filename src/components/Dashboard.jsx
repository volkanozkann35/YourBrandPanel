import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Dashboard = () => {
  const { translations } = useLanguage();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{translations.welcome}</h1>
      <button>{translations.add_user}</button>
    </div>
  );
};

export default Dashboard;
