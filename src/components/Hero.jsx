import React from "react";
import logo from "../images/ge-logo.png";
import heroBG from "../images/hero-bg.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="container bg-heroBG w-full h-[500px] flex justify-center mx-auto mt-[60px]"
      style={{
        backgroundImage: `url(${heroBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 backdrop-filter backdrop-brightness-75"></div>
      <div className="flex flex-col items-center pt-[40px] md:pt-[80px]">
        <div className="relative z-10 p-2 mb-5">
          <img src={logo} alt="" className="h-[150px] md:h-[200px]" />
        </div>
        <div className="relative z-10 pt-[40px] md:pt-4 md:text-5xl text-4xl text-[#2ECC40] font-bold">
          Gopinath Enterprise
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
