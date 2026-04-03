import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import escritorioImg from '../assets/images/escritorio.jpg';

export const Empresa = () => {
  const sidebarLinks = [
    { name: "O que é Metal Duro?", path: "/o-que-e-metal-duro" },
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
           <span className="text-primary font-bold text-xs uppercase tracking-widest">Institucional</span>
           <h1 className="text-4xl lg:text-6xl font-heading font-black text-secondary tracking-tighter uppercase mt-2">
             A Empresa
           </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Menu */}
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

          {/* Main Content */}
          <main className="lg:w-3/4 w-full">
             <div className="bg-white p-8 md:p-12 border border-secondary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

                <h2 className="text-2xl font-heading font-black text-secondary uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <span className="w-8 h-1 bg-primary inline-block"></span>
                  Sobre a Recom Metal Duro
                </h2>

                <div className="prose prose-neutral max-w-none text-secondary/70 font-sans leading-relaxed mb-8">
                  <p className="mb-6">
                    A <strong>Recom Metal Duro</strong> é uma empresa focada em soluções para o mercado de usinagem, com uma vasta experiência e know-how. Trabalhamos com produtos de alta tecnologia e qualidade reconhecida mundialmente, oferecendo a nossos clientes o que há de melhor em ferramentas de corte rotativas e estáticas.
                  </p>
                  <p>
                    Como Representante e Distribuidor Autorizado da <strong>Mitsubishi Materials, 7Leaders, BT Fixo e Kifix</strong>, nossa equipe está altamente capacitada para ajudá-lo a encontrar a melhor solução e custo-benefício para sua produção.
                  </p>
                </div>

                <div className="mt-12 border-t border-secondary/10 pt-12">
                   <img src={escritorioImg} alt="Escritório Recom" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-secondary/10 shadow-sm" />
                   <p className="text-center font-mono text-[10px] text-secondary/40 uppercase tracking-widest mt-4">
                     Instalações Recom Metal Duro
                   </p>
                </div>
             </div>
          </main>

        </div>
      </motion.div>
    </Layout>
  );
};

export default Empresa;
