import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "32px",
  margin: "24px auto",
  maxWidth: "820px",
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

const listStyle = {
  marginBottom: "18px",
  paddingLeft: "22px",
};

export default function BaggageServices() {
  return (
    <div
      style={{ background: "#eaf6fb", minHeight: "100vh", padding: "48px 0" }}
    >
      <div style={sectionStyle}>
        <h1 style={headlineStyle}>🧳 FlyFab Airline Baggage Services</h1>
        <p style={{ fontSize: "1.12rem", color: "#444", marginBottom: "28px" }}>
          FlyFab is committed to making your travel smooth and hassle-free. Here
          you'll find all the details about our baggage services, allowances,
          fees, restricted items, special baggage, and support.
        </p>

        {/* Allowance Section */}
        <h2 style={subHeadStyle}>Baggage Allowance</h2>
        <ul style={listStyle}>
          <li>
            <strong>Economy Class:</strong> 1 checked bag up to 23kg (50lbs), 1
            carry-on up to 8kg (17lbs)
          </li>
          <li>
            <strong>Business Class:</strong> 2 checked bags up to 32kg (70lbs)
            each, 1 carry-on up to 10kg (22lbs)
          </li>
          <li>
            <strong>Infants:</strong> 1 checked bag up to 10kg (22lbs), stroller
            allowed
          </li>
          <li>
            <strong>Dimensions:</strong> Maximum size per checked bag: 158cm
            (62in) L+W+H
          </li>
        </ul>

        {/* Fees Section */}
        <h2 style={subHeadStyle}>Extra Baggage Fees</h2>
        <ul style={listStyle}>
          <li>
            Extra checked bag (Economy): <strong>$80</strong> per bag
          </li>
          <li>
            Overweight (23-32kg): <strong>$90</strong> per bag
          </li>
          <li>
            Oversized bag (over 158cm): <strong>$120</strong> per bag
          </li>
          <li>
            Sports equipment: <strong>$60</strong> (pre-book for discount)
          </li>
          <li>
            Pets: <strong>$150</strong> (conditions apply)
          </li>
        </ul>

        {/* Restricted Items */}
        <h2 style={subHeadStyle}>Restricted & Prohibited Items</h2>
        <ul style={listStyle}>
          <li>No explosives, flammable liquids, or toxic substances</li>
          <li>No lithium batteries over 100Wh in checked baggage</li>
          <li>Sharp objects (knives, scissors) must be in checked bags</li>
          <li>No firearms except with airline approval</li>
          <li>
            Liquids in carry-on: max 100ml per container, all fit in 1L bag
          </li>
        </ul>

        {/* Special & Fragile Baggage */}
        <h2 style={subHeadStyle}>Special & Fragile Items</h2>
        <ul style={listStyle}>
          <li>Musical instruments and art: contact us for handling</li>
          <li>Wheelchairs and medical equipment: free (with advance notice)</li>
          <li>Valuables: keep in carry-on, not checked baggage</li>
          <li>Large sports equipment: pre-book for best rates and handling</li>
        </ul>

        {/* Lost & Found */}
        <h2 style={subHeadStyle}>Lost & Found</h2>
        <ul style={listStyle}>
          <li>Report missing baggage at the airport immediately</li>
          <li>
            Track baggage via our{" "}
            <a
              href="/baggage-tracker"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              Baggage Tracker
            </a>
          </li>
          <li>
            Compensation available for delayed, damaged, or lost bags as per
            FlyFab policy
          </li>
        </ul>

        {/* Packing Tips */}
        <h2 style={subHeadStyle}>Packing Tips</h2>
        <ul style={listStyle}>
          <li>Label your bags inside and out</li>
          <li>Use TSA-approved locks</li>
          <li>Keep medications and important documents in carry-on</li>
          <li>Pack breakables in bubble wrap or padded cases</li>
        </ul>

        {/* Support */}
        <h2 style={subHeadStyle}>Contact Baggage Services</h2>
        <ul style={listStyle}>
          <li>
            Email:{" "}
            <a
              href="mailto:baggage@flyfab.com"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              baggage@flyfab.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+18001234567"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              +1-800-123-4567
            </a>
          </li>
          <li>
            Live chat:{" "}
            <a
              href="/support"
              style={{ color: "#05668d", textDecoration: "underline" }}
            >
              FlyFab Support Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
