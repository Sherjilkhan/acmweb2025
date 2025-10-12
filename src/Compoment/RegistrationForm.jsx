import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import "./styles.css";

const RegistrationForm = (EventName) => {
  const [formData, setFormData] = useState({
    eventName:EventName,
    email: "",
    firstName: "",
    lastName: "",
    whatsapp: "",
    branch: "",
    year: "",
    division: "",
    roll: "",
    acmMember: "",
  });

  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((v) => v === "")) {
      alert("Please fill all required fields!");
      return;
    }
    setShowPayment(true);
  };

  return (
    <div className="form-container">
      {!showPayment ? (
        <form onSubmit={handleContinue} className="glass-form">
          <h2>Fill in your details to secure your spot</h2>
          <label>Email *</label>
          <input name="email" type="email" onChange={handleChange} required />

          <div className="input-row">
            <div>
              <label>First Name *</label>
              <input name="firstName" onChange={handleChange} required />
            </div>
            <div>
              <label>Last Name *</label>
              <input name="lastName" onChange={handleChange} required />
            </div>
          </div>

          <label>WhatsApp Number *</label>
          <input name="whatsapp" onChange={handleChange} required />

          <label>Branch *</label>
          <input name="branch" onChange={handleChange}  required />

          <div className="input-row">
            <div>
              <label>Year *</label>
              <select name="year" onChange={handleChange} required>
                <option value="">Select</option>
                <option>FE</option>
                <option>SE</option>
                <option>TE</option>
                <option>BE</option>
              </select>
            </div>
            <div>
              <label>Division *</label>
              <input name="division" onChange={handleChange} required />
            </div>
          </div>

          <label>Roll Number *</label>
          <input name="roll" onChange={handleChange} required />

          <label>ACM Member? *</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="acmMember" value="Yes" onChange={handleChange} required /> Yes
            </label>
            <label>
              <input type="radio" name="acmMember" value="No" onChange={handleChange} required /> No
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Continue to Payment
          </button>
        </form>
      ) : (
        <PaymentForm formData={formData} />
      )}
    </div>
  );
};

export default RegistrationForm;
