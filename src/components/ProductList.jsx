// src/components/ProductList.jsx
import React from "react";

export default function ProductList({ products, onDelete }) {
  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", maxWidth: 700 }}>
      <thead>
        <tr>
          <th>Resim</th>
          <th>İsim</th>
          <th>Fiyat</th>
          <th>Kategori</th>
          <th>Açıklama</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td><img src={p.image} alt={p.name} width={50} /></td>
            <td>{p.name}</td>
            <td>{p.price} ₺</td>
            <td>{p.category}</td>
            <td style={{ maxWidth: 200, whiteSpace: "normal" }}>{p.description || "-"}</td>
            <td><button onClick={() => onDelete(p.id)}>Sil</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
