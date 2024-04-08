import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/ge-logo.png";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto mt-[76px]"
    >
      <Navbar />

      <div className="w-full flex justify-center p-2 mb-3">
        <img className="h-[200px]" src={logo} alt="" />
      </div>

      <p className="text-3xl text-center font-semibold p-2 mb-2 mt-2">
        Our Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[50px] p-4">

      <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Gallery