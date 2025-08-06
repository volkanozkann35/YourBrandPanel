import React, { useState } from "react";
import Invoices from "./Invoices";
import InvoiceAdd from "./InvoiceAdd";

export default function InvoicesPanel() {
  const [invoices, setInvoices] = useState([
    { id: 1, customer: "Ahmet", amount: 300, status: "Ödendi" },
    { id: 2, customer: "Elif", amount: 500, status: "Beklemede" },
  ]);

  const addInvoice = (invoice) => setInvoices([...invoices, invoice]);
  const toggleStatus = (id) => {
    setInvoices(
      invoices.map((i) =>
        i.id === id ? { ...i, status: i.status === "Ödendi" ? "Beklemede" : "Ödendi" } : i
      )
    );
  };
  const deleteInvoice = (id) => setInvoices(invoices.filter((i) => i.id !== id));

  return (
    <div>
      <h2>Fatura Paneli</h2>
      <InvoiceAdd onAdd={addInvoice} />
      <Invoices invoices={invoices} toggleStatus={toggleStatus} deleteInvoice={deleteInvoice} />
    </div>
  );
}
