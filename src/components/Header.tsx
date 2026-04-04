'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import globe from '../assets/images/globe.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="container mx-auto px-4 max-w-6xl py-4 flex flex-wrap justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="RECOM Metal Duro" width={200} height={60} className="w-auto h-12 md:h-16" />
          </Link>
        </div>

        <div className="hidden lg:block relative opacity-80 mix-blend-multiply">
          <Image src={globe} alt="" width={80} height={80} className="object-contain" />
        </div>

        <div className="hidden md:flex flex-col text-sm text-gray-600">
          <h2 className="font-bold text-brand-blue mb-1 uppercase text-xs tracking-wider">Onde estamos:</h2>
          <ul className="space-y-0.5">
            <li><span className="font-semibold text-gray-800">Rua:</span> Alferes João José, 350 - Jardim Chapadão</li>
            <li><span className="font-semibold text-gray-800">Cep:</span> 13070-188 - Campinas - SP - Brasil</li>
            <li><span className="font-semibold text-gray-800">Fones:</span> (19) 3233 2224 (pabx) fax (19) 3232 6935</li>
            <li><span className="font-semibold text-gray-800">E-mail:</span> <a href="mailto:vendas.recom@montelione.com.br" className="text-brand-orange hover:underline">vendas.recom@montelione.com.br</a></li>
          </ul>
        </div>

        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-brand-blue transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-brand-blue transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-brand-blue transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      <nav className={`${menuOpen ? 'block' : 'hidden'} md:block bg-brand-blue`}>
        <div className="container mx-auto max-w-6xl">
          <ul className="flex flex-col md:flex-row md:justify-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
            {[
              { path: '/', label: 'Home', legend: 'Inicio' },
              { path: '/empresa', label: 'A Empresa', legend: 'Sobre nós' },
              { path: '/produtos', label: 'Produtos', legend: 'Conteúdo técnico' },
              { path: '/catalogo', label: 'Catálogo', legend: 'Linha de produtos' },
              { path: '/promocoes', label: 'Promoções', legend: 'Preços especiais' },
              { path: '/contato', label: 'Contato', legend: 'Fale conosco' }
            ].map((item, idx) => (
              <li key={idx} className="w-full md:w-auto flex-1">
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col items-center justify-center py-3 px-2 text-white hover:bg-blue-800 transition-colors h-full text-center"
                >
                  <span className="font-bold text-sm uppercase tracking-wide group-hover:text-brand-orange transition-colors">{item.label}</span>
                  <span className="text-xs text-blue-200 mt-1 hidden md:block">{item.legend}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;