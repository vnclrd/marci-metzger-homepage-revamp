function Services() {
  return (
    <>
      <div id="services" className="w-full h-screen flex items-center justify-center">
        <div className="w-[1100px] bg-[#1e1e1e] flex flex-col items-center justify-center mt-[5%] p-8 rounded-lg">
          {/* Images and Paragraphs */}
          <div className="flex justify-center gap-10 flex-wrap">
            {/* Service 1 */}
            <div className="flex flex-col items-center w-[300px]">
              <div
                className="w-full h-[200px] rounded-lg bg-[url('/service-1.webp')] bg-cover bg-center mb-[20px]"
              ></div>
              <p className="text-white font-poppins font-normal text-[1.2rem] text-center">
                Real Estate Done Right
              </p>
              <p className="text-white text-[0.8rem] font-thin text-center mt-3">
                Nervous about your property adventure? Don’t be.
                Whether you're getting ready to buy or sell your
                residence, looking at investment properties, or
                just curious about the markets, our team ensures
                you get the best experience possible!
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center w-[300px]">
              <div
                className="w-full h-[200px] rounded-lg bg-[url('/service-2.webp')] bg-cover bg-center mb-[20px]"
              ></div>
              <p className="text-white font-poppins font-normal text-[1.1rem] text-center">
                Commercial and Residential
              </p>
              <p className="text-white text-[0.8rem] font-thin text-center mt-3">
                Large or small, condo or mansion, we can find it 
                and get at the price that's right. Fixer-uppers? 
                Luxury? We can help with all of it! We live, work, 
                and play in this community. Happy to help you find 
                where to put you hard-earned dollars.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center w-[300px]">
              <div
                className="w-full h-[200px] rounded-lg bg-[url('/service-3.webp')] bg-cover bg-center mb-[20px]"
              ></div>
              <p className="text-white font-poppins font-normal text-[1.2rem] text-center">
                Rely on Expertise
              </p>
              <p className="text-white text-[0.8rem] font-thin text-center mt-3">
                If you have questions about affordability, credit,
                and loan options, trust us to connect you with the
                right people to get the answers you need in a timely
                fashion. We make sure you feel confident and educated
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
