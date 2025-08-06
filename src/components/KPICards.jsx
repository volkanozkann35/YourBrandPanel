import React, { useEffect, useState } from "react";

function KPICards() {
  const [kpi, setKpi] = useState({ sales: 0, revenue: 0, profit: 0, returns: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/kpi")
      .then((res) => res.json())
      .then((data) => setKpi(data))
      .catch((err) => console.error("KPI verisi alınırken hata:", err));
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: 30 }}>
      <div style={cardStyle}>💸 Satışlar: {kpi.sales}</div>
      <div style={cardStyle}>💰 Gelir: {kpi.revenue}₺</div>
      <div style={cardStyle}>📈 Kâr: {kpi.profit}₺</div>
      <div style={cardStyle}>📦 İade: {kpi.returns}</div>
    </div>
  );
}

const cardStyle = {
  background: "#f4f4f4",
  padding: "15px",
  borderRadius: "8px",
  flex: 1,
  textAlign: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

export default KPICards;
