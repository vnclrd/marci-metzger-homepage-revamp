import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
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
      <div className="flex h-full text-center justify-center items-center pt-3">
        <a
          href="#home" onClick={(e) => { e.preventDefault(); scrollToHome() }}
          className={`
            text-[1.5rem] font-bold drop-shadow-lg
            transition-all duration-500 ease-in-out
            ${scrolled ? 'pt-0 mt-[-5px]' : 'pt-4'}
            text-white
          `}
        >
          MM<span className="font-bold font-brush">H</span>
        </a>

        <div
          className={`
            text-[1rem] font-thin drop-shadow-lg pl-[50%]
            transition-all duration-500 ease-in-out
            ${scrolled ? 'pt-0 mt-[-9px]' : 'pt-4'}
            text-white
          `}
        >
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout() }} className="p-4">About</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToGallery() }} className="p-4">Gallery</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices() }} className="p-4">Services</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact() }} className="p-4">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
