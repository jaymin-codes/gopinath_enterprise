import React from "react";
import acp from "../images/acp-panel.jpg";
import glass_glaz from "../images/glass-glaz.jpg";
import fiber_roof from "../images/fiber-roof.jpg";
import ms_grill from "../images/ms-grill-gate.jpeg";
import shutter from "../images/shutter.jpg";
import metal_ceiling from "../images/metal-ceiling-tiles.webp";
import gate_auto from "../images/gate-automation.jpg";
import {motion} from "framer-motion"

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
     id="services" classNameName="container mx-auto p-4">
      <p className="text-3xl text-center font-semibold p-2 mt-3">
        Our Services
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center">
        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:m-3 m-5  bg-white border shadow-sm rounded-xl w-[275px] md:w-[290px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={acp}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              ACP Work
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We are known for expertly installing ACP panels, adding a modern
              and durable touch to buildings.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5  bg-white border shadow-sm rounded-xl w-[275px]  md:w-[290px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={glass_glaz}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Glass Glazing
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We excel in glass glazing, offering sleek installations that
              enhance spaces with both style and functionality.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5 bg-white border shadow-sm rounded-xl w-[275px] md:w-[290px]  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={fiber_roof}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Fiber Sheet Roofing
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We specialize in fiber sheet roofing, providing durable and
              cost-effective solutions for long-lasting protection.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5 bg-white border shadow-sm rounded-xl w-[275px] md:w-[290px]  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={ms_grill}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              MS Grills and Gate
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We specialize in crafting high-quality M.S. grills and gates,
              ensuring security solutions with a touch of elegance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5 bg-white border shadow-sm rounded-xl w-[275px]  md:w-[290px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={shutter}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Rolling Shutters
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We offer expertly crafted rolling shutters, providing reliable
              security solutions tailored to your needs.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5 bg-white border shadow-sm rounded-xl w-[275px] md:w-[290px]  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={metal_ceiling}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Metal Panel Ceilings
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We specialize in metal panel ceilings, offering durable and
              stylish solutions to enhance the interior spaces.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="flex flex-col md:m-3 m-5 bg-white border shadow-sm rounded-xl w-[275px] md:w-[290px]  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-[182px] rounded-t-xl"
            src={gate_auto}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Gate Automation
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 hidden md:block">
              We provide gate automation systems, ensuring security and
              convenience for residential and commercial spaces.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;
