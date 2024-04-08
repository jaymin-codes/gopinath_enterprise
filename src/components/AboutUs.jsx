import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 80 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.2 }}
      id="about"
      className="container mx-auto"
    >
      <div className="bg-[#e9e9e9] text-xl text-justify p-4 pt-4">
        <p className="text-3xl text-center font-semibold p-2 mb-2">About Us</p>
        <p className="">
          Gopinath Enterprise is a leading provider of a diverse range of
          fabrication solutions <b>since last 51 years</b>, catering to various needs and industries. With
          a strong commitment to quality and innovation, we specialize in
          crafting precision-engineered products that exceed expectations. We
          pride ourselves on our ability to deliver bespoke solutions tailored
          to our clients' specific requirements, ensuring both functionality and
          aesthetic appeal.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutUs;
