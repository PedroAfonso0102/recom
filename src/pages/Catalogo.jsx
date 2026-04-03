import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Catalogo = () => (
  <Layout>
    <div className={styles.location}>
      <div className={styles.whereCenter}>
        Você está em: <Link to="/">Home</Link> &gt; Catálogo
      </div>
    </div>
    <div className={styles.centerData}>
      <div className={styles.textBox} style={{ width: '100%', marginLeft: 0, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className={styles.mainProductTitle} style={{ borderBottom: 'none', textAlign: 'center' }}>
          Catálogo
        </div>
        <div style={{
          fontSize: '48px',
          color: '#ccc',
          marginBottom: '20px',
        }}>
          🔧
        </div>
        <p className={styles.just} style={{ textAlign: 'center', fontSize: '16px', color: '#999' }}>
          <strong>Em construção</strong>
        </p>
        <p className={styles.just} style={{ textAlign: 'center', fontSize: '13px', color: '#bbb' }}>
          Esta seção está sendo preparada e estará disponível em breve.
        </p>
      </div>
      <div className={styles.clear}></div>
    </div>
  </Layout>
);

export default Catalogo;
