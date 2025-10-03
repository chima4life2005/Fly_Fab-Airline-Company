import React from "react";

// Example experiences data
const experiences = [
  {
    name: "Anna Smith",
    image:
      "https://https://plus.unsplash.com/premium_photo-1677281438310-9a562276a913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
    destination: "Paris, France",
    story:
      "The Eiffel Tower was breathtaking! Paris is full of art, romance, and delicious pastries. I loved every moment.",
  },
  {
    name: "James Lee",
    image:
      "https://plus.unsplash.com/premium_photo-1677281438310-9a562276a913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcnBvcnQlMjBwYXNzZW5nZXJzfGVufDB8fDB8fHww",
    destination: "Kyoto, Japan",
    story:
      "Kyoto’s temples and cherry blossoms are magical. The food and traditions made my stay unforgettable.",
  },
  {
    name: "Maria Garcia",
    image:
      "https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt-L6jsYIFNFiIwi3fXjVwuIrAC6xn2-jaWjvKrIL4A=",
    destination: "Santorini, Greece",
    story:
      "Santorini's sunsets are surreal. The blue domes and white houses overlooking the sea create a dream-like atmosphere.",
  },
  {
    name: "Emeka Okafor",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    destination: "Lagos, Nigeria",
    story:
      "Lagos is vibrant and energetic! The beaches, the music, and the jollof rice—I'll be back for more.",
  },
  {
    name: "Sophie Müller",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    destination: "Cape Town, South Africa",
    story:
      "Table Mountain and the waterfront stole my heart. The wildlife safaris were thrilling adventures.",
  },
];

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "24px",
  margin: "18px",
  maxWidth: "350px",
  textAlign: "center",
  transition: "transform 0.2s",
};

const imageStyle = {
  borderRadius: "12px",
  width: "120px",
  height: "120px",
  objectFit: "cover",
  marginBottom: "16px",
};

const TravelExperiences = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #e0f7fa 0%, #f0f6ff 100%)",
      padding: "45px 0",
      fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "#05668d",
        fontWeight: 700,
        marginBottom: 32,
        letterSpacing: 2,
      }}
    >
      🌍 Travel Experiences
    </h1>
    <p
      style={{
        textAlign: "center",
        color: "#069",
        fontSize: "1.2rem",
        marginBottom: 28,
        maxWidth: 650,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Discover the world through the stories of fellow travelers. Get inspired
      and find your next adventure!
    </p>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          style={cardStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={exp.image} alt={exp.name} style={imageStyle} />
          <h2
            style={{
              margin: "10px 0 6px 0",
              fontSize: "1.1rem",
              color: "#067",
              fontWeight: 600,
            }}
          >
            {exp.name}
          </h2>
          <div
            style={{
              color: "#05668d",
              fontWeight: 500,
              fontSize: "1rem",
              marginBottom: "10px",
            }}
          >
            {exp.destination}
          </div>
          <p
            style={{
              color: "#555",
              fontSize: "0.98rem",
              marginBottom: 0,
            }}
          >
            "{exp.story}"
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TravelExperiences;
