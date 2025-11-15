import React from "react";
// --- Import Link AND useLocation from React Router ---
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  // --- Get the current location object ---
  const location = useLocation();

  const socialLinks = [
    { name: "github", url: "https://github.com/LKR1x" },
    { name: "linkedin", url: "https://www.linkedin.com/in/pasindu-inguruwaththa/" },
    { name: "behance", url: "https://www.behance.net/pasinduinguruwaththa" },
    { name: "discord", url: "https://www.discord.com/users/winterxx2" },
  ];

  // Keep the full path format here for the Link component
  const navLinks = [
    { name: "Home", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
  ];

  // <-- ADDED: Function to handle smooth scrolling for anchor links -->
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Stop the link from changing the URL hash
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // --- Conditionally render the footer ---
  // This is correct: it only shows the footer on the main page.
  if (location.pathname !== '/') {
    return null; // If not on the home page, return nothing
  }

  return (
    <>
      {/* Font Awesome (Keep as is) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <footer className="w-full px-4 py-10 pt-16 bg-zinc-900 text-zinc-300 mb-0">
        {/* Layout using Grid (Keep centering fixes) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-sm sm:text-base text-center md:text-left">

          {/* Left - Email (Keep as is) */}
          <div className="md:text-left">
             <a href="mailto:lakruwaninguruwatte002@gmail.com" className="text-white inline-flex items-center gap-2 hover:text-green-400 transition-colors duration-300" >
               Email
               <i className="fas fa-arrow-up-right-from-square text-xs mt-1"></i>
             </a>
          </div>

          {/* Center - Social Icons (Keep as is) */}
          <div className="flex w-full justify-center space-x-5">
            {socialLinks.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl transition-transform duration-300 hover:scale-125 hover:text-green-400" aria-label={platform.name} >
                <i className={`fab fa-${platform.name}`}></i>
              </a>
            ))}
          </div>

          {/* <-- MODIFIED: Right - Site Navigation --> */}
          <nav className="flex w-full justify-center md:justify-end space-x-6">
            {navLinks.map((nav, index) => {
              // Get the section ID (e.g., "about") from the link (e.g., "/#about")
              const sectionId = nav.link.split('#')[1];
              
              return (
                <a
                  key={index}
                  href={nav.link} // Keep href for semantics
                  onClick={(e) => scrollToSection(e, sectionId)} // Add onClick handler
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  {nav.name}
                </a>
              );
            })}
          </nav>
        </div>


        <div className="text-center text-xs text-zinc-500 mt-10">
          © {new Date().getFullYear()} Lakruwan – Crafted with 💚
        </div>
      </footer>
    </>
  );
};

export default Footer;