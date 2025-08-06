import React, { useState } from 'react';

function Ayarlar() {
  const [etsyApiKey, setEtsyApiKey] = useState('');
  const [bildirim, setBildirim] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Etsy API Kaydedildi: ${etsyApiKey} | Bildirim: ${bildirim ? 'Açık' : 'Kapalı'}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ayarlar</h1>
      <form onSubmit={handleSubmit}>
        <label>Etsy API Anahtarı:</label>
        <input
          type="text"
          value={etsyApiKey}
          onChange={(e) => setEtsyApiKey(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '5px' }}
        />

        <label>
          <input
            type="checkbox"
            checked={bildirim}
            onChange={(e) => setBildirim(e.target.checked)}
          /> Bildirimleri Aç
        </label>

        <br />
        <button type="submit" style={{ marginTop: '10px' }}>Kaydet</button>
      </form>
    </div>
  );
}

export default Ayarlar;
