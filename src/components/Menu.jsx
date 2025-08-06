import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#1E90FF",
    borderLeft: "4px solid #1E90FF",
    paddingLeft: "12px",
  };

  return (
    <nav style={{ width: 220, backgroundColor: "#f7f9fc", padding: 16 }}>
      <h2 style={{ marginBottom: 20 }}>Yönetim Paneli</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink to="/dashboard" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            👤 Kullanıcılar
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            📦 Siparişler
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            🧾 Faturalar
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            🛒 Ürünler
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            ⚙️ Ayarlar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
