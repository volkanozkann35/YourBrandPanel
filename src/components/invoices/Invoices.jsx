import React from "react";

export default function Invoices({ invoices, deleteInvoice, toggleStatus }) {
  return (
    <div>
      <h2>Fatura Listesi</h2>
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
          {invoices.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Fatura bulunamadı.</td>
            </tr>
          ) : (
            invoices.map(({ id, customer, amount, status }) => (
              <tr key={id}>
                <td>{customer}</td>
                <td>{amount} </td>
                <td>{status}</td>
                <td>
                  <button onClick={() => toggleStatus(id)}>
                    {status === "Ödendi" ? "Beklemede Yap" : "Ödendi Yap"}
                  </button>
                  <button onClick={() => deleteInvoice(id)} style={{ marginLeft: 8, color: "red" }}>
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
