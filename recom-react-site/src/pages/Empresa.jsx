import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Empresa = () => {
  return (
    <Layout>
      <div className={styles.location}>
        <div className={styles.whereCenter}>
          Você está em: <Link to="/">Home</Link> &gt; Empresa
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
          <div className={styles.mainProductTitle}>A Empresa</div>
          <p className={styles.just}>
            A Recom Metal Duro é uma empresa focada em soluções para o mercado de usinagem, com uma vasta experiência e know-how. Trabalhamos com produtos de alta tecnologia e qualidade reconhecida mundialmente, oferecendo a nossos clientes o que há de melhor em ferramentas de corte rotativas e estáticas.
          </p>
          <p className={styles.just}>
            Representante e Distribuidor Autorizado da Mitsubishi Materials, 7Leaders, BT Fixo, Kifix, nossa equipe está altamente capacitada para ajudá-lo a encontrar a melhor solução e custo-benefício para sua produção.
          </p>
        </div>
        <div className={styles.clear}></div>
      </div>
    </Layout>
  );
};

export default Empresa;