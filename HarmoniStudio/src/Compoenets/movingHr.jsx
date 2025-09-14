import React, { useState, useEffect } from "react";

function AnimatedHR({ duration = 500, color = "#ffff", height = 1 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setWidth(progress);

      if (progress >= 100) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <hr
      style={{
        width: `${width}%`,
        height: `${height}px`,
        backgroundColor: color,
        border: "none",
        transition: "width 0.2s linear",
      }}
    />
  );
}

export default AnimatedHR;
