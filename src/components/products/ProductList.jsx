import React from "react";

export default function ProductList({ products, deleteProduct }) {
  if (products.length === 0) {
    return <p>Ürün bulunamadı.</p>;
  }

  return (
    <table border="1" cellPadding={8} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Fiyat</th>
          <th>şlemler</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{price} </td>
            <td>
              <button onClick={() => deleteProduct(id)} style={{ color: "red" }}>
                Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
