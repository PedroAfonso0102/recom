'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

import logoMitsubishi from '../assets/images/logo_mitsubishi.png';
import logo7leaders from '../assets/images/logo_7leaders.png';
import logoBtfixo from '../assets/images/logo_btfixo.png';
import logoKifix from '../assets/images/logo_kifix.png';

// Fallback de imagens temporárias com as que já temos
import heroImage from '../assets/images/torneamento1.jpg'; // Usaremos esta como placeholder industrial para o Hero

const produtos = [
  { id: 'torneamento', titulo: 'Insertos para Torneamento', desc: 'Pastilhas de alta performance (ISO P/M/K) com quebra-cavacos otimizados e coberturas CVD/PVD de última geração.', rota: '/produtos/torneamento/insertos' },
  { id: 'fresamento', titulo: 'Fresas de Topo', desc: 'Soluções inteiriças em metal duro e intercambiáveis para alto avanço (High Feed), desbaste pesado e acabamento superior.', rota: '/produtos/fresamento/fresas-topo' },
  { id: 'furacao', titulo: 'Brocas Intercambiáveis', desc: 'Linhas S-TAW e TAW para furação de alta estabilidade e precisão em diâmetros variados.', rota: '/produtos/furacao/brocas-intercambiaveis' },
  { id: 'roscamento', titulo: 'Ferramentas de Roscamento', desc: 'Machos e cossinetes rigorosamente inspecionados para usinagem limpa em aços, ferros fundidos e superligas.', rota: '/catalogo' }
];

const fornecedores = [
  { logo: logoMitsubishi, nome: 'Mitsubishi Materials', desc: 'Tecnologia japonesa em ferramentas de corte rotativas e intercambiáveis.' },
  { logo: logo7leaders, nome: '7Leaders', desc: 'Especialista em fresas e brocas de metal duro inteiriço de precisão.' },
  { logo: logoBtfixo, nome: 'BT Fixo', desc: 'Sistemas de fixação robustos e cones porta-ferramentas balanceados.' },
  { logo: logoKifix, nome: 'Kifix', desc: 'Soluções modulares para fixação de peças complexas na usinagem.' }
];

export default function Home() {
  return (
    <div className="w-full pt-16">
      {/* 1. HERO SECTION (Imagem de impacto técnico) */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-gray">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Usinagem de precisão CNC"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay escuro sutil para legibilidade (30% a 50%) */}
          <div className="absolute inset-0 bg-brand-gray/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-md">
            Precisão em Ferramentas <br/> de Corte desde 1990
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl leading-relaxed mb-10 drop-shadow">
            Distribuição técnica de produtos Mitsubishi Materials e soluções em metal duro para a indústria brasileira.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce text-white/70 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Explorar</span>
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* 2. FORNECEDORES & REPRESENTAÇÕES (Grid Elegante) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-gray mb-4">Representações Técnicas</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fornecedores.map((forn, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center p-8 bg-brand-offwhite rounded-sm border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-6 w-full mix-blend-multiply grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  <Image src={forn.logo} alt={forn.nome} className="max-h-full max-w-[80%] object-contain" />
                </div>
                <h3 className="font-bold text-brand-blue mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">{forn.nome}</h3>
                <p className="text-sm text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{forn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LINHAS DE PRODUTO / SOLUÇÕES */}
      <section className="py-20 bg-brand-offwhite border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-gray mb-4">Linhas de Produto</h2>
              <div className="w-20 h-1 bg-brand-orange opacity-80 mb-6"></div>
              <p className="text-gray-600 max-w-2xl">
                Catálogo especializado para atender os requisitos de qualidade e produtividade na usinagem CNC de desbaste e acabamento.
              </p>
            </div>
            <Link href="/catalogo" className="inline-flex items-center font-bold text-brand-blue hover:text-brand-orange transition-colors group">
              Acessar Biblioteca Técnica
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {produtos.map((prod, idx) => (
              <Link key={idx} href={prod.rota} className="group bg-white p-8 border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all duration-300 rounded-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-brand-gray group-hover:text-brand-blue transition-colors mb-3 flex items-start justify-between">
                    {prod.titulo}
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{prod.desc}</p>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-brand-blue/60 group-hover:text-brand-blue">
                  Ver Especificações Técnicas
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A EMPRESA (Call to Action Discreto) */}
      <section className="py-24 bg-brand-gray text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-3xl font-bold mb-8">Tradição em Engenharia de Aplicação</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Mais do que fornecer ferramentas, a RECOM Metal Duro entrega conhecimento técnico e suporte contínuo para o chão de fábrica, garantindo a seleção adequada de quebra-cavacos, coberturas e parâmetros de corte para a sua realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/empresa" className="px-8 py-3 bg-brand-blue hover:bg-blue-800 text-white font-bold rounded-sm transition-colors w-full sm:w-auto">
              Conheça a Nossa História
            </Link>
            <Link href="/contato" className="px-8 py-3 bg-transparent border border-gray-500 hover:border-white hover:text-white text-gray-300 font-bold rounded-sm transition-colors w-full sm:w-auto">
              Fale com a Engenharia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}