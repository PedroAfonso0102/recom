import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Furacao = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Furação
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <ul className="w-full md:w-[200px] m-0 p-0 list-none shrink-0">
        <li className="mb-1"><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className="mb-1"><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className="mb-1"><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className="mb-1"><Link to="/torneamento">Torneamento</Link></li>
        <li className="mb-1"><Link to="/fresamento">Fresamento</Link></li>
        <li className="mb-1 [&>a]:bg-harmonic [&>a]:border-accent-blue [&>a]:text-accent-blue"><Link to="/furacao">Furação</Link></li>
        <li className="mb-1"><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className="flex-1 min-w-0 w-full">
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Furação</div>
        
        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FURAÇÃO</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO / DESCRIÇÕES DOS SÍMBOLOS</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FURAÇÃO (METAL DURO INTEIRIÇO)</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>PEQUENOS DIÂMETROS MWS (BROCAS WSTAR)</li>
          <li>MWE / MWS (BROCAS WSTAR)</li>
          <li>MWS_DB (BROCAS WSTAR)</li>
          <li>MNS / MNS_DB (BROCAS WSTAR)</li>
          <li>MHS (BROCAS WSTAR)</li>
          <li>MZE / MZS</li>
          <li>MGS (BROCA CANHÃO INTEIRIÇA)</li>
          <li>MAE / MAS</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FURAÇÃO (TIPO SOLDADA)</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>BRS / BRM / BRK</li>
          <li>BRA / BRL</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FURAÇÃO (TIPO INTERCAMBIÁVEL)</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>S-TAW</li>
          <li>TAW</li>
          <li>TAFS / TAFM / TAFL</li>
          <li>BUCHA EXPANSIVA (JFS)</li>
        </ul>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ fontSize: '11px', color: '#666' }}>
            <strong>Fonte:</strong> MITSUBISHI MATERIALS
          </p>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  </Layout>
);

export default Furacao;

