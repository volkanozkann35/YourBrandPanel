import React, { useState } from "react";

export default function InvoiceAdd({ onAdd }) {
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !amount) {
      alert("Müşteri ve tutar zorunludur.");
      return;
    }
    onAdd({ id: Date.now(), customer, amount: parseFloat(amount), status: "Beklemede" });
    setCustomer("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Fatura Ekle</h3>
      <input
        placeholder="Müşteri Adı"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        required
      />
      <input
        placeholder="Tutar"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        style={{ marginLeft: 8 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Ekle</button>
    </form>
  );
}
