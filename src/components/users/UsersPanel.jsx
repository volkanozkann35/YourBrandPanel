import React, { useState } from 'react';
import Users from './Users';
import UserAdd from './UserAdd';

export default function UsersPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Volkan', email: 'volkan@gmail.com', role: 'user' },
    { id: 2, name: 'Ayşe', email: 'ayse@gmail.com', role: 'admin' },
  ]);

  const addUser = (user) => setUsers([...users, user]);
  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));
  const toggleRole = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, role: user.role === 'admin' ? 'user' : 'admin' } : user
    ));
  };

  return (
    <div>
      <UserAdd onAdd={addUser} />
      <Users users={users} deleteUser={deleteUser} toggleRole={toggleRole} />
    </div>
  );
}
