import React, { useEffect, useRef, useState } from "react";
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
      <div className="event-hero">
        <div className="event-hero-text">
          <h4>Milestones That Matter</h4>
          <h1>Events That Defined Our <i style={{fontWeight:"200"}}>Chapter’s Story</i></h1>
          <h3>
            Each event was more than a gathering , it was a step towards
            building a thriving tech community at RAIT.
          </h3>
        </div>
        <div className="event-hero-img">
          <div className="event-hero-img1"></div>
          <div className="event-hero-img2"></div>
          <div className="event-hero-img3"></div>
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
  {filteredEvents.length === 0 ? (
          <div className="no-events">There are no events to display.</div>
        ) : (
          filteredEvents.map((event) => (
              <Link
                to={`/events/${event.id}`}
                key={event.id}
                className="event-card"
              >
                <div
                  className="event-card-content"
                  style={{
                    backgroundImage: `url(${
                      event.glimpse && event.glimpse.length > 0
                        ? event.glimpse[0]
                        : event.img
                    })`,
                  }}
                >
                  <div className="event-info">
                    <div className="event-type">{event.type}</div>
                    <div className="event-date">{event.startDate}</div>
                  </div>
                  <div className="event-title">{event.title}</div>
                  <div className="event-des">
                    {event.description.slice(0, 100)}....
                  </div>
                </div>
              </Link>
            ))
          
        )}
      </div>
    </div>
  );
};

export default Events;
