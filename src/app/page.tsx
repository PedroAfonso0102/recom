'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
      </div>

      {/* Fornecedores */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-brand-blue mb-6 border-b-2 border-brand-orange pb-2 inline-block">Fornecedores</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Link href="/catalogo-mitsubishi" className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
            <Image src={logoMitsubishi} alt="Mitsubishi" className="h-12 w-auto object-contain" />
          </Link>
          <Link href="/catalogo-7leaders" className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
            <Image src={logo7leaders} alt="7Leaders" className="h-12 w-auto object-contain" />
          </Link>
          <Link href="/btfixo" className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
            <Image src={logoBtfixo} alt="BT Fixo" className="h-12 w-auto object-contain" />
          </Link>
          <Link href="/catalogo-kifix" className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
            <Image src={logoKifix} alt="Kifix" className="h-12 w-auto object-contain" />
          </Link>
        </div>
      </div>

      {/* Carousel / Slider */}
      <div className="relative mb-12 rounded-xl overflow-hidden shadow-md group">
        <div className="relative aspect-video md:aspect-[21/9] bg-gray-100 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {renderSlideImage(slide)}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h4 className="text-lg md:text-xl font-bold">{slide.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white text-brand-blue p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg focus:outline-none"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white text-brand-blue p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg focus:outline-none"
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ${index === currentSlide ? 'bg-brand-orange w-6' : 'bg-white/60 hover:bg-white'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8">

        {/* Produtos em Destaque */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-brand-blue mb-6 border-b-2 border-brand-orange pb-2 inline-block">Produtos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'S-TAW (N112 - N116)', desc: 'Brocas intercambiáveis para diâmetros pequenos' },
              { title: 'TAW (N117 - N135)', desc: 'Brocas intercambiáveis' },
              { title: 'Pequenos Diâmetros MWS', desc: 'Brocas inteiriças de metal duro com refrigeração interna' },
              { title: 'MWE/MWS (N019 - N032)', desc: 'Brocas inteiriças de metal duro' },
              { title: 'WSTAR Broca Super Longa', desc: 'Brocas inteiriças de metal duro para furação profunda' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-md hover:shadow-md transition-shadow hover:border-brand-blue/30 group">
                <strong className="block text-brand-blue group-hover:text-brand-orange transition-colors mb-2">{prod.title}</strong>
                <p className="text-sm text-gray-600 leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two-column: Vídeo + Novidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vídeo */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-brand-blue mb-6 border-b-2 border-brand-orange pb-2 inline-flex items-center gap-3">
              Vídeo
              <Image src={logoMit} alt="Mitsubishi" className="h-6 w-auto object-contain" />
            </h3>
            <div className="rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video controls className="w-full h-full object-contain">
                <source src="http://www.recommetalduro.com.br//webroot/img/VID-20200316-WA0040.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>

          {/* Novidades */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-brand-blue mb-6 border-b-2 border-brand-orange pb-2 inline-block">Novidades</h3>
            <ul className="space-y-6">
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <h4 className="font-bold text-gray-800 mb-1">Mitsubishi traz novidades em todas as linhas</h4>
                <Link href="/novidade-linha-mitsubishi" className="text-brand-blue hover:text-brand-orange text-sm font-medium transition-colors block mb-2">
                  Clique aqui e confira os detalhes
                </Link>
                <p className="text-xs text-gray-400 font-mono">Postado em: 30/09/2013 às 23:19</p>
              </li>
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <h4 className="font-bold text-gray-800 mb-1">Veja as fotos da FENASUCRO 2012</h4>
                <Link href="/feiras/fenasucro" className="text-brand-blue hover:text-brand-orange text-sm font-medium transition-colors block mb-2">
                  Fotos da FENASUCRO 2012
                </Link>
                <p className="text-xs text-gray-400 font-mono">Postado em: 19/09/2012 às 20:49</p>
              </li>
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <h4 className="font-bold text-gray-800 mb-1">Confira os novos videos promocionais</h4>
                <div className="space-y-1 mb-2">
                  <span className="text-brand-blue hover:text-brand-orange cursor-pointer text-sm font-medium transition-colors block">Smart Miracle</span>
                  <span className="text-brand-blue hover:text-brand-orange cursor-pointer text-sm font-medium transition-colors block">MC6025</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">Postado em: 19/09/2012 às 20:25</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}