function Home() {
  return (
    <div className='w-full h-screen flex flex-col'>

        <div className='absolute w-[800px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-[#303030] z-[1000] flex'>
          <div className='w-[400px] h-[300px] bg-amber-50'></div>
          <div className='w-[400px] h-[300px] bg-[#303030]'></div>
        </div>
      
      <div className='flex items-center justify-center w-full h-[70%] relative'>
        <div 
          className='
            absolute inset-0
            bg-[url("/bg-img.jpg")] bg-cover bg-center bg-no-repeat
            contrast-90 brightness-60
          '
          style={{
            backgroundPosition: '0% 30%'
          }}
        ></div>
        
        <div className='text-center mb-[5%] drop-shadow-lg relative z-10'>
          <p className='text-white text-[1rem] font-thin mb-[-25px]'>Homes by</p>
          <p className="text-white text-[5rem] font-bold">MARCI METZGER</p>
        </div>
      </div>

      <button className='absolute border rounded-lg text-[0.9rem] pl-3 pr-3 pt-2 pb-2 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 text-[#fff] z-1000'>Contact Me</button>
      
      <div className='w-full h-[30%] bg-[#1e1e1e]'>
      </div>
    </div>
  )
}

export default Home