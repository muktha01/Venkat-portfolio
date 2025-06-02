import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const getCenter = () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [cursor, setCursor] = useState(getCenter);
  const [circle, setCircle] = useState(getCenter);
  const [hovering, setHovering] = useState(false);
  const [isActive, setIsActive] = useState(false); // 🔸 Tracks if mouse has moved

  const circleSize = 80;
  const dotSize = 6;
  const offset = circleSize / 2;
  const dotOffset = dotSize / 2;

  // Activate on first mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY };
      setCursor(pos);
      if (!isActive) setIsActive(true); // 🔸 Activate once
    };

    const handleHover = (e) => {
      const isInteractive = e.target.closest(
        'a, button, select, label, [data-cursor-hover], hover'
      );
      setHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mouseout', handleHover);
    };
  }, [isActive]);

  // Animate trailing circle
  useEffect(() => {
    if (!isActive) return; // 🔸 Skip animation until active

    let frame;
    const animate = () => {
      setCircle(prev => {
        const dx = cursor.x - prev.x;
        const dy = cursor.y - prev.y;
        const speed = 0.2;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cursor, isActive]);

  if (!isActive) return null; // 🔸 Don't render anything before mouse moves

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Trailing circle */}
      <div
        className="rounded-full transition-all duration-150 ease-out"
        style={{
          position: 'fixed',
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transform: `translate(${circle.x - offset}px, ${circle.y - offset}px) scale(${hovering ? 0.3 : 1})`,
          border: `${hovering ? 10 : 1}px solid rgba(255, 255, 255, 0.7)`,
        }}
      />

      {/* Cursor dot */}
      <div
        className="bg-white rounded-full transition-none"
        style={{
          position: 'fixed',
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          transform: `translate(${cursor.x - dotOffset}px, ${cursor.y - dotOffset}px)`,
        }}
      />
    </div>
  );
};

export default CursorFollower;
