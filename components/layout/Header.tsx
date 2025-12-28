"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ["Home", "About Us", "Solutions", "Contact"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-350 mx-auto px-6 py-6 lg:px-12 flex items-center justify-between relative">
        <div className="flex items-center gap-3 z-50">
          <img
            src="/CryptoVoip.png"
            alt="CryptoVoip logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 z-10 max-w-225 w-full justify-center px-4">
          {navItems.map((item) => {
            const href =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(" ", "-")}`;

            const isActive = pathname === href;

            return (
              <a
                key={item}
                href={href}
                className={`
                  relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#DCE735] text-black shadow-[0_0_0_4px_rgba(220,231,53,0.3),0_0_0_8px_rgba(220,231,53,0.15)] scale-105"
                      : "text-gray-300 hover:text-[#DCE735]"
                  }
                `}
              >
                {item}

                {!isActive && (
                  <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-[#DCE735] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center" />
                )}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 z-50 hover:text-[#DCE735] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0f1524] border-t border-gray-800 shadow-2xl py-6 px-6 flex flex-col items-center gap-6 lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => {
              const href =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`;

              const isActive = pathname === href;

              return (
                <a
                  key={item}
                  href={href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? "text-[#DCE735]"
                      : "text-gray-300 hover:text-[#DCE735]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
