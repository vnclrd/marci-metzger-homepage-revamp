function Header() {

  return (
    <>
      <div
        className=
          'absolute w-[100%] h-15 z-1000'
          >
          
        <div className='
          flex h-[100%] text-center justify-center
          align-center pt-3'
          >
          <a href='#home'
            className='
              text-[1.5rem] font-bold text-[#fff]
              mr-[35%] drop-shadow-lg'
            >
            MM<span className='font-bold font-brush'>H</span>
          </a>
          
          <div
            className='
              text-[1rem] text-[#fff] font-thin
              drop-shadow-lg pt-1
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