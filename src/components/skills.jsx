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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate skills more times for mobile to ensure smooth scrolling
  const duplicatedSkills = isMobile 
    ? [...skills, ...skills, ...skills, ...skills] 
    : [...skills, ...skills];

  return (
    <div className="overflow-hidden whitespace-nowrap rounded-lg md:rounded-xl p-2 md:p-4 mb-3 md:mb-4">
      <div
        className={`inline-flex items-center gap-3 md:gap-6 will-change-transform`}
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${
            isMobile ? '15s' : '20s'
          } linear infinite`,
          minWidth: 'max-content'
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 md:gap-3 bg-gray-900/60 backdrop-blur-sm rounded-md md:rounded-lg px-2 py-1.5 md:px-4 md:py-2 border border-gray-700/40 flex-shrink-0 min-w-max"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center p-0.5 md:p-1">
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-4 h-4 md:w-6 md:h-6 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <span
                className="text-gray-800 font-bold text-xs bg-gray-100 w-4 h-4 md:w-6 md:h-6 rounded-full flex items-center justify-center hidden"
                style={{ display: skill.image ? 'none' : 'flex' }}
              >
                {skill.name.charAt(0)}
              </span>
            </div>
            <span className="text-white font-medium text-xs md:text-sm whitespace-nowrap">
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
  const [isMobile, setIsMobile] = useState(false);
  const journeyRef = React.useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      
      /* Mobile-specific marquee optimizations */
      @media (max-width: 767px) {
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-75%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-75%); }
          100% { transform: translateX(0%); }
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: <Monitor className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />,
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
      title: 'Backend',
      icon: <Server className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />,
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
      icon: <Database className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', image: postgresql },
        { name: 'MongoDB', level: 'Advanced', image: mongodb },
        { name: 'MySQL', level: 'Advanced', image: mysql },
      ],
    },
    tools: {
      title: 'Dev Tools',
      icon: <GitBranch className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />,
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
    <div className="mb-16 md:mb-24 lg:mb-32 px-4 md:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 md:mb-12 lg:mb-16 text-center">
        Technical
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ml-2">
          Skills
        </span>
      </h2>

      {/* Skill Category Tabs - Mobile Optimized */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8 lg:mb-12 px-2">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveSkillCategory(activeSkillCategory === key ? null : key)}
            className={`flex items-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl transition-all duration-300 text-xs md:text-sm lg:text-base font-medium ${
              activeSkillCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105 shadow-blue-500/25`
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-gray-700/30 hover:border-gray-600/50'
            }`}
          >
            {category.icon}
            <span className="whitespace-nowrap">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Active Skills Display - Mobile Optimized */}
      {activeSkillCategory && (
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 xl:p-8 border border-gray-700/50 mb-8 md:mb-12">
          {/* Skill Grid - Improved mobile layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 max-w-6xl mx-auto">
            {skillCategories[activeSkillCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-900/40 backdrop-blur border border-gray-700/40 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-4 hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Skill Image/Initial */}
                  <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-md lg:rounded-lg flex items-center justify-center p-0.5 md:p-1 lg:p-2 group-hover:scale-110 transition-transform duration-300 mb-1.5 md:mb-2 lg:mb-3">
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span
                      className="text-gray-800 font-bold text-xs md:text-sm bg-gray-100 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg flex items-center justify-center hidden"
                      style={{ display: skill.image ? 'none' : 'flex' }}
                    >
                      {skill.name.charAt(0)}
                    </span>
                  </div>

                  {/* Skill Name and Level */}
                  <div className="w-full">
                    <h4 className="font-semibold text-white text-xs md:text-sm lg:text-base group-hover:text-blue-300 transition-colors duration-300 mb-1 leading-tight text-center">
                      {skill.name}
                    </h4>
                    
                    {/* Level indicator - visible on hover/tap */}
                    {(hoveredIndex === index || isMobile) && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-gray-400 text-xs">{skill.level}</span>
                        <div className="flex gap-0.5 md:gap-1">
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
                              className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skill Marquees - Mobile Optimized */}
      <div className="mt-8 md:mt-12 lg:mt-16 space-y-2 md:space-y-4">
        <SkillMarquee
          skills={skillCategories.frontend.skills.slice(0, 6)}
          direction="left"
        />
        <SkillMarquee
          skills={[
            ...skillCategories.backend.skills,
            ...skillCategories.database.skills,
          ].slice(0, 6)}
          direction="right"
        />
        <SkillMarquee 
          skills={skillCategories.tools.skills} 
          direction="left" 
        />
      </div>
    </div>
  );
};

export default SkillSection;