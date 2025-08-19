import React from "react";
import "./RecommendedCards.css";
import ancillaryImg from "./Assets/bnr_ancillary_240301bi.webp";

// Replace these with real images and links
const cards = [
  {
    label: "Domestic Flights",
    image: ancillaryImg,
    title: "Check it now",
    description: "The cheapest days to fly in Japan",
    link: "https://www.ana.co.jp/en/jp/promotions/domestic-fare/",
  },
  {
    label: "International Flights",
    image: "https://www.ana.co.jp/en/jp/promotions/images/a350.png",
    title:
      "A350-1000 Operating on select routes between Japan and America/Europe!",
    link: "https://www.ana.co.jp/en/jp/international/promotions/a350/",
  },
  {
    label: "Domestic Flights",
    image: "https://www.ana.co.jp/en/jp/promotions/images/domestic-book.png",
    title: "Find Domestic Flights and Book",
    link: "https://www.ana.co.jp/en/jp/domestic/book/",
  },
  {
    label: "International Flights",
    image: ancillaryImg,
    title: "Customize your journey for greater comfort with optional services",
    link: "https://www.ana.co.jp/en/jp/international/services/",
  },
];

export default function RecommendedCards() {
  return (
    <div className="recommended-container">
      <h2>Recommended for You</h2>
      <div className="card-list">
        {cards.map((card, idx) => (
          <a
            className="recommend-card"
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </div>
  );
}
