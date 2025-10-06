"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./component.css";
import dm1 from "../assets/domain1.png";
import dm2 from "../assets/domain2.png";
import dm3 from "../assets/domain3.png";
import dm4 from "../assets/domain4.png";
import dm5 from "../assets/domain5.png";
import dm6 from "../assets/domain6.png";
import dm7 from "../assets/domain7.png";
import dm8 from "../assets/domain8.png";
const domains = [
  {
    title: "Technical",
    description:
      "The technical team organizes technical events and activities. Assuring the website is updated and providing technical assistance is the team's responsibility.",
    image: dm1,
  },
  {
    title: "Management",
    description:
      "All the activities held throughout the year are overseen by the management team. Events are tracked and problems encountered during events are handled by this domain.",
    image: dm2,
  },
  {
    title: "Editorial",
    description:
      "Our editorial team composes the blog and encourages people to read it. The team produces high quality research articles along with publicity messages and event reports.",
    image: dm3,
  },
  {
    title: "Publicity",
    description:
      "Our publicity team promotes our events and workshops on social media platforms. They inform the audience why they should register and the benefits they will receive.",
    image: dm4,
  },
  {
    title: "Creative",
    description:
      "The Creative Team makes sure all the creative work is done like making posters, cards, or techfest decorations. They are the backbone of any big event and ensure decorations are put up properly.",
    image: dm5,
  },
  {
    title: "Media Graphics",
    description:
      "Videos are produced for events by the video editing team. In addition, the team makes sure that the online events are properly recorded and uploaded to the YouTube channel for further reference.",
    image: dm6,
  },
  {
    title: "Design",
    description:
      "Our design team crafts vibrant banners and posters that capture the essence of each workshop and event. We bring creativity and innovation to every visual detail using computer generated graphics.",
    image: dm7,
  },
  {
    title: "Sponsorship",
    description:
      "The sponsorship team secures vital partnerships to fuel our hackathons and Techfest. We connect with industry leaders to bring valuable resources and opportunities to all participants.",
    image: dm8,
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % domains.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + domains.length) % domains.length);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % domains.length);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const getCardStyle = (index) => {
    const total = domains.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return {
        transform:
          "translateX(-280px) translateY(80px) rotate(-15deg) scale(0.85)",
        opacity: 0.8,
        zIndex: 1,
      };
    } else if (diff === 1) {
      return {
        transform: "translateX(0px) translateY(0px) rotate(0deg) scale(1)",
        opacity: 1,
        zIndex: 3,
      };
    } else if (diff === 2) {
      return {
        transform:
          "translateX(280px) translateY(80px) rotate(15deg) scale(0.85)",
        opacity: 0.8,
        zIndex: 1,
      };
    } else {
      return {
        transform: "translateX(0px) translateY(0px) rotate(0deg) scale(0.5)",
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <div className="carousel-container">
      <div className="decorative-diamond top-left-large" />
      <div className="decorative-diamond top-left-small" />
      <div className="decorative-diamond top-right-large" />
      <div className="decorative-diamond top-right-small" />

      <div className="carousel-content">
        {/* <div className="carousel-header">
          <h1 className="carousel-title">
            Core <span className="carousel-title-accent">Domains</span> of RAIT ACM
          </h1>
          <p className="carousel-subtitle">
            In all fields of technology, we have domains that offer every individual the opportunity to grow.
          </p>
        </div> */}

        <div className="carousel-stage">
          <button
            onClick={goToPrevious}
            className="carousel-control carousel-control-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="carousel-control-icon" />
          </button>

          <button
            onClick={goToNext}
            className="carousel-control carousel-control-next"
            aria-label="Next slide"
          >
            <ChevronRight className="carousel-control-icon" />
          </button>

          {domains.map((domain, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{
                ...getCardStyle(index)
              }}
            >
              <div className="carousel-card-inner">
                <div className="carousel-card-image-wrapper">
                  <img
                    src={domain.image || "/placeholder.svg"}
                    alt={domain.title}
                    className="carousel-card-image"
                  />
                </div>

                <div className="carousel-card-content">
                  <div>
                    <h2 className="carousel-card-title">{domain.title}</h2>
                    <p className="carousel-card-description">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="carousel-dots">
          {domains.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === (activeIndex + 1) % domains.length ? "carousel-dot-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
