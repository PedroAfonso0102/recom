import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-2 rounded">
              <Image src={logo} alt="RECOM Logo" width={180} height={60} className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Distribuidora autorizada das principais marcas globais de ferramentas de metal duro. Soluções focadas em alta performance, redução de custos e produtividade industrial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/empresa" className="text-sm hover:text-brand-orange transition-colors">A Empresa</Link></li>
              <li><Link href="/catalogo" className="text-sm hover:text-brand-orange transition-colors">Catálogo de Produtos</Link></li>
              <li><Link href="/promocoes" className="text-sm hover:text-brand-orange transition-colors">Promoções</Link></li>
              <li><a href="#contato" className="text-sm hover:text-brand-orange transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Contato</h4>
            <address className="not-italic text-sm space-y-3 text-slate-400">
              <p>Rua das Ferramentas, 123</p>
              <p>Distrito Industrial</p>
              <p>Campinas, SP - CEP: 13000-000</p>
              <p className="pt-2">
                <a href="tel:+551932272111" className="hover:text-white transition-colors">(19) 3227-2111</a>
              </p>
              <p>
                <a href="mailto:vendas@recommetalduro.com.br" className="hover:text-white transition-colors">vendas@recommetalduro.com.br</a>
              </p>
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Segunda a Quinta:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta-feira:</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-slate-500 mt-2">
                <span>Sábado e Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-4 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl text-center md:flex md:justify-between md:items-center">
          <p className="text-xs text-slate-500 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} RECOM Metal Duro. Todos os direitos reservados.
          </p>
          <div className="text-xs text-slate-600">
            CNPJ: 00.000.000/0000-00
          </div>
        </div>
      </div>
    </footer>
  );
}
