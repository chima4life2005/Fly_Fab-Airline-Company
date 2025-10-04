import React, { useState } from "react";

const CheckinPage = ({ bookings }) => {
  const [flightNumber, setFlightNumber] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [match, setMatch] = useState(null);

  const handleCheckin = (e) => {
    e.preventDefault();
    // Find booking with exact flight number and passenger name (case-insensitive)
    const booking = bookings.find(
      (b) =>
        b.flightNumber?.toLowerCase() === flightNumber.toLowerCase() &&
        b.passengerName?.toLowerCase() === passengerName.toLowerCase()
    );
    if (booking) {
      setMatch(booking);
      setCheckedIn(true);
    } else {
      setMatch(null);
      setCheckedIn(false);
      alert("No such booking found. Please check details and try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 450,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px #ccc",
        padding: 32,
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#05668d" }}>Online Check-In</h2>
      <form
        onSubmit={handleCheckin}
        style={{ display: "grid", gap: 18, margin: "24px 0" }}
      >
        <input
          type="text"
          placeholder="Flight Number (e.g. FF123)"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 6, border: "1px solid #b2bec3" }}
        />
        <input
          type="text"
          placeholder="Passenger Name"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 6, border: "1px solid #b2bec3" }}
        />
        <button
          type="submit"
          style={{
            background: "#05668d",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "12px 0",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Check In
        </button>
      </form>

      {checkedIn && match && (
        <div style={{ marginTop: 24 }}>
          <h3 style={{ color: "#28a745" }}>Check-in Successful!</h3>
          <div>
            <strong>Passenger:</strong> {match.passengerName}
            <br />
            <strong>Flight:</strong> {match.flightNumber}
            <br />
            {match.departure && match.destination && (
              <>
                <strong>Route:</strong> {match.departure} → {match.destination}
                <br />
              </>
            )}
            {match.date && (
              <>
                <strong>Date:</strong> {match.date}
                <br />
              </>
            )}
          </div>
          {match.img && (
            <img
              src={match.img}
              alt="Flight"
              style={{
                marginTop: 18,
                borderRadius: 8,
                width: "100%",
                maxWidth: 260,
              }}
            />
          )}
          <p style={{ color: "#069", marginTop: 16 }}>
            Enjoy your flight! Your boarding pass will be sent to your email.
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckinPage;
