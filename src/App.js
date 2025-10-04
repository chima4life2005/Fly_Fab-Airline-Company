import React, { useState } from "react";
import "./App.css";
import BookingPanel from "./BookingPanel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookingPage from "./pages/BookingPage";
import CheckinPage from "./pages/CheckinPage";
import AboutUs from "./pages/AboutUs";
import CarRental from "./pages/CarRental";
import RecommendedCards from "./RecommendedCards";
import TravelGuide from "./TravelGuide";
import HotelBooking from "./HotelBooking";
import SpecialAssistance from "./SpecialAssistance";
import BookFlight from "./BookFlight";
import AirlineNewsletter from "./AirlineNewsletter";
// import ContactPage from "./ContactPage";
import BaggageServices from "./BaggageServices";
import AirlineServicesAwards from "./AirlineServicesAwards";
import TravelExperiences from "./pages/TravelExperiences";
import logo from "../src/Assets/fly_fab_logo_Version5.svg";
import Footer from "./Footer";

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
  const [bookings, setBookings] = useState([]); // global bookings state

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
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/book-flight"
          element={
            <BookingPage
              addBooking={(booking) => setBookings([...bookings, booking])}
            />
          }
        />
        <Route path="/checkin" element={<CheckinPage bookings={bookings} />} />
        <Route path="/experiences" element={<TravelExperiences />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/Trave-Guide" element={<TravelGuide />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/baggage-services" element={<BaggageServices />} />
        <Route path="/special-assistance" element={<SpecialAssistance />} />
        <Route path="/book" element={<BookFlight />} />
        <Route path="/newsletter" element={<AirlineNewsletter />} />
        <Route
          path="/airline-services-awards"
          element={<AirlineServicesAwards />}
        />
        <Route path="/HotelBooking" element={<HotelBooking />} />
        <Route
          path="/"
          element={
            <div className="app">
              <header className="hero">
                <nav className="navbar">
                  <div>
                    <img src={logo} alt="FlyFab Logo" />
                  </div>
                  <Link to="/">
                    <h1>FLY_FAB</h1>
                  </Link>
                  <ul>
                    <li>Home</li>
                    <li>
                      <Link to="/book-flight">Book a Flight</Link>
                    </li>
                    <li>
                      <Link to="/Trave-Guide">Travel Guide</Link>
                    </li>
                    <li>
                      <Link to="/experiences">Experiences</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="heroSub">
                  <h1 className="heroSub">Fly the WORLD with FLY_FAB</h1>
                  <p className="p1">Welcome to FlyFab!</p>
                  <p className="p2">At FlyFab, your journey is our passion.</p>
                  <p className="p2">
                    Whether you're traveling for business or pleasure, we're
                    committed to making your experience comfortable, enjoyable,
                    and unforgettable.
                  </p>
                  <p className="p2">
                    Discover world-class service, innovative amenities, and a
                    seamless booking experience as you explore new destinations
                    with us.
                  </p>
                  <p className="p2">
                    Thank you for choosing FlyFab—where your adventure begins!
                  </p>
                </div>
              </header>
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
                        {flight.origin} → {flight.destination} | Date:{" "}
                        {flight.date} | Price: ${flight.price}
                        <button className="book-btn">
                          <Link to="/book-flight">Book</Link>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          }
        />
      </Routes>
      <Footer />;
    </Router>
  );
}

export default App;
