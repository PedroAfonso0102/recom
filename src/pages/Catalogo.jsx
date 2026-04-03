import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Catalogo = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Catálogo
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <div className="flex-1 min-w-0 w-full" style={{ width: '100%', marginLeft: 0, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue" style={{ borderBottom: 'none', textAlign: 'center' }}>
          Catálogo
        </div>
        <div style={{
          fontSize: '48px',
          color: '#ccc',
          marginBottom: '20px',
        }}>
          🔧
        </div>
        <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ textAlign: 'center', fontSize: '16px', color: '#999' }}>
          <strong>Em construção</strong>
        </p>
        <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ textAlign: 'center', fontSize: '13px', color: '#bbb' }}>
          Esta seção está sendo preparada e estará disponível em breve.
        </p>
      </div>
      <div className="clear-both"></div>
    </div>
  </Layout>
);

export default Catalogo;
