import React, { useState } from 'react';
import Orders from './Orders';
import OrderAdd from './OrderAdd';

export default function OrdersPanel() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  return (
    <div>
      <OrderAdd onAdd={addOrder} />
      <Orders orders={orders} deleteOrder={deleteOrder} updateStatus={updateStatus} />
    </div>
  );
}
