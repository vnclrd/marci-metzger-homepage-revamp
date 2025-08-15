function Home() {

  function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div id='home' className='w-full h-screen flex flex-col'>
        {/* Services Card */}
        <div 
          className='absolute 
            w-[90%] max-w-[800px] 
            h-auto md:h-[300px] 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 
            bg-[#303030] z-950 flex flex-col md:flex-row 
            rounded-xl overflow-hidden'
        >
          <div 
            className='w-full md:w-[450px] 
              h-auto md:h-[300px] 
              bg-amber-50 flex flex-col items-center pt-6 md:pt-10 shadow'
          >
            <h1 className='text-[#1e1e1e] text-[1.2rem] md:text-[1.5rem] font-poppins leading-7 tracking-wide font-bold text-center md:text-left'>
              TOP RESIDENTIAL SALES
            </h1>
            <p className='text-center md:text-left'>in the last 5 years</p>
            <p className='px-5 md:pl-7 md:pr-7 pt-5 text-[0.8rem] text-justify leading-5'>
              We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
              Our team works hard everyday to grow and learn, so that we may continue
              to excel in our market. Our clients deserve our best, & we want to make
              sure our best is better every year.
            </p>
            <button 
              onClick={(e) => { e.preventDefault(); scrollToServices() }} 
              className='rounded-lg mt-4 mb-[calc(1.25rem-5px)] sm:mt-5 px-3 py-2 text-[0.8rem] cursor-pointer border max-w-full break-words text-center'
            >
              Our Services
            </button>
          </div>
          <div 
            className='w-full md:w-[450px] 
              h-[200px] md:h-[300px] 
              bg-[url("/block-img.jpg")] bg-cover bg-center bg-no-repeat'
          ></div>
        </div>

        {/* Hero */}
        <div className='flex items-center justify-center w-full h-[70%] relative'>
          <div className="absolute inset-0">
            <div className="fixed inset-0 -z-10">
              <div
                className="
                  absolute inset-0
                  bg-[url('/bg-img.jpg')] bg-cover bg-center bg-no-repeat
                  contrast-90 brightness-60
                "
                style={{
                  backgroundAttachment: 'fixed',
                  backgroundPosition: '0% 30%',
                }}
              />
            </div>
          </div>
          
          <div className='text-center mb-[7%] relative z-10 px-4'>
            <p className="text-white text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-bold mb-[-15px] md:mb-[-25px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              MARCI METZGER
            </p>
            <p className='text-[#ffe8a8] text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extralight mt-[-8%] md:mt-[-12%] z-1000 font-brush drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)]'>
              Homes
            </p>

            {/* Contact Button - relative on mobile, absolute on md+ */}
            <button
              onClick={(e) => { e.preventDefault(); scrollToContact() }}
              className='
                border text-[0.8rem] md:text-[0.9rem] px-3 py-2 cursor-pointer
                text-[#fff] rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,1)]
                mt-4 lg:mt-[22.5%] md:mt-[20%]
                md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-20
              '
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className='w-full h-[15%] md:h-[30%] bg-[#1e1e1e]'></div>
      </div>
    </>
  )
}

export default Home
