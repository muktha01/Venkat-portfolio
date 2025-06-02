import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsComponent = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const tabs = ['All', 'Freelance', 'Websoc.AI', 'Skill Central', 'Personal'];

  const projects = [
    {
      title: 'Barbican - Flex Sales Management',
      description: 'Sales management application for flexible tracking of inventory and orders with real-time analytics and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/20694722/pexels-photo-20694722/free-photo-of-a-modern-home-desk-setup-with-a-computer-and-a-tablet.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      technologies: ['React', 'Sequelize', 'MySQL', 'Node.js', 'Express.js', 'Tailwind CSS'],
      category: 'Freelance',
      type: 'Business Tools',
      githubLink: 'https://github.com/yourusername/barbican-sales',
      websiteLink: 'https://barbican-sales.vercel.app',
      featured: true
    },
    {
      title: 'E-Commerce Website - AB Furniture',
      description: 'A high-performance e-commerce platform with advanced state management, SEO optimization, and seamless payment integration.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Redux', 'Formik', 'Material UI', 'Tailwind CSS', 'HTML SEO'],
      category: 'Websoc.AI',
      type: 'E-Commerce',
      githubLink: 'https://github.com/yourusername/ab-furniture',
      websiteLink: 'https://ab-furniture.com',

    },
    {
      title: 'AVH INDIA Corporate Website',
      description: 'Modern corporate website with interactive UI components, responsive design, and optimized performance for AVH India.',
      image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'GSAP'],
      category: 'Websoc.AI',
      type: 'Company Website',
      githubLink: 'https://github.com/yourusername/avh-india',
      websiteLink: 'https://avhindia.com'
    },
    {
      title: 'SkillCentral Learning Platform',
      description: 'Interactive and responsive learning platform with course management, progress tracking, and advanced user analytics.',
      image: 'https://images.pexels.com/photos/28301967/pexels-photo-28301967/free-photo-of-a-desk-with-two-monitors-and-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      category: 'Skill Central',
      type: 'EdTech',
      githubLink: 'https://github.com/skillcentral/platform',
      websiteLink: 'https://skillcentral.io',

    },
    {
      title: 'Ask Dr Devu - Medical Consultation',
      description: 'Comprehensive medical consultation platform with appointment booking, video calls, and secure patient data management.',
      image: 'https://images.pexels.com/photos/31497028/pexels-photo-31497028/free-photo-of-ergonomic-keyboard-setup-on-designer-desk.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'WebRTC', 'Socket.io'],
      category: 'Skill Central',
      type: 'HealthTech',
      githubLink: 'https://github.com/yourusername/ask-dr-devu',
      websiteLink: 'https://askdrdevu.com'
    },
    {
      title: 'Websoc.ai Company Website',
      description: 'Modern AI company website showcasing services, team, and cutting-edge technology solutions with interactive elements.',
      image: 'https://images.pexels.com/photos/6892708/pexels-photo-6892708.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      technologies: ['React.js', 'Next.js', 'HTML', 'CSS', 'Three.js', 'Framer Motion'],
      category: 'Websoc.AI',
      type: 'Company Website',
      githubLink: 'https://github.com/websocai/website',
      websiteLink: 'https://websoc.ai',
      featured: true
    },
    {
      title: 'Masterclass Cricket UK',
      description: 'Cricket coaching feedback management platform with performance analytics, video analysis, and progress tracking dashboard.',
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'UI Components', 'Chart.js'],
      category: 'Freelance',
      type: 'SportsTech',
      githubLink: 'https://github.com/yourusername/cricket-masterclass',
      websiteLink: 'https://cricketmasterclass.uk'
    },
    {
      title: 'Finnpays - Digital Recharge App',
      description: 'Comprehensive recharge application with Paygic payment integration, transaction history, and multi-operator support.',
      image: 'https://images.pexels.com/photos/28779689/pexels-photo-28779689/free-photo-of-rgb-gaming-keyboard-and-mouse-on-hexagon-pattern.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Paygic API', 'JWT'],
      category: 'Freelance',
      type: 'FinTech',
      githubLink: 'https://github.com/yourusername/finnpays',
      websiteLink: 'https://finnpays.com',
      featured: true
    },
    {
      title: 'Retail Analytics - Sales Tracking',
      description: 'Advanced mobile application for monitoring daily transactions, analyzing sales trends, and generating comprehensive business reports.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React Native', 'TypeScript', 'Expo', 'Native Charts', 'Expo Router', 'SQLite'],
      category: 'Personal',
      type: 'Mobile App',
      githubLink: 'https://github.com/yourusername/retail-analytics',
      websiteLink: null
    },
    {
      title: 'Portfolio Website v2',
      description: 'Personal portfolio website with modern animations, dark theme, and responsive design showcasing my development journey.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      category: 'Personal',
      type: 'Portfolio',
      githubLink: 'https://github.com/yourusername/portfolio-v2',
      websiteLink: 'https://yourportfolio.dev'
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Split projects into two columns
  const leftColumnProjects = filteredProjects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = filteredProjects.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20 relative overflow-hidden ">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5">
          <h1
            className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black tracking-wider whitespace-nowrap  opacity-50"
            style={{ fontFamily: "Space Mono" }}
          >
            PROJECTS
          </h1>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="inline-block">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
            My 
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
              Projects
            </span>
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform origin-left animate-pulse"></div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl leading-relaxed">
          Explore my collection of digital experiences, crafted with passion and precision. Each project represents a unique challenge solved with modern technologies.
        </p>
      </div>

      {/* Main Content - Blurred when panel is open */}
      <div className={`transition-all duration-500 relative z-10 ${isPanelOpen ? 'blur-sm scale-95' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-16">
          
          {/* Enhanced Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {tab}
                <span className="ml-2 text-xs opacity-70">
                  ({tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length})
                </span>
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid with Fixed Height and Staggered Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumnProjects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => handleProjectClick(project)}
                  className="relative group bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-purple-500/10 h-80"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-purple-400 font-medium">{project.type}</span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project.websiteLink && (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-xs px-3 py-1 rounded-full text-gray-200 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-xs px-3 py-1 rounded-full text-purple-200">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column with top spacing */}
            <div className="space-y-8 pt-8">
              {rightColumnProjects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => handleProjectClick(project)}
                  className="relative group bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-purple-500/10 h-80"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-purple-400 font-medium">{project.type}</span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project.websiteLink && (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-xs px-3 py-1 rounded-full text-gray-200 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-xs px-3 py-1 rounded-full text-purple-200">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Off-Canvas Panel */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[500px] h-full bg-gray-900/95 backdrop-blur-xl text-white shadow-2xl z-50 transform transition-all duration-500 ease-out border-l border-white/10 ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10 bg-black/20">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Project Details
          </h2>
          <button
            onClick={closePanel}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel Content */}
        {selectedProject && (
          <div className="p-6 space-y-6 overflow-y-auto h-full pb-20">
            {/* Project Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              {selectedProject.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Featured Project
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
              
              {/* Category and Type Badges */}
              <div className="flex gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-4 py-2 rounded-full font-medium">
                  {selectedProject.category}
                </span>
                <span className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full font-medium">
                  {selectedProject.type}
                </span>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {selectedProject.websiteLink && (
                  <a
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-200">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-sm px-3 py-2 rounded-lg text-gray-200 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay when panel is open */}
      {isPanelOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closePanel}
        ></div>
      )}
    </div>
  );
};

export default ProjectsComponent;