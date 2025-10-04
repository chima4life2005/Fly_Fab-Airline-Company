import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookFlight.css";

const flightOptions = [
  {
    id: 101,
    origin: "Lagos",
    destination: "Abuja",
    date: "2025-10-14",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1754951242222-7cd68392b80e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 102,
    origin: "Lagos",
    destination: "Port Harcourt",
    date: "2025-10-16",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 103,
    origin: "Abuja",
    destination: "Lagos",
    date: "2025-10-18",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1663957846665-b13846f6d8b8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 104,
    origin: "Tokyo",
    destination: "Los Angeles",
    date: "2025-10-20",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1753938837788-a9c5f0aaf439?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 105,
    origin: "Sydney",
    destination: "Tokyo",
    date: "2025-10-22",
    price: 700,
    image:
      "https://plus.unsplash.com/premium_photo-1664304441729-a450ce415901?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 106,
    origin: "Sydney",
    destination: "New York",
    date: "2025-10-24",
    price: 1200,
    image:
      "https://plus.unsplash.com/premium_photo-1661438127614-708da61650f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
  },
  {
    id: 107,
    origin: "Syria",
    destination: "Afghanistan",
    date: "2025-10-26",
    price: 400,
    image:
      "https://plus.unsplash.com/premium_photo-1664474884397-43f7275ecc74?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 108,
    origin: "London",
    destination: "New York",
    date: "2025-10-28",
    price: 900,
    image:
      "https://plus.unsplash.com/premium_photo-1664474884397-43f7275ecc74?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const seatOptions = [
  "A1",
  "A2",
  "A3",
  "B1",
  "B2",
  "B3",
  "C1",
  "C2",
  "C3",
  "D1",
  "D2",
  "D3",
];

function BookFlight() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    email: "",
    ticketCount: 1,
    customDate: "",
  });
  const [selectedSeat, setSelectedSeat] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({ card: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [uniqueFlightNumber, setUniqueFlightNumber] = useState("");

  const navigate = useNavigate();

  function generateUniqueFlightNumber(base) {
    const suffix = Math.floor(100 + Math.random() * 900);
    return `${base}${suffix}`;
  }

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setPassengerDetails({
      name: "",
      email: "",
      ticketCount: 1,
      customDate: "",
    });
    setSelectedSeat("");
    setPaymentInfo({ card: "" });
    setErrorMsg("");
    setUniqueFlightNumber(generateUniqueFlightNumber(flight.id));
  };

  const handleInputChange = (e) => {
    setPassengerDetails({
      ...passengerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSeatChange = (e) => setSelectedSeat(e.target.value);
  const handlePaymentChange = (e) =>
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });

  const handleBooking = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!selectedSeat) {
      setErrorMsg("Please select a seat.");
      return;
    }
    if (!/^\d{16}$/.test(paymentInfo.card)) {
      setErrorMsg("Please enter a valid 16-digit card number.");
      return;
    }
    if (!passengerDetails.customDate) {
      setErrorMsg("Please pick your flight date.");
      return;
    }
    setLoading(true);

    const bookingData = {
      flight: {
        ...selectedFlight,
        uniqueFlightNumber,
        date: passengerDetails.customDate,
      },
      passenger: {
        name: passengerDetails.name,
        email: passengerDetails.email,
        ticketCount: passengerDetails.ticketCount,
      },
      seat: selectedSeat,
      payment: paymentInfo,
    };

    // Save booking to localStorage (for check-in page to access)
    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    allBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    setLoading(false);
    navigate("/confirmation", { state: { booking: bookingData } });
  };

  return (
    <div className="book-flight-page">
      <h2 className="page-title">Book Your Flight</h2>
      <p className="page-subtitle">
        Select your route, fill in your details, and confirm your booking!
      </p>
      <section className="flight-list-section">
        <h3 className="section-title">Available Flights</h3>
        <div className="flight-list">
          {flightOptions.map((flight) => (
            <div
              className={`flight-card ${
                selectedFlight?.id === flight.id ? "selected" : ""
              }`}
              key={flight.id}
              tabIndex={0}
              role="button"
              onClick={() => handleFlightSelect(flight)}
              aria-pressed={selectedFlight?.id === flight.id}
            >
              <img
                src={flight.image}
                alt={`${flight.origin} to ${flight.destination}`}
                className="flight-image"
              />
              <div className="flight-info">
                <h4>
                  {flight.origin} <span className="arrow">→</span>{" "}
                  {flight.destination}
                </h4>
                <p>
                  Date: <strong>{flight.date}</strong>
                </p>
                <p>
                  Flight #:{" "}
                  <strong>
                    {selectedFlight?.id === flight.id
                      ? uniqueFlightNumber
                      : flight.id}
                  </strong>
                </p>
                <p>
                  Price: <strong>${flight.price}</strong>
                </p>
                <button className="select-flight-btn" type="button">
                  {selectedFlight?.id === flight.id ? "Selected" : "Select"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedFlight && (
        <section className="booking-section">
          <h3 className="section-title">Passenger & Payment Details</h3>
          <form className="booking-form" onSubmit={handleBooking}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={passengerDetails.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={passengerDetails.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
                autoComplete="email"
              />
            </label>
            <label>
              Number of Tickets
              <input
                type="number"
                name="ticketCount"
                min="1"
                max="6"
                value={passengerDetails.ticketCount}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Select your desired flight date
              <input
                type="date"
                name="customDate"
                value={passengerDetails.customDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <label>
              Select Seat
              <select value={selectedSeat} onChange={handleSeatChange} required>
                <option value="">-- Choose Seat --</option>
                {seatOptions.map((seat) => (
                  <option key={seat} value={seat}>
                    {seat}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Card Number
              <input
                type="text"
                name="card"
                value={paymentInfo.card}
                onChange={handlePaymentChange}
                required
                maxLength={16}
                pattern="\d{16}"
                placeholder="1234567812345678"
                inputMode="numeric"
                autoComplete="cc-number"
              />
            </label>
            <button type="submit" className="confirm-btn" disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
          </form>
        </section>
      )}
    </div>
  );
}

export default BookFlight;
