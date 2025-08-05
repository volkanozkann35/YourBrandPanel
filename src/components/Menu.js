import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaChartBar, FaCog, FaLanguage, FaMoon, FaSun } from "react-icons/fa";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [lang, setLang] = useState("TR");
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`menu-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        <div className="logo">YourBrandPanel</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home"><FaHome /> Anasayfa</a>
          </li>
          <li className="nav-item">
            <a href="#dashboard"><FaChartBar /> Dashboard</a>
          </li>

          <li className="nav-item submenu" onClick={toggleSubmenu}>
            <span><FaCog /> Ayarlar <span className="arrow">{submenuOpen ? "▲" : "▼"}</span></span>
            {submenuOpen && (
              <ul className="submenu-list">
                <li><button onClick={toggleDarkMode}>{darkMode ? <><FaSun /> Açık Mod</> : <><FaMoon /> Koyu Mod</>}</button></li>
                <li>
                  <select value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="TR">Türkçe</option>
                    <option value="EN">English</option>
                    <option value="ES">Español</option>
                    <option value="DE">Deutsch</option>
                  </select>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .menu-container {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: #fff;
          color: #222;
          transition: background 0.3s, color 0.3s;
          height: 60px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
          position: relative;
          z-index: 1000;
        }
        .menu-container.dark {
          background: #121212;
          color: #eee;
        }
        .navbar {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 2px;
          cursor: pointer;
          user-select: none;
        }
        .menu-icon {
          display: none;
          cursor: pointer;
        }
        .nav-menu {
          list-style: none;
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-menu.active {
          display: block;
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          background: inherit;
          padding: 1rem 0;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .nav-item {
          cursor: pointer;
          position: relative;
          user-select: none;
          transition: color 0.2s;
        }
        .nav-item a, .nav-item span, .nav-item button {
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-item:hover {
          color: #0070f3;
        }
        .submenu-list {
          position: absolute;
          top: 100%;
          left: 0;
          background: inherit;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          list-style: none;
          margin: 0;
          padding: 0.5rem 0;
          border-radius: 0 0 8px 8px;
          min-width: 160px;
          user-select: none;
          z-index: 1000;
        }
        .submenu-list li {
          padding: 0.5rem 1rem;
        }
        .submenu-list li button, .submenu-list li select {
          width: 100%;
          font-size: 0.9rem;
        }
        .arrow {
          font-size: 0.8rem;
          margin-left: 0.2rem;
        }
        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }
          .nav-menu {
            display: none;
            flex-direction: column;
          }
          .nav-item {
            padding: 1rem 1.5rem;
            width: 100%;
          }
          .submenu-list {
            position: static;
            box-shadow: none;
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
}
