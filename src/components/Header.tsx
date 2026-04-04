'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: '/empresa', label: 'A Empresa' },
    { path: '/produtos', label: 'Soluções' },
    { path: '/catalogo', label: 'Catálogo Técnico' },
    { path: '/', label: 'Representações' }, // Alterado temporariamente para Home até criarmos página ou âncora
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-brand-offwhite py-5'}`}>
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-90">
          <Image src={logo} alt="RECOM Metal Duro" width={180} height={50} className="w-auto h-10 md:h-12 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.path} className="text-[15px] font-medium text-brand-gray hover:text-brand-blue transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex items-center space-x-6 text-sm text-brand-gray">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Phone size={16} className="text-brand-orange group-hover:text-brand-blue transition-colors" />
            <span className="font-medium group-hover:text-brand-blue transition-colors">(19) 3233-2224</span>
          </div>
          <div className="flex items-center space-x-2 group">
            <Mail size={16} className="text-brand-orange group-hover:text-brand-blue transition-colors" />
            <a href="mailto:vendas.recom@montelione.com.br" className="font-medium group-hover:text-brand-blue transition-colors">vendas</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-gray hover:text-brand-blue transition-colors" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.path} onClick={() => setMenuOpen(false)} className="text-base font-medium text-brand-gray hover:text-brand-blue transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-brand-gray">
                <Phone size={18} className="text-brand-orange" />
                <span className="font-medium">(19) 3233-2224</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-gray">
                <Mail size={18} className="text-brand-orange" />
                <a href="mailto:vendas.recom@montelione.com.br" className="font-medium">vendas.recom@montelione.com.br</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;