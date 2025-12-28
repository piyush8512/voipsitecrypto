import React from "react";
import AboutHero from "@/components/aboutus/abouthero";
import InnovationSection from "@/components/aboutus/innvoation";
import CollaborationSection from "@/components/aboutus/CollaborationSection";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <AboutHero />
      <InnovationSection />
      <CollaborationSection/>
      <Footer/>
    </div>
  );
};

export default page;
