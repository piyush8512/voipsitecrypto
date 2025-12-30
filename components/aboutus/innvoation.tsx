"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutUsManNetwork from "../../src/assets/aboutusmannetwork.svg";

export default function InnovationSection() {
  return (
    <section className="w-full bg-linear-to-r from-[#EFEB11] to-[#89870AEB] relative overflow-hidden flex justify-center">
      <div className="w-full max-w-480 flex flex-col-reverse lg:flex-row items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 flex flex-col justify-center px-6 py-8 md:py-12 lg:p-24 xl:p-32"
        >
          <div className="text-black text-lg sm:text-xl md:text-2xl  font-medium text-justify hyphens-auto">
            <p className="mb-6">
              Innovation drives everything we do. But more importantly, we
              innovate with purpose — focusing on challenges that matter to
              everyday people. We believe technology should be{" "}
              <span className="text-white font-bold">
                practical, understandable, and usable, not overwhelming.
              </span>{" "}
              That's why we approach every problem from a{" "}
              <span className="text-white font-bold">
                common man's perspective,
              </span>{" "}
              ensuring our solutions create real, measurable value in the real
              world.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 relative p-6 aspect-square lg:p-0 lg:aspect-auto lg:h-auto lg:min-h-150"
        >
          <div className="relative w-full h-full">
            <Image
              src={AboutUsManNetwork}
              alt="Human network connection"
              fill
              className="object-cover object-center lg:object-left 
              rounded-3xl lg:rounded-none lg:rounded-tl-[100px] lg:rounded-bl-[100px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
