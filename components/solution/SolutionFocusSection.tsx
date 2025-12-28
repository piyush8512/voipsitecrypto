import React from "react";

const SolutionFocusSection = () => {
  const focusItems = [
    "Security",
    "Communication",
    "Vision",
    "Usability",
  ];

  return (
    // 1. Section Container
    // Dark gradient background matching the theme
    // z-0: Sits at the bottom of the stack
    <section className="w-full relative z-3 bg-gradient-to-b from-[#3a3f4b] via-[#1a2030] to-[#002244] py-42  px-6">
      
      {/* 2. Inner Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16">
        
        {/* Headline */}
        <h2 className="text-white text-3xl md:text-5xl font-semibold text-center leading-tight">
          We focus on creating solutions <br className="hidden md:block"/>
          that combine:
        </h2>

        {/* 3. Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {focusItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFEB11] to-[#c7c40e] rounded-xl py-6 px-4 flex justify-center items-center shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <span className="text-black text-xl md:text-2xl font-bold tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionFocusSection;