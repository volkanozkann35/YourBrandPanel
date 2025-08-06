import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Pazartesi", satış: 400 },
  { name: "Salı", satış: 300 },
  { name: "Çarşamba", satış: 500 },
  { name: "Perşembe", satış: 700 },
  { name: "Cuma", satış: 200 },
  { name: "Cumartesi", satış: 600 },
  { name: "Pazar", satış: 450 },
];

const Charts = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 style={{ textAlign: "center" }}>Haftalık Satış Grafiği</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="satış" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
