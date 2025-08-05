// src/components/UserBox.jsx
import React from "react";

export default function UserBox({ username }) {
  return (
    <div style={{
      position: "fixed",
      top: 20,
      right: 20,
      backgroundColor: "#222",
      color: "white",
      padding: "10px 15px",
      borderRadius: 25,
      fontWeight: "bold",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
    }}>
      {username || "Misafir Kullanıcı"}
    </div>
  );
}
