import { Link } from "react-router-dom";
import { useState } from "react";
import "./component.css";
<<<<<<< HEAD
=======
import "./responsive.css";
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="navbar-container">
      <nav>
        <div className="navbar-background"></div>

        {/* Hamburger icon for mobile (only shows <426px via CSS) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar links */}
        <ul className={`navbar ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/our-team" onClick={() => setIsOpen(false)}>Our Team</Link></li>
          <li className="dropdown">
            <span className="dropbtn">Other RAIT ACM Chapter</span>
            <div className="dropdown-content">
              <Link href="https://rait-w.acm.org/" target="__blank">RAIT ACM W</Link>
              <Link href="https://rait-sigai.acm.org/" target="__blank">RAIT ACM SIGAI</Link>
            </div>
          </li>
          <li className="mobile-only">
            <Link href="https://rait.acm.org/codesummit/" target="_blank">CodeSummit</Link>
          </li>
          <li className="mobile-only">
            <Link href="https://rait.acm.org/kleos-3.0/" target="_blank">Kleos 4.0</Link>
=======
   
      <nav>
        {/* <h1 className="logo">
          <img src={acmlogo} alt="RAIT ACM Logo" className="logo-img" />
          RAIT ACM
        </h1> */}
        {/* Hamburger icon for mobile (only shows <426px via CSS) */}
        
        {/* Navbar links */}
        <ul className={`navbar ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/?" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/our-team" onClick={() => setIsOpen(false)}>
              Our Team
            </Link>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Other RAIT ACM Chapter</span>
            <div className="dropdown-content">
              <Link href="https://rait-w.acm.org/" target="__blank">
                RAIT ACM W
              </Link>
              <Link href="https://rait-sigai.acm.org/" target="__blank">
                RAIT ACM SIGAI
              </Link>
            </div>
          </li>
          <li className="mobile-only">
            <Link href="https://rait.acm.org/codesummit/" target="_blank">
              CodeSummit
            </Link>
          </li>
          <li className="mobile-only">
            <Link href="https://rait.acm.org/kleos-3.0/" target="_blank">
              Kleos 4.0
            </Link>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
          </li>
        </ul>

        {/* Buttons for desktop */}
        <div className="nav-buttons">
<<<<<<< HEAD
          <button><Link to="https://rait.acm.org/codesummit/" target="_blank">CodeSummit</Link></button>
          <button><Link to="https://rait.acm.org/kleos-3.0/" target="_blank">Kleos 4.0</Link></button>
        </div>
      </nav>
    </div>
=======
          <button>
            <Link to="https://rait.acm.org/codesummit/" target="_blank">
              CodeSummit
            </Link>
          </button>
          <button>
            <Link to="https://rait.acm.org/kleos-3.0/" target="_blank">
              Kleos 4.0
            </Link>
          </button>
        </div>
      </nav>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
  );
}

export default Navbar;
