import { ArrowRight, Newspaper, Video, Calendar } from "lucide-react"
import logoMit from '../../assets/images/LOGO-MIT.png'
import posterImg from '../../assets/images/linha_mitsu.jpg'

export function HomeBento() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-heading font-black text-secondary tracking-tighter uppercase border-l-4 border-primary pl-4">
          Novidades & Mídia
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Video Feature */}
        <div className="md:col-span-2 bg-secondary text-white relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20 bg-gradient-to-b from-black/80 to-transparent">
             <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Destaque</span>
             </div>
             <img src={logoMit} alt="MIT" className="h-6 bg-white/10 p-1 rounded backdrop-blur-sm" />
          </div>

          <div className="relative aspect-video w-full">
            <video
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
               controls
               poster={posterImg}
            >
                <source src="http://www.recommetalduro.com.br//webroot/img/VID-20200316-WA0040.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>

        {/* News Items */}
        <div className="md:col-span-1 flex flex-col gap-6">
           <div className="bg-white border border-secondary/10 p-6 flex-1 hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-2 mb-4">
                 <Newspaper className="w-4 h-4 text-primary" />
                 <span className="font-mono text-[10px] uppercase tracking-widest text-secondary/40">Notícia</span>
              </div>
              <h4 className="font-heading font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                 Mitsubishi traz novidades em todas as linhas
              </h4>
              <p className="font-mono text-xs text-secondary/60 mb-4 line-clamp-2">
                 Confira os detalhes sobre as inovações que a Mitsubishi Materials está trazendo para o mercado...
              </p>
              <div className="mt-auto flex items-center justify-between text-[10px] font-mono text-secondary/40 uppercase tracking-widest">
                 <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 30/09/2013</span>
                 <a href="/novidade-linha-mitsubishi" className="text-primary hover:underline flex items-center">Ler Mais <ArrowRight className="w-3 h-3 ml-1"/></a>
              </div>
           </div>

           <div className="bg-white border border-secondary/10 p-6 flex-1 hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-2 mb-4">
                 <Newspaper className="w-4 h-4 text-primary" />
                 <span className="font-mono text-[10px] uppercase tracking-widest text-secondary/40">Evento</span>
              </div>
              <h4 className="font-heading font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                 Veja as fotos da FENASUCRO 2012
              </h4>
              <p className="font-mono text-xs text-secondary/60 mb-4 line-clamp-2">
                 Galeria de fotos exclusiva do nosso estande na FENASUCRO...
              </p>
              <div className="mt-auto flex items-center justify-between text-[10px] font-mono text-secondary/40 uppercase tracking-widest">
                 <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 19/09/2012</span>
                 <a href="/feiras/fenasucro" className="text-primary hover:underline flex items-center">Ver Fotos <ArrowRight className="w-3 h-3 ml-1"/></a>
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}
