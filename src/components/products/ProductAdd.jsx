import React, { useState } from "react";

export default function ProductAdd({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Ürün adı ve fiyat zorunludur.");
      return;
    }
    onAdd({ id: Date.now(), name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Ürün Ekle</h3>
      <input
        placeholder="Ürün Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Fiyat"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={{ marginLeft: 8 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        Ekle
      </button>
    </form>
  );
}
