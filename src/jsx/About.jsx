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
              className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full lg:ml-7 bg-[url('/marci.jpg')] bg-cover bg-center bg-no-repeat"
            ></div>
            <p className="text-white text-base md:text-lg font-poppins font-light mt-4">
              Marci Metzger
            </p>
            <p className="text-white text-sm font-thin">Real Estate Agent</p>
            <p className="text-white text-sm font-thin">Realtor</p>
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
            <p className="text-white text-sm md:text-[0.9rem] italic font-thin leading-5 mb-5 sm:pl-10 sm:pr-10">
              "I love that small-town feeling that our community offers. Spectacular golf
              courses, parks, pool, and easy access to Las Vegas make Pahrump a great
              place to call home. Working or retired, fast-paced or looking to relax...
              there's a place for you here! I enjoy living in the Mountain Falls
              community and will strive to find you a home that will suit you just as
              this community does me."
            </p>
            <p className="text-white text-sm md:text-[1rem] font-poppins font-thin leading-6 md:leading-7 mb-6 sm:pl-10 sm:pr-10">
              Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is
              enjoying the sunshine, and helping clients in Southern Nevada. Having helped
              buyers and sellers in many markets since 1995, she is a wealth of knowledge.
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
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/logo-1.webp')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/logo-2.webp')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/logo-3.webp')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url('/logo-4.webp')] bg-cover bg-center bg-no-repeat"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
