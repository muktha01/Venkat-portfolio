import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const skills = [
  { name: 'HTML', icon: '🌐', color: 'bg-red-500' },
  { name: 'CSS', icon: '🎨', color: 'bg-blue-500' },
  { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-500' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
  { name: 'Node.js', icon: '🌿', color: 'bg-green-500' },
];

const DraggableSkill = ({ skill, onDragEnd, index }) => (
  <motion.div
    drag
    dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
    onDragEnd={(event, info) => onDragEnd(index, info.point)}
    className={`m-4 p-4 rounded-full shadow-xl ${skill.color} cursor-pointer`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-white text-2xl">{skill.icon}</span>
  </motion.div>
);

const generateBezierPath = (positions) => {
  if (positions.length < 2) return '';
  const [start, ...rest] = positions;
  let path = `M${start.x},${start.y}`;
  rest.forEach((pos, i) => {
    const prev = positions[i];
    const cx = (prev.x + pos.x) / 2;
    const cy = (prev.y + pos.y) / 2;
    path += ` Q${prev.x},${prev.y} ${cx},${cy}`;
  });
  return path;
};

const Rope = ({ positions }) => {
  const path = generateBezierPath(positions);
  const springProps = useSpring({ d: path, config: { tension: 200, friction: 20 } });

  return (
    <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <animated.path
        d={springProps.d}
        stroke="#8B4513"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SkillBridge = () => {
  const [positions, setPositions] = useState(
    skills.map(() => ({ x: 150 + Math.random() * 500, y: 200 + Math.random() * 200 }))
  );

  const updatePosition = (index, newPos) => {
    setPositions((prev) => {
      const updated = [...prev];
      updated[index] = newPos;
      return updated;
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-green-100 overflow-hidden">
      <Rope positions={positions} />
      <div className="z-10 flex gap-4 flex-wrap justify-center items-center">
        {skills.map((skill, index) => (
          <DraggableSkill
            key={index}
            skill={skill}
            index={index}
            onDragEnd={updatePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBridge;
