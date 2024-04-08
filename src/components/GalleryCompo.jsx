import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function GalleryCompo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto p-4"
    >
      <p id="projects" className="text-3xl text-center font-semibold p-2 mb-4">
        Our Projects
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </motion.div>
        </Link>

        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </motion.div>
        </Link>

        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </motion.div>
        </Link>

        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </motion.div>
        </Link>

        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg hidden md:block"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </motion.div>
        </Link>

        <Link to="/gallery">
          <motion.div
            initial={{ opacity: 0, translateY: -80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-auto max-w-full rounded-lg hidden md:block"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default GalleryCompo;
