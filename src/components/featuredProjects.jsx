import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Code } from 'lucide-react'; // or any icon library you use

const FeaturedProjects = ({ projects }) => {
  const fallbackProjects = [
    {
      type: 'Web App',
      title: 'Sample Project One',
      description: 'This is a sample description of the project. It demonstrates key features and tools.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      type: 'Mobile App',
      title: 'Sample Project Two',
      description: 'Another sample project to test carousel functionality.',
      tech: ['React Native', 'Expo'],
    },
     {
      type: 'Web App',
      title: 'Sample Project One',
      description: 'This is a sample description of the project. It demonstrates key features and tools.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      type: 'Mobile App',
      title: 'Sample Project Two',
      description: 'Another sample project to test carousel functionality.',
      tech: ['React Native', 'Expo'],
    },
  ];

  const projectList = projects && Array.isArray(projects) ? projects : fallbackProjects;

  return (
    <div className="mb-20 ">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Featured
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ml-2">
          Projects
        </span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="max-w-3xl mx-auto"
      >
        {projectList.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 duration-300 group ">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-gray-400 font-medium">{project.type}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProjects;
