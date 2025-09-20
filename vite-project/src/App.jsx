import React, { useState } from "react";

const gradients = [
  // 2-color
  // ["#E0F7FA", "#80DEEA"],
  // ["#F5F5F5", "#BFD7ED"],
  // ["#E0FBFC", "#98C1D9"],
  // ["#FFFFFF", "#83C5BE"],
  // ["#DFF6FF", "#62B6CB"],
  // ["#EDF6F9", "#83B5B3"],
  // ["#C9F2F0", "#009688"],
  // ["#283D3B", "#197278"],
  // ["#1D3557", "#A8DADC"],
  // ["#264653", "#2A9D8F"],
  // ["#FAF3DD", "#8FCACA"],
  
  // more subtle 3-color
  // ["#F5FAFD", "#D6E6F2", "#B8DDEA"],
  // ["#EEF7FB", "#A7C7DC", "#6CA0DC"],
  // ["#80DEEA", "#E0F7FA", "#80DEEA"],
  // ["#7af0ffff", "#E0F7FA", "#7af0ffff"],
  // ["#a3f4ffff", "#E0F7FA", "#a3f4ffff"],
  // ["#bff8ffff", "#E0F7FA", "#bff8ffff"],
  
  
  // another
  ["#62B6CB", "#DFF6FF", "#62B6CB"],
];

export default function GradientTester() {
  const [index, setIndex] = useState(0);

  const nextGradient = () => {
    setIndex((prev) => (prev + 1) % gradients.length);
  };

  const current = gradients[index];

  // Dynamically join colors for any gradient length
  const gradientCSS = `linear-gradient(135deg, ${current.join(", ")})`;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: gradientCSS,
        color: "#00515cff",
        transition: "background 0.6s ease",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <h1>Bookosaurs Gradient Test</h1>

        {/* Button */}
        <div>
          <button
            onClick={nextGradient}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Next Gradient
          </button>

          {/* Display current colors */}
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              padding: "10px 15px",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            <p style={{ margin: 0, fontSize: "18px" }}>
              {current.join(" → ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
