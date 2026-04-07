'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.topHeader}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image src="/images/logo.png" alt="RECOM Metal Duro" width={200} height={50} />
          </Link>
        </div>

        <div className={styles.globeContainer}>
          <Image src="/images/globe.png" alt="" width={50} height={50} className={styles.globeImg} />
        </div>

        <div className={styles.enderecoTop}>
          <h2 className={styles.partTitle}>Onde estamos:</h2>
          <ul>
            <li><h3><b>Rua:</b> Alferes João José, 350 - Jardim Chapadão</h3></li>
            <li><h3><b>Cep:</b> 13070-188 - Campinas - São Paulo - Brasil</h3></li>
            <li><h3><b>Fones:</b> (19) 3233 2224 (pabx) fax (19) 3232 6935</h3></li>
            <li><h3><b>E-mail:</b> <a href="mailto:vendas.recom@montelione.com.br" className={styles.mailLink}>vendas.recom@montelione.com.br</a></h3></li>
          </ul>
        </div>

        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      <ul className={`${styles.headerMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuCenter}>
          <li className={styles.first}>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link> <span className={styles.legend}>Inicio</span>
          </li>
          <li>
            <Link href="/empresa" onClick={() => setMenuOpen(false)}>A Empresa</Link> <span className={styles.legend}>Sobre nós</span>
          </li>
          <li>
            <Link href="/produtos" onClick={() => setMenuOpen(false)}>Produtos</Link> <span className={styles.legend}>Conteúdo técnico</span>
          </li>
          <li>
            <Link href="/catalogo" onClick={() => setMenuOpen(false)}>Catálogo</Link> <span className={styles.legend}>Linha de produtos</span>
          </li>
          <li>
            <Link href="/promocoes" onClick={() => setMenuOpen(false)}>Promoções</Link> <span className={styles.legend}>Preços especiais</span>
          </li>
          <li className={styles.last}>
            <Link href="/contato" onClick={() => setMenuOpen(false)}>Contato</Link> <span className={styles.legend}>Fale conosco</span>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Header;
