import React, { useEffect, useRef, useState } from "react";
import evntvid from "../assets/Eventpage-hero.mp4";
import events from "../assets/EventData/eventdata";
import { Link } from "react-router-dom";
const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const optionRefs = useRef([]);
  const highlightRef = useRef(null);

  const options = ["All", "Upcoming", "Ongoing", "Past"];
  const getEventStatus = (event) => {
    const today = new Date();
    const start = new Date(event.startDate);
    const end = new Date(event.endDate || event.startDate); // fallback for single-day events

    if (today < start) return "upcoming";
    if (today >= start && today <= end) return "ongoing";
    if (today > end) return "past";

    return "unknown";
  };
  const selected = options[activeIndex];
  const getFilteredEvents = () => {
    if (selected === "All") return events;

    return events.filter(
      (event) => getEventStatus(event) === selected.toLowerCase()
    );
  };
  const filteredEvents = getFilteredEvents();
  useEffect(() => {
    const currentOption = optionRefs.current[activeIndex];
    if (currentOption && highlightRef.current) {
      const { offsetLeft, offsetWidth } = currentOption;
      highlightRef.current.style.transform = `translateX(${offsetLeft}px)`;
      highlightRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);
  return (
    <div className="eventpage-container">
      <div className="event-curves1"></div>
      <div className="event-curves2"></div>
      <div className="event-hero">
        <video autoPlay loop muted className="event-video">
          <source src={evntvid} type="video/mp4" />
        </video>
        <div className="event-hero-text">
          <h4>Milestones That Matter</h4>
          <h1>Events That Defined Our Chapter’s Story</h1>
          <h3>
            Each event was more than a gathering , it was a step towards
            building a thriving tech community at RAIT.
          </h3>
        </div>
      </div>
      <div className="event-content">
        <div className="toggle-wrapper">
          <div className="toggle-container">
            <div className="highlight" ref={highlightRef} />
            {options.map((option, index) => (
              <div
                key={option}
                ref={(el) => (optionRefs.current[index] = el)}
                className={`toggle-option ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div> 

        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            {/* <div className="cardsbg" ></div> */}
            <div className="event-card-content">
              <div className="event-poster" style={{backgroundImage:`url(${event.img})`}}>
                <div className="event-type">{event.type}</div>
                <div className="event-date">{event.startDate}</div>
              </div>
              <div className="event-title">{event.title}</div>
              <div className="event-des">{event.description.slice(0, 100)}....</div>
              <Link to={`/events/${event.id}`} className="Link">Register</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
