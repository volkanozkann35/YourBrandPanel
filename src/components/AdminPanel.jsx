import React, { useState } from "react";
import UsersPanel from "./users/UsersPanel";
import OrdersPanel from "./orders/OrdersPanel";
import InvoicesPanel from "./invoices/InvoicesPanel";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersPanel />;
      case "orders":
        return <OrdersPanel />;
      case "invoices":
        return <InvoicesPanel />;
      default:
        return <UsersPanel />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* SOL MENU */}
      <div
        style={{
          width: "200px",
          background: "#2c3e50",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Yönetim</h2>
        <button
          onClick={() => setActiveTab("users")}
          style={{
            background: activeTab === "users" ? "#34495e" : "transparent",
            color: "white",
            border: "none",
            textAlign: "left",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          👤 Kullanıcılar
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          style={{
            background: activeTab === "orders" ? "#34495e" : "transparent",
            color: "white",
            border: "none",
            textAlign: "left",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          📦 Siparişler
        </button>
        <button
          onClick={() => setActiveTab("invoices")}
          style={{
            background: activeTab === "invoices" ? "#34495e" : "transparent",
            color: "white",
            border: "none",
            textAlign: "left",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          🧾 Faturalar
        </button>
      </div>

      {/* SAĞ İÇERİK */}
      <div style={{ flex: 1, padding: "20px", background: "#ecf0f1" }}>
        <h1 style={{ marginBottom: "20px" }}>Yönetim Paneli</h1>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 8px rgba(0,0,0,0.1)",
            height: "calc(100% - 60px)",
            overflow: "auto",
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
