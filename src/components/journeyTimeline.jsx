// JourneyTimeline.js
import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const JourneyTimeline = ({ journeyItems }) => {
  const journeyRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (journeyRef.current) {
        const rect = journeyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        // Calculate how much of the journey section is visible
        const visibleTop = Math.max(0, windowHeight - rect.top);
        const visibleBottom = Math.min(windowHeight, windowHeight - (rect.bottom - windowHeight));
        const visibleHeight = Math.min(visibleTop, elementHeight);

        // Calculate progress as a percentage
        const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mb-32" ref={journeyRef}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
        My
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ml-2">
          Journey
        </span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 rounded-full"></div>
        <div
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>

        {/* Moving Ball */}
        <div
          className="absolute left-6 w-5 h-5 bg-white rounded-full shadow-lg border-4 border-blue-500 transition-all duration-300 ease-out z-20"
          style={{
            top: `${scrollProgress * 100}%`,
            transform: 'translateY(-50%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
          }}
        >
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        </div>

        <div className="space-y-16">
          {journeyItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute left-4 top-12 w-8 h-8 bg-gray-900 border-4 border-gray-600 rounded-full z-10 group-hover:border-white transition-all duration-300">
                <div className={`absolute inset-1 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
              </div>

              {/* Content Card */}
              <div className="ml-20 backdrop-blur-sm rounded-2xl p-8  transition-all duration-300 group-hover:shadow-2xl">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {/* <div className={`w-15 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                        {item.organization.substring(0, 2)}
                      </div> */}
                    </div>
                    <div>
                      <div key={index} className="flex gap-6 items-start">
                        <div
                          className={`rounded-full p-3 bg-gradient-to-br ${item.gradient} text-white shadow-md`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{item.date}</div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <div className="text-sm text-blue-300">{item.organization}</div>
                          <div className="mb-6 mt-2">
                            <ul className="space-y-3">
                              {item.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} mt-2 flex-shrink-0`}></div>
                                  <span className="leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg text-white w-fit`}>
                    {item.icon}
                  </div> */}
                </div>

                {/* Description Points */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;