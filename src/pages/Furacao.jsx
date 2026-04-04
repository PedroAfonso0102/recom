import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Furacao = () => (
  <Layout>
    <div className={styles.location}>
      <div className={styles.whereCenter}>
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Furação
      </div>
    </div>
    <div className={styles.centerData}>
      <ul className={styles.menuLateral}>
        <li className={styles.produto}><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className={styles.produto}><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className={styles.produto}><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className={styles.produto}><Link to="/torneamento">Torneamento</Link></li>
        <li className={styles.produto}><Link to="/fresamento">Fresamento</Link></li>
        <li className={`${styles.produto} ${styles.active}`}><Link to="/furacao">Furação</Link></li>
        <li className={styles.produto}><Link to="/videos">Vídeos</Link></li>
      </ul>

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

