import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductAdd from "./ProductAdd";

export default function ProductsPanel() {
  const [products, setProducts] = useState([
    { id: 1, name: "Ürün 1", price: 100 },
    { id: 2, name: "Ürün 2", price: 250 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <ProductAdd onAdd={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}
