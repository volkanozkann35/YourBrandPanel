import React, { useState } from 'react';

function DilSecimi() {
  const [dil, setDil] = useState('tr');

  const handleChange = (secim) => {
    setDil(secim);
    alert(`Dil Değiştirildi: ${secim === 'tr' ? 'Türkçe' : 'English'}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dil Seçimi</h1>
      <button onClick={() => handleChange('tr')}>Türkçe</button>
      <button onClick={() => handleChange('en')} style={{ marginLeft: '10px' }}>English</button>
      <p>Seçilen Dil: {dil === 'tr' ? 'Türkçe' : 'English'}</p>
    </div>
  );
}

export default DilSecimi;
