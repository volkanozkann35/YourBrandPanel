import React, { useState } from "react";

export default function OrderAdd({ onAdd }) {
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !total) {
      alert("Müşteri adı ve tutar zorunludur.");
      return;
    }
    onAdd({ id: Date.now(), customer, total: parseFloat(total), status: "Hazırlanıyor" });
    setCustomer("");
    setTotal("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Sipariş Ekle</h3>
      <input
        placeholder="Müşteri Adı"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        required
      />
      <input
        placeholder="Tutar"
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        required
        style={{ marginLeft: 8 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Ekle</button>
    </form>
  );
}
