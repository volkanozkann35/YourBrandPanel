import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => ({ margin: '0 10px', color: isActive ? 'blue' : 'black' })}>Dashboard</NavLink>
      <NavLink to="/users" style={({ isActive }) => ({ margin: '0 10px', color: isActive ? 'blue' : 'black' })}>Kullanıcı Listesi</NavLink>
      <NavLink to="/products" style={({ isActive }) => ({ margin: '0 10px', color: isActive ? 'blue' : 'black' })}>Ürün Yönetimi</NavLink>
    </nav>
  );
};

export default Menu;
