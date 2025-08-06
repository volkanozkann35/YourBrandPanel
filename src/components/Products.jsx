import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Ürün 1', price: 100 },
    { id: 2, name: 'Ürün 2', price: 250 },
  ]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) {
      alert('Lütfen ürün adı ve fiyat girin.');
      return;
    }
    const newProduct = {
      id: products.length + 1,
      name: name.trim(),
      price: parseFloat(price),
    };
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Ürün Yönetimi</h2>
      <form onSubmit={addProduct} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Ürün adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: '0.5rem' }}
          min="0"
          step="0.01"
        />
        <button type="submit">Ekle</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₺{product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
