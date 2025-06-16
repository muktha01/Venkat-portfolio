import React, { useState, useRef, useEffect } from 'react';
import {
  Github, ExternalLink, Code, Palette, Lightbulb, GraduationCap,
  Briefcase, Award, ChevronRight, Database, Globe, Smartphone,
  Server, Zap, Shield, GitBranch, Cpu, Monitor
} from 'lucide-react';
import SkillSection from './skills';
import ConnectSection from './social';
import { Link } from 'react-router-dom';


// Mock FeaturedProjects component
const FeaturedProjects = () => (
  <div className="mb-32">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Featured
      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-2">
        Projects
      </span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {[
        {
          title: 'Retail Sales Tracking App',
          description: 'Real-time sales monitoring mobile application with data visualization and trend analysis.',
          tech: ['React Native', 'Expo', 'TypeScript', 'Native Charts'],
          type: 'Mobile Application'
        },
        {
          title: 'AB Furniture E-commerce',
          description: 'Scalable e-commerce platform with advanced state management and SEO optimization.',
          tech: ['Next.js', 'React', 'PostgreSQL', 'Redux', 'Material UI'],
          type: 'Web Application'
        }
      ].map((project, index) => (
        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-gray-600/80 transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <span className="text-xs md:text-sm text-gray-400">{project.type}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-sm md:text-base text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="px-2 py-1 md:px-3 md:py-1 bg-gray-700/60 text-gray-300 rounded-full text-xs md:text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);



const AboutMe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const journeyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (journeyRef.current) {
        const rect = journeyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        const visibleTop = Math.max(0, windowHeight - rect.top);
        const visibleBottom = Math.min(windowHeight, windowHeight -(rect.bottom - windowHeight));
        const visibleHeight = Math.min(visibleTop, elementHeight);

        const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add CSS for marquee animation
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

 
  const journeyItems = [
    {
      type: 'job',
      date: 'March 2025 – Present',
      title: 'Freelance Full Stack Developer',
      organization: 'Self-Employed',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      description: [
        'Successfully delivered 3+ full-stack projects for clients in manufacturing, fintech, and sports industries.',
        'Integrated payment systems with Paygic gateway for seamless transaction processing.',
        'Implemented Plan APIs for number validation and verification services.',
        'Built responsive web applications with modern UI/UX design principles.'
      ],
      achievements: ['3+ Projects Delivered', 'Payment Integration', 'API Development', 'Modern UI/UX']
    },
    {
      type: 'job',
      date: 'April 2024 – February 2025',
      title: 'Associate Software Engineer',
      organization: 'WEBSOC.AI',
      gradient: 'from-green-500 to-emerald-500',
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      description: [
        'Developed scalable applications for 3+ enterprise clients including AVH INDIA, SkillCentral, and AB-Furniture.',
        'Built high-performance e-commerce platform with PostgreSQL database achieving 25% performance improvement.',
        'Implemented Redux Toolkit for efficient state management in complex applications.',
        'Created responsive UI components using Material UI and Tailwind CSS.'
      ],
      achievements: ['3+ Enterprise Clients', '25% Performance Boost', 'Redux Implementation', 'Responsive Design']
    },
    {
      type: 'internship',
      date: 'February 2024 – April 2024',
      title: 'Software Developer Intern',
      organization: 'SKILL CENTRAL - A Unit of Websoc.AI',
      gradient: 'from-orange-500 to-red-500',
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      description: [
        'Gained hands-on experience in Web development working on Websoc.ai and Ask Dr Devu projects.',
        'Developed interactive websites with dynamic UI components using React.js and JavaScript.',
        'Implemented responsive design principles ensuring cross-device compatibility.',
        'Participated in code reviews and learned version control with Git and GitHub.'
      ],
      achievements: ['React Development', 'Interactive UIs', 'Cross-device Compatibility', 'Version Control']
    }
  ];

  return (
<div className="min-h-screen px-4 sm:px-2 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Background Text */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5">
          <h1
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-wider whitespace-nowrap opacity-50"
            style={{ fontFamily: "Space Mono" }}
          >
            About Me
          </h1>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-2 md:px-6 py-8 md:py-16">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              About
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-2 md:ml-4">
                ME
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform origin-left animate-pulse"></div>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-6 md:mt-8 max-w-4xl leading-relaxed">
            Passionate Full Stack Web Developer with expertise in building user-friendly web applications and scalable solutions.
            From civil engineering to software development, I bring analytical thinking and problem-solving skills to create
            seamless user experiences with modern technologies.
          </p>
        </div>

        {/* Enhanced Journey Timeline */}
        <div className="mb-24 md:mb-32" ref={journeyRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16 text-center">
            My
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>

         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Enhanced Timeline Line */}
  <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-700 rounded-full"></div>
  <div
    className="absolute left-6 sm:left-8 md:left-10 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
    style={{ height: `${scrollProgress * 100}%` }}
  ></div>

  {/* Enhanced Moving Ball */}
  <div
    className="absolute left-4 sm:left-6 md:left-8 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-lg border-2 sm:border-3 md:border-4 border-blue-500 transition-all duration-300 ease-out z-20"
    style={{
      top: `${scrollProgress * 100}%`,
      transform: 'translateY(-50%)',
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
    }}
  >
    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
  </div>

  <div className="space-y-8 sm:space-y-12 md:space-y-16">
    {journeyItems.map((item, index) => (
      <div key={index} className="relative group">
        {/* Enhanced Timeline Dot */}
        <div className="absolute left-4 sm:left-6 md:left-8 top-6 sm:top-8 md:top-12 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-900 border-2 sm:border-2 md:border-4 border-gray-600 rounded-full z-10 group-hover:border-white transition-all duration-300">
          <div className={`absolute inset-0.5 sm:inset-0.5 md:inset-1 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
        </div>

        {/* Enhanced Content Card */}
        <div className="ml-10 sm:ml-16 md:ml-20 lg:ml-24 bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700/50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-600/70 group-hover:bg-gray-800/40">
          {/* Enhanced Header */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <div className={`rounded-full p-1.5 sm:p-2 md:p-3 bg-gradient-to-br ${item.gradient} text-white shadow-md flex-shrink-0`}>
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">{item.date}</div>
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 leading-tight">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm md:text-base text-blue-300 mb-2 sm:mb-3 md:mb-4">{item.organization}</div>

                {/* Achievement Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {item.achievements.map((achievement, achIndex) => (
                    <span
                      key={achIndex}
                      className={`px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-gradient-to-r ${item.gradient} text-white text-xs sm:text-sm rounded-full shadow-sm break-words`}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Description Points */}
          <div className="space-y-2 sm:space-y-2 md:space-y-3">
            {item.description.map((point, pointIndex) => (
              <div key={pointIndex} className="flex items-start gap-2 sm:gap-2 md:gap-3">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>


        {/* Enhanced Skills Section */}
        <SkillSection/>
   
        {/* Personal Insights Section */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16 text-center">
            Beyond
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-2">
              Code
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
                title: 'Problem Solver',
                description: 'I approach challenges with analytical thinking, breaking down complex problems into manageable solutions.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
                title: 'Design Enthusiast',
                description: 'Passionate about creating beautiful, intuitive user interfaces that provide exceptional user experiences.',
                gradient: 'from-pink-400 to-purple-500'
              },
              {
                icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
                title: 'Quick Learner',
                description: 'Constantly adapting to new technologies and frameworks, staying current with industry trends.',
                gradient: 'from-blue-400 to-cyan-500'
              }
            ].map((insight, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/40 transition-all duration-300">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${insight.gradient} flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {insight.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{insight.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
     

       <div className="text-center  ">
          <div className="rounded-2xl md:rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Build Something
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Amazing?
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's collaborate and turn your ideas into reality. I'm passionate about creating innovative solutions
              that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             
              <Link to='/projects'>
                <div className="relative inline-block rounded-xl p-[2px] overflow-hidden">
                  <div className="absolute inset-[-1000%] glowing-border-animation"></div> {/* Custom CSS class */}
                  
                 <button 
           className="relative inline-block px-6 py-3 md:px-8 md:py-4 
                      text-gray-300 rounded-xl font-semibold 
                      border border-gray-700 tracking-wide uppercase text-sm md:text-base
                      hover:text-white hover:bg-gray-800 hover:-translate-y-1 hover:scale-105
                      active:translate-y-0 active:scale-100
                      transition-all duration-300 ease-out
                      shadow-xl shadow-black/50 
                      hover:shadow-2xl hover:shadow-purple-500/25
                      backdrop-blur-sm
                      hover:border-gray-600
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          View My Projects
        </button>
                </div>
              </Link>
            </div>
          </div>
          </div>
   
       

        {/* Social Connect */}
        <ConnectSection/>

      </div>
    </div>
  );
};

export default AboutMe;