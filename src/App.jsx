import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import ProjectsComponent from './components/projects';
import ContactComponent from './components/contact';
import CursorFollower from './components/cursor';
import AboutMe from './components/about';
import Layout from './components/layout';
import HeroSection from './components/hero';
import PortfolioLoading from './components/portfolioLoading';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen first
  if (isLoading) {
    return <PortfolioLoading />;
  }

  // Main portfolio content
  return (
    <>
      {/* Background Container - Completely separate from content flow */}
       <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d13] via-[#0b0d13] to-[#0b0d13]" />
        <div className="absolute inset-0 bg-[radial-gradient(at_15%_40%,rgba(0,255,128,0.05)_0px,transparent_50%),radial-gradient(at_50%_10%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_50%_50%,rgba(2,17,18,0.06)_0px,transparent_10%),radial-gradient(at_50%_90%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_85%_25%,rgba(255,153,204,0.09)_0px,transparent_40%),radial-gradient(at_85%_90%,rgba(255,255,153,0.09)_0px,transparent_65%)] bg-no-repeat bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:95px_95px]" />
      </div>
      <div className="fixed inset-0 -z-10">
        <Layout />
      </div>

      {/* Cursor Follower */}
      <CursorFollower />

      {/* Main Content - Clean structure for mobile compatibility */}
      <div className="relative z-10">
        {/* Navbar - Now uses scroll-based navigation instead of React Router */}
        <Navbar />

        {/* Page Content - All sections rendered on single page */}
        <main>
          {/* Hero Section with id="hero" */}
          <section id="hero" className="min-h-screen">
            <HeroSection />
          </section>

          {/* About Section with id="about" */}
          <section id="about" className="min-h-screen">
            <AboutMe />
          </section>

          {/* Projects Section with id="projects" */}
          <section id="projects" className="min-h-screen">
            <ProjectsComponent />
          </section>

          {/* Contact Section with id="contact" */}
          <section id="contact" className="min-h-screen">
            <ContactComponent />
          </section>
        </main>

        {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/917095911484"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
</a>

      </div>
    </>
  );
}

export default App;

 