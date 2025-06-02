import { useState, useEffect } from 'react';
import { Asterisk, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState(''); // Track active/selected link
  const [removingLink, setRemovingLink] = useState(''); // Track which link is being removed
  
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check current URL to determine active link
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = navLinks.find(link => link.href === currentPath);
    if (currentLink) {
      setActiveLink(currentLink.name);
    } else {
      setActiveLink(''); // Reset if on home page or unknown route
    }
  }, []);

  // Listen for route changes (in case using client-side routing)
  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      const currentLink = navLinks.find(link => link.href === currentPath);
      if (currentLink) {
        setActiveLink(currentLink.name);
      } else {
        setActiveLink('');
      }
    };

    // Listen for browser navigation events
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleLinkClick = (linkName, href) => {
    // First set the removing state for smooth animation
    setRemovingLink(linkName);
    
    // After a short delay, actually remove the link and navigate
    setTimeout(() => {
      setRemovingLink('');
      setIsOpen(false);
      // Navigate to the route
      window.location.href = href;
      // The activeLink will be updated by the useEffect after navigation
    }, 300); // Match this with the transition duration
  };

  const handleLogoClick = () => {
    setActiveLink('');
    setRemovingLink('');
  };

  return (
    <nav className="mt-10 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-10  py-2 flex items-center justify-between">
        {/* Logo */}
        <div onClick={handleLogoClick} className="cursor-pointer">
          <div className="text-white font-semibold text-2xl tracking-wider">
              <Link to="/">
                <Asterisk size={80} className="inline-block mr-2" />
              </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm tracking-wide text-gray-200">
          {navLinks.map((link) => {
            // Don't render if it's the active link
            if (link.name.toLowerCase() === activeLink.toLowerCase()) {
              return null;
            }
            
            // Apply removing animation if this link is being removed
            const isRemoving = removingLink.toLowerCase() === link.name.toLowerCase();
            
            return (
              <li 
                key={link.name}
                className={`transition-all duration-300 ease-out ${
                  isRemoving 
                    ? 'opacity-0 scale-95 translate-x-4' 
                    : 'opacity-100 scale-100 translate-x-0'
                }`}
                style={{
                  transitionProperty: 'opacity, transform',
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  className="relative group px-1 py-1 text-gray-200 hover:text-white transition-colors font-light duration-300"
                >
                  {link.name}
                  <span className="absolute left-1/2 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </a>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hover:text-white transition-colors duration-300"
            >
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-[#0a0c10] text-white text-center py-4 space-y-4">
          {navLinks.map((link) => {
            // Don't render if it's the active link
            if (link.name.toLowerCase() === activeLink.toLowerCase()) {
              return null;
            }
            
            // Apply removing animation if this link is being removed
            const isRemoving = removingLink.toLowerCase() === link.name.toLowerCase();
            
            return (
              <li 
                key={link.name}
                className={`transition-all duration-300 ease-out ${
                  isRemoving 
                    ? 'opacity-0 scale-95 translate-y-2' 
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
              >
                <a
                  href={link.href}
                  className="block text-lg hover:text-teal-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsOpen(false);
              }}
              className="hover:text-teal-400"
            >
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
          </li>
        </ul>
      )}

     
     
    </nav>
  );
}