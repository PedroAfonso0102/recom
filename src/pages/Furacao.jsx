import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';
import ProductSidebar from '../components/ProductSidebar';

const Furacao = () => (
  <Layout>
    <div className={styles.location}>
      <div className={styles.whereCenter}>
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Furação
      </div>
    </div>
    <div className={styles.centerData}>
      <ProductSidebar />

      <div className={styles.textBox}>
        <div className={styles.mainProductTitle}>Furação</div>
        
        <h3 className={styles.productTitle}>FURAÇÃO</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO / DESCRIÇÕES DOS SÍMBOLOS</li>
        </ul>

        <h3 className={styles.productTitle}>FURAÇÃO (METAL DURO INTEIRIÇO)</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>PEQUENOS DIÂMETROS MWS (BROCAS WSTAR)</li>
          <li>MWE / MWS (BROCAS WSTAR)</li>
          <li>MWS_DB (BROCAS WSTAR)</li>
          <li>MNS / MNS_DB (BROCAS WSTAR)</li>
          <li>MHS (BROCAS WSTAR)</li>
          <li>MZE / MZS</li>
          <li>MGS (BROCA CANHÃO INTEIRIÇA)</li>
          <li>MAE / MAS</li>
        </ul>

        <h3 className={styles.productTitle}>FURAÇÃO (TIPO SOLDADA)</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>BRS / BRM / BRK</li>
          <li>BRA / BRL</li>
        </ul>

        <h3 className={styles.productTitle}>FURAÇÃO (TIPO INTERCAMBIÁVEL)</h3>
        <ul className={styles.just} style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>S-TAW</li>
          <li>TAW</li>
          <li>TAFS / TAFM / TAFL</li>
          <li>BUCHA EXPANSIVA (JFS)</li>
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

export default Furacao;

