import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <div className={styles.topHeader}>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logo} alt="RECOM Metal Duro" />
          </Link>
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
      </div>

      <ul className={styles.headerMenu}>
        <div className={styles.menuCenter}>
          <li className={styles.first}>
            <Link to="/">Home</Link> <span className={styles.legend}>Inicio</span>
          </li>
          <li>
            <Link to="/empresa">A Empresa</Link> <span className={styles.legend}>Sobre nós</span>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link> <span className={styles.legend}>Nosso catálogo</span>
          </li>
          <li>
            <Link to="/promocoes">Promoções</Link> <span className={styles.legend}>Preços especiais</span>
          </li>
          <li className={styles.last}>
            <Link to="/contato">Contato</Link> <span className={styles.legend}>Fale conosco</span>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Header;
