import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Torneamento = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Torneamento
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <ul className="w-full md:w-[200px] m-0 p-0 list-none shrink-0">
        <li className="mb-1"><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className="mb-1"><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className="mb-1"><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className="mb-1 [&>a]:bg-harmonic [&>a]:border-accent-blue [&>a]:text-accent-blue"><Link to="/torneamento">Torneamento</Link></li>
        <li className="mb-1"><Link to="/fresamento">Fresamento</Link></li>
        <li className="mb-1"><Link to="/furacao">Furação</Link></li>
        <li className="mb-1"><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className="flex-1 min-w-0 w-full">
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Torneamento</div>
        
        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Inserto de Torneamento</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO</li>
          <li>TOOL NAVI</li>
          <li>APLICAÇÃO DE CLASSES E QUEBRA-CAVACOS PARA TORNEAMENTO (PDF: 561KB)</li>
          <li>SISTEMA DE QUEBRA-CAVACO RETIFICADOS</li>
          <li>INSERTO ALISADOR</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Small Tools</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>APRESENTAÇÃO DE SMALL TOOLS</li>
          <li>CLASSIFICAÇÃO DAS FERRAMENTAS DE TORNEAMENTO EXTERNO
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>FERRAMENTAS PARA MAGAZINES</li>
              <li>TORRES OPOSTAS</li>
              <li>TIPO MAGAZINES</li>
              <li>TORNOS COM CAME</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Rosqueamento</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>ROSCA STANDARD E INSERTO • SUPORTES CORRESPONDENTES</li>
          <li>CARACTERÍSTICAS DA LINHA MMT</li>
          <li>MÉTODO DE ROSQUEAMENTO
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>MÉTODO DE ROSQUEAMEN</li>
              <li>TIPOS DE INSERTOS</li>
              <li>MÉTODOS DE AVANÇO</li>
              <li>PROFUNDIDADE DE ROSCA</li>
            </ul>
          </li>
          <li>SELECIONANDO CONDIÇÕES DE CORTE</li>
          <li>ESCOLHENDO O CALÇO DO INSERTO PARA A LINHA MMT</li>
          <li>PADRÃO DE PROFUNDIDADE DE CORTE</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Inserto de Torneamento ( PCD e CBN )</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Ferramentas para Torneamento Externo</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>Tipo LL, Tipo Dupla Fixação, Tipo WP, Tipo SP, Suporte para Perfilar, Tipo AL</li>
              <li>Tipo ML, Tipo MC</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Madrilhamento</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>DIMPLE BAR</li>
              <li>Suportes para Torneamento Interno ISO [Para Alumínio, tipo-M, tipo-P e tipo-S]</li>
            </ul>
          </li>
          <li>CARACTERÍSTICAS DA DIMPLE BAR</li>
          <li>AFIAÇÃO DE ARESTA DE CORTE DE BARRAS DE MANDRILAR MICRO-MINI</li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Canal Externo</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>CARACTERÍSTICAS DA SÉRIE GY</li>
          <li>REFERÊNCIA PARA PEDIDO DA SÉRIE GY
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>INSERTO</li>
              <li>LOCALIZADOR</li>
              <li>SUPORTE MODULAR (EXTERNO)</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Canal</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>IDENTIFICAÇÃO DE SUPORTE DG
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>SUPORTE DG</li>
              <li>GRAMPO DE FIXAÇÃO</li>
              <li>CONJUNTO DE PORTA-FERRAMENTAS</li>
              <li>ESTRUTURA</li>
              <li>LOCALIZADOR (Para canal externo e rebaixo)</li>
              <li>LOCALIZADOR (Para canal de face)</li>
            </ul>
          </li>
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

export default Torneamento;

