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
  },
  {
    id: 8,
    flightNumber: "FB990",
    departure: "Sydney",
    destination: "Los Angeles",
    date: "2025-10-16",
    seatsAvailable: 4,
    price: 850,
    img: flightImages[7],
  },
];

const BookingPage = ({ addBooking }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  // Payment states
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Receipt state
  const [showReceipt, setShowReceipt] = useState(false);

  const availableFlights = flights.filter(
    (flight) =>
      (!departure || flight.departure === departure) &&
      (!destination || flight.destination === destination) &&
      (!date || flight.date === date) &&
      flight.seatsAvailable >= passengers
  );

  const selectedFlightObj = flights.find((f) => f.id === selectedFlight);

  const handleConfirmBooking = () => {
    setConfirmed(true);
    setShowPayment(true); // Show payment form
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment success
    setPaymentSuccess(true);
    setShowReceipt(true);

    if (addBooking && selectedFlightObj) {
      addBooking({
        flightId: selectedFlightObj.id,
        flightNumber: selectedFlightObj.flightNumber,
        passengerName: cardName,
        date,
        passengers,
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
          <div style={{ marginBottom: "20px" }}>
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
            {/* ...form fields as before... */}
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
                onChange={(e) => setPassengers(Number(e.target.value))}
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

          {selectedFlight && !showPayment && (
            <div style={{ marginTop: 32, textAlign: "center" }}>
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
