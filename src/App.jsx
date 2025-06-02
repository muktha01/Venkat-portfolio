import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProjectsComponent from './components/projects';
import ContactComponent from './components/contact';
import CursorFollower from './components/cursor';
import AboutMe from './components/about';
import Layout from './components/layout';
import HeroSection from './components/hero';


function App() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0b0d13] via-[#0b0d13] to-[#0b0d13] text-white overflow-hidden">
      {/* Background grid */}

      {/* Radial pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(at_15%_40%,rgba(0,255,128,0.05)_0px,transparent_50%),radial-gradient(at_50%_10%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_50%_50%,rgba(2,17,18,0.06)_0px,transparent_10%),radial-gradient(at_50%_90%,rgba(0,170,255,0.06)_0px,transparent_50%),radial-gradient(at_85%_25%,rgba(255,153,204,0.09)_0px,transparent_40%),radial-gradient(at_85%_90%,rgba(255,255,153,0.09)_0px,transparent_65%)] bg-no-repeat bg-cover bg-center" />

      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:95px_95px]" />


      {/* Content */}
      <div className="relative z-10">
        <Layout>
          <CursorFollower />
          <Navbar />
    
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>

          </Layout>
  
       
      </div>
    </div>
  );11, 13, 19
}

export default App;
