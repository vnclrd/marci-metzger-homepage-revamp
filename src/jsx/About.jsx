import { motion } from "framer-motion"

function About() {
  // Reusable slide-in variant
  const slideInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  }

  return (
    <div
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center pt-40 md:pt-0"
    >
      {/* Background layers */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#1e1e1e]" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-transparent" />

      {/* Main content box */}
      <motion.div
        className="relative w-[1000px] max-w-[95%] bg-[#303030] rounded-lg flex items-center justify-center py-10"
        style={{ minHeight: "400px" }}
        variants={slideInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the box is visible
        custom={0.2}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-[900px] w-full">
          
          {/* Image + Name */}
          <motion.div
            className="flex flex-col items-center lg:mt-5"
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
          >
            <div
              className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full lg:ml-7 bg-[url('/profile-photo-2.jpg')] bg-cover bg-center bg-no-repeat"
            ></div>
            <p className="text-white text-base ml-6 md:text-lg font-poppins font-light mt-4">
              Real Estate
            </p>
            <p className="text-white text-sm font-thin ml-6">Real Estate Agent</p>
            <p className="text-white text-sm font-thin ml-6">Realtor</p>
          </motion.div>

          {/* Text + Logos */}
          <motion.div
            className="flex flex-col md:ml-10 mt-6 md:mt-0 max-w-full md:max-w-[500px] text-center md:text-left lg:ml-15 lg:mt-5"
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
          >
            <p className="text-white text-sm md:text-[0.9rem] italic font-thin leading-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-white text-sm md:text-[1rem] font-poppins font-thin leading-6 md:leading-7 mb-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Logos */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-between items-center w-full gap-4 mb-5"
              variants={slideInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.8}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/profile-photo-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/profile-photo-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/profile-photo-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/profile-photo-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
