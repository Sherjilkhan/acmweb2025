import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, CalendarDays, BookOpen } from "lucide-react";
// import logo from "../assets/logo.png"; // replace with your logo path
import "./bottomNavbar.css";

const BottomNavbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "Events", path: "/events", icon: <CalendarDays size={22} /> },
    { name: "Team", path: "/our-team", icon: <Users size={22} /> },
    { name: "Blog", path: "/blog", icon: <BookOpen size={22} /> },
  ];

  return (
    <div className="bottom-navbar">
     
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={`nav-item ${
            location.pathname === link.path ? "active" : ""
          }`}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
