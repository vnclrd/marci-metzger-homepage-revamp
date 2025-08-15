import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false);
  }

  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false);
  }

  function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false);
  }

  function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false);
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false);
  }

  return (
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
          href="#home" onClick={(e) => { e.preventDefault(); scrollToHome() }}
          className={`
            text-[1.5rem] font-bold drop-shadow-lg
            transition-all duration-500 ease-in-out
            ${scrolled ? 'pt-0' : 'pt-4'}
            text-white
          `}
        >
          MM<span className="font-bold font-brush">H</span>
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
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout() }} className="p-4">About</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToGallery() }} className="p-4">Gallery</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices() }} className="p-4">Services</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact() }} className="p-4">Contact</a>
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
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout() }}>About</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToGallery() }}>Gallery</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices() }}>Services</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact() }}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;