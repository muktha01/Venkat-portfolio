import React from 'react';
import { useState } from 'react';
import { Github } from 'lucide-react';
import resume from '../assets/Venkateswara_Rao_Fullstack_Developer-2.pdf'


const socialLinks = [
  { 
    name: 'LinkedIn', 
    color: 'bg-blue-600', 
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    url: 'https://www.linkedin.com/in/venkatboini/',
    type: 'external'
  },
  { 
    name: 'GitHub', 
    color: 'bg-gray-800', 
    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    url: 'https://github.com/muktha01',
    type: 'external'
  },
  {
    name: 'Mail',
    color: 'bg-red-600',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
      </svg>
    ),
    url: '/contact',
    type: 'internal'
  },
  { 
    name: 'Mobile', 
    color: 'bg-indigo-600',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"/>
      </svg>
    ),
    url: 'tel:+917095911484',
    type: 'external'
  },
  { 
    name: 'WhatsApp', 
    color: 'bg-green-500', 
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.001 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.541.685 5.023 1.985 7.201L2 30l6.949-2.6a13.27 13.27 0 006.816 1.8C23.363 29.2 29.333 23.23 29.333 16c0-7.363-5.97-13.333-13.332-13.333zm0 24a10.646 10.646 0 01-5.414-1.49l-.388-.23-4.122 1.541 1.437-4.306-.246-.418A10.606 10.606 0 015.334 16c0-5.888 4.779-10.667 10.667-10.667s10.666 4.78 10.666 10.667-4.779 10.667-10.666 10.667zm5.676-8.279c-.309-.154-1.831-.902-2.116-1.006-.285-.105-.493-.154-.702.154-.208.309-.806 1.006-.988 1.214-.181.208-.362.232-.67.078-.309-.155-1.309-.482-2.49-1.539-.92-.821-1.54-1.833-1.722-2.141-.18-.309-.019-.476.136-.63.14-.139.31-.362.465-.543.154-.18.205-.309.308-.515.103-.206.051-.387-.026-.543-.078-.155-.702-1.694-.962-2.32-.253-.607-.51-.526-.702-.535-.182-.008-.388-.01-.596-.01a1.15 1.15 0 00-.834.39c-.285.308-1.086 1.063-1.086 2.597s1.112 3.015 1.266 3.224c.154.206 2.183 3.333 5.29 4.675.74.318 1.318.508 1.768.652.743.236 1.419.203 1.953.123.596-.089 1.831-.748 2.09-1.47.258-.721.258-1.337.181-1.47-.077-.132-.283-.206-.593-.36z" />
      </svg>
    ),
    url: 'https://wa.me/7095911484',
    type: 'external'
  },
  {
    name: 'Resume',
    color: 'bg-blue-600',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    url: resume,
    type: 'external'
  }
];

export default function ConnectSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (link, index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 200);
    
    if (link.type === 'internal') {
    
      window.location.href = link.url;
    } else {
      // For external links
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="mb-16 sm:mb-24 md:mb-32  lg:px-8">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 sm:mt-12 md:mt-16 font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
            Let's
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
              Connect
            </span>
          </h2>

          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-0">
            {socialLinks.map((link, index) => (
              <div
                key={link.name}
                className="group relative cursor-pointer select-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleLinkClick(link, index)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 300)}
              >
                {/* Bottom border line */}
                <div className={`absolute left-0 bottom-0 w-full h-px transition-all duration-300 sm:duration-500 ease-out ${
                  hoveredIndex === index || activeIndex === index
                    ? 'bg-white/20' 
                    : hoveredIndex !== null
                    ? 'bg-white/5'
                    : 'bg-white/10'
                }`}>
                  <div 
                    className={`h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 transition-all duration-500 sm:duration-700 ease-out absolute left-1/2 transform -translate-x-1/2 ${
                      hoveredIndex === index || activeIndex === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                {/* Main content */}
                <div className="flex items-center justify-between py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-8 transition-all duration-300 sm:duration-500 ease-out group-hover:px-3 sm:group-hover:px-6 md:group-hover:px-12">
                  
                  {/* Link name */}
                  <div className={`text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-light tracking-wide sm:tracking-wider transition-all duration-300 sm:duration-500 ease-out ${
                    hoveredIndex === index || activeIndex === index
                      ? 'text-white transform translate-x-1 sm:translate-x-2 md:translate-x-4' 
                      : hoveredIndex !== null
                      ? 'text-white/30'
                      : 'text-white/60'
                  }`}>
                    {link.name}
                  </div>

                  {/* Icon */}
                  <div className={`relative transition-all duration-300 sm:duration-500 ease-out ${
                    hoveredIndex === index || activeIndex === index
                      ? 'transform -translate-x-1 sm:-translate-x-2 md:-translate-x-4 scale-105 sm:scale-110' 
                      : ''
                  }`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${link.color} transition-all duration-300 ${
                      activeIndex === index ? 'scale-95' : ''
                    }`}>
                      {link.icon}
                    </div>
                    
                    {/* Mobile tap feedback */}
                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}