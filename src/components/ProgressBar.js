import React from "react";

function ProgressBar({ value }) {
  return (
    <div style={{ margin: "20px 0", textAlign: "left" }}>
      <p>Aylık Hedef: %{value}</p>
      <div style={{ width: "100%", height: "20px", background: "#ddd", borderRadius: "10px" }}>
        <div style={{ width: `${value}%`, height: "100%", background: "#4caf50", borderRadius: "10px", transition: "width 0.5s ease" }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
