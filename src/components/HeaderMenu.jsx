import React from "react";
import { FaHome, FaChartBar, FaLanguage } from "react-icons/fa";
import "./HeaderMenu.css";

function HeaderMenu() {
  return (
    <nav className="header-menu">
      <ul>
        <li><FaHome /> Dashboard</li>
        <li><FaChartBar /> Satışlar</li>
        <li><FaLanguage /> Dil</li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
