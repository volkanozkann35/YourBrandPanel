// src/components/VisitorCounter.js

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    socket.on("visitorCount", (count) => {
      setVisitorCount(count);
    });

    return () => {
      socket.off("visitorCount");
    };
  }, []);

  return (
    <div style={{
      padding: "10px 20px",
      background: "#222",
      color: "#0f0",
      fontWeight: "bold",
      borderRadius: 8,
      width: 180,
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "1.3rem",
      userSelect: "none"
    }}>
      Canlı Ziyaretçi: {visitorCount}
    </div>
  );
}
