import React, { useState } from "react";
import UsersPanel from "./users/UsersPanel";
import OrdersPanel from "./orders/OrdersPanel";
import InvoicesPanel from "./invoices/InvoicesPanel";

export default function AdminPanel() {
  const [activePanel, setActivePanel] = useState("users");

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#f0f0f0", padding: "20px" }}>
        <h2>Yönetim</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <button onClick={() => setActivePanel("users")}>👤 Kullanıcılar</button>
          </li>
          <li>
            <button onClick={() => setActivePanel("orders")}>📦 Siparişler</button>
          </li>
          <li>
            <button onClick={() => setActivePanel("invoices")}>🧾 Faturalar</button>
          </li>
        </ul>
      </div>

      {/* İçerik */}
      <div style={{ flex: 1, padding: "20px" }}>
        {activePanel === "users" && <UsersPanel />}
        {activePanel === "orders" && <OrdersPanel />}
        {activePanel === "invoices" && <InvoicesPanel />}
      </div>
    </div>
  );
}
