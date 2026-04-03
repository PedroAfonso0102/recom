import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import promoImg from '../assets/images/promocao1410-2.jpg';

const Promocoes = () => {
  return (
    <Layout>
      <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
        <div className="w-full max-w-5xl mx-auto">
          Você está em: <Link to="/">Home</Link> &gt; Promoções
        </div>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
        <div className="flex-1 min-w-0 w-full" style={{ width: '100%' }}>
          <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Promoções e Ofertas Especiais</div>
          
          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
            A RECOM Metal Duro oferece regularmente condições especiais em linhas selecionadas de ferramentas Mitsubishi Materials. Aproveite nossos preços competitivos para otimizar sua produção com o melhor custo-benefício do mercado.
          </p>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <img 
              src={promoImg} 
              alt="Promoção RECOM" 
              style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} 
            />
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '4px', borderLeft: '4px solid #cc0000', marginBottom: '30px' }}>
            <h3 style={{ marginTop: 0, color: '#cc0000' }}>Interessado em nossas ofertas?</h3>
            <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
              Nossas promoções são atualizadas frequentemente. Para receber a lista completa de itens em oferta ou solicitar uma cotação especial para grandes volumes, entre em contato com nosso departamento comercial.
            </p>
            <div style={{ marginTop: '15px' }}>
              <Link to="/contato" style={{ display: 'inline-block', backgroundColor: '#cc0000', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px' }}>
                Solicitar Orçamento Agora
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
            <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ fontSize: '11px', color: '#666' }}>
              * Promoções válidas enquanto durarem os estoques. Imagens meramente ilustrativas.
            </p>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </Layout>
  );
};

export default Promocoes;