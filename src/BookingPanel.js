import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookingPanel.css";
import { flights } from "./FlightsData";
// import CarRental from "./pages/CarRental";

export default function BookingPanel() {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = React.useState("Seattle[SEA]");
  const [to, setTo] = React.useState("Tokyo (All)[TYO]");
  function BookingPanel() {
    const [tripType, setTripType] = useState("round");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [selectedOutbound, setSelectedOutbound] = useState(null);
    const [selectedReturn, setSelectedReturn] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    // Filter available outbound flights
    const outboundFlights = flights.filter(
      (f) =>
        f.departure === origin &&
        f.destination === destination &&
        f.date === date
    );

    // Filter available return flights for round trip
    const returnFlights =
      tripType === "round"
        ? flights.filter(
            (f) =>
              f.departure === destination &&
              f.destination === origin &&
              f.date === returnDate
          )
        : [];

    // Confirm booking handler
    const handleConfirmBooking = () => {
      setConfirmed(true);
    };

    // Reset after confirmation
    const handleReset = () => {
      setTripType("round");
      setOrigin("");
      setDestination("");
      setDate("");
      setReturnDate("");
      setSelectedOutbound(null);
      setSelectedReturn(null);
      setConfirmed(false);
    };

    return (
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
        <div className="trip-toggle" style={{ marginBottom: 16 }}>
          <button
            className={tripType === "round" ? "toggle-active" : ""}
            onClick={() => {
              setTripType("round");
              setSelectedReturn(null);
            }}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border:
                tripType === "round" ? "2px solid #05668d" : "1px solid #ccc",
              background: tripType === "round" ? "#e0f7fa" : "#fff",
              marginRight: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Round Trip
          </button>
          <button
            className={tripType === "oneway" ? "toggle-active" : ""}
            onClick={() => {
              setTripType("oneway");
              setSelectedReturn(null);
              setReturnDate("");
            }}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border:
                tripType === "oneway" ? "2px solid #05668d" : "1px solid #ccc",
              background: tripType === "oneway" ? "#e0f7fa" : "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            One Way
          </button>
        </div>

        {/* Input fields */}
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          {tripType === "round" && (
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              placeholder="Return Date"
              style={{ marginRight: "8px" }}
            />
          )}
        </div>

        {/* Outbound Flights */}
        {origin && destination && date ? (
          <div style={{ marginBottom: 20 }}>
            <h3>Available Outbound Flights</h3>
            {outboundFlights.length ? (
              outboundFlights.map((f) => (
                <div key={f.id} style={{ marginBottom: "8px" }}>
                  {f.departure} → {f.destination} | {f.date} | ${f.price}
                  <button
                    onClick={() => setSelectedOutbound(f)}
                    style={{
                      marginLeft: "8px",
                      background:
                        selectedOutbound?.id === f.id ? "#28a745" : "#05668d",
                      color: "#fff",
                      border: "none",
                      padding: "4px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedOutbound?.id === f.id ? "Selected" : "Select"}
                  </button>
                </div>
              ))
            ) : (
              <p>No outbound flights found.</p>
            )}
          </div>
        ) : null}

        {/* Return Flights for Round Trip */}
        {tripType === "round" && origin && destination && returnDate ? (
          <div style={{ marginBottom: 20 }}>
            <h3>Available Return Flights</h3>
            {returnFlights.length ? (
              returnFlights.map((f) => (
                <div key={f.id} style={{ marginBottom: "8px" }}>
                  {f.departure} → {f.destination} | {f.date} | ${f.price}
                  <button
                    onClick={() => setSelectedReturn(f)}
                    style={{
                      marginLeft: "8px",
                      background:
                        selectedReturn?.id === f.id ? "#28a745" : "#05668d",
                      color: "#fff",
                      border: "none",
                      padding: "4px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedReturn?.id === f.id ? "Selected" : "Select"}
                  </button>
                </div>
              ))
            ) : (
              <p>No return flights found.</p>
            )}
          </div>
        ) : null}

        {/* Confirmation Button Logic */}
        {selectedOutbound &&
          (tripType === "oneway" || selectedReturn) &&
          !confirmed && (
            <div style={{ marginTop: "18px" }}>
              <button
                style={{
                  padding: "10px 24px",
                  background: "#05668d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 7px #b3c6e9",
                  marginTop: "8px",
                }}
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          )}

        {/* Booking Confirmation */}
        {confirmed && (
          <div
            style={{
              marginTop: "32px",
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              textAlign: "center",
              color: "#05668d",
              fontWeight: "bold",
            }}
          >
            Booking Confirmed!
            <br />
            Outbound: {selectedOutbound.departure} →{" "}
            {selectedOutbound.destination} on {selectedOutbound.date} <br />
            {tripType === "round" && selectedReturn && (
              <>
                Return: {selectedReturn.departure} →{" "}
                {selectedReturn.destination} on {selectedReturn.date}
                <br />
              </>
            )}
            <button
              style={{
                marginTop: "16px",
                padding: "8px 20px",
                background: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={handleReset}
            >
              Book Another Trip
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="booking-root">
      {/* Top Navigation */}
      <nav className="booking-nav">
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/CheckinPage">Reservations</Link>
        <Link to="/CheckinPage">Check-in</Link>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Sub Tabs */}
      <div className="booking-tabs">
        <Link to="/airline-services-awards">Airline Services & Awards</Link>
        <Link to="/HotelBooking">Hotel Booking</Link>
        <Link to="/car-rental">Car Rentals</Link>
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
          <span className="action-icon">🚗</span>
          <span>
            <Link to="/baggage-services">Baggage Services</Link>
          </span>
        </div>

        <div className="action-item">
          <span className="action-icon">💖</span>
          <span>
            <Link to="/special-assistance">Special Assistance</Link>
          </span>
        </div>
        <div className="action-item">
          <span className="action-icon">📄</span>
          <span>
            <Link to="/CheckinPage"> Paid Services</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
