function About() {
  return (
    <>
      <div id="about" className="relative w-full min-h-screen">
        {/* Background layers */}
        <div className="absolute top-0 left-0 w-full h-[70%] bg-[#1e1e1e]" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-transparent" />

        <div className='absolute w-[1000px] h-[400px] bg-[#303030] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {/* Content container inside the top part */}
          <div className="absolute top-0 left-0 w-full h-[70%] flex items-center justify-center z-10">
            <div className="flex flex-row items-start gap-10 max-w-[900px] px-4">
              {/* Image + Name */}
              <div className="flex flex-col items-center mt-[15%]">
                <div
                  className="
                    w-[250px] h-[250px] rounded-full
                    bg-[url('/marci.jpg')] bg-cover bg-center bg-no-repeat
                  "
                ></div>
                <p className="text-white text-lg font-poppins font-light mt-4">
                  Marci Metzger
                </p>
                <p className="text-white text-sm font-thin">
                  Realtor
                </p>
              </div>

              {/* Paragraphs */}
              <div className="flex flex-col ml-10 mt-[20%] max-w-[500px]">
                <p className="text-white text-[0.75rem] italic font-thin leading-5 mb-4">
                  "I love that small-town feeling that our community offers. Spectacular golf
                  courses, parks, pool, and easy access to Las Vegas make Pahrump a great
                  place to call home. Working or retired, fast-paced or looking to relax...
                  there's a place for you here! I enjoy living in the Mountain Falls
                  community and will strive to find you a home that will suit you just as
                  this community does me."
                </p>
                <p className="text-white text-[1rem] font-poppins font-thin leading-7">
                  Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is
                  enjoying the sunshine, and helping clients in Southern Nevada. Having helped
                  buyers and sellers in many markets since 1995, she is a wealth of knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
