// src/components/sections/CollaborationSection.tsx
import React from "react";
import Image from "next/image";

// Ensure this file exists in your assets folder
import AboutHandshake from "../../src/assets/abouthandshake.svg"; 

export default function CollaborationSection() {
  return (
    // 1. 'flex justify-center' centers the inner container on huge screens
    <section className="w-full bg-white relative overflow-hidden flex justify-center">
      
      {/* 2. Added 'max-w-[1500px]' 
          - This stops the content from stretching too far on ultra-wide screens.
          - The content will stay centered in the middle of the white background.
      */}
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row items-stretch">
        
        {/* --- Left Side: Image --- */}
        <div className="w-full lg:w-1/3 relative min-h-[500px] lg:min-h-[600px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={AboutHandshake}
              alt="Collaboration and handshake"
              fill
              // Pins image to the left of the CONTAINER, not the screen edge
              className="object-cover object-left rounded-tr-[100px] rounded-br-[100px]"
            />
          </div>
        </div>

        {/* --- Right Side: Text Content --- */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center p-8 lg:p-34">
          <div className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-justify">
            <p className="mb-6">
              We are equally committed to openness and collaboration. We believe 
              progress accelerates when we build together.
              Our ecosystem stays connected with the developer community, 
              encouraging shared learning, transparency, and co-creation.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}