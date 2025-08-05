import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userApi from '../api/userApi';

export default function KullaniciEkle() {
  const [isim, setIsim] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userApi.createUser({ isim, email });
    navigate('/');
  };

  return (
    <div>
      <h2>Yeni Kullanıcı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>İsim:</label>
        <input value={isim} onChange={(e) => setIsim(e.target.value)} />
        <br />
        <label>E-posta:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
