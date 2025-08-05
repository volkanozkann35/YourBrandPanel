import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as userApi from '../api/userApi';
import LoadingSpinner from './LoadingSpinner';

export default function KullaniciDetay() {
  const { id } = useParams();
  const [kullanici, setKullanici] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userApi.getUserById(id).then(res => {
      setKullanici(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!kullanici) return <p>Kullanıcı bulunamadı.</p>;

  return (
    <div>
      <h2>Kullanıcı Detay</h2>
      <p><strong>İsim:</strong> {kullanici.isim}</p>
      <p><strong>E-posta:</strong> {kullanici.email}</p>
      <p><strong>Kayıt Tarihi:</strong> {new Date(kullanici.kayitTarihi).toLocaleDateString()}</p>
      <Link to="/">Geri Dön</Link>
    </div>
  );
}
