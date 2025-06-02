import React, { useState } from 'react';
import { 
  Github, ExternalLink, Code, Palette, Lightbulb, GraduationCap, 
  Briefcase, Award, ChevronRight, Database, Globe, Smartphone,
  Server, Zap, Shield, GitBranch, Cpu, Monitor
} from 'lucide-react';
import FeaturedProjects from './featuredProjects';

// Mock FeaturedProjects component since it's imported but not defined
// const FeaturedProjects = () => (
//   <div className="mb-32">
//     <h2 className="text-4xl font-bold text-white mb-12 text-center">
//       Featured 
//       <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-2">
//         Projects
//       </span>
//     </h2>
//     <div className="grid md:grid-cols-2 gap-8">
//       {[
//         {
//           title: 'Retail Sales Tracking App',
//           description: 'Real-time sales monitoring mobile application with data visualization and trend analysis.',
//           tech: ['React Native', 'Expo', 'TypeScript', 'Native Charts'],
//           type: 'Mobile Application'
//         },
//         {
//           title: 'AB Furniture E-commerce',
//           description: 'Scalable e-commerce platform with advanced state management and SEO optimization.',
//           tech: ['Next.js', 'React', 'PostgreSQL', 'Redux', 'Material UI'],
//           type: 'Web Application'
//         }
//       ].map((project, index) => (
//         <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/80 transition-all duration-300">
//           <div className="flex items-center gap-2 mb-3">
//             <Code className="w-5 h-5 text-blue-400" />
//             <span className="text-sm text-gray-400">{project.type}</span>
//           </div>
//           <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//           <p className="text-gray-300 mb-4">{project.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {project.tech.map((tech, techIndex) => (
//               <span key={techIndex} className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-full text-sm">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const AboutMe = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Mastery',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 'Expert', image: 'src/assets/react.svg' },
        { name: 'Next.js', level: 'Advanced', image: 'src/assets/skills/nextjs-original.svg' },
        { name: 'JavaScript (ES6+)', level: 'Expert', image: 'src/assets/skills/javascript-original.svg' },
        { name: 'TypeScript', level: 'Advanced', image: 'src/assets/skills/typescript-original.svg' },
        { name: 'React Native', level: 'Intermediate', image: 'src/assets/react.svg' },
        { name: 'HTML5', level: 'Expert', image: 'src/assets/skills/html5-original.svg' },
         { name: 'CSS3', level: 'Expert', image: 'src/assets/skills/css3-original.svg' },
        { name: 'Tailwind CSS', level: 'Advanced', image: 'src/assets/skills/tailwind-css.webp' },
        { name: 'Material UI', level: 'Advanced', image: 'src/assets/skills/materialui-original.svg' },
        { name: 'Chakra UI', level: 'Intermediate', image: 'src/assets/skills/54212428.png' },
        { name: 'Bootstrap', level: 'Advanced', image: 'src/assets/skills/bootstrap-original.svg' },
        { name: 'ShadCN/UI', level: 'Intermediate', image: 'src/assets/skills/favicon.png' }
      ]
    },
    backend: {
      title: 'Backend Architecture',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 'Advanced', image: 'src/assets/skills/nodejs-original.svg' },
        { name: 'Express.js', level: 'Advanced', image: 'src/assets/skills/express-original.svg' },
        { name: 'RESTful APIs', level: 'Expert', image: 'src/assets/skills/fastapi-original.svg' },
        { name: 'JWT Authentication', level: 'Advanced', image: 'src/assets/skills/Group.svg' },
        { name: 'bcrypt.js', level: 'Intermediate', image: 'src/assets/skills/nodejs-original.svg' }
      ]
    },
    database: {
      title: 'Database Management',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', image: 'src/assets/skills/postgresql-original.svg' },
        { name: 'MongoDB', level: 'Advanced', image: 'src/assets/skills/mongodb-original.svg' },
        { name: 'MySQL', level: 'Intermediate', image: 'src/assets/skills/mysql-original.svg' }
      ]
    },
    tools: {
      title: 'Development Tools',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', image: 'src/assets/skills/git-original.svg' },
        { name: 'Bitbucket', level: 'Advanced', image: 'src/assets/skills/bitbucket-original.svg' },
        { name: 'Jira', level: 'Intermediate', image: 'src/assets/skills/jira-original.svg' },
        { name: 'VS Code', level: 'Expert', image: 'src/assets/skills/vscode-original.svg' },
        { name: 'Postman API', level: 'Advanced', image: 'src/assets/skills/getpostman-icon.svg' },
        { name: 'Thunder Client', level: 'Intermediate', image: 'https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client.png?raw=true' }
      ]
    },
    optimization: {
      title: 'Performance & SEO',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'HTML SEO', level: 'Advanced', image: 'src/assets/skills/html5-original.svg' },
        { name: 'Lazy Loading', level: 'Advanced', image: 'src/assets/skills/javascript-original.svg' },
        { name: 'Responsive Design', level: 'Expert', image: 'src/assets/skills/css3-original.svg' },
        { name: 'Performance Optimization', level: 'Advanced', image: 'src/assets/react.svg' }
      ]
    }
  };

const socialLinks = [
   { 
      name: 'LinkedIn', 
      color: 'bg-blue-600', 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/venkatboini/' 
    },
    { 
      name: 'GitHub', 
      color: 'bg-gray-800', 
      icon: <Github className="w-6 h-6 md:w-8 md:h-8" />,
      url: 'https://github.com/muktha01' 
    },
   
    { 
      name: 'Instagram', 
      color: 'bg-gradient-to-br from-purple-500 to-pink-500', 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/muktha_01_/' 
    },
    
    { 
      name: 'Portfolio', 
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600', 
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      url: 'https://your-portfolio.com' // Update with your portfolio URL
    },
    
   {
  name: 'Email',
  color: 'bg-red-600',
  icon: (
    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
    </svg>
  ),
url: 'mailto:Venkatb12127@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hi%20Venkat%2C%0A%0AI%20checked%20your%20portfolio%20and%20wanted%20to%20connect...'
},

     { 
      name: 'Resume', 
      color: 'bg-blue-600', 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
        </svg>
      ),
      url: 'https://drive.google.com/file/d/1kZL9U2SbMQiL5AELoaHEwq-NdTq8MJNd/view?usp=sharing'
    },
    
  ];

  const journeyItems = [
    {
      type: 'current',
      title: 'Full Stack Developer',
      organization: 'Freelance (Current Position)',
      duration: 'Current',
      description: 'Currently working on freelance projects while actively seeking a full-time opportunity to contribute and grow with a dynamic team.',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      achievements: ['Freelance Projects', 'Skill Expansion', 'Opportunity Seeking', 'Continuous Learning']
    },
    {
      type: 'job',
      title: 'Associate Software Engineer',
      organization: 'Websoc.AI (SaaS)',
      duration: 'Apr 2024 - Feb 2025',
      description: 'Developed scalable web solutions for Websoc.AI with AVH INDIA, SkillCentral, and AB-Furniture. Built high-performance e-commerce platforms with modern tech stack.',
      icon: <Briefcase className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      achievements: ['E-commerce Development', 'Next.js', 'SEO Optimization', 'Team Collaboration']
    },
    {
      type: 'internship',
      title: 'Software Developer Intern',
      organization: 'SkillCentral - A Unit of Websoc.AI',
      duration: 'Feb 2024 - Apr 2024',
      description: 'Gained hands-on experience in full-stack development. Worked on Websoc.ai and Ask Dr Devu projects using React, NextJS, JavaScript, and PostgreSQL.',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      achievements: ['Full-Stack Development', 'React.js', 'Version Control Mastery', 'Responsive Design']
    }
  ];

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20 relative overflow-hidden">
      {/* Background Text */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5 p-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-wider whitespace-nowrap text-white opacity-50 "  style={{ fontFamily: "Space Mono"}}>
            About
          </h1>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-30 h-30 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-30 h-30 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              About
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
                ME
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform origin-left animate-pulse"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl leading-relaxed">
            Passionate Full Stack Web Developer with expertise in building user-friendly web applications and scalable solutions. 
            From civil engineering to software development, I bring analytical thinking and problem-solving skills to create 
            seamless user experiences with modern technologies.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            My 
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-blue-500 via-green-500 to-pink-500 rounded-full opacity-60"></div>
            
            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute left-0 md:left-4 top-8 w-8 h-8 bg-gray-900 border-4 border-white rounded-full z-10 group-hover:scale-125 transition-transform duration-300">
                    <div className={`absolute inset-1 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse`}></div>
                  </div>
                  
                  <div className="ml-12 md:ml-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 group-hover:border-gray-600/80 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg text-white w-fit`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 font-semibold">{item.organization}</p>
                        <p className="text-sm text-gray-500">{item.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <span 
                          key={achIndex}
                          className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-full text-sm border border-gray-600/50"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Technical 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
              Arsenal
            </span>
          </h2>

          {/* Skills Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeSkillCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Skills Display */}
          <div className="rounded-2xl p-6 md:p-8 border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
            <div className={`flex items-center gap-3 mb-8`}>
              <div className={`p-3 bg-gradient-to-r ${skillCategories[activeSkillCategory].color} rounded-lg text-white`}>
                {skillCategories[activeSkillCategory].icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {skillCategories[activeSkillCategory].title}
              </h3>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeSkillCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/40 hover:border-gray-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300 p-1 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${skillCategories[activeSkillCategory].color}`}>
                      {skill.image ? (
                        <img 
                          src={skill.image} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span 
                        className="text-gray-800 font-bold text-xs bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hidden"
                        style={{ display: skill.image ? 'none' : 'flex' }}
                      >
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-2 leading-tight text-center">
                      {skill.name}
                    </h4>
                    {/* <span className="text-xs text-gray-400 bg-gray-800/60 px-2 py-1 rounded-full">
                      {skill.level}
                    </span> */}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${skillCategories[activeSkillCategory].color} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Connect 
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent ml-2">
              With Me
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-0">
            {socialLinks.map((link, index) => (
              <div
                key={link.name}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className={`absolute left-0 bottom-0 w-full h-px transition-all duration-500 ease-out ${
                  hoveredIndex === index 
                    ? 'bg-white/20' 
                    : hoveredIndex !== null
                    ? 'bg-white/5'
                    : 'bg-white/10'
                }`}>
                  <div 
                    className={`h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 transition-all duration-700 ease-out absolute left-1/2 transform -translate-x-1/2 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                <div className="flex items-center justify-between py-8 md:py-12 px-4 md:px-8 transition-all duration-500 ease-out group-hover:px-6 md:group-hover:px-12">
                  <div className={`text-2xl md:text-4xl lg:text-6xl font-light tracking-wider transition-all duration-500 ease-out ${
                    hoveredIndex === index 
                      ? 'text-white transform translate-x-2 md:translate-x-4' 
                      : hoveredIndex !== null
                      ? 'text-white/30'
                      : 'text-white/60'
                  }`}>
                    {link.name}
                  </div>

                  <div className={`relative transition-all duration-500 ease-out ${
                    hoveredIndex === index 
                      ? 'transform -translate-x-2 md:-translate-x-4 scale-110' 
                      : ''
                  }`}>
                    <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full ${link.color} flex items-center justify-center text-white font-bold text-sm md:text-lg lg:text-xl transition-all duration-500 ease-out ${
                      hoveredIndex === index 
                        ? 'shadow-2xl shadow-white/20 opacity-100' 
                        : hoveredIndex !== null
                        ? 'opacity-30 shadow-sm'
                        : 'opacity-70 shadow-lg'
                    }`}>
                      {link.icon}
                    </div>
                    
                    <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ease-out ${
                      hoveredIndex === index 
                        ? 'scale-125 opacity-0' 
                        : 'scale-100 opacity-0'
                    }`} />
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-500 ease-out ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 md:p-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life with cutting-edge web technologies. 
              Let's collaborate and create exceptional digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:Venkatb12127@gmail.com"
                className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/muktha01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;