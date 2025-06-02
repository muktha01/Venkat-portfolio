import React, { useEffect, useRef } from "react";

const TorchText = () => {
  const maskRef = useRef(null);
  const cursorRef = useRef(null);
  const fogRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Torch mask update
      const gradient = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 80%)`;
      if (maskRef.current) {
        maskRef.current.style.webkitMaskImage = gradient;
        maskRef.current.style.maskImage = gradient;
      }

      // Glowing torch dot
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 25}px`;
        cursorRef.current.style.top = `${y - 25}px`;
      }

      // Fog effect layer
      if (fogRef.current) {
        fogRef.current.style.left = `${x - 200}px`;
        fogRef.current.style.top = `${y - 200}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Torch-lit text */}
      <h1 className="text-[120px] font-bold text-center mix-blend-difference relative z-10 mt-[25vh] pointer-events-none select-none">
        TRIONN
      </h1>

      {/* Dark overlay with torch mask */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-black pointer-events-none z-20 transition-all duration-150"
      />

      {/* Glowing cursor */}
      <div
        ref={cursorRef}
        className="w-20 h-20 rounded-full bg-white/10  shadow-[0_0_50px_25px_rgba(255,255,255,0.3)] fixed z-30 pointer-events-none transition duration-75"
        style={{ position: "absolute" }}
      ></div>

      {/* Moving fog layer */}
      <div
        ref={fogRef}
        className="fixed z-10 w-[400px] h-[400px] bg-[radial-gradient(blur-xl pointer-events-none opacity-60 mix-blend-screen transition duration-300"
        style={{
          position: "absolute",
        }}
      ></div>
    </div>
  );
};

export default TorchText;
