import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import kougImg from '../assets/images/koug.png';
import makeeImg from '../assets/images/makee.png';
import koudoeImg from '../assets/images/koudoe.png';
import kirehaeImg from '../assets/images/kirehae.png';

export const Produtos = () => {
  const sidebarLinks = [
    { name: "O que é Metal Duro?", path: "/produtos" },
    { name: "Sugestões de Utilização", path: "/sugestoes-de-utilizacao" },
    { name: "Segurança nas Ferramentas", path: "/seguranca" },
    { name: "Torneamento", path: "/torneamento" },
    { name: "Fresamento", path: "/fresamento" },
    { name: "Furação", path: "/furacao" },
    { name: "Vídeos", path: "/videos" },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <div className="mb-12 border-b-2 border-secondary pb-8">
           <span className="text-primary font-bold text-xs uppercase tracking-widest">Catálogo e Conhecimento</span>
           <h1 className="text-4xl lg:text-6xl font-heading font-black text-secondary tracking-tighter uppercase mt-2">
             Produtos
           </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          <aside className="lg:w-1/4 w-full">
            <div className="bg-white border border-secondary/10 p-6 sticky top-8 shadow-sm">
               <h3 className="font-heading font-black text-secondary uppercase tracking-widest text-sm mb-6 pb-4 border-b border-secondary/10">
                 Conteúdo Técnico
               </h3>
               <ul className="space-y-2">
                 {sidebarLinks.map((link, idx) => (
                   <li key={idx}>
                     <Link
                       to={link.path}
                       className="group flex items-center justify-between p-3 text-xs font-mono uppercase tracking-widest text-secondary/60 hover:bg-neutral hover:text-primary transition-colors border border-transparent hover:border-secondary/5"
                     >
                       {link.name}
                       <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          </aside>

          <main className="lg:w-3/4 w-full">
             <div className="space-y-12">

               {/* Introdução */}
               <div className="bg-white p-8 md:p-10 border border-secondary/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 bg-primary h-full transition-all duration-300 group-hover:w-2" />

                  <h2 className="text-2xl font-heading font-black text-secondary uppercase tracking-tighter mb-6 flex items-center gap-4">
                    Introdução ao Metal Duro
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="prose prose-neutral max-w-none text-secondary/70 font-sans leading-relaxed text-sm flex-1">
                        <p className="mb-4">
                          Estamos rodeados por muitos produtos metálicos em nosso dia-a-dia. Você sabe como esses produtos são fabricados? Há muitas maneiras de usinar metais, mas o método mais utilizado é o corte. Aqui vamos aprender sobre ferramentas de corte e processos de corte. O que queremos dizer com "ferramentas de corte"?
                        </p>
                        <p className="mb-4">
                          Primeiro, vejamos alguns exemplos de ferramentas de corte presentes em nosso dia-a-dia. Facas e raladores na cozinha, tesouras e apontadores nos escritórios e serrotes e plainas na garagem são ferramentas de corte. Estas ferramentas de corte possuem uma característica comum que é a de mudar o formato de coisas pelo corte e/ou pela produção de cavacos.
                        </p>
                        <p>
                          Como você viu até agora, ferramentas de corte são ferramentas que cortam coisas para que adquiram um formato desejado. Ferramentas de corte em nosso dia-a-dia cortam frutas, vegetais e madeira, mas as ferramentas de corte produzidas pela <strong>Mitsubishi Materiais</strong> cortam materiais mais duros, como aço. Agora, vejamos as ferramentas de corte para usinar aço, o principal material industrial no mundo.
                        </p>
                     </div>
                     <div className="w-full md:w-1/3 flex-shrink-0">
                        <img src={kougImg} alt="Koug" className="w-full border border-secondary/10 shadow-sm p-1 bg-neutral grayscale hover:grayscale-0 transition-all" />
                     </div>
                  </div>
               </div>

               {/* Processo de Fabricação */}
               <div className="bg-white p-8 md:p-10 border border-secondary/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 bg-primary h-full transition-all duration-300 group-hover:w-2" />

                  <h2 className="text-2xl font-heading font-black text-secondary uppercase tracking-tighter mb-6 flex items-center gap-4">
                    Processo de Fabricação
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                     <div className="prose prose-neutral max-w-none text-secondary/70 font-sans leading-relaxed text-sm flex-1">
                        <p className="mb-4">
                          Vamos ver o processo de fabricação de metal duro. Primeiro, misture carboneto de tungstênio com cobalto para chegar ao pó que é classificado como matéria-prima.
                        </p>
                        <p>
                          A mistura granulada é colocada num molde côncavo e é prensada. Isso fornece uma consistência moderada como a do giz. Depois, o compacto prensado é colocado num forno de sinterização e é aquecido a uma temperatura de aproximadamente 1400ºC, resultando no metal duro. Depois de sinterizado, o volume diminui consideravelmente.
                        </p>
                     </div>
                     <div className="w-full md:w-1/3 flex-shrink-0">
                        <img src={makeeImg} alt="Fabricação" className="w-full border border-secondary/10 shadow-sm p-1 bg-neutral grayscale hover:grayscale-0 transition-all" />
                     </div>
                  </div>

                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-neutral/50 p-6 border border-secondary/5">
                     <div className="prose prose-neutral max-w-none text-secondary/70 font-sans leading-relaxed text-sm flex-1">
                        <p>
                          Além disso, a dureza do metal duro está entre a dureza do diamante e da safira e o seu peso é aproximadamente duas vezes o aço. Então, como cortamos esse metal tão duro?
                        </p>
                     </div>
                     <div className="w-full md:w-1/4 flex-shrink-0">
                        <img src={koudoeImg} alt="Dureza" className="w-full grayscale hover:grayscale-0 transition-all mix-blend-multiply" />
                     </div>
                  </div>
               </div>

               {/* O que é Usinagem */}
               <div className="bg-white p-8 md:p-10 border border-secondary/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 bg-primary h-full transition-all duration-300 group-hover:w-2" />

                  <h2 className="text-2xl font-heading font-black text-secondary uppercase tracking-tighter mb-6 flex items-center gap-4">
                    O que é Usinagem?
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                     <div className="prose prose-neutral max-w-none text-secondary/70 font-sans leading-relaxed text-sm flex-1">
                        <p>
                          A aresta de corte corta o material e produz cavacos. A temperatura na ponta da aresta de corte chega a 800ºC devido ao impacto e à fricção. As classes de metal duro que suportam esse calor e a força de corte são essenciais para uma boa usinagem.
                        </p>
                     </div>
                     <div className="w-full md:w-1/3 flex-shrink-0">
                        <img src={kirehaeImg} alt="Usinagem" className="w-full border border-secondary/10 shadow-sm p-1 bg-neutral grayscale hover:grayscale-0 transition-all" />
                     </div>
                  </div>
               </div>

             </div>
          </main>

        </div>
      </motion.div>
    </Layout>
  );
};

export default Produtos;