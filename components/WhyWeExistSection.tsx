import React from 'react';

// Define the shape of our data
interface MissionCardProps {
  number: string;
  text: string;
  offset?: boolean; // To handle the staggered layout (up/down)
}

const missionData: MissionCardProps[] = [
  {
    number: "1",
    text: "To solve problems that truly matter.",
    offset: true, // Pushed down
  },
  {
    number: "2",
    text: "To make advanced AI & cybersecurity usable for everyday people.",
    offset: false, // Pushed up (default)
  },
  {
    number: "3",
    text: "To create technology that is built with empathy & responsibility.",
    offset: true, // Pushed down
  },
  {
    number: "4",
    text: "To empower a safer, smarter, & more equitable digital future.",
    offset: false, // Pushed up (default)
  },
];

const MissionCard: React.FC<MissionCardProps> = ({ number, text, offset }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-8 shadow-xl w-full max-w-xs h-80 flex flex-col justify-center
        transform transition-transform duration-300 hover:scale-105
        ${offset ? 'lg:translate-y-12' : 'lg:-translate-y-12'}
      `}
    >
      <div className="mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-[#1e2a45] rounded-full">
          <span className="text-yellow-400 font-bold text-lg">{number}.</span>
        </div>
      </div>
      <p className="text-slate-900 text-xl font-medium leading-tight">
        {text}
      </p>
    </div>
  );
};

const CircuitDecorationSVG = () => (
  <svg
    className="absolute top-0 left-0 w-64 h-auto opacity-80"
    viewBox="0 0 300 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-10 20 H50 L80 50 H150 L180 20 H220"
      stroke="#3b82f6"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M-10 40 H40 L70 70 H120 L150 40 H250"
      stroke="#3b82f6"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M-10 60 H60 L90 90 H180"
      stroke="#3b82f6"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.5"
    />
    <circle cx="220" cy="20" r="4" fill="#3b82f6" />
    <circle cx="250" cy="40" r="4" fill="#3b82f6" />
    <circle cx="180" cy="90" r="4" fill="#3b82f6" />
  </svg>
);

const WhyWeExistSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-linear-to-b from-[#002244] via-[#1e293b] to-[#595555]  overflow-hidden flex flex-col justify-center">
      {/* Background Graphic */}
      <CircuitDecorationSVG />

      <div className="container mx-auto px-4 py-20 relative z-10">
        
        {/* Cards Grid */}
        {/* On mobile: standard grid. On Large screens: Flex row with staggered offsets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-6 lg:gap-8 mb-24 lg:mb-0">
          {missionData.map((item, index) => (
            <MissionCard
              key={index}
              number={item.number}
              text={item.text}
              offset={item.offset}
            />
          ))}
        </div>
      </div>

      {/* Footer Title */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <h1 className="text-[12vw] font-bold text-[#dce735] tracking-tighter opacity-90 select-none whitespace-nowrap translate-y-4">
          Why We Exist
        </h1>
      </div>
    </section>
  );
};

export default WhyWeExistSection;