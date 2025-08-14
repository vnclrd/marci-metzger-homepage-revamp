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
          href="#home"
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
          <a href="#about" className="p-4">About</a>
          <a href="#gallery" className="p-4">Gallery</a>
          <a href="#services" className="p-4">Services</a>
          <a href="#contact" className="p-4">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
