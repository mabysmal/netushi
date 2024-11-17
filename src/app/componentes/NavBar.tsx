'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface NavBarProps {
  logoSrc: string;
  logoAlt: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoSrc, logoAlt }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Menú', href: '/menu' },
    { title: 'Contacto', href: '/contacto' },
    { title: 'Pide Ahora', href: '/pedidos' },
    { title: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];

  return (
    <nav className="w-full bg-black shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between h-30">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-600 focus:outline-none w-12 h-12 absolute left-4"
          >
            {isMenuOpen ? (
              <Image 
                src="/close.svg" 
                alt="Cerrar menú"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
            ) : (
              <Image 
                src="/hamburger-menu.svg" 
                alt="Abrir menú"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
            )}
            
          </button>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src={logoSrc}
              width={300}
              height={300}
              alt={logoAlt}
              className="h-auto w-auto max-h-24"
              priority
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logoSrc}
              width={120}
              height={120}
              alt={logoAlt}
              className="h-auto w-auto max-h-16"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white text-xl hover:text-red hover:text-2xl focus:text-dark-red transition-colors duration-200"
              >
                <span className="cursor-pointer">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-black shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-xl text-white focus:bg-red rounded-md transition-colors duration-200 bg-dark-red"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;