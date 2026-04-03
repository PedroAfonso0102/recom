import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary border-t-4 border-primary text-white mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-2 space-y-4">
             <h3 className="text-xl font-heading font-black tracking-tighter uppercase mb-4 text-white">RECOM Metal Duro</h3>
             <p className="text-white/60 font-mono text-xs leading-relaxed max-w-md">
               Focada em soluções para o mercado de usinagem com alta tecnologia e qualidade reconhecida mundialmente em ferramentas de corte rotativas e estáticas.
             </p>
          </div>

          <div className="col-span-1">
             <h4 className="text-sm font-heading font-bold uppercase tracking-widest mb-4 text-white/80 border-b border-white/10 pb-2 inline-block">Navegação</h4>
             <ul className="space-y-2">
               <li><Link to="/" className="text-white/60 hover:text-primary transition-colors text-xs font-mono uppercase">Home</Link></li>
               <li><Link to="/empresa" className="text-white/60 hover:text-primary transition-colors text-xs font-mono uppercase">A Empresa</Link></li>
               <li><Link to="/produtos" className="text-white/60 hover:text-primary transition-colors text-xs font-mono uppercase">Produtos</Link></li>
               <li><Link to="/contato" className="text-white/60 hover:text-primary transition-colors text-xs font-mono uppercase">Contato</Link></li>
             </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-sm font-heading font-bold uppercase tracking-widest mb-4 text-white/80 border-b border-white/10 pb-2 inline-block">Contato</h4>
             <ul className="space-y-2 text-white/60 font-mono text-xs">
               <li>(19) 3233 2224</li>
               <li>vendas.recom@montelione.com.br</li>
               <li className="pt-2">Rua Alferes João José, 350</li>
               <li>Campinas - SP</li>
             </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] py-4 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
          RECOM METAL DURO © {new Date().getFullYear()} / TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
