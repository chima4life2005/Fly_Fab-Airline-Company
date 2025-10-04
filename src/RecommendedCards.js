import React from "react";
import { Link } from "react-router-dom";
import "./RecommendedCards.css";
import ancillaryImg from "./Assets/bnr_ancillary_240301bi.webp";

// You can keep your card info for display, but all links will go to booking page
const cards = [
  {
    label: "Domestic Flights",
    image:
      "https://www.itcsa.es/wp-content/uploads/Airport-terminal-850x491.jpg",
    title: "Check it now",
    description: "The cheapest days to fly at FLYFAB Airline",
  },
  {
    label: "International Flights",
    image:
      "https://images.unsplash.com/photo-1653795163859-9ee39ecc6d62?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9ydHN8ZW58MHx8MHx8fDA%3D",
    title: "A350-1000 Operating on select routes in the world!",
  },
  {
    label: "Domestic Flights",
    image:
      "https://slcairport.com/assets/Uploads/Elements/PhotoGallery/SLCIA-Interior/Passengers-in-Terminal.jpg",
    title: "Find Domestic Flights and Book",
  },
  {
    label: "International Flights",
    image:
      "https://cdn.punchng.com/wp-content/uploads/2025/07/01235724/Flight-delays.jpg",
    title: "Customize your journey for greater comfort with optional services",
  },
];

export default function RecommendedCards() {
  return (
    <div className="recommended-container">
      <h2>Recommended for You</h2>
      <div className="card-list">
        {cards.map((card, idx) => (
          <Link
            className="recommend-card"
            to="/book-flight"
            key={idx}
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,0.6) 60%, transparent 100%)`,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <span
              className={`recommend-label ${card.label
                .replace(" ", "-")
                .toLowerCase()}`}
            >
              {card.label}
            </span>
            <img src={card.image} alt={card.label} className="recommend-img" />
            <div className="recommend-info">
              <div className="recommend-title">{card.title}</div>
              {card.description && (
                <div className="recommend-desc">{card.description}</div>
              )}
              <span className="recommend-arrow">›</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
