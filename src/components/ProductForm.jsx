// src/components/ProductForm.jsx
import React, { useState } from "react";
import { generateAIText, generateAIImage } from "../api";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("İsim ve fiyat gerekli");
    onAdd({ name, price: Number(price), category, image: image || "https://via.placeholder.com/100", description });
    setName(""); setPrice(""); setCategory(""); setImage(""); setDescription("");
  };

  const handleAIText = () => {
    if (!name) return alert("Önce ürün ismini gir");
    generateAIText(name).then(setDescription);
  };

  const handleAIImage = () => {
    if (!name) return alert("Önce ürün ismini gir");
    generateAIImage(name).then(setImage);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20, display: "flex", flexDirection: "column", maxWidth: 400 }}>
      <input placeholder="İsim" value={name} onChange={e => setName(e.target.value)} required />
      <input type="number" placeholder="Fiyat" value={price} onChange={e => setPrice(e.target.value)} required />
      <input placeholder="Kategori" value={category} onChange={e => setCategory(e.target.value)} />
      <input placeholder="Resim URL" value={image} onChange={e => setImage(e.target.value)} />
      <textarea placeholder="Açıklama" value={description} onChange={e => setDescription(e.target.value)} rows={3} />
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button type="button" onClick={handleAIText}>AI ile Açıklama Üret</button>
        <button type="button" onClick={handleAIImage}>AI ile Görsel Üret</button>
      </div>
      <button type="submit" style={{ marginTop: 10 }}>Ürün Ekle</button>
    </form>
  );
}
