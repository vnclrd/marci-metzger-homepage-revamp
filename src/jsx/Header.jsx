import { useState, useEffect } from 'react';

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`
          absolute w-[100%] h-15 z-1000
          
          ${scrolled 
            ? 'max-[1199px]:shadow-lg max-[1199px]:transition-shadow max-[1199px]:duration-500 max-[1199px]:ease-in-out min-[1200px]:border-[#e0e0e0]' 
            : 'min-[1200px]:border-transparent'
          }
        `}
      >
          
        <div className='
          flex h-[100%] text-center justify-center
          align-center pt-3'
          >
          <a href='#home'
            className='
              text-[1.5rem] font-bold text-[#fff]
              mr-[35%] drop-shadow-lg pt-2.5'
            >
            MM<span className='font-bold font-brush'>H</span>
          </a>
          
          <div
            className='
              text-[1rem] text-[#fff] font-thin
              drop-shadow-lg pt-4
              '
            >
            <a href="#about" className='p-4'>About</a>
            <a href="#gallery" className='p-4'>Gallery</a>
            <a href="#services" className='p-4'>Services</a>
            <a href="#contact" className='p-4'>Contact</a>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Header