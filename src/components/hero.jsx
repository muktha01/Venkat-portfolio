import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import wavingGIF from "../assets/wavingGIF.gif";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function HeroSection() {
    const [initialHighlight, setInitialHighlight] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialHighlight(false);
    }, 1000); 

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Helper function to manage conditional classes for text that changes color on hover
  const getTextColorClasses = (baseColor, hoverColor, defaultColorOnInitial = false) => {
    if (initialHighlight) {
      return hoverColor;
    }
    return baseColor;
  };

  // Helper for elements whose parent has group-hover
  const getGroupHoverTextColorClasses = (baseColor, groupHoverColor) => {
    if (initialHighlight) {
      return groupHoverColor;
    }
    return baseColor;
  };
  return (
    <>
   
    <div className="min-h-screen">
    
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-12">
        <main className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 min-h-[calc(100vh-6rem)]">

          {/* Left Section */}
         <div className="flex-1 flex flex-col space-y-8 text-center lg:text-left max-w-3xl">
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-widest text-white leading-tight">
          I'M
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
            VENKAT
          </span>
        </h1>
        <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0"></div>
      </div>

      <div className="mb-6 space-y-2">
        <p
          className={`text-xl md:text-2xl leading-relaxed group transition-colors duration-300 
            text-gray-400`}
        >
          A{' '}
          <span
            className={`font-semibold transition-colors duration-300 group-hover:text-blue-400 ${getGroupHoverTextColorClasses(
              'text-white',
              'text-blue-400'
            )}`}
          >
            Full Stack Web Developer
          </span>{' '}
          who transforms ideas into responsive, user-friendly web and mobile applications.
        </p>

        <p
          className={`text-lg leading-relaxed group transition-colors duration-300 
            text-gray-400`}
        >
          With expertise in the{' '}
          <span
            className={`font-mono transition-colors duration-300 cursor-default group-hover:text-emerald-400 ${getGroupHoverTextColorClasses(
              'text-white',
              'text-emerald-400'
            )}`}
          >
            MERN stack
          </span>
          ,{' '}
          <span
            className={`font-mono transition-colors duration-300 cursor-default group-hover:text-blue-400 ${getGroupHoverTextColorClasses(
              'text-white',
              'text-blue-400'
            )}`}
          >
            Next.js
          </span>
          ,{' '}
          <span
            className={`font-mono transition-colors duration-300 cursor-default group-hover:text-indigo-400 ${getGroupHoverTextColorClasses(
              'text-white',
              'text-indigo-400'
            )}`}
          >
            PostgreSQL
          </span>
          , and{' '}
          <span
            className={`font-mono transition-colors duration-300 cursor-default group-hover:text-cyan-400 ${getGroupHoverTextColorClasses(
              'text-white',
              'text-cyan-400'
            )}`}
          >
            React Native
          </span>
          , I craft digital experiences that are clean, fast, and accessible.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <p
          className={`leading-relaxed transition-colors duration-300 
            text-gray-400
          `}
        >
          My path hasn't been straightforward. It's been filled with learning, experimenting, and overcoming challenges. But each step has taught me something valuable, helping me grow into the developer I am today.
        </p>

        <p
          className={`leading-relaxed transition-colors duration-300 
            text-gray-400
          `}
        >
          I believe in continuous learning and growth. Whether it's exploring new technologies, refining my craft, or collaborating with like-minded professionals, I'm committed to pushing the boundaries of what's possible in web development.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Let's build something amazing — feel free to reach out!
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">  
           <button
              className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:text-white hover:border-blue-500 ${
                initialHighlight
                  ? 'text-white border-blue-500'
                  : 'text-gray-300 border-gray-600'
              }`}
            >
              Get In Touch
          </button>
          </Link> 

          <Link to="/about">
            <button
              className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:text-white hover:border-blue-500 ${
                initialHighlight
                  ? 'text-white border-blue-500'
                  : 'text-gray-300 border-gray-600'
              }`}
            >
              See More About Me →
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="pt-6">
        <div className="flex justify-center lg:justify-start space-x-4">
          {[
            { href: "https://twitter.com/venkatboini", label: "Twitter Profile", Icon: Twitter, hoverColor: "text-blue-400", initialScale: initialHighlight },
            { href: "https://www.linkedin.com/in/venkatboini", label: "LinkedIn Profile", Icon: Linkedin, hoverColor: "text-blue-600", initialScale: initialHighlight },
            { href: "https://github.com/venkatboini", label: "GitHub Profile", Icon: Github, hoverColor: "text-white", initialScale: initialHighlight },
            { href: "https://www.instagram.com/venkatboini", label: "Instagram Profile", Icon: Instagram, hoverColor: "text-pink-500", initialScale: initialHighlight },
            { href: "https://www.facebook.com/venkatboini", label: "Facebook Profile", Icon: Facebook, hoverColor: "text-blue-600", initialScale: initialHighlight },
          ].map(({ href, label, Icon, hoverColor, initialScale }) => (
            <a 
              key={href}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${initialScale ? 'scale-110 shadow-lg bg-gray-700' : ''}`}
              aria-label={label}
            >
              <Icon className={`w-6 h-6 text-gray-400 group-hover:${hoverColor} transition-colors duration-300 ${initialScale ? hoverColor : ''}`} />
            </a>
          ))}
        </div>
      </div>
      */}
    </div>

          {/* Right Section */}
          <div className="relative flex items-start justify-center">
            <img src="src/assets/hello.png" alt="" className="w-24 relative left-60 top-20" />
            <div className="relative z-10 rounded-2xl">
              <img
                src={wavingGIF}
                alt="Venkat Avatar Waving"
                className="h-80 md:h-200 lg:h-[500px] w-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />

            

             
            </div>

            {/* Floating Dots */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-20 left-8 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-green-500 rounded-full opacity-50"></div>
            <div className="absolute top-16 left-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-45 animate-bounce"></div>
            <div className="absolute top-1/3 left-12 w-2 h-2 bg-red-400 rounded-full opacity-55 animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-cyan-400 rounded-full opacity-35 animate-pulse"></div>
            <div className="absolute top-20 left-16 w-3 h-3 bg-orange-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute bottom-16 right-20 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-emerald-400 rounded-full opacity-30 animate-pulse"></div>
            
              <div className="absolute top-16 left-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
           
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
