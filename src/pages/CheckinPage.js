import React, { useState } from "react";
import "./CheckinPage.css";

function CheckinPage() {
  const [name, setName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setCheckedIn(false);

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const booking = bookings.find(
      (b) =>
        b.passenger.name.toLowerCase() === name.trim().toLowerCase() &&
        b.flight.uniqueFlightNumber === flightNumber
    );

    if (booking) {
      setCheckedIn(true);
    } else {
      setErrorMsg(
        "No booking found. Please check your name and flight number."
      );
    }
  };

  return (
    <div className="checkin-page">
      <h2>Flight Check-in</h2>
      <form onSubmit={handleSubmit} className="checkin-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          Flight Number
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
            placeholder="Enter your flight number"
          />
        </label>
        <button type="submit">Check In</button>
      </form>
      {checkedIn && (
        <div className="success-msg">
          Check-in successful! Have a great flight.
        </div>
      )}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
    </div>
  );
}

export default CheckinPage;
