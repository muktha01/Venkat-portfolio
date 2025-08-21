import React, { useState, useEffect, useRef } from 'react';
import { Asterisk, Download, Menu, X } from 'lucide-react';
import resume from '../assets/Venkateswara_Rao_Fullstack_Developer-2.pdf'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('');
  const [removingLink, setRemovingLink] = React.useState('');
  const [spinning, setSpinning] = React.useState(true);
  const [isSticky, setIsSticky] = React.useState(false);
  const [navHeight, setNavHeight] = React.useState(0);
  const navRef = React.useRef(null);
  
  // Fixed scroll threshold - no longer dependent on navbar position
  const SCROLL_THRESHOLD = 150;
  
  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  // Smooth scroll function with offset for sticky navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setSpinning(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100) {
            const linkName = sections[i] === 'hero' ? '' : sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
            setActiveLink(linkName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeSticky = scrollPosition > SCROLL_THRESHOLD;
      const shouldBeUnsticky = scrollPosition < (SCROLL_THRESHOLD - 50);
      
      if (shouldBeSticky && !isSticky) {
        setIsSticky(true);
      } else if (shouldBeUnsticky && isSticky) {
        setIsSticky(false);
      }
      
      lastScrollY = scrollPosition;
    };

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isSticky]);

  React.useEffect(() => {
    if (navRef.current) {
      const updateHeight = () => {
        setNavHeight(navRef.current.offsetHeight);
      };

      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(navRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (linkName, sectionId) => {
    setRemovingLink(linkName);
    setTimeout(() => {
      setRemovingLink('');
      setIsOpen(false);
      scrollToSection(sectionId);
    }, 400);
  };

  const handleLogoClick = () => {
    setActiveLink('');
    setRemovingLink('');
    setIsOpen(false);
    scrollToSection('hero');
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Smooth placeholder to prevent content jump */}
      <div
        className={`transition-all duration-700 ease-out ${isSticky ? 'block' : 'hidden'}`}
        style={{ height: isSticky ? navHeight : 0 }}
      />
      
     <nav
        ref={navRef}
        className={`w-full z-50 transition-all duration-700 ease-out will-change-transform
          ${isSticky
            ? 'fixed top-0 left-0 right-0 bg-black/30 shadow-md backdrop-blur-md'
            : 'mt-6 sm:mt-8 lg:mt-10 bg-transparent'
          }`}
        style={{
          transform: isSticky ? 'translate3d(0, 0, 0)' : 'none',
          backfaceVisibility: 'hidden',
          perspective: 1000,
        }}
      >
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
  {/* Logo */}
  <div onClick={handleLogoClick} className="cursor-pointer group">
    <div className="text-white font-semibold text-xl sm:text-2xl tracking-wider flex items-center">
      <span
        className={`inline-block mr-2 transition-all duration-700 ease-out transform
          group-hover:scale-110 group-hover:rotate-12
          text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
          ${spinning ? 'animate-spin' : ''}
        `}
        style={{
          willChange: spinning ? 'transform' : 'auto',
          backfaceVisibility: 'hidden'
        }}
      >
        <Asterisk className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
      </span>
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
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="relative group px-3 py-2 text-gray-200 hover:text-white
                      transition-all font-light duration-300 transform hover:scale-105"
                  >
                    {link.name}
                    <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r
                      from-teal-400 to-blue-400 transition-all duration-300
                      group-hover:left-0 group-hover:w-full rounded-full" />
                  </button>
                </li>
              );
            })}
            
            <li>
              <a
                href={resume}
                download="Venkateswara_Rao_Fullstack_Developer.pdf"
                className="flex items-center space-x-2 px-3 py-2 text-gray-200 hover:text-white
                  transition-all font-light duration-300 group transform hover:scale-105
                  border border-gray-600 rounded-lg hover:border-teal-400 hover:shadow-lg
                  hover:shadow-teal-400/20"
              >
                <span className="w-4 h-4">⬇</span>
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
              <span
                className={`absolute inset-0 transition-all duration-300 transform text-xl ${
                  isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              >
                ☰
              </span>
              <span
                className={`absolute inset-0 transition-all duration-300 transform text-xl ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                }`}
              >
                ✕
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-transparent border-t border-gray-700/30">
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
                    <button
                      className="block text-lg sm:text-xl hover:text-teal-400 transition-all duration-300
                        px-6 py-3 mx-4 rounded-lg hover:bg-white/5 active:scale-95 transform w-full"
                      onClick={() => handleLinkClick(link.name, link.href)}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
              
              <li className={`transition-all duration-400 ease-out transform ${
                isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center space-x-2 text-lg sm:text-xl
                    hover:text-teal-400 transition-all duration-300 px-6 py-3 mx-4 rounded-lg
                    border border-gray-600 hover:border-teal-400 hover:bg-white/5
                    active:scale-95 transform"
                  onClick={() => setIsOpen(false)}
                >
                  <span>⬇</span>
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

export default Navbar;