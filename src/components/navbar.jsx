import { useState, useEffect, useRef } from 'react';
import { Asterisk, Download, Menu, X } from 'lucide-react';
import resume from '../assets/Venkateswara_Rao_Fullstack_Developer-2.pdf'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [removingLink, setRemovingLink] = useState('');
  const [spinning, setSpinning] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setSpinning(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = navLinks.find(link => link.href === currentPath);
    setActiveLink(currentLink ? currentLink.name : '');
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      const currentLink = navLinks.find(link => link.href === currentPath);
      setActiveLink(currentLink ? currentLink.name : '');
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = navRef.current ? navRef.current.offsetTop : 50;

      if (scrollPosition > stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const updateHeight = () => {
        setNavHeight(navRef.current.offsetHeight);
      };
      
      // Use ResizeObserver for more accurate height tracking
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(navRef.current);
      
      return () => resizeObserver.disconnect();
    }
  }, [isSticky]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (linkName, href) => {
    setRemovingLink(linkName);
    setTimeout(() => {
      setRemovingLink('');
      setIsOpen(false);
      window.location.href = href;
    }, 400);
  };

  const handleLogoClick = () => {
    setActiveLink('');
    setRemovingLink('');
    setIsOpen(false);
    window.location.href = '/';
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Smooth placeholder to prevent content jump */}
      <div 
        className={`transition-all duration-500 ease-out ${isSticky ? 'block' : 'hidden'}`}
        style={{ height: isSticky ? navHeight : 0 }} 
      />

      <nav
        ref={navRef}
        className={`w-full z-50 transition-all duration-500 ease-out transform
                    ${isSticky
                      ? 'fixed top-0 left-0 right-0  backdrop-blur-xs bg-slate  translate-y-0'
                      : 'mt-6 sm:mt-8 lg:mt-10 bg-transparent translate-y-0'
                    }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div onClick={handleLogoClick} className="cursor-pointer group">
            <div className="text-white font-semibold text-xl sm:text-2xl tracking-wider flex items-center">
              <Asterisk
                size={isSticky ? 50 : 60}
                className={`inline-block mr-2 transition-all duration-500 ease-out transform
                           group-hover:scale-110 group-hover:rotate-12
                           ${spinning ? 'animate-spin' : ''} 
                           sm:w-16 sm:h-16 lg:w-20 lg:h-20`}
              />
         </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base tracking-wide text-gray-200">
            {navLinks.map((link) => {
              if (link.name.toLowerCase() === activeLink.toLowerCase()) return null;
              const isRemoving = removingLink.toLowerCase() === link.name.toLowerCase();
              return (
                <li
                  key={link.name}
                  className={`transition-all duration-400 ease-out transform ${
                    isRemoving 
                      ? 'opacity-0 scale-95 translate-x-4 rotate-3' 
                      : 'opacity-100 scale-100 translate-x-0 rotate-0'
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.name, link.href); }}
                    className="relative group px-3 py-2 text-gray-200 hover:text-white 
                              transition-all font-light duration-300 transform hover:scale-105"
                  >
                    {link.name}
                    <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r 
                                   from-teal-400 to-blue-400 transition-all duration-300 
                                   group-hover:left-0 group-hover:w-full rounded-full" />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-gray-200 hover:text-white 
                          transition-all font-light duration-300 group transform hover:scale-105
                          border border-gray-600 rounded-lg hover:border-teal-400 hover:shadow-lg
                          hover:shadow-teal-400/20"
              >
                <Download size={16} className="transition-all duration-300 group-hover:rotate-12" />
                <span>Resume</span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg transition-all duration-300 
                      hover:bg-white/10 hover:scale-110 active:scale-95"
            onClick={toggleMobileMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${isSticky ? 'bg-slate backdrop-blur-md' : 'bg-slate backdrop-blur-sm'} 
                          border-t border-gray-700/50`}>
            <ul className="text-white text-center py-6 space-y-4">
              {navLinks.map((link, index) => {
                if (link.name.toLowerCase() === activeLink.toLowerCase()) return null;
                const isRemoving = removingLink.toLowerCase() === link.name.toLowerCase();
                return (
                  <li
                    key={link.name}
                    className={`transition-all duration-400 ease-out transform ${
                      isRemoving 
                        ? 'opacity-0 scale-95 translate-y-4' 
                        : 'opacity-100 scale-100 translate-y-0'
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <a
                      href={link.href}
                      className="block text-lg sm:text-xl hover:text-teal-400 transition-all duration-300
                                px-6 py-3 mx-4 rounded-lg hover:bg-white/5 active:scale-95 transform"
                      onClick={(e) => { e.preventDefault(); handleLinkClick(link.name, link.href); }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li className={`transition-all duration-400 ease-out transform ${
                isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 text-lg sm:text-xl 
                            hover:text-teal-400 transition-all duration-300 px-6 py-3 mx-4 rounded-lg 
                            border border-gray-600 hover:border-teal-400 hover:bg-white/5 
                            active:scale-95 transform"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} className="transition-transform duration-300 hover:rotate-12" />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}