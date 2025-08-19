import React, { useState } from "react";
import "./App.css";
import BookingPanel from "./BookingPanel";
import RecommendedCards from "./RecommendedCards";
import logo from "../src/Assets/fly_fab_logo_Version5.svg";
// import EditableColumns from "./EditableColumns";

const flightsData = [
  {
    id: 1,
    origin: "New York",
    destination: "London",
    date: "2025-09-15",
    price: 650,
  },
  {
    id: 2,
    origin: "Paris",
    destination: "Tokyo",
    date: "2025-09-18",
    price: 850,
  },
  {
    id: 3,
    origin: "Sydney",
    destination: "Los Angeles",
    date: "2025-09-20",
    price: 900,
  },
];

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [filteredFlights, setFilteredFlights] = useState(flightsData);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredFlights(
      flightsData.filter(
        (flight) =>
          (!origin ||
            flight.origin.toLowerCase().includes(origin.toLowerCase())) &&
          (!destination ||
            flight.destination
              .toLowerCase()
              .includes(destination.toLowerCase())) &&
          (!date || flight.date === date)
      )
    );
  };

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <div>
            <img
              src={logo}
              alt="C:\Users\User\airline-frontend\src\Assets\fly_fab_logo_Version5.svg"
            />
          </div>
          <h1>FLY_FAB</h1>
          <ul>
            <li>Home</li>
            <li>Book a Flight</li>
            <li>Travel Guide</li>
            <li>Experiences</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="heroSub">
          <h1 className="heroSub">Fly the WORLD with FLY_FAB</h1>
          <p className="p1">Welcome to FlyFab!</p>
          <p className="p2">At FlyFab, your journey is our passion.</p>
          <p className="p2">
            Whether you're traveling for business or pleasure, we're committed
            to making your experience comfortable, enjoyable, and unforgettable.
          </p>
          <p className="p2">
            Discover world-class service, innovative amenities, and a seamless
            booking experience as you explore new destinations with us.
          </p>
          <p className="p2">
            Thank you for choosing FlyFab—where your adventure begins!
          </p>
        </div>
      </header>

      {/* Add BookingPanel here */}
      <BookingPanel />
      <RecommendedCards />
      {/* <EditableColumns /> */}

      <section className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="flights-list">
        <h3>Available Flights</h3>
        {filteredFlights.length === 0 ? (
          <p>No flights found.</p>
        ) : (
          <ul>
            {filteredFlights.map((flight) => (
              <li key={flight.id}>
                {flight.origin} → {flight.destination} | Date: {flight.date} |
                Price: ${flight.price}
                <button className="book-btn">Book</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
