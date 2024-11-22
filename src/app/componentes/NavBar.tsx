'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavBarProps {
  logoSrc: string;
  logoAlt: string;
}

const NavBar = ({ logoSrc, logoAlt }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Menú', href: '/menu' },
    // { title: '', href: '/contacto' },
    { title: 'Sobre Nosotros', href: '/aboutus' },
  ];

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center h-16 md:hidden">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            {isMenuOpen ? (
              <span>✕</span>
            ) : (
              <span>☰</span>
            )}
            <span className="sr-only">Menu</span>
          </button>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-red hover:text-white focus:text-dark-red"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;