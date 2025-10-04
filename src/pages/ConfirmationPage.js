import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return <p>No booking information found.</p>;
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmed!</h2>
      <p>
        Thank you, <strong>{booking.passenger.name}</strong>!
      </p>
      <p>
        Your flight from <strong>{booking.flight.origin}</strong> to{" "}
        <strong>{booking.flight.destination}</strong> is booked.
      </p>
      <p>
        Date: <strong>{booking.flight.date}</strong>
      </p>
      <p>
        Seat: <strong>{booking.seat}</strong>
      </p>
      <p>
        Your flight number for check-in:{" "}
        <strong>{booking.flight.uniqueFlightNumber}</strong>
      </p>
      <p>Check-in with your name and this flight number.</p>
      {/* Add more details or a button if needed */}
    </div>
  );
}

export default ConfirmationPage;
