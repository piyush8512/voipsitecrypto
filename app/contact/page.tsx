import ContactForm from "@/components/contact/ContactForm2";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Import the logo directly from assets
import FooterLogo from "../../src/assets/footerlogo.svg";
const navLinks = [
  "Terms",
  "Privacy",
  "Solutions",
  "Product",
  "Resources",
  "About Us",
];

export default function ContactPage() {
  return (
    <div className="relative pt-12 min-h-screen w-full  bg-white overflow-hidden flex flex-col">
      <ContactForm />

      <footer className="w-full  py-16 lg:py-12">
        {/* 2. Center Container (matches Header max-width) */}
        <div className="max-w-350 mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          {/* --- Left Side: Logo & Copyright --- */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Logo */}
            <div className="relative w-48 h-auto md:w-60">
              <Image
                src={FooterLogo}
                alt="CryptoVoip Technologies Logo"
                className="object-contain"
              />
            </div>

            {/* Copyright Text */}
            <p className="text-gray-500 text-sm md:text-base font-medium">
              All rights reserved at Cryptovoip Unicorn
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 md:pt-30">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
