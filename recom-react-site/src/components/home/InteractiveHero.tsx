import { motion } from "framer-motion"

import tornoGif from '../../assets/images/torno.gif'
import fresaGif from '../../assets/images/fresa.gif'
import furacaoGif from '../../assets/images/furacao.gif'

export function InteractiveHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#cc0000_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] tracking-widest uppercase mb-6">
              Distribuidor Autorizado
            </div>

            <h1 className="text-5xl lg:text-7xl font-heading font-black text-secondary tracking-tighter uppercase leading-[0.9] mb-6">
              Alta <span className="text-primary">Performance</span><br/>
              em Usinagem
            </h1>

            <p className="text-secondary/60 font-mono text-sm leading-relaxed max-w-lg mb-10">
              Soluções completas e tecnologia de ponta em ferramentas de corte rotativas e estáticas. Especialistas em Metal Duro para elevar a produtividade da sua indústria.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/produtos" className="px-8 py-4 bg-primary text-white font-heading font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-colors">
                Explorar Catálogo
              </a>
              <a href="/contato" className="px-8 py-4 bg-white border border-secondary/20 text-secondary font-heading font-black uppercase tracking-widest text-xs hover:bg-neutral transition-colors">
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="grid grid-cols-2 gap-4"
             >
                <div className="space-y-4 pt-12">
                   <div className="bg-white p-2 shadow-xl border border-secondary/5">
                      <img src={tornoGif} alt="Torneamento" className="w-full h-auto" />
                      <div className="p-4 text-center">
                        <span className="text-[10px] font-heading font-black text-secondary uppercase tracking-widest">Torneamento</span>
                      </div>
                   </div>
                   <div className="bg-white p-2 shadow-xl border border-secondary/5">
                      <img src={fresaGif} alt="Fresamento" className="w-full h-auto" />
                      <div className="p-4 text-center">
                        <span className="text-[10px] font-heading font-black text-secondary uppercase tracking-widest">Fresamento</span>
                      </div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white p-2 shadow-xl border border-secondary/5">
                      <img src={furacaoGif} alt="Furação" className="w-full h-auto" />
                      <div className="p-4 text-center">
                        <span className="text-[10px] font-heading font-black text-secondary uppercase tracking-widest">Furação</span>
                      </div>
                   </div>
                   <div className="bg-secondary p-8 flex flex-col justify-center text-white h-48 shadow-xl">
                      <span className="text-3xl font-heading font-black tracking-tighter text-primary mb-2">+25</span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">Anos de Experiência</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
