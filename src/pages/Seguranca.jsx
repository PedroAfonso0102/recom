import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Seguranca = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Segurança nas Ferramentas
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <ul className="w-full md:w-[200px] m-0 p-0 list-none shrink-0">
        <li className="mb-1"><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className="mb-1"><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className="mb-1 [&>a]:bg-harmonic [&>a]:border-accent-blue [&>a]:text-accent-blue"><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className="mb-1"><Link to="/torneamento">Torneamento</Link></li>
        <li className="mb-1"><Link to="/fresamento">Fresamento</Link></li>
        <li className="mb-1"><Link to="/furacao">Furação</Link></li>
        <li className="mb-1"><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className="flex-1 min-w-0 w-full">
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Segurança nas Ferramentas</div>
        
        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">1. Utilização de Ferramentas de Corte</h3>
        <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
          As embalagens dos produtos Mitsubishi trazem uma etiqueta com um aviso. No entanto, algumas ferramentas podem não trazer informações detalhadas de segurança. Leia com atenção as indicações de segurança contidas nesta seção do catálogo antes de manusear ferramentas e outros materiais de metal duro. Além disso, como parte do programa de treinamento em segurança na empresa, notifique todos os seus funcionários sobre o conteúdo desta seção.
        </p>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">2. Características Básicas dos Metais das Ferramentas</h3>
        <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
          <strong>Termos de "Segurança das Ferramentas de Metal Duro"</strong><br/><br/>
          <strong>Ferramentas de Metais Duros:</strong><br/>
          Termo geral para ferramentas de metais como liga de metal duro, cermet, cerâmicas, CBN sinterizado, diamante sinterizado, etc.<br/><br/>
          <strong>Liga de metal duro:</strong><br/>
          Ferramentas com materiais que possuem WC (Carboneto de Tungstênio) como componente principal.
        </p>

        <h4 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Características Físicas</h4>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li><strong>Aparência:</strong> Varia conforme o tipo do material. Ex. cinza, preto, ouro, etc.</li>
          <li><strong>Cheiro:</strong> Nenhum</li>
          <li><strong>Dureza:</strong>
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>Metal duro, Cermet HV500-3000kg/mm²</li>
              <li>Cerâmicas HV1000-4000kg/mm²</li>
              <li>CBN Sinterizado HV2000-5000kg/mm²</li>
              <li>Diamante Sinterizado HV8000-12000kg/mm²</li>
            </ul>
          </li>
          <li><strong>Peso específico:</strong>
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>Metal duro 9-16, Cermet 5-9</li>
              <li>Cerâmicas 2-7, Sinterizado CBN e Diamante 3-5</li>
            </ul>
          </li>
        </ul>

        <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
          <strong>Componentes</strong><br/>
          Metal duro, nitreto, carbonitreto, óxidos como W, Ti, Al, Si, Ta, B e metais como Co, Ni, Cr, Mo.
        </p>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">3. Sugestões de Manuseio de Ferramentas de Metal Duro</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>Os materiais das ferramentas são extremamente duros e quebradiços ao mesmo tempo. Portanto, podem quebrar-se por choques ou apertos excessivos.</li>
          <li>Ferramentas de metal duro possuem peso específico elevado. Por isso, exigem atenção especial como materiais pesados quando o tamanho ou a quantidade forem grandes.</li>
          <li>Materiais das ferramentas e os materiais ferrosos possuem coeficientes de dilatação térmica diferentes. Contração ou expansão para montagem desses produtos podem causar quebras quando aplicadas em temperaturas maiores que as apropriadas às ferramentas.</li>
          <li>Tenha atenção especial na armazenagem desses materiais. Sua tenacidade é diminuída quando são corroídos por óleos refrigerantes ou outros líquidos.</li>
          <li>Para maiores informações, consulte nosso Catálogo de Dados de Segurança dos Materiais. <a href="http://www.mitsubishicarbide.com/msds/" target="_blank" rel="noopener noreferrer">http://www.mitsubishicarbide.com/msds/</a></li>
        </ul>

        <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">4. Sugestões de Utilização de Ferramentas de Corte</h3>
        <ul className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ listStyle: 'square', paddingLeft: '20px' }}>
          <li>Condições superficiais afetam a tenacidade das ferramentas de corte. Portanto, utilize um rebolo diamantado para o acabamento.</li>
          <li>Afiação das ferramentas de corte produz poeira. Inalar grandes volumes desta poeira pode ser prejudicial. Portanto, utilize sistema de ventilação local, máscara de proteção e etc. Se a poeira entrar nos seus olhos ou na sua pele, lave a área em água corrente.</li>
          <li>Afiação de ferramentas de materiais duros ou produtos soldados produzem partículas de metal pesado na refrigeração. Atente-se ao descarte do líquido refrigerante.</li>
          <li>Após a reafiação de ferramentas, assegure-se de que não há trincas.</li>
          <li>Marcar ferramentas e produtos de metais duros com lâmina e/ou caneta elétrica pode causar rachaduras. Evite a utilização de marcas em áreas que recebam qualquer tipo de esforço.</li>
          <li>Usinagem de metais duros de ferramentas em eletroerosão pode causar rachaduras na superfície devido aos elétrons residuais resultando em redução da tenacidade. Elimine as rachaduras através de retífica, etc.</li>
          <li>Ao soldar ferramentas de metais duros, podem ocorrer quebras e danos se a temperatura for muito acima ou muito abaixo do ponto de derretimento do material de solda.</li>
        </ul>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ fontSize: '11px', color: '#666' }}>
            <strong>Fonte:</strong> MITSUBISHI MATERIALS<br />
            Para maiores informações, consulte o Catálogo de Dados de Segurança (MSDS).
          </p>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  </Layout>
);

export default Seguranca;

