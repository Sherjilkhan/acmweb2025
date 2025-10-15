import React, { useState, useEffect } from "react";
import events from "../assets/EventData/eventdata"; // adjust path
import "./component.css";
import { Link } from "react-router-dom";

const Announcement = () => {
 const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const today = new Date();

    // Filter only upcoming events
    const upcoming = events.filter((event) => {
      const start = new Date(event.startDate);
      return start >= today;
    });

    // Sort by nearest date first
    upcoming.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    setAnnouncements(upcoming.slice(0,2));
  }, []);

  const handleClose = (id) => {
    setAnnouncements((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div className="announcement-container">
      {announcements.map((event) => (
        <div key={event.id} className="announcement show">
          <Link to={`/events/${event.id}`}  className="announcement-content">
            <img src={event.img} alt={event.title} className="announcement-img" />
            <div className="announcement-text">
              <strong>{event.title}</strong>
              <p>{event.startDate}</p>
            </div>
          </Link>
          <button className="announcement-close" onClick={() => handleClose(event.id)}>
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
