import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      background: "#f3f3f3",
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/book-flight">Book a Flight</Link>
    <Link to="/checkin">Online Check-In</Link>
    <Link to="/about">About Us</Link>
  </nav>
);

export default Navbar;
