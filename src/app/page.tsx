'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import logoMitsubishi from '../assets/images/logo_mitsubishi.png';
import logo7leaders from '../assets/images/logo_7leaders.png';
import logoBtfixo from '../assets/images/logo_btfixo.png';
import logoKifix from '../assets/images/logo_kifix.png';

// Slider images
import linhaMitsu from '../assets/images/linha_mitsu.jpg';
import torneamento1 from '../assets/images/torneamento1.jpg';
import torneamento2 from '../assets/images/torneamento2.jpg';
import fresamento1 from '../assets/images/fresamento1.jpg';
import fresa1 from '../assets/images/fresa1.jpg';
import fresa2 from '../assets/images/fresa2.jpg';
import furacao1 from '../assets/images/furacao1.jpg';
import furacao2 from '../assets/images/furacao2.jpg';
import linha7leaders from '../assets/images/linha_7leaders.jpg';
import prods7leaders from '../assets/images/prods_7leaders.jpg';
import linhaBtfixo from '../assets/images/linha_btfixo.jpg';
import prodsBtfixo from '../assets/images/prods_btfixo.jpg';
import cones from '../assets/images/cones.jpg';
import logoMit from '../assets/images/LOGO-MIT.png';

const slides = [
  { src: linhaMitsu, title: 'Linha Mitsubishi', link: null },
  { src: torneamento1, title: 'Torneamento', link: null },
  { src: torneamento2, title: 'Torneamento', link: null },
  { src: fresamento1, title: 'Fresas de topo', link: null },
  { src: fresa1, title: 'Fresas', link: null },
  { src: fresa2, title: 'Fresas', link: null },
  { src: furacao1, title: 'Furação', link: null },
  { src: furacao2, title: 'Furação', link: null },
  { src: linha7leaders, title: 'Linha 7Leaders', link: null },
  { src: prods7leaders, title: 'Linha 7Leaders', link: 'http://7leaders.com/video/video_en.html' },
  { src: linhaBtfixo, title: 'Linha BT Fixo', link: '/btfixo' },
  { src: prodsBtfixo, title: 'Linha BT Fixo', link: '/btfixo' },
  { src: cones, title: 'Cones', link: null },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const renderSlideImage = (slide: any) => {
    const imgEl = (
      <Image
        src={slide.src}
        alt={slide.title}
        className="w-full h-auto object-cover max-h-[400px]"
      />
    );
    if (slide.link) {
      const isExternal = slide.link.startsWith('http');
      return isExternal ? (
        <a
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          {imgEl}
        </a>
      ) : (
        <Link href={slide.link} className="block w-full">
          {imgEl}
        </Link>
      );
    }
    return imgEl;
  };

  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-gray/70">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Início
            </Link>
          </li>
        </ol>
      </nav>

      {/* Carousel / Slider - Hero Section */}
      <motion.section
        className="relative mb-16 rounded-sm overflow-hidden shadow-sm group border border-brand-light-gray/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="relative aspect-video md:aspect-[21/9] bg-brand-gray flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {renderSlideImage(slide)}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gray/90 via-brand-gray/50 to-transparent mix-blend-multiply"></div>
            </div>
          ))}

          {/* Overlay Text */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 w-full md:w-2/3">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 drop-shadow-md leading-tight">
              Soluções em Ferramentas de Precisão
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl font-light drop-shadow">
              Distribuidor autorizado Mitsubishi Materials e representante de marcas líderes em usinagem industrial.
            </p>
            <Link href="/empresa" className="bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-sm w-max transition-colors uppercase tracking-wider text-sm shadow-md border border-blue-700">
              Conheça nossa estrutura
            </Link>
          </div>
        </div>

        {/* Carousel Controls (Subtle) */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-all focus:outline-none"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-all focus:outline-none"
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </motion.section>

      {/* Fornecedores */}
      <motion.section
        className="mb-16 bg-white p-8 rounded-sm shadow-sm border border-brand-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-bold text-brand-blue mb-2">Parcerias Estratégicas</h2>
          <p className="text-brand-gray/80 text-sm">Trabalhamos com as principais marcas mundiais do setor metal-mecânico</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <Link href="/catalogo-mitsubishi" className="hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 block">
            <Image src={logoMitsubishi} alt="Mitsubishi Materials" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <Link href="/catalogo-7leaders" className="hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 block">
            <Image src={logo7leaders} alt="7Leaders" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <Link href="/btfixo" className="hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 block">
            <Image src={logoBtfixo} alt="BT Fixo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <Link href="/catalogo-kifix" className="hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 block">
            <Image src={logoKifix} alt="Kifix" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>
      </motion.section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-12">

        {/* Produtos em Destaque */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <div className="flex justify-between items-end mb-6 border-b border-brand-light-gray pb-2">
            <h3 className="font-heading text-2xl font-bold text-brand-gray">Destaques Técnicos</h3>
            <Link href="/catalogo" className="text-brand-blue hover:text-brand-orange text-sm font-bold uppercase tracking-wider transition-colors hidden md:block">
              Ver catálogo completo &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { code: 'S-TAW', model: 'N112 - N116', desc: 'Brocas intercambiáveis para diâmetros pequenos' },
              { code: 'TAW', model: 'N117 - N135', desc: 'Brocas intercambiáveis' },
              { code: 'MWS', model: 'Pequenos Diâm.', desc: 'Brocas inteiriças de metal duro com refrigeração interna' },
              { code: 'MWE/MWS', model: 'N019 - N032', desc: 'Brocas inteiriças de metal duro' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white border border-brand-light-gray p-5 rounded-sm hover:border-brand-blue/30 hover:shadow-sm transition-all group flex flex-col h-full">
                <div className="bg-brand-off-white w-full h-32 mb-4 flex items-center justify-center border border-brand-light-gray/50 rounded-sm">
                  {/* Placeholder for product image */}
                  <span className="text-brand-light-gray font-mono text-xs">[Imagem: {prod.code}]</span>
                </div>
                <div className="mb-auto">
                  <strong className="block text-brand-blue font-mono text-lg mb-1">{prod.code}</strong>
                  <span className="block text-brand-gray/60 font-mono text-xs mb-3">{prod.model}</span>
                  <p className="text-sm text-brand-gray leading-relaxed">{prod.desc}</p>
                </div>
                <Link href={`/catalogo/${prod.code.toLowerCase()}`} className="mt-4 pt-4 border-t border-brand-light-gray/50 text-xs font-bold text-brand-blue group-hover:text-brand-orange uppercase tracking-wide inline-flex items-center transition-colors">
                  Especificações técnicas &rarr;
                </Link>
              </div>
            ))}
          </div>
          <Link href="/catalogo" className="mt-6 block text-center text-brand-blue hover:text-brand-orange text-sm font-bold uppercase tracking-wider transition-colors md:hidden">
            Ver catálogo completo &rarr;
          </Link>
        </motion.section>

        {/* Two-column: Vídeo + Novidades */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          {/* Vídeo Institucional */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-gray mb-6 border-b border-brand-light-gray pb-2 flex items-center gap-3">
              Conteúdo Técnico
              <Image src={logoMit} alt="Mitsubishi" className="h-4 w-auto object-contain opacity-50 grayscale" />
            </h3>
            <div className="rounded-sm overflow-hidden bg-brand-gray aspect-video flex items-center justify-center border border-brand-light-gray shadow-sm">
              {/* Em um cenário real, substituiríamos por um iframe do YouTube limpo */}
              <video controls className="w-full h-full object-contain">
                <source src="http://www.recommetalduro.com.br//webroot/img/VID-20200316-WA0040.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className="mt-3 text-xs text-brand-gray/60 text-center">Demonstração de usinagem com ferramentas Mitsubishi Materials</p>
          </div>

          {/* Informes do Setor */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-gray mb-6 border-b border-brand-light-gray pb-2">Informes do Setor</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 border border-brand-light-gray rounded-sm hover:border-brand-blue/30 transition-colors">
                <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider mb-1 block">Lançamento</span>
                <h4 className="font-bold text-brand-gray mb-2">Mitsubishi traz inovações na linha de fresamento</h4>
                <p className="text-sm text-brand-gray/80 mb-3 line-clamp-2">Novos insertos com tecnologia de cobertura avançada para maior durabilidade em usinagem pesada.</p>
                <Link href="/novidade-linha-mitsubishi" className="text-brand-blue hover:text-brand-orange text-xs font-bold uppercase tracking-wide transition-colors">
                  Ler artigo completo &rarr;
                </Link>
              </li>
              <li className="bg-white p-4 border border-brand-light-gray rounded-sm hover:border-brand-blue/30 transition-colors">
                <span className="text-[10px] uppercase font-bold text-brand-gray/60 tracking-wider mb-1 block">Feiras e Eventos</span>
                <h4 className="font-bold text-brand-gray mb-2">Presença na FENASUCRO & AGROCANA</h4>
                <p className="text-sm text-brand-gray/80 mb-3 line-clamp-2">A RECOM reforça seu compromisso com o setor sucroenergético apresentando soluções completas de usinagem.</p>
                <Link href="/feiras/fenasucro" className="text-brand-blue hover:text-brand-orange text-xs font-bold uppercase tracking-wide transition-colors">
                  Ver galeria técnica &rarr;
                </Link>
              </li>
              <li className="bg-white p-4 border border-brand-light-gray rounded-sm hover:border-brand-blue/30 transition-colors">
                <span className="text-[10px] uppercase font-bold text-brand-gray/60 tracking-wider mb-1 block">Material de Apoio</span>
                <h4 className="font-bold text-brand-gray mb-2">Atualização de Manuais Técnicos</h4>
                <p className="text-sm text-brand-gray/80 mb-3 line-clamp-2">Novos parâmetros de corte disponibilizados para as linhas Smart Miracle e MC6025.</p>
                <Link href="/produtos" className="text-brand-blue hover:text-brand-orange text-xs font-bold uppercase tracking-wide transition-colors">
                  Acessar área técnica &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </motion.section>

      </div>
    </div>
  );
}