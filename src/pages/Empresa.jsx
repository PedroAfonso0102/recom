import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import escritorioImg from '../assets/images/escritorio.jpg';

const Empresa = () => {
  return (
    <Layout>
      <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
        <div className="w-full max-w-5xl mx-auto">
          Você está em: <Link to="/">Home</Link> &gt; A Empresa
        </div>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
        <div className="flex-1 min-w-0 w-full">
          <h1 className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">A Empresa</h1>
          
          <div className="float-none sm:float-right sm:ml-6 mb-4 border border-border-light p-1 bg-white max-w-[320px] w-full">
            <img src={escritorioImg} alt="Escritório Recom" style={{ width: '100%', display: 'block' }} />
          </div>

          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
            Fundada no ano de 1990 a <strong>"RECOM Metal Duro"</strong>, localizada em Campinas, interior do Estado de São Paulo, especializou-se em Ferramentas de Corte Rotativas e Estáticas.
          </p>
          
          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
            A partir do ano de 1992, passamos a representar a <strong>"MITSUBISHI CARBIDE"</strong> através de um importador localizado em Belo Horizonte - MG, sendo responsáveis pelo atendimento da cidade de Campinas e região, bem como do interior do Estado de São Paulo.
          </p>

          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
            Desde 1998, somos <strong>Representante e Distribuidor Autorizado</strong> direto da <strong>"MMC METAL DO BRASIL"</strong>, subsidiária da "MITSUBISHI MATERIALS" (Japão).
          </p>

          <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
            Contamos hoje com uma equipe de técnicos altamente treinados pelo Departamento Técnico da "MMC METAL DO BRASIL", preparada para oferecer o melhor atendimento e suporte aos nossos parceiros e clientes.
          </p>

          <div className="mt-8 pt-6 border-t border-border-light">
             <p className="text-accent-blue font-bold mb-2 text-base uppercase tracking-wider">Nossa Missão</p>
             <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
               Fornecer soluções de alta tecnologia em ferramentas de corte, garantindo o aumento da produtividade e a redução de custos nos processos de usinagem de nossos clientes.
             </p>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </Layout>
  );
};

export default Empresa;