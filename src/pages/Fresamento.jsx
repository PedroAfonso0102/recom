import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';
import ProductSidebar from '../components/ProductSidebar';

const Fresamento = () => (
  <Layout>
    <div className={styles.location}>
      <div className={styles.whereCenter}>
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Fresamento
      </div>
    </div>
    <div className={styles.centerData}>
      <ProductSidebar />

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

