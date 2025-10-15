import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import "./styles.css";

const RegistrationForm = ({ EventName }) => {
  const [formData, setFormData] = useState({
    eventName: EventName,
     name: "",
    email: "",
    phone: "",
    cllg: "",
    branch: "",
    batch: "",
    rollNumber: "",
    acmMember:"",
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

<<<<<<< HEAD
          <label>Email </label>
=======
          <label>Email *</label>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
          <input name="email" type="email" onChange={handleChange} required />

          <div className="input-row">
            <div>
<<<<<<< HEAD
              <label>Full Name </label>
              <input name="name" onChange={handleChange} required />
            </div>
            <div>
              <label>College Name </label>
=======
              <label>Full Name *</label>
              <input name="name" onChange={handleChange} required />
            </div>
            <div>
              <label>College Name *</label>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
              <input name="cllg" onChange={handleChange} required />
            </div>
          </div>

<<<<<<< HEAD
          <label>Phone Number </label>
          <input name="phone" onChange={handleChange} required />

          <label>Branch </label>
=======
          <label>Phone Number *</label>
          <input name="phone" onChange={handleChange} required />

          <label>Branch *</label>``
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
          <input name="branch" onChange={handleChange} required />

          <div className="input-row">
            <div>
<<<<<<< HEAD
              <label>Batch </label>
=======
              <label>Batch *</label>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
              <select name="batch" onChange={handleChange} required>
                <option value="">Select</option>
                <option>FE</option>
                <option>SE</option>
                <option>TE</option>
                <option>BE</option>
              </select>
            </div>
            <div>
<<<<<<< HEAD
              <label>Division </label>
=======
              <label>Division *</label>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
              <input name="division" onChange={handleChange} required />
            </div>
          </div>

<<<<<<< HEAD
          <label>Roll Number </label>
          <input name="rollNumber" onChange={handleChange} required />

          <label>ACM Member? </label>
=======
          <label>Roll Number *</label>
          <input name="rollNumber" onChange={handleChange} required />

          <label>ACM Member? *</label>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="acmMember"
                value="Yes"
                onChange={handleChange}
                required
<<<<<<< HEAD
              />Yes
              
=======
              />{" "}
              Yes
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
            </label>
            <label>
              <input
                type="radio"
                name="acmMember"
                value="No"
                onChange={handleChange}
                required
<<<<<<< HEAD
              />
=======
              />{" "}
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
              No
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

