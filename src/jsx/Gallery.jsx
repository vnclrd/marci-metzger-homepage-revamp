import { motion } from "framer-motion";

function Gallery() {
  return (
    <>
      <div
        id="gallery"
        className="w-full min-h-screen bg-[#1e1e1e] flex justify-center px-4 py-10"
      >
        <motion.div
          className="
            grid gap-6 mt-[5%]
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Photo items */}
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-1.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-2.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-3.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-4.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-5.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
          <div className="w-[400px] max-w-full h-[250px] rounded-lg bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat contrast-90 brightness-80"></div>
        </motion.div>
      </div>
    </>
  );
}

export default Gallery;
