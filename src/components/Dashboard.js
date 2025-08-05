import React, { useEffect, useState } from 'react';
import UsersList from './UsersList';
import ProductsTable from './ProductsTable';
import Stats from './Stats';
import api from '../api';

export default function Dashboard() {
  const [products,setProducts]=useState([]);
  const [stats,setStats]=useState({users:1, products:0, visitors:123});

  useEffect(()=>{
    api.get('/products').then(res=> setProducts(res.data));
    setStats(s=>({...s, products: products.length}));
  },[products.length]);

  return (
    <div>
      <Stats stats={stats}/>
      <UsersList/>
      <ProductsTable products={products} setProducts={setProducts}/>
    </div>
  );
}
