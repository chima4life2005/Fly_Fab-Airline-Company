import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "32px",
  margin: "32px auto",
  maxWidth: "980px",
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

const subHeadStyle = {
  color: "#28a745",
  fontSize: "1.3rem",
  marginTop: "28px",
  marginBottom: "14px",
  fontWeight: 600,
};

const serviceGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "32px",
  margin: "28px 0",
};

const serviceCard = {
  background: "#f5fbff",
  borderRadius: "10px",
  boxShadow: "0 1px 8px #05668d18",
  width: "230px",
  textAlign: "center",
  padding: "18px 12px",
};

const serviceImg = {
  width: "52px",
  height: "52px",
  objectFit: "cover",
  marginBottom: "12px",
};

const awardGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "28px",
  margin: "28px 0",
};

const awardCard = {
  background: "#f5fbff",
  borderRadius: "10px",
  boxShadow: "0 1px 8px #28a74518",
  width: "300px",
  textAlign: "center",
  padding: "15px 10px",
};

const awardImg = {
  width: "100%",
  height: "110px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px",
};

export default function AirlineServicesAwards() {
  return (
    <div
      style={{ background: "#eaf6fb", minHeight: "100vh", padding: "52px 0" }}
    >
      <div style={sectionStyle}>
        <h1 style={headlineStyle}>
          ✈️ FlyFab Airline Services & Airport Awards
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#444",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          FlyFab is proud to offer world-class services and has been recognized
          for excellence at top international airports. Explore our premium
          offerings and award-winning destinations!
        </p>

        {/* Airline Services */}
        <h2 style={subHeadStyle}>Our Premium Airline Services</h2>
        <div style={serviceGrid}>
          <div style={serviceCard}>
            <img
              src="https://img.icons8.com/color/96/airport.png"
              alt="Airport Lounge"
              style={serviceImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>VIP Lounges</h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Relax in exclusive lounges with gourmet dining, showers, Wi-Fi,
              and private workspaces.
            </p>
          </div>
          <div style={serviceCard}>
            <img
              src="https://img.icons8.com/color/96/meal.png"
              alt="Gourmet Meals"
              style={serviceImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Gourmet Inflight Meals
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Enjoy chef-prepared global cuisine, special diets, and premium
              beverages.
            </p>
          </div>
          <div style={serviceCard}>
            <img
              src="https://img.icons8.com/color/96/flight-seat.png"
              alt="Comfort Seats"
              style={serviceImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>Luxury Seats</h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Ergonomic seats with extra legroom, lie-flat beds in Business, and
              custom lighting.
            </p>
          </div>
          <div style={serviceCard}>
            <img
              src="https://img.icons8.com/color/96/wifi.png"
              alt="Inflight WiFi"
              style={serviceImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Inflight WiFi & Entertainment
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Stream movies, connect with loved ones, and browse fast internet
              above the clouds.
            </p>
          </div>
          <div style={serviceCard}>
            <img
              src="https://img.icons8.com/color/96/special-assistance.png"
              alt="Special Assistance"
              style={serviceImg}
            />
            <h4 style={{ color: "#05668d", marginBottom: 6 }}>
              Special Assistance
            </h4>
            <p style={{ fontSize: "0.99rem", color: "#444" }}>
              Dedicated services for mobility, medical needs, children, and
              elderly passengers.
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <h2 style={subHeadStyle}>FlyFab's Award-Winning Airports</h2>
        <p style={{ color: "#444", marginBottom: "18px", fontSize: "1.08rem" }}>
          FlyFab is honored to serve and be recognized at the world's finest
          airports:
        </p>
        <div style={awardGrid}>
          <div style={awardCard}>
            <img
              src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80"
              alt="Dubai International Airport"
              style={awardImg}
            />
            <h4 style={{ color: "#28a745", margin: 0 }}>
              Dubai International (DXB)
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444", marginTop: "6px" }}>
              Winner: Best Airport for Luxury Travelers 2024
            </p>
          </div>
          <div style={awardCard}>
            <img
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80"
              alt="Singapore Changi Airport"
              style={awardImg}
            />
            <h4 style={{ color: "#28a745", margin: 0 }}>
              Singapore Changi (SIN)
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444", marginTop: "6px" }}>
              Winner: World's Best Airport Experience 2025
            </p>
          </div>
          <div style={awardCard}>
            <img
              src="https://news.delta.com/sites/default/files/2024-06/img_7882.jpeg"
              alt="London Heathrow Airport"
              style={awardImg}
            />
            <h4 style={{ color: "#28a745", margin: 0 }}>
              London Heathrow (LHR)
            </h4>
            <p style={{ fontSize: "0.98rem", color: "#444", marginTop: "6px" }}>
              Winner: Top International Hub 2024
            </p>
          </div>
          <div style={awardCard}>
            <img
              src="https://blog.asaptickets.com/wp-content/uploads/2018/07/Skytrax-Airline-Awards-2018-Worlds-Best-Airlines-cr-Austrianairlines.jpg"
              alt="Tokyo Haneda Airport"
              style={awardImg}
            />
            <h4 style={{ color: "#28a745", margin: 0 }}>Tokyo Haneda (HND)</h4>
            <p style={{ fontSize: "0.98rem", color: "#444", marginTop: "6px" }}>
              Winner: Best Airport Cleanliness 2025
            </p>
          </div>
          <div style={awardCard}>
            <img
              src="https://news.delta.com/sites/default/files/2025-06/hero-image-option-1.jpg"
              alt="JFK International Airport"
              style={awardImg}
            />
            <h4 style={{ color: "#28a745", margin: 0 }}>New York JFK</h4>
            <p style={{ fontSize: "0.98rem", color: "#444", marginTop: "6px" }}>
              Winner: Best North American Airport 2024
            </p>
          </div>
        </div>

        {/* Awards Highlights */}
        <h2 style={subHeadStyle}>Our Commitment to Excellence</h2>
        <ul
          style={{
            marginBottom: "16px",
            paddingLeft: "22px",
            color: "#444",
            fontSize: "1.08rem",
          }}
        >
          <li>Multiple Skytrax Awards for Service & Comfort</li>
          <li>Global Traveler’s Best Airline Crew 2023</li>
          <li>Green Airlines Eco-Friendly Innovation Award</li>
          <li>Top 5 Airline for International Business Travelers</li>
        </ul>

        {/* Contact */}
        <h2 style={subHeadStyle}>Contact & Feedback</h2>
        <ul
          style={{
            marginBottom: "16px",
            paddingLeft: "22px",
            color: "#444",
            fontSize: "1.05rem",
          }}
        >
          <li>
            Email:{" "}
            <a
              href="mailto:services@flyfab.com"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              services@flyfab.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+18004567920"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              +1-800-456-7920
            </a>
          </li>
          <li>
            Feedback & Suggestions:{" "}
            <a
              href="/feedback"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              FlyFab Feedback Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
