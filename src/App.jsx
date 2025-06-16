import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProjectsComponent from './components/projects';
import ContactComponent from './components/contact';
import CursorFollower from './components/cursor';
import AboutMe from './components/about';
import Layout from './components/layout';
import HeroSection from './components/hero';

function App() {
  return (
    <>
      {/* Background Container - Completely separate from content flow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d13] via-[#0b0d13] to-[#0b0d13]" />
        <div className="absolute inset-0 bg-[radial-gradient(at_15%_40%,rgba(0,255,128,0.05)_0px,transparent_50%),radial-gradient(at_50%_10%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_50%_50%,rgba(2,17,18,0.06)_0px,transparent_10%),radial-gradient(at_50%_90%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_85%_25%,rgba(255,153,204,0.09)_0px,transparent_40%),radial-gradient(at_85%_90%,rgba(255,255,153,0.09)_0px,transparent_65%)] bg-no-repeat bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:95px_95px]" />
      </div>

      {/* Main Content - Clean structure for mobile compatibility */}
      <div className="relative min-h-screen w-full text-white z-10">
        <CursorFollower />
        
        {/* Navbar - Now uses CSS sticky instead of JavaScript positioning */}
        <Navbar />
        
        {/* Page Content */}
        <Layout>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;