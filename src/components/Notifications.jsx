import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

export default function Notifications() {
  const [list, setList] = useState([]);
  useEffect(() => {
    socket.on("notification", (msg) => setList((prev) => [...prev, msg]));
  }, []);

  return (
    <div style={{ position: "fixed", top: 10, right: 10 }}>
      {list.map((n, i) => (
        <div key={i} style={{ background: "#ff9800", color: "#fff", margin: "5px", padding: "8px" }}>
          🔔 {n}
        </div>
      ))}
    </div>
  );
}
