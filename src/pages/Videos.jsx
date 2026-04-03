import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Videos = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Vídeos
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <ul className="w-full md:w-[200px] m-0 p-0 list-none shrink-0">
        <li className="mb-1"><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className="mb-1"><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className="mb-1"><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className="mb-1"><Link to="/torneamento">Torneamento</Link></li>
        <li className="mb-1"><Link to="/fresamento">Fresamento</Link></li>
        <li className="mb-1"><Link to="/furacao">Furação</Link></li>
        <li className="mb-1 [&>a]:bg-harmonic [&>a]:border-accent-blue [&>a]:text-accent-blue"><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className="flex-1 min-w-0 w-full">
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Vídeos</div>
        
        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">TORNEAMENTO</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>Linha UE</li>
          <li>Quebra-cavacos MV</li>
          <li>Quebra-cavacos MW/SW</li>
          <li>Quebra-cavacos FJ/MJ/GJ</li>
          <li>Barras de Mandrilar</li>
          <li>Small Tool (SWISS TOOL)</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FRESAMENTO</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>AQX</li>
          <li>ASX400</li>
          <li>BXD</li>
          <li>AJX</li>
          <li>DLC</li>
          <li>SRM2</li>
          <li>APX</li>
          <li>M-Star</li>
          <li>VC-SFPR</li>
          <li>DLC-2MA</li>
          <li>Fresa tipo QMC</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">FURAÇÃO</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>Sistema de furação inteiriça</li>
          <li>Broca super longa Wstar</li>
          <li>TAF</li>
          <li>TAW</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">CLASSE</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>Cobertura CBN (MBC010)</li>
          <li>MB710/MB730</li>
          <li>UC5105/UC5115</li>
          <li>MB8025/MB810/MB835</li>
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

export default Videos;

