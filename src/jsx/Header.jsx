import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowTopButton(window.scrollY > 300); // show scroll-to-top after 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }

  // Framer Motion variants for scroll-to-top button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        className={`
          fixed w-full h-15 z-1000 border-b
          transition-colors duration-500 ease-in-out
          ${scrolled
            ? 'bg-[#1e1e1e] shadow-lg border-transparent'
            : 'bg-transparent border-transparent'
          }
        `}
      >
        <div className="flex h-full items-center justify-between px-6 md:px-12">
          <a
            href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className={`
              text-[1.5rem] font-bold drop-shadow-lg
              transition-all duration-500 ease-in-out
              ${scrolled ? 'pt-0' : 'pt-4'}
              text-white
            `}
          >
            RE<span className="font-bold font-brush">WH</span>
          </a>

          {/* Desktop Menu */}
          <div
            className={`
              hidden md:flex text-[1rem] font-thin drop-shadow-lg
              transition-all duration-500 ease-in-out
              ${scrolled ? 'pt-0' : 'pt-4'}
              text-white
            `}
          >
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="p-4">About</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="p-4">Gallery</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="p-4">Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="p-4">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl z-20">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed top-0 left-0 w-full h-full bg-[#1e1e1e] transform transition-transform duration-300 ease-in-out z-10
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-poppins">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#ffe8a8] text-[#1e1e1e] p-3 rounded-full shadow-lg z-50 cursor-pointer"
        variants={buttonVariants}
        initial="hidden"
        animate={showTopButton ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
}

export default Header;
