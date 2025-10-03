import React from "react";

const destinations = [
  {
    name: "Paris, France",
    img: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80",
    desc: "The city of lights offers world-class museums, iconic landmarks, and delicious pastries.",
  },
  {
    name: "Tokyo, Japan",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    desc: "Experience vibrant culture, futuristic technology, and tranquil temples in Japan’s capital.",
  },
  {
    name: "Sydney, Australia",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    desc: "Surf the waves, visit the opera house, and enjoy sunny beaches in Sydney.",
  },
];

const tips = [
  "Pack light and smart—bring essentials only.",
  "Learn basic phrases of the local language.",
  "Keep copies of important documents.",
  "Respect local customs and traditions.",
  "Try authentic local cuisines.",
];

export default function TravelGuide() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#0077b6",
          color: "white",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h1>🌏 FLY_FAB's Ultimate Travel Guide</h1>
        <p>Your adventure starts here!</p>
      </header>
      <div
        style={{
          background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover`,
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2em",
          fontWeight: "bold",
          textShadow: "1px 1px 8px #000a",
        }}
      >
        Explore. Dream. Discover.
      </div>
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          background: "white",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px #0002",
        }}
      >
        <h2 style={{ color: "#0077b6" }}>Top Destinations</h2>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {destinations.map((dest) => (
            <div
              key={dest.name}
              style={{
                background: "#eef",
                flex: "1 1 250px",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 1px 4px #0001",
              }}
            >
              <img
                src={dest.img}
                alt={dest.name}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <h3>{dest.name}</h3>
              <p>{dest.desc}</p>
            </div>
          ))}
        </div>
        <h2 style={{ color: "#0077b6", marginTop: "36px" }}>Travel Tips</h2>
        <ul style={{ paddingLeft: "18px" }}>
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
        <h2 style={{ color: "#0077b6", marginTop: "36px" }}>
          Useful Resources
        </h2>
        <ul>
          <li>
            <a
              href="https://www.lonelyplanet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lonely Planet
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripAdvisor
            </a>
          </li>
          <li>
            <a
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
