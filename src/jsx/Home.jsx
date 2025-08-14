function Home() {
  return (
    <>
      <div id='home' className='w-full h-screen flex flex-col'>
        <div className='absolute w-[900px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-[#303030] z-950 flex'>
          <div className='w-[450px] h-[300px] bg-amber-50 flex flex-col items-center pt-10 shadow'>
            <h1 className='text-[#1e1e1e] text-[1.5rem] font-poppins leading-7 tracking-wide font-bold'>TOP RESIDENTIAL SALES</h1>
            <p>in the last 5 years</p>
            <p className='pl-7 pr-7 pt-5 text-[0.8rem] text-justify leading-5'>
              We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
              Our team works hard everyday to grow and learn, so that we may continue
              to excel in our market. Our clients deserve our best, & we want to make
              sure our best is better every year.
            </p>
            <button className='mt-7 pl-2 pr-2 pt-2 pb-2 text-[0.8rem] cursor-pointer border'>
              Check our Services
            </button>
          </div>
          <div className='w-[450px] h-[300px] bg-[url("/block-img.jpg")] bg-cover bg-center bg-no-repeat'></div>
        </div>
        
        <div className='flex items-center justify-center w-full h-[70%] relative'>
          <div className="absolute inset-0">
            <div 
              className='
                absolute inset-0
                bg-[url("/bg-img.jpg")] bg-cover bg-center bg-no-repeat
                contrast-90 brightness-60
              '
              style={{
                backgroundPosition: '0% 30%'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 80%, #947741 110%)'
              }}
            />
          </div>
          
          <div className='text-center mb-[7.5%] drop-shadow-lg relative z-10'>
            <p className="text-white text-[5rem] font-bold mb-[-25px]">MARCI METZGER</p>
            <p className='text-white text-[2rem] font-brush'>Homes</p>
          </div>
        </div>

        <button className='absolute shadow border text-[0.9rem] pl-3 pr-3 pt-2 pb-2 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 text-[#fff]'>Contact Me</button>
        
        <div className='w-full h-[30%] bg-[#1e1e1e]'>
        </div>
      </div>
    </>
    
  )
}

export default Home