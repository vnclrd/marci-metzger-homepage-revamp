import { motion } from "framer-motion"

function Home() {

  function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  // Slide-in variant for foreground elements
  const slideInVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  }

  const slideUpVariant = {
  hidden: { opacity: 0, y: 50 }, // start 50px below
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0, // move to original position
    transition: { duration: 0.6, delay }
  })
}

  // Fade-in variant for background
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 } // slower fade
    }
  }

  return (
    <div id='home' className='w-full h-screen flex flex-col'>

      {/* Background with fade-in */}
      <motion.div
        className="absolute inset-0"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0 bg-[url('/bg-img.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-60"
            style={{
              backgroundAttachment: window.innerWidth >= 640 ? 'fixed' : 'scroll', // sm breakpoint = 640px
              backgroundPosition: '0% 30%',
            }}
          />
        </div>
      </motion.div>

      {/* Services Card */}
      <motion.div
        className='absolute w-[90%] max-w-[800px] h-auto md:h-[300px] 
                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 
                   bg-[#303030] z-950 flex flex-col md:flex-row 
                   rounded-xl overflow-hidden'
        variants={slideInVariant}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        {/* Card Left */}
        <motion.div
          className='w-full md:w-[450px] h-auto md:h-[300px] 
                     bg-amber-50 flex flex-col items-center pt-6 md:pt-10 shadow'
          variants={slideInVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <h1 className='text-[#1e1e1e] text-[1.2rem] md:text-[1.5rem] font-poppins leading-7 tracking-wide font-bold text-center md:text-left'>
            TOP RESIDENTIAL SALES
          </h1>
          <p className='text-center md:text-left'>in the last 5 years</p>
          <p className='px-5 md:pl-7 md:pr-7 pt-5 text-[0.8rem] text-justify leading-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button 
            onClick={(e) => { e.preventDefault(); scrollToServices() }} 
            className='rounded-lg mt-4 mb-[calc(1.25rem-5px)] sm:mt-5 px-3 py-2 text-[0.8rem] cursor-pointer border max-w-full break-words text-center'
          >
            Our Services
          </button>
        </motion.div>

        {/* Card Right */}
        <motion.div
          className='w-full md:w-[450px] h-[200px] md:h-[300px]  
                     bg-[url("/block-img.jpg")] bg-cover bg-center bg-no-repeat'
          variants={slideInVariant}
          initial="hidden"
          animate="visible"
          custom={0.6}
        />
      </motion.div>

      {/* Hero */}
      <motion.div
        className='flex items-center justify-center w-full h-[70%] relative'
        variants={slideInVariant}
        initial="hidden"
        animate="visible"
        custom={0.8}
      >
        <div className='text-center mb-[7%] relative z-10 px-4'>
          <motion.p
            className="text-white text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-bold mb-[-15px] md:mb-[-25px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={1.0}
          >
            REAL ESTATE
          </motion.p>

          <motion.p
            className='text-[#ffe8a8] text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extralight mt-[-8%] md:mt-[-12%] z-1000 font-brush drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)]'
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={1.2}
          >
            Homepage
          </motion.p>

          {/* Contact Button */}
          <motion.button
            onClick={(e) => { e.preventDefault(); scrollToContact() }}
            className='
              border text-[0.8rem] md:text-[0.9rem] px-3 py-2 cursor-pointer
              text-[#fff] rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
              mt-4 lg:mt-[27.5%] md:mt-[20%] mb-5
              md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-20
            '
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={1.4}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom Spacer */}
      <motion.div
        className='w-full h-[15%] md:h-[30%] bg-[#1e1e1e]      '
        variants={slideUpVariant}
        initial="hidden"
        animate="visible"
        custom={1.6}
      />
    </div>
  )
}

export default Home
