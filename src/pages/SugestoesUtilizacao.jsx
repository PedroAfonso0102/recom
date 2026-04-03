import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const SugestoesUtilizacao = () => (
  <Layout>
    <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
      <div className="w-full max-w-5xl mx-auto">
        Você está em: <Link to="/">Home</Link> &gt; Produtos &gt; Sugestões de Utilização
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
      <ul className="w-full md:w-[200px] m-0 p-0 list-none shrink-0">
        <li className="mb-1"><Link to="/produtos">O que é Metal Duro?</Link></li>
        <li className="mb-1 [&>a]:bg-harmonic [&>a]:border-accent-blue [&>a]:text-accent-blue"><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
        <li className="mb-1"><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
        <li className="mb-1"><Link to="/torneamento">Torneamento</Link></li>
        <li className="mb-1"><Link to="/fresamento">Fresamento</Link></li>
        <li className="mb-1"><Link to="/furacao">Furação</Link></li>
        <li className="mb-1"><Link to="/videos">Vídeos</Link></li>
      </ul>

      <div className="flex-1 min-w-0 w-full">
        <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Sugestões de Utilização</div>
        
        <table className="w-full border-collapse text-sm mt-4 bg-white block overflow-x-auto">
          <thead>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <th className="p-2 md:p-4 text-left bg-header-top text-white text-sm font-semibold border border-header-bottom">Produtos</th>
              <th className="p-2 md:p-4 text-left bg-header-top text-white text-sm font-semibold border border-header-bottom">Perigo</th>
              <th className="p-2 md:p-4 text-left bg-header-top text-white text-sm font-semibold border border-header-bottom">Precaução</th>
            </tr>
          </thead>
          <tbody>
            {/* Todas as Ferramentas */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Todas as Ferramentas de Usinagem</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Ferramentas de usinagem têm arestas de corte afiadas. Manuseá-las com mãos nuas pode provocar ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Tome precauções como utilizar luvas para manusear e instalar ferramentas.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">O uso impróprio de ferramentas e a aplicação de dados de corte inadequadas podem causar quebras e estilhaços que podem ser expelidos da máquina, provocando riscos de acidentes e ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamentos de proteção individuais adequados e óculos de proteção. *Referencie-se nas notas explicativas de uso. Use ferramentas de acordo com as recomendações do catálogo.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">O aumento dos impactos e dos esforços de usinagem devido ao desgaste excessivo pode causar quebras e estilhaços que podem ser expelidos da máquina, provocando riscos de acidentes e ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamentos de proteção individuais adequados e óculos de proteção. *Substitua a ferramenta antes do desgaste excessivo.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Ferramentas e peças podem tornar-se extremamente quentes durante a usinagem. Tocá-las com mãos nuas pode causar queimaduras.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Tome precauções como usar luvas.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Cavacos quentes são produzidos e expelidos durante a usinagem provocando risco de ferimentos e queimaduras.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamentos de proteção individuais adequados e óculos de proteção. *Durante a remoção de detritos e limpeza da máquina, tenha certeza de que a máquina está parada e use luvas de proteção.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Em usinagem, fagulhas, cavacos quentes e geração de calor causados por quebra da ferramenta provoca risco de ignição de fogo e incêndio.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Evite utilizar ferramentas onde há a possibilidade de ignição de fogo e incêndio. *Tenha certeza da localização dos extintores de incêndio quando não usar refrigeração à base de óleo solúvel.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">O uso de máquinas, pinças e ferramentas sem balanceamento em altas rotações pode causar quebras e provocar riscos de ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamento de proteção adequados e óculos de proteção. *Verifique a máquina sempre que existirem vibrações e sons anormais.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Manusear peças usinadas com rebarbas com as mãos nuas podem provocar ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamento de proteção adequados tais como luvas e óculos de proteção.</td>
            </tr>

            {/* Insertos Intercambiáveis */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Insertos Intercambiáveis</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Se insertos e componentes não forem fixados de forma apropriada, eles podem se soltar e ser expelidos produzindo riscos de ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Limpe os alojamentos dos insertos antes de fixá-los. *Use a ferramenta adequada para fixar os insertos e assegure-se que insertos e componentes estão bem fixos. Não utilize as ferramentas para outros fins que não sejam os prescritos.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Fixar insertos e componentes com força excessivas através do uso de extensões e canos podem quebrá-los e expeli-los.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Não utilize extensões extras, apenas as ferramentas e componentes fornecidos.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Quando utilizar ferramentas em usinagem de altas velocidades, componentes e insertos podem ser expelidos pela força centrífuga.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Referencie-se nas notas explicativas dos catálogos. Utilize ferramentas dentro das recomendações de usinagem.</td>
            </tr>

            {/* Suportes e Rotativas */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Suportes e Outras Ferramentas Rotativas</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Fresas têm arestas de corte afiadas. Manuseá-las com mãos nuas pode causar ferimentos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Tome precauções como usar luvas.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Falta de balanceamento ou ferramentas fora de centro pode provocar vibrações e danos que podem causar sua quebra e expelir fragmentos da máquina.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Aplique velocidades de corte dentro das recomendações de usinagem. *Ajustes de precisão, balanceamento da árvore e substituição dos rolamentos da máquina periodicamente previne rotações excêntricas e vibrações causadas pelo desgaste destes componentes.</td>
            </tr>

            {/* Brocas */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Brocas</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Alguns casos de usinagem onde a peça gira podem produzir um disco afiado que pode causar a quebra da ferramenta.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Use equipamentos de proteção individual adequados e óculos de proteção.</td>
            </tr>
            <tr className="even:bg-harmonic odd:bg-white hover:bg-[#eef3fb]">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text"></td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Brocas com diâmetros extremamente pequenos têm uma ponta muito afiada que pode perfurar a pele se não manuseadas com cuidado. Se a broca quebrar durante a usinagem alguns estilhaços podem ser expelidos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Manuseie com cuidado. Use equipamentos de proteção individuais adequados e óculos de proteção.</td>
            </tr>

            {/* Ferramentas Soldadas */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Ferramentas Soldadas</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Fragilidade da solda e quebra de insertos podem causar danos.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Antes do uso certifique-se de que estão bem soldados. *Não utilize em condições que produzem altas temperaturas.</td>
            </tr>

            {/* Outras */}
            <tr className="bg-[#e8ecf1] border-l-4 border-accent-blue font-bold text-primary-text [&>td]:py-4">
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Outras</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">Máquinas e ferramentas podem sofrer danos se eles são utilizados para outros propósitos além dos quais foram projetados.</td>
              <td className="p-2 md:p-4 border border-border-light leading-relaxed align-top text-secondary-text">*Utilize-os somente para o que são indicados.</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ fontSize: '11px', color: '#666' }}>
            <strong>Fonte:</strong> MITSUBISHI MATERIALS<br />
            Este catálogo completa as precauções básicas para utilização de nossos produtos com segurança.
          </p>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  </Layout>
);

export default SugestoesUtilizacao;

