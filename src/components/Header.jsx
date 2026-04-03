import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import globe from '../assets/images/globe.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0 h-[100px] flex items-center justify-center md:justify-start bg-bg-main border-b border-border-light md:border-none">
        <div className="md:ml-5">
          <Link to="/">
            <img src={logo} alt="RECOM Metal Duro" />
          </Link>
        </div>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 opacity-20">
          <img src={globe} alt="" className="h-[120px]" />
        </div>

        <div className="hidden md:block absolute right-4 bottom-2 text-right">
          <h2 className="text-[11px] font-bold text-secondary-text m-0 mb-1">Onde estamos:</h2>
          <ul className="list-none p-0 m-0 text-[10px] text-muted-text leading-tight">
            <li><b>Rua:</b> Alferes João José, 350 - Jardim Chapadão</li>
            <li><b>Cep:</b> 13070-188 - Campinas - São Paulo - Brasil</li>
            <li><b>Fones:</b> (19) 3233 2224 (pabx) fax (19) 3232 6935</li>
            <li><b>E-mail:</b> <a href="mailto:vendas.recom@montelione.com.br" className="text-accent-blue font-bold no-underline hover:underline">vendas.recom@montelione.com.br</a></li>
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-transparent border-none cursor-pointer text-text-primary z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ul className={`
        list-none p-0 m-0
        bg-gradient-to-b from-[#3a3b3e] to-[#2e2f30]
        md:flex md:flex-row md:justify-center md:h-[60px]
        ${menuOpen ? 'flex flex-col' : 'hidden'}
        w-full
      `}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full max-w-5xl mx-auto px-4 md:px-0 divide-y divide-[#444] md:divide-y-0 md:divide-x">
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>Home</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Inicio</span>
          </li>
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/empresa" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>A Empresa</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Sobre nós</span>
          </li>
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/produtos" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>Produtos</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Conteúdo técnico</span>
          </li>
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/catalogo" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>Catálogo</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Linha de produtos</span>
          </li>
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/promocoes" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>Promoções</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Preços especiais</span>
          </li>
          <li className="py-3 md:py-0 md:px-5 flex flex-col md:items-center">
            <Link to="/contato" className="text-white text-[15px] font-bold no-underline leading-tight hover:text-white" onClick={() => setMenuOpen(false)}>Contato</Link>
            <span className="text-[#a1a1a1] text-[10px] leading-tight block md:mt-1">Fale conosco</span>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Header;
