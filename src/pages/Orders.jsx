import React from 'react';

export default function Orders({ orders, deleteOrder, updateStatus }) {
  return (
    <div>
      <h2>Sipariş Listesi</h2>
      <table border="1" cellPadding={8} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sipariş No</th>
            <th>Müşteri</th>
            <th>Ürün</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>Sipariş bulunamadı.</td>
            </tr>
          ) : (
            orders.map(({ id, customer, product, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{customer}</td>
                <td>{product}</td>
                <td>{status}</td>
                <td>
                  <select
                    value={status}
                    onChange={(e) => updateStatus(id, e.target.value)}
                  >
                    <option value="Hazırlanıyor">Hazırlanıyor</option>
                    <option value="Kargoda">Kargoda</option>
                    <option value="Teslim Edildi">Teslim Edildi</option>
                  </select>
                  <button onClick={() => deleteOrder(id)} style={{ marginLeft: 8, color: 'red' }}>
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
