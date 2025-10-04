import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  if (!booking) {
    return <div>No booking found.</div>;
  }

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Passenger: {booking.passenger.name}</p>
      <p>Email: {booking.passenger.email}</p>
      <p>
        Flight: {booking.flight.origin} → {booking.flight.destination}
      </p>
      <p>Date: {booking.flight.date}</p>
      <p>
        Flight Number (for check-in):{" "}
        <strong>{booking.flight.uniqueFlightNumber}</strong>
      </p>
      <p>Seat: {booking.seat}</p>
      <p>Tickets: {booking.passenger.ticketCount}</p>
      <p>
        Total Price: ${booking.flight.price * booking.passenger.ticketCount}
      </p>
      <button onClick={() => navigate("/checkin")}>Go to Check-in</button>
    </div>
  );
}

export default ConfirmationPage;
