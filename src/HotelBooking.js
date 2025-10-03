import React, { useState } from "react";

const hotels = [
  {
    id: 1,
    name: "Sempre Ti'nti",
    country: "America",
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    desc: "The world's most luxurious hotel, offering breathtaking views and exceptional service.",
  },
  {
    id: 2,
    name: "The Ritz Paris",
    country: "France",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 950,
    desc: "A legendary palace hotel in the heart of Paris, blending elegance and history.",
  },
  {
    id: 3,
    name: "The Plaza",
    country: "USA",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 1100,
    desc: "Iconic luxury on Fifth Avenue with timeless style and legendary hospitality.",
  },
  {
    id: 4,
    name: "Mandarin Oriental",
    country: "Japan",
    city: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 990,
    desc: "Modern luxury in Tokyo with panoramic city views and Michelin-star dining.",
  },
  {
    id: 5,
    name: "The Oberoi",
    country: "Syria",
    city: "Damascus",
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 870,
    desc: "A haven of tranquility in bustling Mumbai, offering world-class comfort.",
  },
];

const cardStyle = {
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 2px 12px #d1e6fa",
  padding: "24px",
  margin: "18px",
  maxWidth: "390px",
  textAlign: "center",
  transition: "transform 0.2s",
};

const imageStyle = {
  borderRadius: "14px",
  width: "100%",
  height: "180px",
  objectFit: "cover",
  marginBottom: "16px",
};

const modalBackdrop = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.42)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalStyle = {
  background: "#fff",
  borderRadius: "14px",
  padding: "34px 28px",
  maxWidth: "400px",
  boxShadow: "0 8px 32px #05668d40",
  textAlign: "center",
};

const inputStyle = {
  width: "92%",
  padding: "10px",
  borderRadius: "7px",
  border: "1px solid #ddd",
  marginBottom: "18px",
  fontSize: "1.02rem",
};

function BookingModal({ hotel, onBook, onClose }) {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !checkIn || !checkOut || guests < 1) {
      alert("Please fill out all booking details.");
      return;
    }
    onBook({ name, checkIn, checkOut, guests });
  };

  return (
    <div style={modalBackdrop}>
      <div style={modalStyle}>
        <h2>Book {hotel.name}</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Guest Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="date"
            placeholder="Check-in Date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="date"
            placeholder="Check-out Date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="number"
            min={1}
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
          <button
            type="submit"
            style={{
              padding: "10px 28px",
              background: "#05668d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Confirm Booking
          </button>
        </form>
        <button
          style={{
            background: "transparent",
            color: "#067",
            border: "none",
            marginTop: "18px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function ReceiptModal({ hotel, booking, onClose }) {
  return (
    <div style={modalBackdrop}>
      <div style={modalStyle}>
        <h2>Booking Confirmed!</h2>
        <p>
          Thank you, <strong>{booking.name}</strong>.<br />
          Your reservation at <strong>{hotel.name}</strong> is successful.
        </p>
        <img
          src={hotel.image}
          alt={hotel.name}
          style={{ width: "80%", borderRadius: "10px", marginBottom: "12px" }}
        />
        <div>
          <strong>Location:</strong> {hotel.city}, {hotel.country}
        </div>
        <div>
          <strong>Check-in:</strong> {booking.checkIn}
        </div>
        <div>
          <strong>Check-out:</strong> {booking.checkOut}
        </div>
        <div>
          <strong>Guests:</strong> {booking.guests}
        </div>
        <div style={{ margin: "12px 0", fontSize: "1.08rem" }}>
          <strong>Total Price:</strong>{" "}
          <span style={{ color: "#28a745", fontWeight: "bold" }}>
            ${hotel.price * booking.guests}
          </span>
        </div>
        <button
          style={{
            marginTop: "16px",
            padding: "8px 22px",
            background: "#05668d",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default function HotelBooking() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [receipt, setReceipt] = useState(null);

  const handleBook = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleBookingComplete = (bookingInfo) => {
    setReceipt({ hotel: selectedHotel, booking: bookingInfo });
    setSelectedHotel(null);
  };

  const closeReceipt = () => {
    setReceipt(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0f7fa 0%, #f0f6ff 100%)",
        padding: "48px 0",
        fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#05668d",
          fontWeight: 700,
          marginBottom: 40,
          letterSpacing: 2,
        }}
      >
        🏨 Book Your Luxury Stay
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px",
        }}
      >
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={hotel.image} alt={hotel.name} style={imageStyle} />
            <h2
              style={{
                margin: "12px 0 6px 0",
                fontSize: "1.2rem",
                color: "#067",
                fontWeight: 700,
              }}
            >
              {hotel.name}
            </h2>
            <div
              style={{
                color: "#05668d",
                fontWeight: 500,
                fontSize: "1.07rem",
                marginBottom: "10px",
              }}
            >
              {hotel.city}, {hotel.country}
            </div>
            <div
              style={{
                color: "#28a745",
                fontWeight: 700,
                fontSize: "1.08rem",
                marginBottom: "10px",
              }}
            >
              ${hotel.price}/night
            </div>
            <div
              style={{ color: "#444", fontSize: "1rem", marginBottom: "10px" }}
            >
              {hotel.desc}
            </div>
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
              onClick={() => handleBook(hotel)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <BookingModal
          hotel={selectedHotel}
          onBook={handleBookingComplete}
          onClose={() => setSelectedHotel(null)}
        />
      )}

      {receipt && (
        <ReceiptModal
          hotel={receipt.hotel}
          booking={receipt.booking}
          onClose={closeReceipt}
        />
      )}
    </div>
  );
}
