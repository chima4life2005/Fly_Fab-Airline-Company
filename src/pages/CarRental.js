import React, { useState } from "react";

const cars = [
  {
    name: "Mercedes-Benz S-Class",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLtodSDBpINq4bcuRAdfTlhGO2qjYKcbcNWsgyf0JamaxUpkvr-iPvmzUSyxFZ8lqodo&usqp=CAU",
    price: 350,
  },
  {
    name: "BMW 7 Series",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/BMW_7-Series_%28G70%29_750e_IMG_9358.jpg",
    price: 340,
  },
  {
    name: "Audi A8",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/a218141-medium-1635867809.jpg?crop=0.777xw:0.655xh;0.115xw,0.209xh&resize=1200:*",
    price: 320,
  },
  {
    name: "Lexus LS",
    image:
      "https://carfax-img.vast.com/carfax/v2/-2217876730302785599/1/344x258",
    price: 310,
  },
  {
    name: "Jaguar XJ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg",
    price: 330,
  },
  {
    name: "Rolls-Royce Ghost",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/2022_Rolls-Royce_Ghost_Black_Badge_in_Arctic_White%2C_front_left.jpg",
    price: 800,
  },
  {
    name: "Bentley Continental",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    price: 650,
  },
  {
    name: "Porsche Panamera",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
    price: 400,
  },
  {
    name: "Tesla Model S",
    image:
      "https://images.unsplash.com/photo-1511391403515-ec2a0b6ce9a5?auto=format&fit=crop&w=400&q=80",
    price: 380,
  },
  {
    name: "Maserati Quattroporte",
    image:
      "https://images.unsplash.com/photo-1517949908119-4e8e7e5d0f5a?auto=format&fit=crop&w=400&q=80",
    price: 370,
  },
];

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px #cce2ff",
  padding: "24px",
  margin: "18px",
  maxWidth: "340px",
  textAlign: "center",
  transition: "transform 0.2s",
};

const imageStyle = {
  borderRadius: "12px",
  width: "100%",
  height: "160px",
  objectFit: "cover",
  marginBottom: "16px",
};

const modalBackdrop = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "32px 24px",
  maxWidth: "350px",
  boxShadow: "0 4px 16px #05668d30",
  textAlign: "center",
};

const inputStyle = {
  width: "90%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  marginBottom: "16px",
  fontSize: "1rem",
};

function PaymentModal({ car, onPay, onClose }) {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handlePay = (e) => {
    e.preventDefault();
    if (!name || !card) {
      alert("Please enter all payment details.");
      return;
    }
    onPay({ name, card });
  };

  return (
    <div style={modalBackdrop}>
      <div style={modalStyle}>
        <h2>Payment for {car.name}</h2>
        <p>
          <strong>Amount:</strong>{" "}
          <span style={{ color: "#28a745" }}>${car.price}</span> / day
        </p>
        <form onSubmit={handlePay}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Card Number"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            required
            maxLength={16}
          />
          <button
            type="submit"
            style={{
              padding: "10px 26px",
              background: "#05668d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Pay Now
          </button>
        </form>
        <button
          style={{
            background: "transparent",
            color: "#067",
            border: "none",
            marginTop: "18px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function ReceiptModal({ car, payment, onClose }) {
  return (
    <div style={modalBackdrop}>
      <div style={modalStyle}>
        <h2>Payment Successful!!!</h2>
        <p>
          Thank you, Please present your receipt of payment at the Dealership!{" "}
          <strong>{payment.name}</strong>.<br />
          You have rented <strong>{car.name}</strong>.
        </p>
        <img
          src={car.image}
          alt={car.name}
          style={{ width: "80%", borderRadius: "10px", marginBottom: "14px" }}
        />
        <div style={{ marginBottom: "10px", fontSize: "1.1rem" }}>
          <strong>Total Paid:</strong>{" "}
          <span style={{ color: "#28a745" }}>${car.price}</span> / day
        </div>
        <div>
          <strong>Card:</strong> **** **** **** {payment.card.slice(-4)}
        </div>
        <button
          style={{
            marginTop: "20px",
            padding: "8px 22px",
            background: "#05668d",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const CarRental = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const onRent = (car) => {
    setSelectedCar(car);
    setShowPayment(true);
  };

  const handlePay = (paymentInfo) => {
    setShowPayment(false);
    setReceipt({ car: selectedCar, payment: paymentInfo });
  };

  const closeReceipt = () => {
    setReceipt(null);
    setSelectedCar(null);
  };

  const closePayment = () => {
    setShowPayment(false);
    setSelectedCar(null);
  };

  return (
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
        🚗 Luxury Car Rental for FlyFab Airline
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
        Choose from our premium fleet of luxury cars to make your journey even
        more extraordinary. Book your car today!
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {cars.map((car, idx) => (
          <div
            key={idx}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={car.image} alt={car.name} style={imageStyle} />
            <h2
              style={{
                margin: "10px 0 6px 0",
                fontSize: "1.1rem",
                color: "#067",
                fontWeight: 600,
              }}
            >
              {car.name}
            </h2>
            <div
              style={{
                color: "#05668d",
                fontWeight: 500,
                fontSize: "1.07rem",
                marginBottom: "10px",
              }}
            >
              Rent Price:{" "}
              <span style={{ color: "#28a745", fontWeight: 700 }}>
                ${car.price}/day
              </span>
            </div>
            <button
              style={{
                padding: "10px 24px",
                background: "#05668d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 7px #b3c6e9",
                marginTop: "8px",
              }}
              onClick={() => onRent(car)}
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      {showPayment && selectedCar && (
        <PaymentModal
          car={selectedCar}
          onPay={handlePay}
          onClose={closePayment}
        />
      )}

      {receipt && (
        <ReceiptModal
          car={receipt.car}
          payment={receipt.payment}
          onClose={closeReceipt}
        />
      )}
    </div>
  );
};

export default CarRental;
