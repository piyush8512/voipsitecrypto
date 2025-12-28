import React from "react";

interface HexMeshProps {
  className?: string;
  position?: "left" | "right";
}

const HexMeshBackground: React.FC<HexMeshProps> = ({
  className = "",
  position = "left",
}) => {
  const transformClass = position === "right" ? "scale-x-[-1]" : "";

  return (
    // Added 'group' here so children can react to hover state
    // Added 'pointer-events-auto' so the mouse can actually trigger the hover
    <div
      className={`absolute ${className} pointer-events-auto overflow-hidden z-0 group`}
    >
      <svg
        className={`w-full h-full opacity-200 ${transformClass}`}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Increased scale from 1.3 to 1.5 for larger internal size */}
        <g
          style={{
            transform: "scale(1.5)",
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >
          {/* --- MESH LINES --- */}
          {/* Added transition classes for the hover effect */}
          <g
            className="transition-all duration-500 ease-in-out stroke-gray-600 group-hover:stroke-blue-500 group-hover:opacity-100"
            strokeWidth="1.5"
            opacity="0.4" // Base opacity
          >
            <path d="M250,0 V100" />
            <path d="M250,100 L207,125" />
            <path d="M250,100 L293,125" />
            <path d="M207,125 V175 L250,200 L293,175 V125 L250,100 L207,125 Z" />
            <path d="M293,125 L336,100 V50" />
            <path d="M293,175 L336,200 V250 L293,275" />
            <path d="M336,200 L379,175 V125" />
            <path d="M379,175 L422,200" />
            <path d="M207,125 L164,100 V50" />
            <path d="M164,100 L121,125 V175" />
            <path d="M207,175 L164,200 V250 L207,275" />
            <path d="M164,200 L121,175 L78,200 V250" />
            <path d="M121,175 V125 L78,100" />
            
            
          </g>

          {/* --- DOTS --- */}
          {/* Dots turn white and glow on hover */}
          <g
            className="transition-all duration-500 fill-slate-400 group-hover:fill-white"
            opacity="0.8"
          >
            <circle cx="250" cy="100" r="3" />
            <circle cx="207" cy="125" r="3" />
            <circle cx="293" cy="125" r="3" />
            <circle cx="207" cy="175" r="3" />
            <circle cx="293" cy="175" r="3" />
            <circle cx="250" cy="200" r="3" />
            <circle cx="164" cy="100" r="3" />
            <circle cx="336" cy="100" r="3" />
            <circle cx="336" cy="200" r="3" />
            <circle cx="164" cy="200" r="3" />
            <circle cx="121" cy="175" r="3" />
            <circle cx="422" cy="200" r="3" />
            <circle cx="78" cy="200" r="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HexMeshBackground;
