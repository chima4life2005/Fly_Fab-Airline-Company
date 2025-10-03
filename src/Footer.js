import React from "react";

const footerStyle = {
  background: "#05668d",
  color: "#fff",
  padding: "32px 16px 12px 16px",
  textAlign: "center",
  fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
  marginTop: "48px",
};

const linkStyle = {
  background: "none",
  border: "none",
  color: "#fff",
  textDecoration: "underline",
  margin: "0 18px",
  fontSize: "1rem",
  cursor: "pointer",
  padding: "8px 0",
};

const hrStyle = {
  border: "none",
  borderTop: "1px solid #fff",
  margin: "24px auto",
  maxWidth: 420,
  opacity: 0.3,
};

const trademarkStyle = {
  fontSize: "0.95rem",
  color: "#d3eaff",
  marginTop: "10px",
  letterSpacing: 1,
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <button
          style={linkStyle}
          onClick={() => (window.location.href = "/about")}
        >
          About Us
        </button>
        <button
          style={linkStyle}
          onClick={() => (window.location.href = "/faqs")}
        >
          FAQs
        </button>
        <button
          style={linkStyle}
          onClick={() => (window.location.href = "/contact")}
        >
          Contact
        </button>
      </div>
      <hr style={hrStyle} />
      <div style={trademarkStyle}>
        &copy; {new Date().getFullYear()} FLYFAB Airline. All rights reserved.
        &mdash; Trademark 2025
      </div>
    </footer>
  );
}
