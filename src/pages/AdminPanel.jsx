import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
  const { token, user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user?.role === 'admin') fetchUsers();
  }, [token, user]);

  if (user?.role !== 'admin') return <p>Admin yetkisi gerekli.</p>;

  return (
    <div>
      <h2>Admin Paneli</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} - {u.email} ({u.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
