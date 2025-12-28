import Footer from "@/components/layout/Footer";
import SolutionFocusSection from "@/components/solution/SolutionFocusSection";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionPurposeSection from "@/components/solution/SolutionPurposeSection";
import SolutionYellowSection from "@/components/solution/SolutionYellowSection";
import React from "react";

const page = () => {
  return (
    <div>
      <SolutionHero />
      <SolutionPurposeSection />
      <SolutionYellowSection />
      <SolutionFocusSection />
      <Footer />
    </div>
  );
};

export default page;
