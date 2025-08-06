import React from "react";

export default function Orders({ orders, deleteOrder, toggleStatus }) {
  return (
    <div>
      <h2>Sipariş Listesi</h2>
      <table border="1" cellPadding={8} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Müşteri</th>
            <th>Tutar</th>
            <th>Durum</th>
            <th>şlemler</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Sipariş bulunamadı.</td>
            </tr>
          ) : (
            orders.map(({ id, customer, total, status }) => (
              <tr key={id}>
                <td>{customer}</td>
                <td>{total} </td>
                <td>{status}</td>
                <td>
                  <button onClick={() => toggleStatus(id)}>
                    {status === "Teslim Edildi" ? "Hazırlanıyor Yap" : "Teslim Edildi Yap"}
                  </button>
                  <button onClick={() => deleteOrder(id)} style={{ marginLeft: 8, color: "red" }}>
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
