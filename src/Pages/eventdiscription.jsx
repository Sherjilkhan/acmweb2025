import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import events from "../assets/EventData/eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  const [formData, setFormData] = useState({
    eventName: "",
    name: "",
    email: "",
    phone: "",
    cllg: "",
    branch: "",
    batch: "",
    rollNumber: "",
    transactionId: "",
  });

  // Auto-fill eventName from selected event
  useEffect(() => {
    if (event) {
      setFormData((prev) => ({ ...prev, eventName: event.title }));
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzByWF65b1iCBBwtN5vRuonHGq3TYCNTg_POrQUVkCksKLhSWKZn8Ar3PQgX39LMHvx/exec", // must be the /exec URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors", // 👈 important if you don’t need response
        }
      );

      alert("Form submitted successfully!");
      setFormData({
        eventName: event.title,
        name: "",
        email: "",
        phone: "",
        college: "",
        branch: "",
        batch: "",
        rollNumber: "",
        transactionId: "",
      });
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  const today = new Date();
  const end = new Date(event.endDate);
  const isOngoingOrUpcoming = today <= end;

  return (
    <div className="event-description">
      <div className="eventdescription-container">
        <div className="eventdescription-head">
          <img src={event.img} alt={event.title} />
          <div className="event-head-text">
            <h1>{event.title}</h1>
            <h4>{event.type}</h4>
            <h4>
              {event.startDate} - {event.endDate}
            </h4>
          </div>
        </div>

        <h2>About this Event</h2>
        <p>{event.description}</p>

        {event.glimpse.length > 0 && (
          <>
            <h2>Glimpse from the past events</h2>
            <div className="glimpse-media-container">
              <img className="mediadiv1" src={event.glimpse[0]} alt="glimpse" />
              <img className="mediadiv2" src={event.glimpse[1]} alt="glimpse" />
              <img className="mediadiv3" src={event.glimpse[2]} alt="glimpse" />
            </div>
          </>
        )}

        {/* Registration form */}
        {isOngoingOrUpcoming ? (
          <form className="event-form" onSubmit={handleSubmit}>
            <h2>Register Now</h2>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone no. :</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>College Name:</label>
            <input
              type="text"
              name="cllg"
              value={formData.cllg}
              onChange={handleChange}
              required
            />

            <label>Branch:</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            />

            <label>Batch:</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">Select Batch</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>

            <label>Roll no.:</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />

            {/* QR Code Section */}
            {/* <div className="payment-qr">
              <h3>Scan & Pay</h3>
              <img src={qr} alt="Payment QR" />
            </div> */}

            {/* <label>Transaction ID:</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
            /> */}
            <button type="submit">Submit Registration</button>
            <Link className="join-button" to="https://chat.whatsapp.com/CnY14iDcZhU3PCzFPUXEkE?mode=ems_wa_c" target="__blank">Join WhatsApp Group</Link>
          </form>
        ) : (
          <h3 className="closed-msg">⚠️ Registration Closed</h3>
        )}
      </div>
    </div>
  );
};

export default EventDescription;