import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "34px",
  margin: "34px auto",
  maxWidth: "900px",
  fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
};

const headlineStyle = {
  color: "#05668d",
  marginBottom: "18px",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "2.2rem",
  letterSpacing: 2,
};

const newsGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "28px",
  margin: "24px 0",
};

const newsCard = {
  background: "#f5fbff",
  borderRadius: "10px",
  boxShadow: "0 1px 8px #05668d18",
  width: "260px",
  textAlign: "center",
  padding: "18px 12px",
};

const newsImg = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px",
};

export default function AirlineNewsletter() {
  return (
    <div
      style={{ background: "#eaf6fb", minHeight: "100vh", padding: "54px 0" }}
    >
      <div style={sectionStyle}>
        <h1 style={headlineStyle}>📰 FlyFab Airline Newsletter</h1>
        <p
          style={{
            fontSize: "1.17rem",
            color: "#444",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Stay up-to-date with the latest FlyFab airline updates, travel news,
          and trending events around the globe. Discover what's happening in
          aviation and beyond!
        </p>

        {/* Headline News */}
        <h2
          style={{
            color: "#28a745",
            fontSize: "1.3rem",
            margin: "30px 0 14px",
            fontWeight: 600,
          }}
        >
          ✈️ FlyFab Headlines
        </h2>
        <div style={newsGrid}>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="FlyFab New Route"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              FlyFab Launches New Route
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              FlyFab now flies direct from Lagos to Tokyo—making global
              adventures easier than ever!
            </p>
          </div>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80"
              alt="Eco-Friendly Aircraft"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Eco-Friendly Aircraft Fleet
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              FlyFab introduces new fuel-efficient jets, reducing carbon
              emissions and boosting passenger comfort.
            </p>
          </div>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Award News"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              FlyFab Wins Industry Award
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Voted "Best Airline Service 2025" by Global Traveler Magazine!
            </p>
          </div>
        </div>

        {/* Travel/World News */}
        <h2
          style={{
            color: "#28a745",
            fontSize: "1.3rem",
            margin: "32px 0 14px",
            fontWeight: 600,
          }}
        >
          🌍 Travel & World Events
        </h2>
        <div style={newsGrid}>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80"
              alt="Paris News"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Paris Hosts Global Tourism Summit
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444" }}>
              Leaders gather to discuss sustainable travel, with FlyFab as a
              featured speaker.
            </p>
          </div>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
              alt="Tokyo Festival"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Tokyo Welcomes Travelers for Annual Festival
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444" }}>
              Experience Japan’s vibrant culture with FlyFab’s special festival
              flights!
            </p>
          </div>
          <div style={newsCard}>
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
              alt="Safety News"
              style={newsImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Aviation Safety Advances
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444" }}>
              New safety protocols and technologies make air travel safer than
              ever in 2025.
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <h2
          style={{
            color: "#28a745",
            fontSize: "1.3rem",
            margin: "34px 0 14px",
            fontWeight: 600,
          }}
        >
          📧 Subscribe to FlyFab News
        </h2>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <p
            style={{ fontSize: "1.07rem", color: "#444", marginBottom: "14px" }}
          >
            Get the latest updates delivered to your inbox—exclusive deals,
            travel tips, and global news.
          </p>
          <form style={{ display: "inline-block" }}>
            <input
              type="email"
              placeholder="Your Email Address"
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #b2bec3",
                fontSize: "1rem",
                marginRight: "10px",
                width: "240px",
              }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "10px 22px",
                background: "#05668d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact/Feedback */}
        <h2
          style={{
            color: "#28a745",
            fontSize: "1.2rem",
            margin: "34px 0 10px",
            fontWeight: 600,
          }}
        >
          Contact Us & Send Your Stories
        </h2>
        <ul
          style={{
            marginBottom: "6px",
            paddingLeft: "22px",
            color: "#444",
            fontSize: "1.05rem",
          }}
        >
          <li>
            Email:{" "}
            <a
              href="mailto:newsletter@flyfab.com"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              newsletter@flyfab.com
            </a>
          </li>
          <li>
            Share your travel photos:{" "}
            <a
              href="/submit-story"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              Submit a Story
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
