app.post("/api/checkin", (req, res) => {
  const { email, uniqueFlightNumber } = req.body;
  const booking = bookings.find(
    (b) =>
      b.passenger.email === email &&
      b.flight.uniqueFlightNumber === uniqueFlightNumber
  );
  if (booking) {
    booking.checkedIn = true;
    res.json({ message: "Checked in!", booking });
  } else {
    res.status(404).json({ message: "Booking not found." });
  }
});
