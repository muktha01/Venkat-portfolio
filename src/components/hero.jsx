import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import wavingGIF from "../assets/wavingGIF.gif";
import helloImage from "../assets/hello.png";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [initialHighlight, setInitialHighlight] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialHighlight(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const getGroupHoverTextColorClasses = (baseColor, groupHoverColor) => {
    if (initialHighlight) {
      return groupHoverColor;
    }
    return baseColor;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleAboutClick = () => {
    window.location.href = '/about';
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <main className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 xl:gap-16 min-h-[calc(100vh-8rem)]">
          
          {/* Left Section */}
          <div className="flex-1 flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left max-w-3xl order-2 lg:order-1">
            
            {/* Main Title */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-widest text-white leading-tight">
                I'M
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-2 sm:ml-4">
                  VENKAT
                </span>
              </h1>
              <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed group transition-colors duration-300 text-gray-400">
                A{' '}
                <span className={`font-semibold transition-colors duration-300 group-hover:text-blue-400 ${getGroupHoverTextColorClasses('text-white', 'text-blue-400')}`}>
                  Full Stack Web Developer
                </span>{' '}
                who transforms ideas into responsive, user-friendly web and mobile applications.
              </p>

              <p className="text-base sm:text-lg leading-relaxed group transition-colors duration-300 text-gray-400">
                With expertise in the{' '}
                <span className={`font-mono transition-colors duration-300 cursor-default group-hover:text-emerald-400 ${getGroupHoverTextColorClasses('text-white', 'text-emerald-400')}`}>
                  MERN stack
                </span>,{' '}
                <span className={`font-mono transition-colors duration-300 cursor-default group-hover:text-blue-400 ${getGroupHoverTextColorClasses('text-white', 'text-blue-400')}`}>
                  Next.js
                </span>,{' '}
                <span className={`font-mono transition-colors duration-300 cursor-default group-hover:text-indigo-400 ${getGroupHoverTextColorClasses('text-white', 'text-indigo-400')}`}>
                  PostgreSQL
                </span>, and{' '}
                <span className={`font-mono transition-colors duration-300 cursor-default group-hover:text-cyan-400 ${getGroupHoverTextColorClasses('text-white', 'text-cyan-400')}`}>
                  React Native
                </span>, I craft digital experiences that are clean, fast, and accessible.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed transition-colors duration-300 text-gray-400">
                I believe in continuous learning and growth. Whether it's exploring new technologies, refining my craft, or collaborating with like-minded professionals, I'm committed to pushing the boundaries of what's possible in web development.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Let's build something amazing — feel free to reach out!
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
                <a
                  href="https://wa.me/7095911484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 ${
                    initialHighlight
                      ? 'text-white border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 border-gray-600'
                  }`}>
                    Let's Connect →
                  </button>
                </a>
                
                <button
                  onClick={handleAboutClick}
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 ${
                    initialHighlight
                      ? 'text-white border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 border-gray-600'
                  }`}
                >
                  See More About Me →
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Avatar and Animations */}
          <div className="relative flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
              <div className="relative -top-2 -right-2 sm:-top-4 sm:-right-4  md:-right-6  lg:-right-70  lg:-top-36">
                <img 
                  src={helloImage} 
                  alt="Waving Hi" 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-bounce drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10">
                <img
                  src={wavingGIF}
                  alt="Venkat Avatar Waving"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              {/* Decorative Floating Elements */}
              {/* ... dozens of divs for floating dots */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
