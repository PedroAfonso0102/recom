import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'A Empresa', path: '/empresa' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Promoções', path: '/promocoes' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="w-full bg-white border-b-2 border-secondary z-50 relative shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">

          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="RECOM Metal Duro" className="h-16" />
            </Link>
          </div>

          <div className="hidden md:flex flex-col items-end justify-center space-y-1">
             <div className="flex items-center text-secondary/60 text-xs font-mono uppercase tracking-widest mb-1">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Rua Alferes João José, 350 - Campinas/SP</span>
             </div>
             <div className="flex items-center text-secondary/60 text-xs font-mono uppercase tracking-widest mb-1">
                <Phone className="w-3 h-3 mr-1" />
                <span>(19) 3233 2224</span>
             </div>
             <div className="flex items-center text-primary text-xs font-mono font-bold uppercase tracking-widest">
                <Mail className="w-3 h-3 mr-1" />
                <a href="mailto:vendas.recom@montelione.com.br" className="hover:text-primary-600 transition-colors">vendas.recom@montelione.com.br</a>
             </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-neutral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:block bg-secondary w-full border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ul className="flex justify-center space-x-1">
             {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-8 py-4 text-[11px] font-heading font-black uppercase tracking-[0.2em] transition-all duration-300 border-b-2
                      ${location.pathname === link.path
                        ? 'bg-primary text-white border-primary'
                        : 'text-white/70 hover:bg-white/10 hover:text-white border-transparent'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
             ))}
           </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary w-full overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-heading font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'bg-primary text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="px-5 pt-4 pb-4 border-t border-white/10 text-white/50 text-xs font-mono">
               <div className="mb-2">📍 R. Alferes João José, 350 - Campinas/SP</div>
               <div className="mb-2">📞 (19) 3233 2224</div>
               <div>✉️ vendas.recom@montelione.com.br</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
