import React, { useState } from "react";
import "./BookingPanel.css";

export default function BookingPanel() {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = React.useState("Seattle[SEA]");
  const [to, setTo] = React.useState("Tokyo (All)[TYO]");

  return (
    <div className="booking-root">
      {/* Top Navigation */}
      <nav className="booking-nav">
        <button>Reservations</button>
        <button>Flight Status</button>
        <button>My Booking</button>
        <button>Check-in</button>
      </nav>
      {/* Sub Tabs */}
      <div className="booking-tabs">
        <button>Tickets</button>
        <button>Flight Awards</button>
        <button>Hotel</button>
        <button>Car Rentals</button>
      </div>
      <hr />
      {/* Trip Type Toggle */}
      <div className="trip-toggle">
        <button
          className={tripType === "round" ? "toggle-active" : ""}
          onClick={() => setTripType("round")}
        >
          Round Trip
        </button>
        <button
          className={tripType === "oneway" ? "toggle-active" : ""}
          onClick={() => setTripType("oneway")}
        >
          One Way
        </button>
      </div>
      {/* From/To Inputs */}
      <div className="from-to-row">
        <div className="input-box">
          <span className="input-icon">✈️</span>
          <input
            className="editable-input"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <span className="switch-icon">🔁</span>
        <div className="input-box">
          <span className="input-icon">✈️</span>
          <input
            className="editable-input"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>

      <div className="open-row">
        open <span className="plus-icon">+</span>
      </div>
      {/* Action Grid */}
      <div className="action-grid">
        <div className="action-item">
          <span className="action-icon">📝</span>
          <span>Guide</span>
        </div>
        <div className="action-item">
          <span className="action-icon">🚗</span>
          <span>Baggage Information</span>
        </div>
        <div className="action-item">
          <span className="action-icon">💻</span>
          <span>Information for Online Check-in</span>
        </div>
        <div className="action-item">
          <span className="action-icon">💖</span>
          <span>SPECIAL ASSISTANCE</span>
        </div>
        <div className="action-item">
          <span className="action-icon">📄</span>
          <span>
            Paid Services
            <br />
            EMD Search
          </span>
        </div>
        <div className="action-item">
          <span className="action-icon">🎫</span>
          <span>Special Fares</span>
        </div>
      </div>
    </div>
  );
}
