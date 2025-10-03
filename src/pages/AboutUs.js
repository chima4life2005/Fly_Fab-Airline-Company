import React from "react";

const customers = [
  {
    name: "Ada from Lagos",
    image:
      "https://plus.unsplash.com/premium_photo-1683133692078-2ad5d1e08998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9ydCUyMHBhc3NlbmdlcnN8ZW58MHx8MHx8fDA%3D",
    caption: "Ready for her flight to London with FlyFab!",
  },
  {
    name: "Carlos from Paris",
    image:
      "https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt-L6jsYIFNFiIwi3fXjVwuIrAC6xn2-jaWjvKrIL4A=",
    caption: "Enjoyed seamless check-in at Charles de Gaulle.",
  },
  {
    name: "Maya from Tokyo",
    image:
      "https://plus.unsplash.com/premium_photo-1677281438310-9a562276a913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
    caption: "Excited for her journey to New York!",
  },
  {
    name: "Kwame from Accra",
    image:
      "https://media.istockphoto.com/id/621596698/photo/young-african-using-digital-tablet-airport-lounge.webp?a=1&b=1&s=612x612&w=0&k=20&c=EFA8es4ZKQPpFQQZuP91wHJEqiGuhf2jn2QgZF5RAGc=",
    caption: "Loves FlyFab's friendly staff and smooth boarding.",
  },
  {
    name: "Sophia from Sydney",
    image:
      "https://plus.unsplash.com/premium_photo-1677281438310-9a562276a913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
    caption: "Enjoyed a comfortable flight to Los Angeles.",
  },
];

const AboutUs = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #e0f7fa 0%, #f0f6ff 100%)",
      padding: "48px 0",
      fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    }}
  >
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 24px #cce2ff",
        padding: "32px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#05668d",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 18,
        }}
      >
        ✈️ About FlyFab Airline
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#069",
          fontSize: "1.17rem",
          marginBottom: 24,
        }}
      >
        Welcome to FlyFab, where your journey is our passion!
        <br />
        <br />
        Since our launch, FlyFab has proudly connected travelers across
        continents with world-class service, modern comfort, and seamless
        booking. Our mission is to make every flight memorable, safe, and
        enjoyable—whether you’re flying for business, adventure, or to reunite
        with loved ones.
      </p>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <strong style={{ color: "#067", fontSize: "1.18rem" }}>
          Meet our happy travelers:
        </strong>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {customers.map((customer, idx) => (
          <div
            key={idx}
            style={{
              background: "#f7fbff",
              borderRadius: "14px",
              boxShadow: "0 2px 10px #e3efff",
              padding: "18px",
              maxWidth: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={customer.image}
              alt={customer.name}
              style={{
                borderRadius: "12px",
                width: "120px",
                height: "120px",
                objectFit: "cover",
                marginBottom: "12px",
                boxShadow: "0 2px 8px #b3c6e9",
              }}
            />
            <div style={{ fontWeight: 600, color: "#05668d", marginBottom: 8 }}>
              {customer.name}
            </div>
            <div style={{ color: "#555", fontSize: "0.98rem" }}>
              {customer.caption}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 48,
          textAlign: "center",
          color: "#067",
          fontWeight: 500,
          fontSize: "1.05rem",
        }}
      >
        Thank you for choosing FlyFab—where your adventure begins!
      </div>
    </div>
  </div>
);

export default AboutUs;
