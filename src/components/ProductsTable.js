import React from 'react';

export default function ProductsTable({ products }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>İsim</th>
          <th>Fiyat</th>
          <th>Kategori</th>
          <th>Resim</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 && (
          <tr><td colSpan="4" style={{ textAlign: 'center' }}>Ürün bulunamadı</td></tr>
        )}
        {products.map(product => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.price.toFixed(2)} ₺</td>
            <td>{product.category}</td>
            <td>
              {product.imageUrl ? <img src={product.imageUrl} alt={product.name} style={{ height: '50px' }} /> : 'Yok'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
