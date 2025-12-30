"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutHandshake from "../../src/assets/abouthandshake.svg";

export default function CollaborationSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden flex justify-center">
      <div className="w-full max-w-480 flex flex-col lg:flex-row items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 relative p-6 aspect-square lg:p-0 lg:aspect-auto lg:h-auto lg:min-h-150"
        >
          <div className="relative w-full h-full">
            <Image
              src={AboutHandshake}
              alt="Collaboration and handshake"
              fill
              className="object-cover object-center lg:object-left 
              rounded-3xl lg:rounded-none lg:rounded-tr-[100px] lg:rounded-br-[100px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 flex flex-col justify-center px-6 py-8 md:py-12 lg:p-24 xl:p-32"
        >
          <div className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-justify hyphens-auto">
            <p className="mb-6">
              We are equally committed to openness and collaboration. We believe
              progress accelerates when we build together. Our ecosystem stays
              connected with the developer community, encouraging shared
              learning, transparency, and co-creation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
