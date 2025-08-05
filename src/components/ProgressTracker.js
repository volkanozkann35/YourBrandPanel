import React, { useState, useEffect } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);
  const target = 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < target ? prev + 5 : target));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginTop: 20 }}>
      <h3>🎯 Aylık Satış Hedefi</h3>
      <div style={{ background: "#eee", borderRadius: 10, height: 20, marginTop: 10 }}>
        <div
          style={{
            width: `${progress}%`,
            background: "#4caf50",
            height: "100%",
            borderRadius: 10,
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>
      <p style={{ marginTop: 8 }}>{progress}% tamamlandı</p>
    </div>
  );
};

export default ProgressTracker;
