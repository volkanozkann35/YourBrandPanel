// src/components/StatsBox.jsx
import React from "react";

export default function StatsBox({ title, value, bgColor }) {
  return (
    <div style={{
      backgroundColor: bgColor || "#007bff",
      color: "white",
      padding: 20,
      borderRadius: 8,
      minWidth: 120,
      textAlign: "center",
      marginRight: 10,
      boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
      fontWeight: "bold"
    }}>
      <div style={{ fontSize: 24 }}>{value}</div>
      <div style={{ fontSize: 14 }}>{title}</div>
    </div>
  );
}
