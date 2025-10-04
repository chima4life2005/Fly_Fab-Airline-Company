import React, { useState } from "react";

const flightImages = [
  "https://plus.unsplash.com/premium_photo-1754951242222-7cd68392b80e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80",
  "https://plus.unsplash.com/premium_photo-1663957846665-b13846f6d8b8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1753938837788-a9c5f0aaf439?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664304441729-a450ce415901?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661438127614-708da61650f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664474884397-43f7275ecc74?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const flights = [
  {
    id: 1,
    flightNumber: "FB123",
    departure: "Lagos",
    destination: "Abuja",
    date: "2025-10-05",
    seatsAvailable: 5,
    price: 120,
    img: flightImages[0],
    totalSeats: 20,
  },
  {
    id: 2,
    flightNumber: "FB124",
    departure: "Lagos",
    destination: "Port Harcourt",
    date: "2025-10-05",
    seatsAvailable: 3,
    price: 150,
    img: flightImages[1],
    totalSeats: 20,
  },
  {
    id: 3,
    flightNumber: "FB125",
    departure: "Abuja",
    destination: "Lagos",
    date: "2025-10-06",
    seatsAvailable: 10,
    price: 130,
    img: flightImages[2],
    totalSeats: 20,
  },
  {
    id: 4,
    flightNumber: "FB7789",
    departure: "Tokyo",
    destination: "New York",
    date: "2025-11-06",
    seatsAvailable: 10,
    price: 700,
    img: flightImages[3],
    totalSeats: 30,
  },
  {
    id: 5,
    flightNumber: "FB710",
    departure: "Syria",
    destination: "Afganistan",
    date: "2025-12-16",
    seatsAvailable: 5,
    price: 300,
    img: flightImages[4],
    totalSeats: 15,
  },
  {
    id: 6,
    flightNumber: "FB790",
    departure: "New York",
    destination: "London",
    date: "2025-12-16",
    seatsAvailable: 13,
    price: 800,
    img: flightImages[5],
    totalSeats: 25,
  },
  {
    id: 7,
    flightNumber: "FG700",
    departure: "Paris",
    destination: "Tokyo",
    date: "2025-12-8",
    seatsAvailable: 7,
    price: 1000,
    img: flightImages[6],
    totalSeats: 30,
  },
  {
    id: 8,
    flightNumber: "FB990",
    departure: "Sydney",
    destination: "Los Angeles",
    date: "2025-10-16",
    seatsAvailable: 4,
    price: 850,
    img: flightImages[0],
    totalSeats: 22,
  },
];

// Helper to generate TicketId (unique for each booking)
const generateTicketId = () =>
  "TICKET-" +
  Math.random().toString(36).substring(2, 8).toUpperCase() +
  "-" +
  Date.now().toString().slice(-5);

// Helper to generate seat numbers (simple: "1A", "1B", ... "5A", etc.)
function generateSeatMap(totalSeats) {
  // Returns array like ["1A","1B",...,"1F","2A",...]
  const rows = Math.ceil(totalSeats / 6);
  const seatLetters = ["A", "B", "C", "D", "E", "F"];
  let seats = [];
  for (let row = 1; row <= rows; row++) {
    for (let s = 0; s < 6 && seats.length < totalSeats; s++) {
      seats.push(`${row}${seatLetters[s]}`);
    }
  }
  return seats;
}

const BookingPage = ({ addBooking, allBookings = [] }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatError, setSeatError] = useState("");

  // Payment states
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Receipt state
  const [showReceipt, setShowReceipt] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const availableFlights = flights.filter(
    (flight) =>
      (!departure || flight.departure === departure) &&
      (!destination || flight.destination === destination) &&
      (!date || flight.date === date) &&
      flight.seatsAvailable >= passengers
  );

  const selectedFlightObj = flights.find((f) => f.id === selectedFlight);

  // Find already booked seats for this flight
  let bookedSeats = [];
  if (selectedFlightObj && allBookings && allBookings.length > 0) {
    bookedSeats = allBookings
      .filter(
        (b) => b.flightId === selectedFlightObj.id && Array.isArray(b.seats)
      )
      .flatMap((b) => b.seats);
  }

  // Generate seat map for this flight
  const seatMap = selectedFlightObj
    ? generateSeatMap(selectedFlightObj.totalSeats || 20)
    : [];

  const handleSelectSeat = (seat) => {
    setSeatError("");
    // Deselect if already selected
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length < passengers) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        setSeatError(`You can select up to ${passengers} seat(s).`);
      }
    }
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length !== passengers) {
      setSeatError(`Please select ${passengers} seat(s).`);
      return;
    }
    setConfirmed(true);
    setShowPayment(true); // Show payment form
    setSeatError("");
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment success
    setPaymentSuccess(true);
    setShowReceipt(true);

    const newTicketId = generateTicketId();
    setTicketId(newTicketId);

    if (addBooking && selectedFlightObj) {
      addBooking({
        ticketId: newTicketId,
        flightId: selectedFlightObj.id,
        flightNumber: selectedFlightObj.flightNumber,
        passengerName: cardName,
        date: selectedFlightObj.date,
        passengers,
        seats: selectedSeats,
        price: selectedFlightObj.price * passengers,
      });
    }
  };

  // Reset booking
  const handleCloseReceipt = () => {
    setDeparture("");
    setDestination("");
    setDate("");
    setPassengers(1);
    setSelectedFlight(null);
    setConfirmed(false);
    setShowPayment(false);
    setPaymentSuccess(false);
    setCardName("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setShowReceipt(false);
    setSelectedSeats([]);
    setTicketId("");
    setSeatError("");
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 30,
        background: "linear-gradient(135deg, #f0f6ff 0%, #c1eaff 100%)",
        borderRadius: 18,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 28,
          color: "#05668d",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        ✈️ Book a Flight
      </h1>
      {showReceipt ? (
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 2px 12px #cce2ff",
            padding: "32px 24px",
            maxWidth: 480,
            margin: "40px auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2 style={{ color: "#05668d" }}>Booking Confirmation</h2>
          <p
            style={{
              color: "#28a745",
              fontWeight: 600,
              fontSize: "1.15rem",
              margin: "10px 0 20px 0",
            }}
          >
            ✅ Payment Successful!
          </p>
          <div style={{ marginBottom: "12px" }}>
            <strong>Ticket ID:</strong> {ticketId}
          </div>
          <div style={{ marginBottom: "12px" }}>
            <strong>Passenger Name:</strong> {cardName}
          </div>
          <div>
            <strong>Flight:</strong> {selectedFlightObj?.flightNumber}
          </div>
          <div>
            <strong>From:</strong> {selectedFlightObj?.departure}
          </div>
          <div>
            <strong>To:</strong> {selectedFlightObj?.destination}
          </div>
          <div>
            <strong>Date:</strong> {selectedFlightObj?.date}
          </div>
          <div>
            <strong>Tickets:</strong> {passengers}
          </div>
          <div>
            <strong>Seats:</strong> {selectedSeats.join(", ")}
          </div>
          <div style={{ margin: "12px 0" }}>
            <strong>Total Paid:</strong>{" "}
            <span style={{ color: "#28a745", fontWeight: 700 }}>
              ${selectedFlightObj?.price * passengers}
            </span>
          </div>
          <img
            src={selectedFlightObj?.img}
            alt="Flight"
            style={{ width: "60%", borderRadius: "10px", margin: "18px 0" }}
          />
          <button
            style={{
              padding: "10px 30px",
              background: "#05668d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              marginTop: "16px",
              cursor: "pointer",
            }}
            onClick={handleCloseReceipt}
          >
            Close Receipt
          </button>
        </div>
      ) : (
        <>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              marginBottom: 36,
              background: "#fff",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              display: "grid",
              gap: "18px",
            }}
          >
            <label style={{ fontWeight: 500 }}>
              Departure:
              <select
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
                style={{
                  marginLeft: 10,
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #b2bec3",
                  fontSize: "1rem",
                }}
              >
                <option value="">Select Departure</option>
                {Array.from(new Set(flights.map((f) => f.departure))).map(
                  (city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                )}
              </select>
            </label>
            <label style={{ fontWeight: 500 }}>
              Destination:
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                style={{
                  marginLeft: 10,
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #b2bec3",
                  fontSize: "1rem",
                }}
              >
                <option value="">Select Destination</option>
                {Array.from(new Set(flights.map((f) => f.destination))).map(
                  (city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                )}
              </select>
            </label>
            <label style={{ fontWeight: 500 }}>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min="2025-10-01"
                max="2025-12-31"
                style={{
                  marginLeft: 10,
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #b2bec3",
                  fontSize: "1rem",
                }}
              />
            </label>
            <label style={{ fontWeight: 500 }}>
              Passengers:
              <input
                type="number"
                value={passengers}
                onChange={(e) => {
                  setPassengers(Number(e.target.value));
                  setSelectedSeats([]); // reset seats if passenger count changes
                }}
                min={1}
                max={10}
                required
                style={{
                  marginLeft: 10,
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #b2bec3",
                  width: 80,
                  fontSize: "1rem",
                }}
              />
            </label>
          </form>

          <h2 style={{ color: "#069", marginBottom: 18 }}>Available Flights</h2>
          {availableFlights.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {availableFlights.map((flight) => (
                <div
                  key={flight.id}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={flight.img}
                    alt={`Flight ${flight.flightNumber}`}
                    style={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,
                    }}
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#05668d",
                        fontSize: "1.1rem",
                      }}
                    >
                      {flight.departure} → {flight.destination}
                    </div>
                    <div>
                      <span style={{ color: "#444" }}>Flight:</span>{" "}
                      <strong>{flight.flightNumber}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#444" }}>Date:</span> {flight.date}
                    </div>
                    <div>
                      <span style={{ color: "#444" }}>Seats Available:</span>{" "}
                      {flight.seatsAvailable}
                    </div>
                    <div>
                      <span style={{ color: "#444" }}>Price per ticket:</span>{" "}
                      <strong style={{ color: "#28a745" }}>
                        ${flight.price}
                      </strong>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedFlight(flight.id);
                        setConfirmed(false);
                        setShowPayment(false);
                        setPaymentSuccess(false);
                        setSelectedSeats([]);
                        setSeatError("");
                      }}
                      disabled={selectedFlight === flight.id}
                      style={{
                        marginTop: 16,
                        padding: "10px 22px",
                        borderRadius: 6,
                        background:
                          selectedFlight === flight.id ? "#b2bec3" : "#05668d",
                        color: "#fff",
                        border: "none",
                        cursor:
                          selectedFlight === flight.id
                            ? "not-allowed"
                            : "pointer",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                    >
                      {selectedFlight === flight.id
                        ? "Selected"
                        : "Select this flight"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p
              style={{
                color: "#d7263d",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              No flights match your criteria.
            </p>
          )}

          {/* Seat selection block */}
          {selectedFlight && !showPayment && selectedFlightObj && (
            <div
              style={{
                marginTop: 32,
                background: "#fff",
                borderRadius: 12,
                padding: 24,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                maxWidth: 500,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h3 style={{ color: "#05668d", marginBottom: 16 }}>
                Select Seat{passengers > 1 ? "s" : ""}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gap: 6,
                  marginBottom: 12,
                }}
              >
                {seatMap.map((seat) => {
                  const isBooked = bookedSeats.includes(seat);
                  const isSelected = selectedSeats.includes(seat);
                  return (
                    <button
                      key={seat}
                      type="button"
                      onClick={() => !isBooked && handleSelectSeat(seat)}
                      disabled={isBooked}
                      style={{
                        padding: "7px 0",
                        borderRadius: 6,
                        border: isBooked
                          ? "1.5px solid #b2bec3"
                          : isSelected
                          ? "2px solid #28a745"
                          : "1.5px solid #05668d",
                        background: isBooked
                          ? "#f1f2f6"
                          : isSelected
                          ? "#d4f5e9"
                          : "#eaf6ff",
                        color: isBooked ? "#aaa" : "#05668d",
                        fontWeight: isSelected ? 700 : 500,
                        cursor: isBooked ? "not-allowed" : "pointer",
                        minWidth: 0,
                        fontSize: "0.95rem",
                      }}
                    >
                      {seat}
                    </button>
                  );
                })}
              </div>
              <div style={{ marginBottom: 8, color: "#444" }}>
                Selected: {selectedSeats.join(", ") || "None"}
              </div>
              {seatError && (
                <div style={{ color: "#d7263d", marginBottom: 8 }}>
                  {seatError}
                </div>
              )}
              <div style={{ marginBottom: "18px", fontSize: "1.15rem" }}>
                <strong>Total Price: </strong>
                <span style={{ color: "#05668d", fontWeight: "bold" }}>
                  ${selectedFlightObj.price * passengers}
                </span>
                <br />
                <span style={{ color: "#444" }}>
                  ({passengers} passenger{passengers > 1 ? "s" : ""} × $
                  {selectedFlightObj.price} per ticket)
                </span>
              </div>
              <button
                onClick={handleConfirmBooking}
                disabled={confirmed}
                style={{
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  borderRadius: 8,
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  cursor: confirmed ? "not-allowed" : "pointer",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px rgba(40,167,69,0.15)",
                }}
              >
                Confirm Booking
              </button>
            </div>
          )}

          {showPayment && selectedFlightObj && (
            <div
              style={{
                marginTop: 32,
                background: "#fff",
                borderRadius: 12,
                padding: 24,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                maxWidth: 400,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h3 style={{ color: "#05668d", marginBottom: 16 }}>Payment</h3>
              <p style={{ fontWeight: "500", marginBottom: 18 }}>
                Pay{" "}
                <span style={{ color: "#28a745" }}>
                  ${selectedFlightObj.price * passengers}
                </span>{" "}
                for your booking.
              </p>
              {!paymentSuccess ? (
                <form
                  onSubmit={handlePayment}
                  style={{ display: "grid", gap: 16 }}
                >
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    style={{
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #b2bec3",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    maxLength={19}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #b2bec3",
                      fontSize: "1rem",
                    }}
                  />
                  <div style={{ display: "flex", gap: 10 }}>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                      maxLength={5}
                      style={{
                        flex: 1,
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #b2bec3",
                        fontSize: "1rem",
                      }}
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      maxLength={4}
                      style={{
                        flex: 1,
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #b2bec3",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      marginTop: 10,
                      padding: "10px 0",
                      width: "100%",
                      borderRadius: 6,
                      background: "#05668d",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.07rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Pay Now
                  </button>
                </form>
              ) : (
                <p
                  style={{
                    color: "#28a745",
                    marginTop: 16,
                    fontWeight: 600,
                    fontSize: "1.12rem",
                    textAlign: "center",
                  }}
                >
                  ✅ Payment Successful! Your flight is booked.
                  <br />
                  Thank you for choosing FlyFab.
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookingPage;
