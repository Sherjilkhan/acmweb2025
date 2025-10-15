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
      <div className="event-description-content">
        <div
          className="event-descrption-div1"
          style={{ backgroundImage: `url(${event.img})` }}
        >
          <h2>{event.type}</h2>
        </div>
        <div className="event-descrption-div2">
          <div
            className="event-glimpse-div1"
            style={{ backgroundImage: `url(${event.glimpse[0]})` }}
          ></div>
          <div
            className="event-glimpse-div2"
            style={{ backgroundImage: `url(${event.glimpse[1]})` }}
          ></div>
          <div
            className="event-glimpse-div3"
            style={{ backgroundImage: `url(${event.glimpse[2]})` }}
          ></div>
        </div>
        <div className="event-descrption-div3">
          <h1>{event.title}</h1>

          <p>
            <h3>About this event</h3>
            {event.short_description}
          </p>
        </div>
        <div className="event-descrption-div4">
          {" "}
          {isOngoingOrUpcoming ? (
            <RegistrationForm EventName={event.title} />
          ) : (
            <h3 className="closed-msg">
              ⚠️ Registration for this event has been ended
            </h3>
          )}
        </div>
        <div className="event-descrption-div5">
          <h1>Event details</h1>
          <h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-calendar-week"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </button>
            Dates: {event.startDate} - {event.endDate}
          </h3>

          <h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </button>
            Venue: {event.venue}
          </h3>
          <h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-hourglass-bottom"
                viewBox="0 0 16 16"
              >
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2z" />
              </svg>
            </button>
              Time: {event.time}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
