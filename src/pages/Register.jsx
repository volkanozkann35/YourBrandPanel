import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
    } catch (err) {
      alert('Kayıt başarısız!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Kayıt Ol</h2>
      <input placeholder="İsim" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Şifre" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
};

export default Register;
