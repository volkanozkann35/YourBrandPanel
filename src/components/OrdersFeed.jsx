// src/components/OrdersFeed.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Sunucu adresi

function OrdersFeed() {
  const [orders, setOrders] = useState([]);

  // API'den ilk veriyi çek
  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // Socket.io ile canlı sipariş dinle
  useEffect(() => {
    socket.on("newOrder", (order) => {
      setOrders((prev) => [order, ...prev]); // Yeni siparişi başa ekle
    });

    return () => {
      socket.off("newOrder");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Son Siparişler</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {orders.map((o, i) => (
          <li
            key={i}
            style={{
              marginBottom: "10px",
              padding: "10px",
              background: "#f4f4f4",
              borderRadius: "8px",
            }}
          >
            <strong>{o.customer}</strong> - {o.product} ({o.price}₺)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersFeed;
