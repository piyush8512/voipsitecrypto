import Image from "next/image";
import Camera from "../../src/assets/camera2.svg";
const SolutionYellowSection = () => {
  return (
    <section className="w-full relative z-5 bg-linear-to-b from-[#EFEB11] to-[#89870AEB] py-24 lg:py-32 overflow-visible">
      <div className="max-w-250 mx-auto px-6 flex flex-col items-center text-center relative">
        <div className="flex flex-col gap-8 text-black">
          <p className="text-justify text-lg md:text-2xl leading-relaxed font-medium">
            We build secure, intelligent, and human-centric digital systems that
            protect mobility, strengthen communication, enhance situational
            awareness, and simplify how people interact with technology. Our
            work spans critical areas of digital infrastructure — securing
            devices, enabling trusted connectivity, safeguarding communication,
            and delivering intelligent visual insights. All of this is powered
            by our integrated AI capabilities, designed to make technology
            smarter, more usable, and more accessible.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-40%] md:bottom-[-80%] right-[-12%]  md:right-0 w-[60vw] md:w-[35vw] max-w-100 z-30 pointer-events-none">
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
