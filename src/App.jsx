import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Invoices from './pages/Invoices';
import Products from './pages/Products';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Menu />
        <main style={{ flexGrow: 1, padding: 20 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
