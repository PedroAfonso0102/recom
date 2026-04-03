import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../components/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Home = () => {
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

  const renderSlideImage = (slide) => {
    const imgEl = (
      <img
        src={slide.src}
        alt={slide.title}
        className="w-full h-full object-contain"
      />
    );
    if (slide.link) {
      const isExternal = slide.link.startsWith('http');
      return (
        <a
          href={slide.link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="block w-full h-full"
        >
          {imgEl}
        </a>
      );
    }
    return imgEl;
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
        <div className="w-full max-w-5xl mx-auto">
          Você está em: <a href="/" className="text-accent-blue no-underline hover:underline">Home</a>
        </div>
      </div>

      {/* Fornecedores */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-6">
        <div className="bg-white border border-border-light rounded p-4">
          <h3 className="text-lg text-secondary-text border-b border-border-light pb-2 m-0 mb-4 font-bold">Fornecedores</h3>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 py-2 px-0 sm:px-8">
            <a href="/catalogo-mitsubishi" className="flex-1 min-w-[120px] flex justify-center"><img src={logoMitsubishi} alt="Mitsubishi" className="max-w-[150px] max-h-[60px] object-contain" /></a>
            <a href="/catalogo-7leaders" className="flex-1 min-w-[120px] flex justify-center"><img src={logo7leaders} alt="7Leaders" className="max-w-[150px] max-h-[60px] object-contain" /></a>
            <a href="/btfixo" className="flex-1 min-w-[120px] flex justify-center"><img src={logoBtfixo} alt="BT Fixo" className="max-w-[150px] max-h-[60px] object-contain" /></a>
            <a href="/catalogo-kifix" className="flex-1 min-w-[120px] flex justify-center"><img src={logoKifix} alt="Kifix" className="max-w-[150px] max-h-[60px] object-contain" /></a>
          </div>
        </div>
      </div>

      {/* Carousel / Slider */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-8">
        <div className="relative w-full h-[250px] sm:h-[352px] overflow-hidden rounded bg-harmonic">
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-black/40 text-white border-none w-10 h-16 cursor-pointer flex items-center justify-center transition-colors hover:bg-black/70 rounded-r"
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-250 ease-in-out flex items-center justify-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                {renderSlideImage(slide)}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 sm:p-4 text-sm sm:text-base font-bold text-left">{slide.title}</div>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-black/40 text-white border-none w-10 h-16 cursor-pointer flex items-center justify-center transition-colors hover:bg-black/70 rounded-l"
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full border border-muted-text cursor-pointer p-0 transition-all ${index === currentSlide ? 'bg-secondary-text border-secondary-text' : 'bg-[#ddd] hover:bg-muted-text'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Produtos em Destaque + (Vídeo & Novidades) */}
      <div className="w-full max-w-5xl mx-auto px-4">

        {/* Produtos em Destaque - full width */}
        <div className="border border-border-light rounded p-4 mb-6 bg-harmonic">
          <h3 className="text-lg text-secondary-text border-b border-border-light pb-2 m-0 mb-4 font-bold">Produtos em Destaque</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="border border-border-light rounded p-4 text-center bg-white transition-colors hover:border-muted-text">
              <strong className="block text-sm text-primary-text mb-1 font-bold">S-TAW (N112 - N116)</strong>
              <p className="text-xs text-secondary-text m-0 leading-snug">Brocas intercambiáveis para diâmetros pequenos</p>
            </div>
            <div className="border border-border-light rounded p-4 text-center bg-white transition-colors hover:border-muted-text">
              <strong className="block text-sm text-primary-text mb-1 font-bold">TAW (N117 - N135)</strong>
              <p className="text-xs text-secondary-text m-0 leading-snug">Brocas intercambiáveis</p>
            </div>
            <div className="border border-border-light rounded p-4 text-center bg-white transition-colors hover:border-muted-text">
              <strong className="block text-sm text-primary-text mb-1 font-bold">Pequenos Diâmetros MWS</strong>
              <p className="text-xs text-secondary-text m-0 leading-snug">Brocas inteiriças de metal duro com refrigeração interna</p>
            </div>
            <div className="border border-border-light rounded p-4 text-center bg-white transition-colors hover:border-muted-text">
              <strong className="block text-sm text-primary-text mb-1 font-bold">MWE/MWS (N019 - N032)</strong>
              <p className="text-xs text-secondary-text m-0 leading-snug">Brocas inteiriças de metal duro</p>
            </div>
            <div className="border border-border-light rounded p-4 text-center bg-white transition-colors hover:border-muted-text">
              <strong className="block text-sm text-primary-text mb-1 font-bold">WSTAR Broca Super Longa</strong>
              <p className="text-xs text-secondary-text m-0 leading-snug">Brocas inteiriças de metal duro para furação profunda</p>
            </div>
          </div>
        </div>

        {/* Two-column: Vídeo + Novidades */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Vídeo */}
          <div className="flex-1 min-w-0">
            <div className="border border-border-light rounded p-4 bg-harmonic h-full">
              <h3 className="text-lg text-secondary-text border-b border-border-light pb-2 m-0 mb-4 font-bold flex items-center justify-between">
                Vídeo
                <img src={logoMit} className="h-6 ml-auto" alt="Mitsubishi" />
              </h3>
              <div className="text-center rounded overflow-hidden bg-black">
                <video controls className="w-full max-w-full">
                  <source src="http://www.recommetalduro.com.br//webroot/img/VID-20200316-WA0040.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>

          {/* Novidades */}
          <div className="flex-1 min-w-0">
            <div className="border border-border-light rounded p-4 bg-harmonic h-full">
              <h3 className="text-lg text-secondary-text border-b border-border-light pb-2 m-0 mb-4 font-bold">Novidades</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-4 border-b border-dotted border-border-light pb-4 last:border-b-0 last:mb-0 last:pb-0">
                  <h4 className="text-base text-primary-text m-0 mb-1 font-semibold leading-snug">Mitsubishi traz novidades em todas as linhas</h4>
                  <a href="/novidade-linha-mitsubishi" className="text-secondary-text no-underline text-sm hover:text-accent-blue hover:underline">Clique aqui e confira os detalhes</a>
                  <p className="text-xs text-muted-text mt-1 mb-0">Postado em: 30/09/2013 às 23:19</p>
                </li>
                <li className="mb-4 border-b border-dotted border-border-light pb-4 last:border-b-0 last:mb-0 last:pb-0">
                  <h4 className="text-base text-primary-text m-0 mb-1 font-semibold leading-snug">Veja as fotos da FENASUCRO 2012</h4>
                  <a href="/feiras/fenasucro" className="text-secondary-text no-underline text-sm hover:text-accent-blue hover:underline">Fotos da FENASUCRO 2012</a>
                  <p className="text-xs text-muted-text mt-1 mb-0">Postado em: 19/09/2012 às 20:49</p>
                </li>
                <li className="mb-4 border-b border-dotted border-border-light pb-4 last:border-b-0 last:mb-0 last:pb-0">
                  <h4 className="text-base text-primary-text m-0 mb-1 font-semibold leading-snug">Confira os novos videos promocionais</h4>
                  <span className="text-secondary-text text-sm cursor-pointer hover:text-accent-blue hover:underline">Smart Miracle</span><br/>
                  <span className="text-secondary-text text-sm cursor-pointer hover:text-accent-blue hover:underline">MC6025</span>
                  <p className="text-xs text-muted-text mt-1 mb-0">Postado em: 19/09/2012 às 20:25</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
