import React, { useState } from 'react';

function Kartlar() {
  const [kartBaslik, setKartBaslik] = useState('');
  const [kartGorsel, setKartGorsel] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    alert(`Kart Yüklendi: ${kartBaslik}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Kart Yönetimi</h1>
      <form onSubmit={handleUpload}>
        <label>Kart Başlığı:</label>
        <input
          type="text"
          value={kartBaslik}
          onChange={(e) => setKartBaslik(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '5px' }}
        />

        <label>Kart Görseli Yükle:</label>
        <input
          type="file"
          onChange={(e) => setKartGorsel(e.target.files[0])}
          style={{ display: 'block', margin: '10px 0' }}
        />

        <button type="submit">Yükle</button>
      </form>
    </div>
  );
}

export default Kartlar;
