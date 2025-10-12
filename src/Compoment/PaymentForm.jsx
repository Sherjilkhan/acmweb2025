import React, { useState } from "react";
import { generateInvoice } from "../utils/invoiceGeerator";
import SuccessPage from "./SuccessPage";

const PaymentForm = ({ formData }) => {
  const [transactionId, setTransactionId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionId) return alert("Please enter transaction ID!");

    generateInvoice(formData, transactionId);
    setSubmitted(true);
  };

  if (submitted) return <SuccessPage />;

  const fee = formData.acmMember === "Yes" ? "₹50" : "₹100";

  return (
    <div className="form-container glass-form">
      <h2>Payment Details</h2>
      <p>Registration Fee: <strong>{fee}</strong></p>
      <label>Transaction ID *</label>
      <input value={transactionId} onChange={(e) => setTransactionId(e.target.value)} required />
      <button onClick={handleSubmit} className="btn-primary">
        Submit & Generate Invoice
      </button>
    </div>
  );
};

export default PaymentForm;
