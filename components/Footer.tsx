// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Product', href: '/product' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">
                <span className="text-gray-600 italic">Crypto</span>
                <span className="text-gray-900">Voip</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-blue-600"></div>
                <span className="text-sm font-semibold tracking-wider text-gray-700">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              All rights reserved at Cryptovoip Unicom
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}