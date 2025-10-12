import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import events from "../assets/EventData/eventdata";

import { Input } from "../Compoment/Input";
import { Label } from "../Compoment/Label";
import styles from "./styles-form-demo.module.css"
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

  // Auto-fill event name when event loads
  useEffect(() => {
    if (event) {
      setFormData((prev) => ({ ...prev, eventName: event.title }));
    }
  }, [event]);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzByWF65b1iCBBwtN5vRuonHGq3TYCNTg_POrQUVkCksKLhSWKZn8Ar3PQgX39LMHvx/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      alert("Form submitted successfully!");
      setFormData({
        eventName: event.title,
        name: "",
        email: "",
        phone: "",
        cllg: "",
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

  // Image carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === event.glimpse.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const end = new Date(event.endDate);
  const isOngoingOrUpcoming = today <= end;

  return (
    <div className="event-description">
      <div className="eventdes-header">
        <div className="fade-slider">
          {event.glimpse.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`fade-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="eventdes-header-text">
          <h1>{event.title}</h1>
          <p>{event.type}</p>
          <p>
            {event.startDate} - {event.endDate}
          </p>
          <h3>{event.short_description}</h3>
        </div>
      </div>

      {/* Registration form */}
      {isOngoingOrUpcoming ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Register Now</h2>

          {/* Name */}
          <div className={styles.field}>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Tyler Durden"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* College Name */}
          <div className={styles.field}>
            <Label htmlFor="cllg">College Name</Label>
            <Input
              id="cllg"
              name="cllg"
              type="text"
              placeholder="Fight Club University"
              value={formData.cllg}
              onChange={handleChange}
              required
            />
          </div>

          {/* Branch */}
          <div className={styles.field}>
            <Label htmlFor="branch">Branch</Label>
            <Input
              id="branch"
              name="branch"
              type="text"
              placeholder="Computer Science"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>

          {/* Batch */}
          <div className={styles.field}>
            <Label htmlFor="batch">Batch</Label>
            <select
              id="batch"
              name="batch"
              className={styles.select}
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
          </div>

          {/* Roll Number */}
          <div className={styles.field}>
            <Label htmlFor="rollNumber">Roll Number</Label>
            <Input
              id="rollNumber"
              name="rollNumber"
              type="text"
              placeholder="1234"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button className={styles.primaryButton} type="submit">
            {"Submit Registration →"}
          </button>

          <div className={styles.divider} />

          {/* WhatsApp Group Link */}
          <a
            href="https://chat.whatsapp.com/CnY14iDcZhU3PCzFPUXEkE?mode=ems_wa_c"
            className={styles.joinButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join WhatsApp Group
          </a>
        </form>
      ) : (
        <h3 className="closed-msg">⚠️ Registration Closed</h3>
      )}
    </div>
  );
};

export default EventDescription;
