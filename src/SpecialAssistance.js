import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "32px",
  margin: "24px auto",
  maxWidth: "900px",
  fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
};

const headlineStyle = {
  color: "#05668d",
  marginBottom: "18px",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "2rem",
  letterSpacing: 2,
};

const subHeadStyle = {
  color: "#28a745",
  fontSize: "1.3rem",
  marginTop: "28px",
  marginBottom: "12px",
  fontWeight: 600,
};

const imageGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px",
  margin: "24px 0 0 0",
};

const imgStyle = {
  width: "210px",
  height: "140px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 1px 8px #05668d22",
};

export default function SpecialAssistance() {
  return (
    <div
      style={{ background: "#eaf6fb", minHeight: "100vh", padding: "48px 0" }}
    >
      <div style={sectionStyle}>
        <h1 style={headlineStyle}>💖 FlyFab Airline Special Assistance</h1>
        <p style={{ fontSize: "1.15rem", color: "#444", marginBottom: "24px" }}>
          At FlyFab, we are dedicated to making air travel accessible,
          comfortable, and safe for all. Our Special Assistance services support
          passengers with reduced mobility, medical needs, disabilities, and
          unique requirements throughout their journey.
        </p>

        {/* Accessibility & Mobility */}
        <h2 style={subHeadStyle}>Accessibility & Mobility</h2>
        <ul style={{ marginBottom: "16px", paddingLeft: "22px" }}>
          <li>
            Wheelchair assistance from check-in to boarding, including aircraft
            aisle chairs
          </li>
          <li>Accessible lavatories and priority seating on board</li>
          <li>Meet & assist service for elderly or solo travelers</li>
          <li>
            Support for visually or hearing-impaired passengers, including
            safety briefings and Braille materials
          </li>
        </ul>

        {/* Medical Needs */}
        <h2 style={subHeadStyle}>Medical & Health Assistance</h2>
        <ul style={{ marginBottom: "16px", paddingLeft: "22px" }}>
          <li>Oxygen supply on board (advance request required)</li>
          <li>
            Carriage of medication and medical devices (with documentation)
          </li>
          <li>Support for passengers with allergies or dietary restrictions</li>
          <li>
            Stretcher or medical escort arrangements for critical passengers
          </li>
        </ul>

        {/* Support Services */}
        <h2 style={subHeadStyle}>Assistance Services Offered</h2>
        <ul style={{ marginBottom: "16px", paddingLeft: "22px" }}>
          <li>Priority boarding and dedicated check-in counters</li>
          <li>Help with connecting flights and transfers</li>
          <li>
            Escort for children traveling alone (Unaccompanied Minor Service)
          </li>
          <li>Help for passengers traveling with service animals</li>
          <li>Special support for pregnant passengers</li>
        </ul>

        {/* Booking Assistance */}
        <h2 style={subHeadStyle}>How to Request Special Assistance</h2>
        <ul style={{ marginBottom: "16px", paddingLeft: "22px" }}>
          <li>Request service at booking, up to 48 hours before departure</li>
          <li>
            Contact{" "}
            <a
              href="mailto:special@flyfab.com"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              special@flyfab.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+18004563210"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              +1-800-456-3210
            </a>
          </li>
          <li>
            Visit our{" "}
            <a
              href="/support"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              Support Center
            </a>{" "}
            for online chat
          </li>
        </ul>

        {/* Service Images */}
        <h2 style={subHeadStyle}>Our Special Assistance in Action</h2>
        <div style={imageGrid}>
          <img
            src="https://familytripmagazine.com/wp-content/uploads/2023/05/shutterstock_2220449235_Easy-Resize.com_.jpg"
            alt="Wheelchair assistance"
            style={imgStyle}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661638528676-f897d2a4cbd9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
            alt="Guide helping elderly passenger"
            style={imgStyle}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYdcqG8klSzhxKqwDvyXwsfKFRbinJM7KNdkRYF2qj15Cd0yZo2R3cDDJpbeDx-bw9U8&usqp=CAU"
            alt="Support for visually impaired"
            style={imgStyle}
          />
          <img
            src="https://thumbs.dreamstime.com/b/african-flight-attendant-demonstrating-safety-procedure-using-oxygen-mask-taking-off-inside-airplane-cabin-crew-394794037.jpg"
            alt="Medical oxygen support"
            style={imgStyle}
          />
          <img
            src="https://australiafasttrack.com/wp-content/uploads/2021/07/AsiaFastTrack_06-Baggage-Assistance_768x576.jpg"
            alt="Assistance for children traveling alone"
            style={imgStyle}
          />
        </div>

        {/* Tips */}
        <h2 style={subHeadStyle}>Travel Tips for Special Assistance</h2>
        <ul style={{ marginBottom: "18px", paddingLeft: "22px" }}>
          <li>Notify FlyFab as early as possible about your needs</li>
          <li>
            Arrive at the airport at least 2 hours before scheduled departure
          </li>
          <li>Carry necessary medical certificates and prescriptions</li>
          <li>Inform us of any dietary or allergy requirements</li>
        </ul>

        {/* Contact */}
        <h2 style={subHeadStyle}>Contact Our Special Assistance Team</h2>
        <ul style={{ marginBottom: "16px", paddingLeft: "22px" }}>
          <li>
            Email:{" "}
            <a
              href="mailto:special@flyfab.com"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              special@flyfab.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+18004563210"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              +1-800-456-3210
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
