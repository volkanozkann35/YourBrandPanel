import React from 'react';

export default function Users({ users, deleteUser, toggleRole }) {
  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <table border="1" cellPadding={8} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>İsim</th>
            <th>E-posta</th>
            <th>Rol</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>Kullanıcı bulunamadı.</td>
            </tr>
          ) : (
            users.map(({ id, name, email, role }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>
                  <button onClick={() => toggleRole(id)}>
                    {role === 'admin' ? 'Kullanıcı Yap' : 'Admin Yap'}
                  </button>
                  <button onClick={() => deleteUser(id)} style={{ marginLeft: 8, color: 'red' }}>
                    Sil
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
