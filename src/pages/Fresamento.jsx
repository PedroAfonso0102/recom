import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Fresamento = () => (
  <Layout>
    <div className={styles.location}>
      <div className={styles.whereCenter}>
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Fresamento
      </div>
    </div>
    <div className={styles.centerData}>
      <ul className={styles.menuLateral}>
        <li className={styles.produto}><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className={styles.produto}><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className={styles.produto}><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className={styles.produto}><Link to="/torneamento">Torneamento</Link></li>
        <li className={`${styles.produto} ${styles.active}`}><Link to="/fresamento">Fresamento</Link></li>
        <li className={styles.produto}><Link to="/furacao">Furação</Link></li>
        <li className={styles.produto}><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className={styles.textBox}>
        <div className={styles.mainProductTitle}>Fresamento</div>
        
        <h3 className={styles.productTitle}>FRESAS DE TOPO INTEIRIÇAS</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO / DESCRIÇÕES DOS SÍMBOLOS</li>
        </ul>

        <h3 className={styles.productTitle}>INSERTOS DE FRESAMENTO E DE FURAÇÃO</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO</li>
        </ul>

        <h3 className={styles.productTitle}>FRESAMENTO</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>DISPOSITIVOS DE CONTROLE</li>
        </ul>

        <h3 className={styles.productTitle}>FERRAMENTAS HSK</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>APRESENTAÇÃO DAS FERRAMENTAS HSK</li>
        </ul>

        <h3 className={styles.productTitle}>FIXAÇÃO</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>CLASSIFICAÇÃO DO SISTEMA DE FIXAÇÃO TROCA-RÁPIDA</li>
          <li>IDENTIFICAÇÃO</li>
          <li>FRESAS DE FACEAR</li>
          <li>FRESAS TANGENCIAIS</li>
          <li>FERRAMENTAS DE MANDRILAR</li>
          <li>ABS® License KOMET®</li>
          <li>SISTEMA HSK</li>
        </ul>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
          <p className={styles.just} style={{ fontSize: '11px', color: '#666' }}>
            <strong>Fonte:</strong> MITSUBISHI MATERIALS
          </p>
        </div>
      </div>
      <div className={styles.clear}></div>
    </div>
  </Layout>
);

export default Fresamento;

