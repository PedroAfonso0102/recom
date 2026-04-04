import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import escritorioImg from '../../assets/images/escritorio.jpg';

export const metadata = {
  title: 'A Empresa | RECOM Metal Duro',
  description: 'Conheça a história e missão da RECOM Metal Duro, distribuidora de ferramentas de corte desde 1990.',
};

export default function Empresa() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
        <span> &gt; A Empresa</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 border-b-2 border-brand-orange pb-3 inline-block">A Empresa</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src={escritorioImg}
                alt="Escritório Recom"
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:w-2/3 space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Fundada no ano de 1990 a <strong className="text-gray-900 font-semibold">&quot;RECOM Metal Duro&quot;</strong>, localizada em Campinas, interior do Estado de São Paulo, especializou-se em Ferramentas de Corte Rotativas e Estáticas.
            </p>

            <p>
              A partir do ano de 1992, passamos a representar a <strong className="text-gray-900 font-semibold">&quot;MITSUBISHI CARBIDE&quot;</strong> através de um importador localizado em Belo Horizonte - MG, sendo responsáveis pelo atendimento da cidade de Campinas e região, bem como do interior do Estado de São Paulo.
            </p>

            <p>
              Desde 1998, somos <strong className="text-gray-900 font-semibold">Representante e Distribuidor Autorizado</strong> direto da <strong className="text-gray-900 font-semibold">&quot;MMC METAL DO BRASIL&quot;</strong>, subsidiária da &quot;MITSUBISHI MATERIALS&quot; (Japão).
            </p>

            <p>
              Contamos hoje com uma equipe de técnicos altamente treinados pelo Departamento Técnico da &quot;MMC METAL DO BRASIL&quot;, preparada para oferecer o melhor atendimento e suporte aos nossos parceiros e clientes.
            </p>

            <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
               <h3 className="text-xl font-bold text-brand-blue mb-3">Nossa Missão</h3>
               <p className="italic text-gray-700">
                 &quot;Fornecer soluções de alta tecnologia em ferramentas de corte, garantindo o aumento da produtividade e a redução de custos nos processos de usinagem de nossos clientes.&quot;
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}