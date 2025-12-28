import React from "react";
import Image from "next/image";

// Ideally use the alias if your config supports it, otherwise keep your relative path
import AboutUsManNetwork from "../../src/assets/aboutusmannetwork.svg"; 

export default function InnovationSection() {
  return (
    // 1. Added 'flex justify-center' to keep the inner content centered on large screens
    <section className="w-full bg-gradient-to-r from-[#EFEB11] to-[#89870AEB] relative overflow-hidden flex justify-center">
      
      {/* 2. Added 'max-w-[1500px]' to limit the width on ultra-wide screens */}
      {/* 'items-stretch' ensures both sides match height */}
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row items-stretch">
        
        {/* --- Left Side: Text Content --- */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center p-8 lg:p-34">
          <div className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-justify">
            <p className="mb-6">
              Innovation drives everything we do. But more importantly, we
              innovate with purpose — focusing on challenges that matter to
              everyday people.
              We believe technology should be{" "}
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
        </div>

        {/* --- Right Side: Image --- */}
        <div className="w-full lg:w-1/3 relative min-h-[500px] lg:min-h-[600px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={AboutUsManNetwork}
              alt="Human network connection"
              fill
              // object-cover prevents squashing
              // object-center keeps focus in middle (or change to object-right to pin to edge)
              className="object-cover object-center rounded-tl-[100px] rounded-bl-[100px]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}