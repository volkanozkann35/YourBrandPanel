import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "Pzt", sales: 120 },
  { day: "Sal", sales: 200 },
  { day: "Çar", sales: 150 },
  { day: "Per", sales: 300 },
  { day: "Cum", sales: 280 },
  { day: "Cmt", sales: 400 },
  { day: "Paz", sales: 350 },
];

function SalesChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#00c8ff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
