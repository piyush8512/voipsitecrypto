import React from "react";
import Image from "next/image";

// Ideally use the alias if your config supports it, otherwise keep your relative path
import TopRightWave from "../../src/assets/abouttopright.svg";
import BottomLeftWave from "../../src/assets/abouttopbottomleft.svg";

export default function AboutHero() {
  return (
    // 1. Main Background: flex justify-center centers the inner content
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#002244] via-[#1a2030] to-[#595555] flex justify-center">
      
      {/* 2. Inner Wrapper: limits width to 1500px so content stays centered on big screens */}
      <div className="w-full max-w-[1500px] relative h-screen">

        {/* --- 1. Top Right Wave Decoration --- */}
        <div className="absolute top-0 right-0 w-[50vw] max-w-[600px] pointer-events-none opacity-60">
          <Image
            src={TopRightWave}
            alt="Decorative wave design"
            className="object-contain w-full h-auto"
            priority 
          />
        </div>

        {/* --- 2. Bottom Left Wave Decoration --- */}
        <div className="absolute bottom-0 left-0 w-[60vw] max-w-[800px] -translate-x-1/4 translate-y-1/4 pointer-events-none opacity-30">
          <Image
            src={BottomLeftWave}
            alt="Decorative wave design"
            className="object-contain w-full h-auto rotate-12"
          />
        </div>

        {/* --- 3. Main Content Container --- */}
        {/* Added px-6 for mobile padding */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 mx-auto text-center md:text-justify pt-10 md:pt-20">
          
          {/* Paragraph Text */}
          {/* text-lg on mobile, text-2xl on desktop */}
          <p className="text-white text-lg md:text-2xl leading-relaxed font-light tracking-wide max-w-4xl">
            We are a team of innovators from diverse backgrounds,
            {/* hidden md:block prevents weird line breaks on mobile */}
            <br className="hidden md:block" />
            united by a common mission: to build scalable, secure,
            <br className="hidden md:block" />
            and intelligent solutions that solve{" "}
            <span className="text-[#DCE735] font-bold">real-world problems.</span>
            <br />
            <span className="text-[#DCE735] font-bold">
              With deep expertise in AI, cybersecurity, and large-scale
              <br className="hidden md:block" />
              system design,
            </span>{" "}
            our team thrives at the intersection of
            <br className="hidden md:block" />
            technology and human impact.
          </p>
        </div>

        {/* --- 4. Giant "About Us" Footer Text --- */}
        <div className="absolute bottom-[-2%] left-0 md:left-4 z-0 leading-none select-none pointer-events-none">
          {/* Responsive Font Size: 
              - text-[15vw]: Scales with screen on mobile/tablet
              - xl:text-[200px]: Stops growing on huge screens so it stays proportional to container
          */}
          <h1 className="text-[15vw] xl:text-[200px] font-bold text-[#EFEB11] opacity-80 tracking-tighter">
            About Us
          </h1>
        </div>

      </div>
    </main>
  );
}