// src/components/CursorTrail.js
import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const trailLength = 30; // Number of trailing circles
  const trailRef = useRef([]);
  const intervalRef = useRef();
  const previousPosition = useRef({ x: 0, y: 0 });

  const updateTrail = () => {
    for (let i = trailLength - 1; i > 0; i--) {
      trailRef.current[i] = {
        x: trailRef.current[i - 1]?.x || 0,
        y: trailRef.current[i - 1]?.y || 0,
      };
    }

    trailRef.current[0] = {
      x: previousPosition.current.x,
      y: previousPosition.current.y,
    };

    for (let i = 0; i < trailLength; i++) {
      const trailDot = document.getElementById(`trail-dot-${i}`);
      if (trailDot) {
        trailDot.style.left = `${trailRef.current[i]?.x}px`;
        trailDot.style.top = `${trailRef.current[i]?.y}px`;
      }
    }
  };

  useEffect(() => {
    trailRef.current = new Array(trailLength).fill({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      previousPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    intervalRef.current = setInterval(updateTrail, 10); // Update every 10ms

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: trailLength }).map((_, index) => {
        const size = 16 - index * 0.5; // Decrease size towards the end
        return (
          <div
            id={`trail-dot-${index}`}
            key={index}
            className="bg-white rounded-full fixed pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: 0,
              top: 0,
              transform: "translate(-50%, -50%)",
              //   transition: "left 0.05s, top 0.05s", // Smooth transition
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
