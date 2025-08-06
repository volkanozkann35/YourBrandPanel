import React, { useState } from "react";
import Orders from "./Orders";
import OrderAdd from "./OrderAdd";

export default function OrdersPanel() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Ali", total: 250, status: "Hazırlanıyor" },
    { id: 2, customer: "Zeynep", total: 450, status: "Teslim Edildi" },
  ]);

  const addOrder = (order) => setOrders([...orders, order]);
  const updateStatus = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id
          ? { ...o, status: o.status === "Hazırlanıyor" ? "Teslim Edildi" : "Hazırlanıyor" }
          : o
      )
    );
  };
  const deleteOrder = (id) => setOrders(orders.filter((o) => o.id !== id));

  return (
    <div>
      <h2>Sipariş Paneli</h2>
      <OrderAdd onAdd={addOrder} />
      <Orders orders={orders} updateStatus={updateStatus} deleteOrder={deleteOrder} />
    </div>
  );
}
