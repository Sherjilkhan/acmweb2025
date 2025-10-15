import React, { useState } from "react";
import { generateInvoice } from "../utils/invoiceGeerator";
import SuccessPage from "./SuccessPage";
import qr from "../assets/paymentqr.jpg";
const PaymentForm = ({ formData }) => {
  const [transactionId, setTransactionId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!transactionId) return alert("Please enter transaction ID!");

    setLoading(true);

    try {
      const fullData = { ...formData, transactionId };

      await fetch(
        "https://script.google.com/macros/s/AKfycbzByWF65b1iCBBwtN5vRuonHGq3TYCNTg_POrQUVkCksKLhSWKZn8Ar3PQgX39LMHvx/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullData),
          mode: "no-cors", // allows Google Script POST
        }
      );

      generateInvoice(fullData, transactionId);
      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while submitting!");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessPage />;

  const fee = formData.acmMember === "Yes" ? "₹50" : "₹100";

  return (
    <div className="form-container glass-form">
      <h2>Payment Details</h2>
      <p>
        Registration Fee: <strong>{fee}</strong>
      </p>
      <img src={qr} alt="Payment" />
      <label>Transaction ID *</label>
      <input
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        required
      />
      <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
        {loading ? "Submitting..." : "Submit & Generate Invoice"}
      </button>
    </div>
  );
};

export default PaymentForm;
