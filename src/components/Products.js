import React, { useState } from "react";
import axios from "axios";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });
  const [loading, setLoading] = useState(false);

  const handleAI = async () => {
    setLoading(true);
    const aiRes = await axios.post("http://localhost:5000/api/ai/generate", {
      prompt: "Yeni ürün fikri, isim, açıklama ve görsel üret"
    });
    setForm({
      name: aiRes.data.name,
      price: aiRes.data.price,
      category: aiRes.data.category,
      image: aiRes.data.image
    });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/products", form);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input placeholder="İsim" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Fiyat" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Kategori" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Resim URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <button type="button" onClick={handleAI} disabled={loading}>
        {loading ? "AI Üretiyor..." : "AI ile Üret"}
      </button>
      <button type="submit">Ürün Ekle</button>
    </form>
  );
}
