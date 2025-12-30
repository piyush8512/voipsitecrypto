"use client";
import Image from "next/image";
import ContactPage from "./contact/page";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import WhoAreWeSection from "@/components/WhoAreWeSection";
import Hero from "@/components/Hero";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <Hero />
      <WhoAreWeSection />
      <OurSolutionsSection />
      <WhyWeExistSection />
      {/* <ContactPage /> */}
      <ContactForm/>
      <Footer/>
    </div>
  );
}
