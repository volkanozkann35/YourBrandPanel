import React from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import LoadingSpinner from './LoadingSpinner';

export default function KullaniciListesi() {
  const { users, loading, error } = useUsers();

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <Link to="/kullanici-ekle">Yeni Kullanıcı Ekle</Link>
      <table border="1" cellPadding="10" style={{ marginTop: '10px', width: '100%' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>E-posta</th>
            <th>Kayıt Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((kullanici, index) => (
            <tr key={kullanici._id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/kullanici/${kullanici._id}`}>{kullanici.isim}</Link>
              </td>
              <td>{kullanici.email}</td>
              <td>{new Date(kullanici.kayitTarihi).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
