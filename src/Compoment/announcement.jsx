import React, { useState, useEffect } from "react";
import events from "../assets/EventData/eventdata"; // adjust path
import "./component.css";
import { Link } from "react-router-dom";

const Announcement = () => {
<<<<<<< HEAD
 const [announcements, setAnnouncements] = useState([]);
=======
  const [announcements, setAnnouncements] = useState([]);
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325

  useEffect(() => {
    const today = new Date();

    // Filter only upcoming events
    const upcoming = events.filter((event) => {
      const start = new Date(event.startDate);
      return start >= today;
    });

    // Sort by nearest date first
    upcoming.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

<<<<<<< HEAD
    setAnnouncements(upcoming.slice(0,2));
=======
    setAnnouncements(upcoming.slice(0,1));
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
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
