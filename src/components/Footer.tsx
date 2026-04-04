import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-brand-offwhite pt-16 pb-8 border-t-[6px] border-brand-blue">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-white">RECOM Metal Duro</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Distribuição técnica de produtos Mitsubishi Materials e soluções de alta performance em metal duro para a indústria brasileira desde 1990.
            </p>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-brand-orange shrink-0 mt-0.5" />
                <span>(19) 3233-2224 (PABX)<br/>Fax: (19) 3232-6935</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-orange shrink-0" />
                <a href="mailto:vendas.recom@montelione.com.br" className="hover:text-white transition-colors">vendas.recom@montelione.com.br</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-brand-orange shrink-0 mt-0.5" />
                <span>Seg - Sex: 08:00 às 18:00</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Onde Estamos</h4>
            <div className="flex items-start text-sm text-gray-300">
              <MapPin size={18} className="mr-2 text-brand-orange shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                Rua Alferes João José, 350<br />
                Jardim Chapadão<br />
                Campinas - SP<br />
                CEP: 13070-188
              </address>
            </div>
          </div>

          {/* Coluna 4: Links Úteis */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/empresa" className="text-gray-300 hover:text-white transition-colors">A Empresa</Link></li>
              <li><Link href="/catalogo" className="text-gray-300 hover:text-white transition-colors">Catálogo Técnico</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} RECOM Metal Duro - AA Monteleone Comércio. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link>
            <span>|</span>
            <Link href="/mapa-do-site" className="hover:text-white transition-colors">Mapa do Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
