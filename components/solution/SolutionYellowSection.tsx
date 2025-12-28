// import React from "react";
// import Image from "next/image";
// // Import the camera asset
// import Camera from "../../src/assets/camera2.svg";

// const SolutionYellowSection = () => {
//   return (
//     // 1. Section Container
//     // z-10: Lower than the White Section (z-20) so the hand from above sits ON TOP of this yellow background.
//     // bg-gradient-to-b: Creates the vertical gradient from bright yellow to dark olive/yellow.
//     // overflow-visible: Allows the Camera image to hang down outside this box.
//     <section className="w-full relative z-0 bg-gradient-to-b from-[#EFEB11] to-[#89870AEB] py-24 lg:py-32 overflow-visible">
//       {/* 2. Content Grid */}
//       <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
//         {/* Left Side: Text Content */}
//         <div className="flex flex-col gap-8 text-black">
//           {/* First Paragraph: Bold/Medium weight */}
//           <p className="text-lg md:text-2xl leading-relaxed text-justify">
//             We build secure, intelligent, and human-centric digital systems that
//             protect mobility, strengthen communication, enhance situational
//             awareness, and simplify how people interact with technology.
//             Our work spans critical areas of digital infrastructure — securing
//             devices, enabling trusted connectivity, safeguarding communication,
//             and delivering intelligent visual insights. All of this is powered
//             by our integrated AI capabilities, designed to make technology
//             smarter, more usable, and more accessible.
//           </p>
//         </div>

//         {/* Right Side: Spacer (Empty on desktop to leave room for the absolute image, or used for layout balance) */}
//         <div className="hidden lg:block"></div>
//       </div>

//       {/* 3. Camera Image Decoration */}
//       {/* Positioned absolute bottom-right. 
//           bottom-[-15%]: Pushes it down to overlap the next section.
//       */}
//       <div className="absolute bottom-[-60%] right-0 w-[70vw] md:w-[40vw] max-w-[500px] z-20 pointer-events-none">
//         <Image
//           src={Camera}
//           alt="Security Camera"
//           className="w-full h-auto  drop-shadow-2xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default SolutionYellowSection;


import React from "react";
import Image from "next/image";
// Import the camera asset
import Camera from "../../src/assets/camera2.svg";

const SolutionYellowSection = () => {
  return (
    // 1. Section Container
    // z-10: Sits above the footer section so the camera overlaps correctly.
    <section className="w-full relative z-5 bg-gradient-to-b from-[#EFEB11] to-[#89870AEB] py-24 lg:py-32 overflow-visible">
      
      {/* 2. Content Container */}
      {/* Changed from Grid to Flex to center the text content */}
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center relative">
        
        {/* Text Wrapper */}
        <div className="flex flex-col gap-8 text-black">
          {/* Paragraph: Centered and relaxed */}
          <p className="text-justify text-lg md:text-2xl leading-relaxed font-medium">
            We build secure, intelligent, and human-centric digital systems that
            protect mobility, strengthen communication, enhance situational
            awareness, and simplify how people interact with technology. Our work spans critical areas of digital infrastructure — securing
            devices, enabling trusted connectivity, safeguarding communication,
            and delivering intelligent visual insights. All of this is powered
            by our integrated AI capabilities, designed to make technology
            smarter, more usable, and more accessible.
          </p>
        </div>

      </div>

      {/* 3. Camera Image Decoration */}
      {/* Positioned absolute bottom-right to overlap the next dark section */}
      <div className="absolute bottom-[-80%] right-0 w-[60vw] md:w-[35vw] max-w-100 z-30 pointer-events-none">
        <Image
          src={Camera}
          alt="Security Camera"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default SolutionYellowSection;