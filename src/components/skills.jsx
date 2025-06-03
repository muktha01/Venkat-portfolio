import { Database, GitBranch, Monitor, Server } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import react from '../assets/react.svg';
import next from '../assets/skills/nextjs-original.svg';
import javascript from '../assets/skills/javascript-original.svg';
import typescript from '../assets/skills/typescript-original.svg';
import html5 from '../assets/skills/html5-original.svg';
import css3 from '../assets/skills/css3-original.svg';  
import materialui from '../assets/skills/materialui-original.svg';
import bootstrap from '../assets/skills/bootstrap-original.svg';
import nodejs from '../assets/skills/nodejs-original.svg';
import express from '../assets/skills/express-original.svg';
import fastapi from '../assets/skills/fastapi-original.svg';
import postgresql from '../assets/skills/postgresql-original.svg';
import mongodb from '../assets/skills/mongodb-original.svg';
import mysql from '../assets/skills/mysql-original.svg';
import git from '../assets/skills/git-original.svg';
import vscode from '../assets/skills/vscode-original.svg';
import postman from '../assets/skills/getpostman-icon.svg';
import jira from '../assets/skills/jira-original.svg';
import bitbucket from '../assets/skills/bitbucket-original.svg';



const SkillMarquee = ({ skills, direction = 'left' }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap rounded-xl p-4 mb-4">
      <div
        className={`inline-flex items-center gap-6 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} 20s linear infinite`,
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-900/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/40 flex-shrink-0"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <span
                className="text-gray-800 font-bold text-xs bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center hidden"
                style={{ display: skill.image ? 'none' : 'flex' }}
              >
                {skill.name.charAt(0)}
              </span>
            </div>
            <span className="text-white font-medium text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const journeyRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (journeyRef.current) {
        const rect = journeyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        const visibleTop = Math.max(0, windowHeight - rect.top);
        const visibleBottom = Math.min(
          windowHeight,
          windowHeight - (rect.bottom - windowHeight)
        );
        const visibleHeight = Math.min(visibleTop, elementHeight);

        const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

 const skillCategories = {
  frontend: {
    title: 'Frontend ',
    icon: <Monitor className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 'Expert', image: react },
      { name: 'Next.js', level: 'Advanced', image: next },
      { name: 'JavaScript', level: 'Expert', image: javascript },
      { name: 'TypeScript', level: 'Advanced', image: typescript },
      { name: 'React Native', level: 'Intermediate', image: react },
      { name: 'HTML5', level: 'Expert', image: html5 },
      { name: 'CSS3', level: 'Expert', image: css3 },
      { name: 'Material UI', level: 'Advanced', image: materialui },
      { name: 'Bootstrap', level: 'Advanced', image: bootstrap },
    ],
  },
  backend: {
    title: 'Backend ',
    icon: <Server className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 'Advanced', image: nodejs },
      { name: 'Express.js', level: 'Advanced', image: express },
      { name: 'RESTful APIs', level: 'Expert', image: fastapi },
      { name: 'JWT Auth', level: 'Advanced', image: nodejs },
      { name: 'bcrypt.js', level: 'Intermediate', image: nodejs },
    ],
  },
  database: {
    title: 'Databases',
    icon: <Database className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', image: postgresql },
      { name: 'MongoDB', level: 'Advanced', image: mongodb },
      { name: 'MySQL', level: 'Intermediate', image: mysql },
    ],
  },
  tools: {
    title: 'Dev Tools',
    icon: <GitBranch className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', image: git },
      { name: 'VS Code', level: 'Expert', image: vscode },
      { name: 'Postman', level: 'Advanced', image: postman },
      { name: 'Jira', level: 'Intermediate', image: jira },
      { name: 'Bitbucket', level: 'Advanced', image: bitbucket },
    ],
  },
};

  return (
    <div className="mb-24 md:mb-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16 text-center">
        Technical
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ml-2">
          Skills
        </span>
      </h2>

      {/* Skill Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveSkillCategory(key)}
            className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base  ${
              activeSkillCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:text-white'
            }`}
          >
            {category.icon}
            <span className="hidden sm:inline">{category.title}</span>
            <span className="sm:hidden">{category.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Skills Display - Conditionally rendered */}
      {activeSkillCategory && (
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div
              className={`rounded-full p-2 md:p-3 bg-gradient-to-br ${skillCategories[activeSkillCategory].color} text-white shadow-md`}
            >
              {skillCategories[activeSkillCategory].icon}
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {skillCategories[activeSkillCategory].title}
            </h3>
          </div>

          {/* Skill Grid with improvements */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
            {skillCategories[activeSkillCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-900/40 backdrop-blur border border-gray-700/40 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-3"> {/* Changed to flex row */}
                  {/* Skill Image/Initial */}
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center p-1 md:p-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span
                      className="text-gray-800 font-bold text-xs md:text-sm bg-gray-100 w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center hidden"
                      style={{ display: skill.image ? 'none' : 'flex' }}
                    >
                      {skill.name.charAt(0)}
                    </span>
                  </div>

                  {/* Skill Name and Level */}
                  <div className="flex-1 overflow-hidden"> {/* Added overflow-hidden */}
                    <h4 className="font-semibold text-white text-sm md:text-base group-hover:text-blue-300 transition-colors duration-300 truncate"> {/* Added truncate */}
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      {/* Always visible static indicator for level */}
                      <span className="text-gray-400 text-xs">{skill.level}</span>

                      {/* Pulsating dots on hover */}
                      {hoveredIndex === index && (
                        <div className="flex gap-1">
                          {[
                            ...Array(
                              skill.level === 'Expert'
                                ? 5
                                : skill.level === 'Advanced'
                                ? 4
                                : 3
                            ),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse"
                            ></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skill Marquees */}
      <div className="mt-12 md:mt-16 space-y-4">
        <SkillMarquee
          skills={skillCategories.frontend.skills.slice(0, 5)}
          direction="left"
        />
        <SkillMarquee
          skills={[
            ...skillCategories.backend.skills,
            ...skillCategories.database.skills,
          ]}
          direction="right"
        />
        <SkillMarquee skills={skillCategories.tools.skills} direction="left" />
      </div>
    </div>
  );
};

export default SkillSection;