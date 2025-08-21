import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full min-h-screen flex items-center justify-center px-6 py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start slightly below
          whileInView={{ opacity: 1, y: 0 }} // fade + slide up
          viewport={{ once: true }} // only animate once
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-10 backdrop-blur-lg bg-[#1e1e1e] p-8 rounded-lg shadow-lg mt-[5%] max-w-[900px] w-full"
        >
          {/* Left side - Contact Form */}
          <div className="flex-1">
            <h1 className="text-center text-white font-poppins text-[1.5rem]">Contact Us!</h1>
            <form className="flex flex-col gap-4 mt-8">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none w-full"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-[#1e1e1e] py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition w-full"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className="flex-1 text-white font-poppins">
            <h2 className="text-[1.2rem] font-bold mb-3">
              Real Estate - REAL ESTATE WEBSITE HOMEPAGE
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <p className="mb-4">
              <span className="font-semibold">Phone:</span> (111) 111-1111
            </p>

            <div className="mb-4">
              <h3 className="font-semibold">Office Hours</h3>
              <p>Open today</p>
              <p>08:00 am – 07:00 pm</p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-semibold">Open daily:</span> 8:00 am - 7:00 pm
              </p>
              <p className="mt-2 italic text-sm">
                Appointments outside office hours available upon request. Just call!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
