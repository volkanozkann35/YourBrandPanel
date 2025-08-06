import React, { useState } from "react";
import Orders from "./Orders";
import OrderAdd from "./OrderAdd";

export default function OrdersPanel() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Volkan", total: 250, status: "Hazırlanıyor" },
    { id: 2, customer: "Ayşe", total: 400, status: "Teslim Edildi" },
  ]);

  const addOrder = (order) => setOrders([...orders, order]);
  const deleteOrder = (id) => setOrders(orders.filter(order => order.id !== id));
  const toggleStatus = (id) => {
    setOrders(orders.map(order =>
      order.id === id
        ? { ...order, status: order.status === "Teslim Edildi" ? "Hazırlanıyor" : "Teslim Edildi" }
        : order
    ));
  };

  return (
    <div>
      <OrderAdd onAdd={addOrder} />
      <Orders orders={orders} deleteOrder={deleteOrder} toggleStatus={toggleStatus} />
    </div>
  );
}
