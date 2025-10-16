import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages.css";
import hero from "/assets/hero.jpg";
import herort from "/assets/hero-rt.png";
import dm1 from "../assets/domain1.jpg";
import dm2 from "../assets/domain2.png";
import dm3 from "../assets/domain3.png";
import dm4 from "../assets/domain4.png";
import dm5 from "../assets/domain5.png";
import dm6 from "../assets/domain6.png";
import dm7 from "../assets/domain7.png";
import dm8 from "../assets/domain8.png";
import statshero from "/assets/stats-hero.png";
import flg1 from "/assets/Event-data/gold.png";
import flg2 from "/assets/Event-data/kleos.png";
import flg3 from "/assets/Event-data/codesummit.jpg";
import { Link } from "react-router-dom";
import evntvid from "../assets/Eventpage-hero.mp4";

import events from "../assets/EventData/eventdata"; 
import Announcemnt from "../Compoment/announcement";
import Counter from "../Compoment/counter";

const images = [
  "public/assets/Event-data/hoc1.jpg",
  "public/assets/Event-data/vr1.jpg",
  "public/assets/Event-data/ee1.jpg",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 500 });
     const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);

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
      <Announcemnt />
      
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-thumb">
          <img src={herort} alt="Hero" className="hero-image rotated-up" />
          <img src={hero} alt="Hero" className="hero-image straight" />
          <img src={herort} alt="Hero" className="hero-image rotated-down" />
        </div>
        <div className="hero-text">
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
          {/* <div className="wrapper ">
          <div className="itemLeft item1">Kyros</div>
          <div className="itemLeft item2">CodeSummit</div>
          <div className="itemLeft item3">Eng Essentials</div>
          <div className="itemLeft item4">Hour Of Code</div>
          <div className="itemLeft item5">Elixir</div>
          <div className="itemLeft item6">TechnFest</div>
          <div className="itemLeft item7">Kleos</div>
          <div className="itemLeft item8">WIP</div>
        </div> */}
        </div>
      </div>

      {/* Short overview */}
      <div className="perks-section">
        <h1 data-aos="zoom-in-up">Discover. Connect. Innovate.</h1>
        <h3 data-aos="fade-up">
          Join RAIT ACM — a global community of thinkers, creators, and tech
          enthusiasts pushing the boundaries of innovation.
        </h3>

        <div className="perks-content">
          <div className="perksdiv1" data-aos1="fade-right">
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
          <div className="perksdiv2" data-aos1="zoom-in-up">
            <h2>Knowledge and Experience</h2>
            <p>
              Get hands-on experience and knowledge of what the latest
              technology has to offer.
            </p>
          </div>
          <div className="perksdiv3" data-aos="fade-up">
            <h2>Free Workshops</h2>
            <p>
              Students with an ACM international membership get to attend all
              RAIT ACM workshops/events for free.
            </p>
          </div>
          <div className="perksdiv4" data-aos="fade-left">
            <h2>Perks of Joining RAIT ACM</h2>
            <p>
              Join RAIT-ACM today and become a part of an international
              community that strives in fostering technology.
            </p>
          </div>
          <div className="perksdiv5" data-aos="fade-up">
            <h2>Diverse Skill Development</h2>
            <p>
              Explore your potential in domains like Management, Creative,
              Publicity, Social Media, and Editorial.
            </p>
          </div>
        </div>
      </div>
      {/* Domain Section  */}
      <div className="domain-container">
        <div className="domain-heading">
          <div className="domain-eyebrow" data-aos="zoom-in-up">
            Pillars of our chapters
          </div>
          <div className="domain-head" data-aos="zoom-in-up">
            Core <br/><i>Domains</i><br/> of RAIT ACM
          </div>
          <div className="domain-overview" data-aos="zoom-in-up">
            Our domains shape the framework of RAIT ACM, balancing innovation,
            creativity and strategy. Together, they create an ecosystem where
            ideas evolve into impactful initiatives
          </div>
        </div>

        <div className="domain-drawer" data-aos="fade-left">
          <div
            className="domain-item"
            style={{
              backgroundImage: `url(${dm1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="domain-name">Technical</div>
            <div className="domain-description">
              The technical team organizes technical events and activities.
              Assuring the website is updated and providing technical assistance
              is the team's responsibility.
            </div>
          </div>
          <div className="domain-item"   style={{
              backgroundImage: `url(${dm2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="domain-name">Management</div>
            <div className="domain-description">
              Our management team ensures smooth operations and coordination
              among various teams. They play a crucial role in planning and
              executing events.
            </div>
          </div>
          <div className="domain-item"
            style={{
              backgroundImage: `url(${dm3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="domain-name">Editorial</div>
            <div className="domain-description">
              Our editorial team is responsible for creating and curating
              content for our publications and online platforms. They ensure
              that our messaging is clear, engaging, and aligned with our
              mission.
            </div>
          </div>
          <div className="domain-item"
            style={{
              backgroundImage: `url(${dm4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="domain-name">Publicity</div>
            <div className="domain-description">
              Our publicity team promotes our events and workshops on social
              media platforms. They inform the audience why they should register
              and the benefits they will receive.
            </div>
          </div>
          <div className="domain-item"
            style={{
              backgroundImage: `url(${dm5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="domain-name">Creative</div>
            <div className="domain-description">
              Our creative team is responsible for designing and producing
              engaging content for our events and marketing materials. They
              bring our ideas to life through visuals and storytelling.
            </div>
          </div>
          <div className="domain-item"  style={{
              backgroundImage: `url(${dm6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="domain-name">Media Graphics</div>
            <div className="domain-description">
              Our media team is responsible for capturing and producing
              high-quality content for our events and marketing materials. They
              ensure that our visuals are engaging and aligned with our brand.
            </div>
          </div>
          <div className="domain-item"
            style={{
              backgroundImage: `url(${dm7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="domain-name">Design</div>
            <div className="domain-description">
              Our design team is responsible for creating visually appealing
              graphics and layouts for our events and marketing materials. They
              ensure that our branding is consistent and engaging.
            </div>
          </div>
          <div className="domain-item"
            style={{
              backgroundImage: `url(${dm8})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="domain-name">Sponsorship</div>
            <div className="domain-description">
              Our sponsorship team is responsible for securing partnerships and
              funding for our events. They play a crucial role in ensuring the
              financial success of our initiatives.
            </div>
          </div>
        </div>
      </div>
      {/* Event Section */}
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
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stats-wrapper">
          <div className="curves">
            <img src={statshero} alt="Stats Hero" />
          </div>

          <div className="stats-div2">
            <div className="stats-head" data-aos="zoom-in-up">
              Trusted by students.
            </div>
            <div className="stats-subhead">
              This student chapter has been active since 2019 and has conducted
              many events/workshops till now.
            </div>
            <div className="stats-data">
              <div>
                
                <Counter target={19000} duration={2000} />
                <h2>Total Reach</h2>
              </div>
              <div>
                <Counter target={1150} duration={2000} />
                <h2>Active Members</h2>
              </div>
              <div>
                <Counter target={135} duration={2000} />
                <h2>Events Conducted</h2>
              </div>
              <div>
                <Counter target={60} duration={2000} />
                <h2>Months of Experience</h2>
              </div>
            </div>
          </div>
          <div className="stats-div3"></div>
        </div>
      </div>
      {/* FlagshipEvent-section */}
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
      {/* JoinUs section */}
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
          <div className="joinus-div1">
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
          <div className="joinus-div2">
            <h2>95%+ Member Engagement</h2>
            <p>
              You can rely on us to keep you connected with like-minded
              individuals shaping tomorrow.
            </p>
          </div>
          <div className="joinus-div3">
            <h2>500+ Lives Transformed</h2>
            <p>
              Join countless satisfied members who've realized their potential
              through our consistent, expert guidance and collaborative network.
            </p>
          </div>
          <div className="joinus-div4">
            <p></p>
          </div>
          <div className="joinus-div5">
            <p></p>
          </div>
        </div>
      </div>
      {/* FAQs section */}
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
      {/* Testimonial section */}

      {/* Contact Us section */}
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
