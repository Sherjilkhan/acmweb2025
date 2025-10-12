import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import events from "../assets/EventData/eventdata";
import { Input } from "../Compoment/Input";
import { Label } from "../Compoment/Label";
import styles from "./styles-form-demo.module.css";
import RegistrationForm from "../Compoment/RegistrationForm";

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

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-fill event name when event loads
  useEffect(() => {
    if (event) {
      setFormData((prev) => ({ ...prev, eventName: event.title }));
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      setLoading(false);
      setShowPopup(true);
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
      setLoading(false);
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
      {/* ---------- PRELOADER ---------- */}
      {loading && (
        <div className="preloader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* ---------- SUCCESS POPUP ---------- */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✅ Registration Successful!</h2>
            <p>
              Thank you for registering for <strong>{event.title}</strong>.
              <br />
              Please join our WhatsApp group for further updates.
            </p>
            <a
              href="https://chat.whatsapp.com/CnY14iDcZhU3PCzFPUXEkE?mode=ems_wa_c"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button"
              onClick={() => setShowPopup(false)}
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      )}

      {/* ---------- HEADER ---------- */}
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

      {/* ---------- FORM ---------- */}
      {isOngoingOrUpcoming ? (
        <RegistrationForm EventName={event.title} />
      ) : (
        <h3 className="closed-msg">⚠️ Registration Closed</h3>
      )}
    </div>
  );
};

export default EventDescription;
