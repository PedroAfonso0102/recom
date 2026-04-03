import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Promocoes = () => {
  return (
    <Layout>
      <div className={styles.location}>
        <div className={styles.whereCenter}>
          Você está em: <Link to="/">Home</Link> &gt; Promoções
        </div>
      </div>

      <div className={styles.centerData}>
        <ul className={styles.menuLateral}>
          <li className={`${styles.produto} ${styles.first}`}><Link to="/o-que-e-metal-duro">O que é Metal Duro?</Link></li>
          <li className={styles.produto}><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
          <li className={styles.produto}><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
          <li className={styles.produto}><Link to="/torneamento">Torneamento</Link></li>
          <li className={styles.produto}><Link to="/fresamento">Fresamento</Link></li>
          <li className={styles.produto}><Link to="/furacao">Furação</Link></li>
          <li className={styles.produto}><Link to="/videos">Vídeos</Link></li>
        </ul>

        <div className={styles.textBox}>
          <div className={styles.mainProductTitle}>Promoções</div>
          <p className={styles.just}>
            Aproveite nossas promoções em fresas, cones, brocas, pinças e outras ferramentas. Consulte nossos preços especiais para renovar o estoque da sua empresa.
          </p>
        </div>
        <div className={styles.clear}></div>
      </div>
    </Layout>
  );
};

export default Promocoes;