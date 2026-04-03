import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import promocaoImg from '../assets/images/promocao1410-2.jpg';

export const Promocoes = () => {
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
           <span className="text-primary font-bold text-xs uppercase tracking-widest">Ofertas Especiais</span>
           <h1 className="text-4xl lg:text-6xl font-heading font-black text-secondary tracking-tighter uppercase mt-2 flex items-center gap-4">
             Promoções
             <Tag className="w-8 h-8 text-primary" />
           </h1>
        </div>

        <div className="bg-white p-8 md:p-12 border border-secondary/10 shadow-sm relative overflow-hidden text-center mb-16">
          <div className="max-w-2xl mx-auto">
             <p className="text-lg text-secondary/70 font-sans leading-relaxed">
               Aproveite nossas promoções em fresas, cones, brocas, pinças e outras ferramentas de alta performance. Consulte nossos preços especiais para renovar o estoque da sua empresa e garantir a melhor relação custo-benefício do mercado.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Card Promoção Exemplo */}
           <div className="bg-white border border-secondary/10 shadow-sm hover:border-primary/50 transition-colors group flex flex-col">
              <div className="p-4 bg-secondary text-white flex justify-between items-center">
                 <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Destaque Mês</span>
                 <span className="px-2 py-1 bg-primary text-[10px] font-bold uppercase tracking-widest">Oferta</span>
              </div>
              <div className="p-1 bg-neutral">
                 <img src={promocaoImg} alt="Promoção" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                 <h3 className="text-xl font-heading font-black text-secondary uppercase tracking-tight mb-2">
                   Kit Ferramentas Rotativas
                 </h3>
                 <p className="text-sm text-secondary/60 font-sans mb-6 flex-1">
                   Descontos exclusivos em toda a linha de ferramentas rotativas Mitsubishi Materials. Condições especiais para compras em lote.
                 </p>
                 <a href="/contato" className="block text-center w-full py-3 bg-secondary text-white font-mono text-[10px] uppercase tracking-widest hover:bg-primary transition-colors">
                   Solicitar Cotação
                 </a>
              </div>
           </div>

           {/* Placeholder Outras Promoções */}
           <div className="border-2 border-dashed border-secondary/20 flex flex-col items-center justify-center p-12 text-center bg-white/50">
              <Tag className="w-12 h-12 text-secondary/20 mb-4" />
              <h3 className="text-lg font-heading font-bold text-secondary/40 uppercase tracking-widest mb-2">
                Mais ofertas em breve
              </h3>
              <p className="text-xs text-secondary/40 font-mono max-w-xs">
                Nossa equipe comercial está preparando novas condições especiais para você.
              </p>
           </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Promocoes;