// 'use client';
// import { useState } from "react";

// interface HexagonPatternProps {
//   side: "left" | "right";
// }

// const HexagonPattern = ({ side }: HexagonPatternProps) => {
//   const isLeft = side === "left";
//   const [hoveredHex, setHoveredHex] = useState<number | null>(null);

//   const hexagonsRight = [
//     { id: 1, points: "280,-20 320,5 320,55 280,80 240,55 240,5", cx: 280, cy: 30 },
//     { id: 2, points: "360,30 400,55 400,105 360,130 320,105 320,55", cx: 360, cy: 80 },
//     { id: 3, points: "200,30 240,55 240,105 200,130 160,105 160,55", cx: 200, cy: 80 },
//     { id: 4, points: "280,80 320,105 320,155 280,180 240,155 240,105", cx: 280, cy: 130 },
//     { id: 5, points: "360,130 400,155 400,205 360,230 320,205 320,155", cx: 360, cy: 180 },
//     { id: 6, points: "200,130 240,155 240,205 200,230 160,205 160,155", cx: 200, cy: 180 },
//     { id: 7, points: "280,180 320,205 320,255 280,280 240,255 240,205", cx: 280, cy: 230 },
//     { id: 8, points: "360,230 400,255 400,305 360,330 320,305 320,255", cx: 360, cy: 280 },
//     { id: 9, points: "280,280 320,305 320,355 280,380 240,355 240,305", cx: 280, cy: 330 },
//     { id: 10, points: "360,330 400,355 400,405 360,430 320,405 320,355", cx: 360, cy: 380 },
//     { id: 11, points: "280,380 320,405 320,455 280,480 240,455 240,405", cx: 280, cy: 430 },
//   ];

//   const hexagonsLeft = [
//     { id: 101, points: "90,120 130,145 130,195 90,220 50,195 50,145", cx: 90, cy: 170 },
//     { id: 102, points: "170,170 210,195 210,245 170,270 130,245 130,195", cx: 170, cy: 220 },
//     { id: 103, points: "90,220 130,245 130,295 90,320 50,295 50,245", cx: 90, cy: 270 },
//     { id: 104, points: "170,270 210,295 210,345 170,370 130,345 130,295", cx: 170, cy: 320 },
//     { id: 105, points: "250,320 290,345 290,395 250,420 210,395 210,345", cx: 250, cy: 370 },
//     { id: 106, points: "90,320 130,345 130,395 90,420 50,395 50,345", cx: 90, cy: 370 },
//     { id: 107, points: "170,370 210,395 210,445 170,470 130,445 130,395", cx: 170, cy: 420 },
//     { id: 108, points: "250,420 290,445 290,495 250,520 210,495 210,445", cx: 250, cy: 470 },
//     { id: 109, points: "90,420 130,445 130,495 90,520 50,495 50,445", cx: 90, cy: 470 },
//     { id: 110, points: "170,470 210,495 210,545 170,570 130,545 130,495", cx: 170, cy: 520 },
//   ];

//   const renderHexagons = (hexagons: typeof hexagonsRight, idPrefix: string) => (
//     <>
//       <defs>
//         <linearGradient id={`honeycombGradient-${idPrefix}`} x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="hsl(200 30% 50%)" stopOpacity="0.5" />
//           <stop offset="100%" stopColor="hsl(200 30% 40%)" stopOpacity="0.3" />
//         </linearGradient>
//         <linearGradient id={`honeycombHover-${idPrefix}`} x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="hsl(66 76% 59%)" stopOpacity="0.9" />
//           <stop offset="100%" stopColor="hsl(66 76% 50%)" stopOpacity="0.7" />
//         </linearGradient>
//         <filter id={`glow-${idPrefix}`} x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//         <filter id={`strongGlow-${idPrefix}`} x="-100%" y="-100%" width="300%" height="300%">
//           <feGaussianBlur stdDeviation="8" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//       </defs>

//       <g>
//         {hexagons.map((hex) => (
//           <g key={hex.id}>
//             {hoveredHex === hex.id && (
//               <polygon
//                 points={hex.points}
//                 fill="hsl(66 76% 59%)"
//                 fillOpacity="0.15"
//                 stroke="hsl(66 76% 59%)"
//                 strokeWidth="2"
//                 filter={`url(#strongGlow-${idPrefix})`}
//                 className="animate-pulse"
//               />
//             )}
//             <polygon
//               points={hex.points}
//               stroke={hoveredHex === hex.id ? `url(#honeycombHover-${idPrefix})` : `url(#honeycombGradient-${idPrefix})`}
//               strokeWidth={hoveredHex === hex.id ? "2.5" : "1.5"}
//               fill={hoveredHex === hex.id ? "hsl(66 76% 59% / 0.1)" : "transparent"}
//               filter={hoveredHex === hex.id ? `url(#glow-${idPrefix})` : "none"}
//               onMouseEnter={() => setHoveredHex(hex.id)}
//               onMouseLeave={() => setHoveredHex(null)}
//               className="cursor-pointer transition-all duration-300"
//               style={{
//                 transform: hoveredHex === hex.id ? `scale(1.05)` : "scale(1)",
//                 transformOrigin: `${hex.cx}px ${hex.cy}px`,
//               }}
//             />
//           </g>
//         ))}
//       </g>
//     </>
//   );

//   if (isLeft) {
//     return (
//       <div
//         className="absolute left-0 bottom-0 w-72 lg:w-[380px] h-[450px] lg:h-[550px] pointer-events-auto overflow-visible animate-slide-in-left"
//         style={{ animationDelay: "0.3s", opacity: 0 }}
//       >
//         <svg
//           viewBox="0 0 350 600"
//           className="w-full h-full"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {renderHexagons(hexagonsLeft, "left")}

//           {/* Connection lines for left side */}
//           <g stroke="url(#honeycombGradient-left)" strokeWidth="1.5" fill="none">
//             <line x1="50" y1="145" x2="10" y2="120" strokeOpacity="0.4" />
//             <line x1="50" y1="245" x2="0" y2="230" strokeOpacity="0.3" />
//             <line x1="50" y1="345" x2="10" y2="360" strokeOpacity="0.4" />
//             <line x1="50" y1="445" x2="0" y2="470" strokeOpacity="0.4" />
//             <line x1="130" y1="545" x2="100" y2="590" strokeOpacity="0.4" />
//             <line x1="210" y1="545" x2="230" y2="590" strokeOpacity="0.3" />
//             <line x1="290" y1="345" x2="330" y2="320" strokeOpacity="0.4" />
//             <line x1="290" y1="445" x2="340" y2="430" strokeOpacity="0.3" />
//             <line x1="290" y1="495" x2="330" y2="530" strokeOpacity="0.4" />
//           </g>

//           {/* Node dots for left side */}
//           <g fill="hsl(0 0% 85%)" fillOpacity="0.8">
//             <circle cx="10" cy="120" r="3" className="animate-pulse" />
//             <circle cx="0" cy="230" r="2.5" />
//             <circle cx="10" cy="360" r="3" />
//             <circle cx="0" cy="470" r="3" className="animate-pulse" />
//             <circle cx="100" cy="590" r="3" />
//             <circle cx="230" cy="590" r="2.5" className="animate-pulse" />
//             <circle cx="330" cy="320" r="3" />
//             <circle cx="340" cy="430" r="2.5" />
//             <circle cx="330" cy="530" r="3" className="animate-pulse" />
//           </g>
//         </svg>
//       </div>
//     );
//   }

//   // Right side - top corner
//   return (
//     <div
//       className="absolute right-0 top-0 w-80 lg:w-[420px] h-[500px] lg:h-[600px] pointer-events-auto overflow-visible animate-slide-in-right"
//       style={{ animationDelay: "0.3s", opacity: 0 }}
//     >
//       <svg
//         viewBox="0 0 450 550"
//         className="w-full h-full"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {renderHexagons(hexagonsRight, "right")}

//         {/* Connection lines for right side */}
//         <g stroke="url(#honeycombGradient-right)" strokeWidth="1.5" fill="none">
//           <line x1="160" y1="55" x2="120" y2="30" strokeOpacity="0.4" />
//           <line x1="160" y1="155" x2="100" y2="130" strokeOpacity="0.4" />
//           <line x1="160" y1="205" x2="80" y2="220" strokeOpacity="0.3" />
//           <line x1="400" y1="55" x2="440" y2="30" strokeOpacity="0.4" />
//           <line x1="400" y1="155" x2="450" y2="140" strokeOpacity="0.3" />
//           <line x1="400" y1="255" x2="450" y2="270" strokeOpacity="0.4" />
//           <line x1="400" y1="355" x2="440" y2="380" strokeOpacity="0.4" />
//           <line x1="400" y1="405" x2="450" y2="430" strokeOpacity="0.3" />
//           <line x1="240" y1="455" x2="200" y2="500" strokeOpacity="0.4" />
//           <line x1="320" y1="455" x2="340" y2="510" strokeOpacity="0.4" />
//         </g>

//         {/* Node dots for right side */}
//         <g fill="hsl(0 0% 85%)" fillOpacity="0.8">
//           <circle cx="120" cy="30" r="3" className="animate-pulse" />
//           <circle cx="100" cy="130" r="3" />
//           <circle cx="80" cy="220" r="2.5" />
//           <circle cx="440" cy="30" r="3" className="animate-pulse" />
//           <circle cx="450" cy="140" r="2.5" />
//           <circle cx="450" cy="270" r="3" className="animate-pulse" />
//           <circle cx="440" cy="380" r="3" />
//           <circle cx="450" cy="430" r="2.5" />
//           <circle cx="200" cy="500" r="3" className="animate-pulse" />
//           <circle cx="340" cy="510" r="3" />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default HexagonPattern;