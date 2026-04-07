'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../app/Page.module.css';

const ProductSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : '';
  };

  return (
    <ul className={styles.menuLateral}>
      <li className={`${styles.produto} ${isActive('/produtos')}`}>
        <Link href="/produtos">O que é Metal Duro?</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/sugestoes-de-utilizacao')}`}>
        <Link href="/sugestoes-de-utilizacao">Sugestões de Utilização</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/seguranca')}`}>
        <Link href="/seguranca">Segurança nas Ferramentas</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/torneamento')}`}>
        <Link href="/torneamento">Torneamento</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/fresamento')}`}>
        <Link href="/fresamento">Fresamento</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/furacao')}`}>
        <Link href="/furacao">Furação</Link>
      </li>
      <li className={`${styles.produto} ${isActive('/videos')}`}>
        <Link href="/videos">Vídeos</Link>
      </li>
    </ul>
  );
};

export default ProductSidebar;
