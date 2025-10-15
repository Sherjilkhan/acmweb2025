import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages.css";
import hero from "/assets/hero.jpg";
import herort from "/assets/hero-rt.png";
import technicallogo from "/assets/domainLogo/technical.svg";
import managementlogo from "/assets/domainLogo/management.svg";
import editoriallogo from "/assets/domainLogo/editorial.svg";
import publogo from "/assets/domainLogo/publicity.svg";
import creativelogo from "/assets/domainLogo/creative.svg";
import medialogo from "/assets/domainLogo/mediagraphics.svg";
import designlogo from "/assets/domainLogo/design.svg";
import sponsorlogo from "/assets/domainLogo/sponsorship.svg";
import statshero from "/assets/stats-hero.png";
import flg1 from "/assets/Event-data/gold.png";
import flg2 from "/assets/Event-data/kleos.png";
import flg3 from "/assets/Event-data/codesummit.jpg";
import { Link } from "react-router-dom";
import Announcemnt from "../Compoment/announcement";

const Homepast = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
          <div className="eyebrow-text">Bridging Talent with Opportunity</div>
          <div className="head1">RAIT ACM</div>
          <div className="head2">STUDENT CHAPTER</div>
          <div className="description">
            <div className="blurbg"></div>
            <div className="description-content">
              <p>
                Our Vision is to inspire determination and enthusiasm in a
                professional environment
              </p>
              <Link
                to={
                  "https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD"
                }
                target="__blank"
                className="join-button"
              >
                Join Us
              </Link>
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
      <div className="committee-intro">
        <div className="perks" data-aos="fade-up-right" data-aos-duration="500">
          <div className="perks-bg"></div>
          <div className="perks-content">
            <h1>Perks of Joining RAIT ACM</h1>
            <p>
              Join RAIT-ACM today and become a part of an international
              community that strives in fostering technology.
              <br />
              <b>Knowledge and Experience</b>
              Get hands-on experience and knowledge of what the latest
              technology has to offer.
              <br />
              <b>Free Workshops</b> Students with ACM international membership
              get to attend all RAIT ACM workshops/events for free.
            </p>
          </div>
        </div>
        <div
          className="essentials"
          data-aos="fade-up-left"
          data-aos-duration="500"
        >
          <div className="essentials-bg"></div>
          <div className="essentials-content">
            <h1>Essentials about RAIT ACM</h1>
            <p>
              RAIT ACM is the student-led chapter of the prestigious Association
              for Computing Machinery. We are a multidisciplinary committee
              dedicated to empowering RAIT students with the critical skills
              required for the modern tech landscape. By integrating technical
              training with creative development and management acumen, we forge
              a community of innovators prepared to lead and solve the
              challenges of tomorrow.
            </p>
            <button className="join-button">Join Now</button>
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
            Core <p>Domains</p> of RAIT ACM
          </div>
          <div className="domain-overview" data-aos="zoom-in-up">
            Our domains shape the framework of RAIT ACM, balancing innovation,
            creativity and strategy. Together, they create an ecosystem where
            ideas evolve into impactful initiatives
          </div>
        </div>

        <div className="domain-drawer" data-aos="fade-left">
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={technicallogo} alt="Technical Logo" />
            </div>
            <div className="domain-name">Technical</div>
            <div className="domain-description">
              The technical team organizes technical events and activities.
              Assuring the website is updated and providing technical assistance
              is the team's responsibility.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={managementlogo} alt="Management Logo" />
            </div>
            <div className="domain-name">Management</div>
            <div className="domain-description">
              Our management team ensures smooth operations and coordination
              among various teams. They play a crucial role in planning and
              executing events.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={editoriallogo} alt="Editorial Logo" />
            </div>
            <div className="domain-name">Editorial</div>
            <div className="domain-description">
              Our editorial team is responsible for creating and curating
              content for our publications and online platforms. They ensure
              that our messaging is clear, engaging, and aligned with our
              mission.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={publogo} alt="Publicity Logo" />
            </div>
            <div className="domain-name">Publicity</div>
            <div className="domain-description">
              Our publicity team promotes our events and workshops on social
              media platforms. They inform the audience why they should register
              and the benefits they will receive.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={creativelogo} alt="Creative Logo" />
            </div>
            <div className="domain-name">Creative</div>
            <div className="domain-description">
              Our creative team is responsible for designing and producing
              engaging content for our events and marketing materials. They
              bring our ideas to life through visuals and storytelling.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={medialogo} alt="Media Graphics Logo" />
            </div>
            <div className="domain-name">Media Graphics</div>
            <div className="domain-description">
              Our media team is responsible for capturing and producing
              high-quality content for our events and marketing materials. They
              ensure that our visuals are engaging and aligned with our brand.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={designlogo} alt="Design Logo" />
            </div>
            <div className="domain-name">Design</div>
            <div className="domain-description">
              Our design team is responsible for creating visually appealing
              graphics and layouts for our events and marketing materials. They
              ensure that our branding is consistent and engaging.
            </div>
          </div>
          <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={sponsorlogo} alt="Sponsorship Logo" />
            </div>
            <div className="domain-name">Sponsorship</div>
            <div className="domain-description">
              Our sponsorship team is responsible for securing partnerships and
              funding for our events. They play a crucial role in ensuring the
              financial success of our initiatives.
            </div>
          </div>
          {/* <div className="domain-item">
            <div className="domain-thumbnail">
              <img src={technicallogo} alt="Technical Logo" />
            </div>
            <div className="domain-name">Technical</div>
            <div className="domain-description">
              The technical team organizes technical events and activities.
              Assuring the website is updated and providing technical assistance
              is the team's responsibility.
            </div>
          </div> */}
        </div>
      </div>
      {/* Event Section */}
      <div className="event-container">
        <div className="event-head">
          <h4 data-aos="fade-down">Celebrating Our Journey</h4>
          <h2 data-aos="zoom-in">Events That Shaped Our Tenure</h2>
          <h3 data-aos="flip-up">
            From workshops to competitions, explore the wide range of impactful
            events conducted throughout our ACM Chapter journey.
          </h3>
        </div>
        <div className="event-grid">
          <div className="evntdiv1"></div>
          <div className="evntdiv2"></div>
          <div className="evntdiv3"></div>
          <div className="evntdiv4"></div>
        </div>
        <div className="event-flex">
          <div className="evntfdiv1"></div>
          <div className="evntfdiv2"></div>
          <div className="evntfdiv3"></div>
          <div className="evntfdiv4"></div>
        </div>
        <Link to="/events" className="event-btn">
          View All Events
        </Link>
      </div>
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stats-wrapper">
          <div className="curves">
            <img src={statshero} alt="Stats Hero" />
          </div>

          <div className="stats-div2">
            <div className="stats-head" data-aos="flip-up">
              Trusted by students.
            </div>
            <div className="stats-subhead">
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
      <div className="joinus-container">
        <div className="div1" data-aos="fade-right"></div>
        <div className="joinus-content">
          <h1>Join Us Today</h1>
          <p>
            Get access to a lot of events and knowledge. We work as a
            team,strive towards building the right set of skills to make all our
            members ready for the world!
          </p>
          <button>
            <Link
              to={
                "https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD"
              }
              target="__blank"
            >
              Join Now
            </Link>
          </button>
        </div>
        <div className="div3" data-aos="fade-left"></div>
      </div>
      {/* FAQs section */}
      <div className="faqs-container">
        <h2 data-aos="fade-right">OUR FAQS</h2>
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

export default Homepast;
