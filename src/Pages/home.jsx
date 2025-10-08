import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages.css";
import Announcemnt from "../Compoment/announcement";
import perksimg from "../assets/perksbg.png";
import Carousel from "../Compoment/carousel";
import { Link } from "react-router-dom";
import statshero from "/assets/stats-hero.png";
import flg1 from "/assets/Event-data/gold.png";
import flg2 from "/assets/Event-data/kleos.png";
import flg3 from "/assets/Event-data/codesummit.jpg";

import events from "../assets/EventData/eventdata"; //
import evntvid from "../assets/Eventpage-hero.mp4";
const images = [
  "public/assets/Event-data/hoc1.jpg",
  "public/assets/Event-data/vr1.jpg",
  "public/assets/Event-data/ee1.jpg",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const today = new Date();

    // Filter and sort upcoming events (still ongoing or future ones)
    const upcoming = events
      .filter((event) => new Date(event.endDate) >= today)
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    // Take top 3
    setUpcomingEvents(upcoming.slice(0, 3));
  }, []);

  return (
    <div className="home">
      {/* ---------- HERO ---------- */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            RAIT ACM <i>Student Chapter</i>
          </h1>
          <p>
            Our Vision is to inspire determination and enthusiasm in a
            professional environment
          </p>
        </div>

        <div className="hero-card">
          <Announcemnt />

          <div className="card">
            {/* Slideshow */}
            <div className="slideshow">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`slide-${i}`}
                  className={i === index ? "active" : ""}
                />
              ))}
            </div>

            {/* Card content */}
            <div className="card-content">
              <h2>Trust of 19000+ students</h2>
              <p>
                Join us to explore the world of technology, innovation, and
                creativity. Be a part of our vibrant community and make a
                difference!
              </p>
              <div className="card-footer">
                <span>Join us</span>
                <button>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- PERKS ---------- */}
      <div className="perks-section">
        <h1 data-aos="zoom-in-up">Discover. Connect. Innovate.</h1>
        <h3 data-aos="fade-up">
          Join RAIT ACM — a global community of thinkers, creators, and tech
          enthusiasts pushing the boundaries of innovation.
        </h3>

        <div className="perks-content">
          <div className="perksdiv1" data-aos="fade-right">
            <h2>Get to Know RAIT ACM</h2>
            <p>
              Association for Computing Machinery (ACM) is the world's largest
              educational and scientific computing society, delivering resources
              that advance computing as a science and profession. RAIT ACM is a
              Student Chapter of the Elite International level ACM organization.
              It is a committee focused on the overall development and progress
              of students in RAIT.
            </p>
          </div>
          <div className="perksdiv2" data-aos="zoom-in-up">
            <h2>Knowledge and Experience</h2>
            <p>
              Get hands-on experience and knowledge of what the latest
              technology has to offer.
            </p>
          </div>
          <div className="perksdiv3" data-aos="fade-left">
            <h2>Free Workshops</h2>
            <p>
              Students with an ACM international membership get to attend all
              RAIT ACM workshops/events for free.
            </p>
          </div>
          <div className="perksdiv4" data-aos="fade-up">
            <h2>Perks of Joining RAIT ACM</h2>
            <p>
              Join RAIT-ACM today and become a part of an international
              community that strives in fostering technology.
            </p>
          </div>
          <div className="perksdiv5" data-aos="fade-left">
            <h2>Diverse Skill Development</h2>
            <p>
              Explore your potential in domains like Management, Creative,
              Publicity, Social Media, and Editorial.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- DOMAINS ---------- */}
      <div className="domain-wrapper">
        <div className="domain-header">
          <h1>
            Core <i>Domains</i> of RAIT ACM
          </h1>
          <p>
            In all fields of technology, we have domains that offer every
            individual the opportunity to grow.
          </p>
        </div>
        <Carousel />
      </div>

      {/* ---------- EVENTS ---------- */}
      <div className="event-wrapper">
        <div className="event-header">
          <h1 data-aos="zoom-in">Events Throughout the Tenure</h1>
          <h3 data-aos="zoom-in">
            Various events conducted throughout the Chapter
          </h3>
          <Link to="/events" className="event-bttn" data-aos="zoom-in-up">
            View All Events
          </Link>
        </div>

        <div className="event-grid">
          {/* Upcoming Events Section */}
          <div className="event-div1 eventcard" data-aos="fade-right">
            <h2>Upcoming Events</h2>
            {upcomingEvents.length === 0 ? (
              <p>No upcoming events 🎉</p>
            ) : (
              <div className="upcoming-grid">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="upcommingevent">
                    <h3>{event.title}</h3>
                    <p> {event.endDate}</p>
                    <p>{event.description.substring(0, 40)}...</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Keep other slots if needed */}
          <div className="event-div2 eventcard" data-aos="fade-right">
            <div>Hands-On Innovation</div>
          </div>
          <div className="event-div3 eventcard" data-aos="fade-up">
            <p>Milestones That Define Our Chapter</p>
          </div>
          <div className="event-div4 eventcard" data-aos="fade-left">
            <div>Voices That Inspired Us</div>
          </div>
          <div className="event-div5 eventcard" data-aos="fade-left">
            <video autoPlay muted loop playsInline className="video-bg">
              <source src={evntvid} type="video/mp4" />
              Your browser does not support video.
            </video>

            {/* Content overlay */}
            <div className="video-overlay">
              <h2>See the recap of the last tenure</h2>
              <a
                className="play-btn"
                href="https://www.instagram.com/reel/DOaRV6fEXKO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="__blank"
              >
                Watch the whole recap!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- FLG_EVENTS ---------- */}
      <div className="Flagshipevent-container">
        <div className="flg-head">
          <div className="flg-head1" data-aos="fade-right">
            <button>Our Flagship Events</button>
          </div>
          <div className="flg-head2" data-aos="fade-up">
            The Biggest events that RAIT ACM Student Chapter offers every year.
          </div>
          <div className="flg-head3" data-aos="fade-left">
            <p>Events that everyone looks forward to</p>
          </div>
        </div>
        <div className="flg-thumbnail">
          <div className="flg-item flg1 light" data-aos="fade-right">
            <div className="flg-title-up">
              <h1>GOLD</h1> <Link to={"/events/4"} className="flg-link"></Link>
              <h3>expert speaker session</h3>
            </div>
            <img src={flg1} alt="Elixir" />
          </div>
          <div className="flg-item flg2 dark" data-aos="fade-up">
            <img src={flg2} alt="Kleos" />
            <div className="flg-title">
              <h1>Kleos</h1> <Link to={"/events/2"} className="flg-link"></Link>
              <h3>National Level Hackathon</h3>
            </div>
          </div>
          <div className="flg-item  flg3 light" data-aos="fade-left">
            <div className="flg-title-up">
              <h1>CodeSummit</h1>{" "}
              <Link to={"/events/3"} className="flg-link"></Link>
              <h3>Coding Competition</h3>
            </div>
            <img src={flg3} alt="Code Summit" />
          </div>
        </div>
      </div>
      {/* ---------- STATS ---------- */}
      <div className="stats-container">
        <div className="stats-wrapper">
          <div className="curves">
            <img src={statshero} alt="Stats Hero" />
          </div>

          <div className="stats-div2">
            <div className="stats-head" data-aos="zoom-in-up">
              Trusted by <i>students</i>.
            </div>
            <div className="stats-subhead" data-aos="zoom-in-up">
              This student chapter has been active since 2019 and has conducted
              many events/workshops till now.
            </div>
            <div className="stats-data">
              <div>
                <h1 data-aos="zoom-in">19000+</h1>
                <h2>Total Reach</h2>
              </div>
              <div>
                <h1 data-aos="zoom-in">1150+</h1>
                <h2>Active Members</h2>
              </div>
              <div>
                <h1 data-aos="zoom-in">135+</h1>
                <h2>Events Conducted</h2>
              </div>
              <div>
                <h1 data-aos="zoom-in">60+</h1>
                <h2>Months of Experience</h2>
              </div>
            </div>
          </div>
          <div className="stats-div3"></div>
        </div>
      </div>

      {/* ---------- JOINUS ---------- */}
      <div className="joinus-wrapper">
        <div className="joinus-header">
          <h3>The Difference We Make</h3>
          <h1>Empower Your Future. Join Our Community.</h1>
          <h2>
            Explore the key reasons students and innovators choose to be part of
            our vibrant community.
          </h2>
        </div>
        <div className="joinus-grid">
          <div class="joinus-div1">
            <h2>Our Impact on Your Growth</h2>

            <ul>
              <li>
                Dynamic Learning Environment Unlock a world of opportunities and
                knowledge.
              </li>
              <li>
                Skill Development & Innovation Dive into exciting events, expand
                your skillset, and collaborate on projects that fuel innovation.
              </li>
            </ul>
          </div>
          <div class="joinus-div2">
            <h2>95%+ Member Engagement</h2>
            <p>
              You can rely on us to keep you connected with like-minded
              individuals shaping tomorrow.
            </p>
          </div>
          <div class="joinus-div3">
            <h2>500+ Lives Transformed</h2>
            <p>
              Join countless satisfied members who've realized their potential
              through our consistent, expert guidance and collaborative network.
            </p>
          </div>
          <div class="joinus-div4">
            <p></p>
          </div>
          <div class="joinus-div5">
            <p></p>
          </div>
        </div>
      </div>
      {/* ---------- FAQs ---------- */}
      <div className="faqs-container">
        <h2 data-aos="fade-right">OUR FAQ's</h2>
        <h1 data-aos="fade-right">Frequently Asked Questions</h1>
        <div className="faq-wrapper" data-aos="fade-up">
          <div className="faq-item">
            <h1>What is RAIT ACM and International ACM committee?</h1>
            <h3>RAIT ACM is a branch of the International ACM Community.</h3>
          </div>
          <div className="faq-item">
            <h1>What does RAIT ACM offer?</h1>
            <h3>
              We offer to train students in different fields like creative
              thinking, problem-solving, programming and management.
            </h3>
          </div>
          <div className="faq-item">
            <h1>Why should I be part of RAIT ACM?</h1>
            <h3>
              ACM provides a whole package of events and workshops to help get
              you there by advancing your career and enriching your knowledge
              with life- long learning resources.
            </h3>
          </div>
        </div>
      </div>
      {/* ---------- CONTAC-Us ---------- */}
      <div className="contact-container">
        <div className="contact-box">
          {/* Left Side - Form */}
          <div className="contact-form">
            <h2>Send a message</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>

              <div className="form-group full-width">
                <textarea rows="3" placeholder="Your Message"></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message →
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="contact-info">
            <h2>Find us</h2>
            <div className="info-block">
              <h3>Our location</h3>
              <p>Ramrao Adik Institute Of Technology, Nerul, Navi Mumbai</p>
            </div>
            <div className="info-block">
              <h3>Email Address</h3>
              <p>reachritsacm@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
