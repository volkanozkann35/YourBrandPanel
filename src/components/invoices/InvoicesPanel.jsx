import React, { useState } from "react";
import Invoices from "./Invoices";
import InvoiceAdd from "./InvoiceAdd";

export default function InvoicesPanel() {
  const [invoices, setInvoices] = useState([
    { id: 1, customer: "Volkan", amount: 500, status: "Ödendi" },
    { id: 2, customer: "Ayşe", amount: 750, status: "Beklemede" },
  ]);

  const addInvoice = (invoice) => setInvoices([...invoices, invoice]);
  const deleteInvoice = (id) => setInvoices(invoices.filter(invoice => invoice.id !== id));
  const toggleStatus = (id) => {
    setInvoices(invoices.map(invoice =>
      invoice.id === id
        ? { ...invoice, status: invoice.status === "Ödendi" ? "Beklemede" : "Ödendi" }
        : invoice
    ));
  };

  return (
    <div>
      <InvoiceAdd onAdd={addInvoice} />
      <Invoices invoices={invoices} deleteInvoice={deleteInvoice} toggleStatus={toggleStatus} />
    </div>
  );
}
