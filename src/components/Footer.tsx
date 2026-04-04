import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-brand-off-white py-12 mt-16 border-t-[3px] border-brand-orange font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">

          {/* Endereço / Mapa (Placeholder) */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="font-heading font-bold text-xl mb-2 text-white border-b border-brand-light-gray/20 pb-2">Nossa Sede</h3>
            <p><strong>RECOM Metal Duro</strong><br />AA Monteleone Comércio</p>
            <p className="text-gray-300">Rua Alferes João José, 350<br />Jardim Chapadão<br />Campinas - SP - Brasil<br />CEP: 13070-188</p>
            <div className="w-full h-32 bg-gray-600 rounded mt-2 border border-brand-light-gray/20 flex items-center justify-center text-xs text-gray-400">
              [Mapa de Localização]
            </div>
          </div>

          {/* Contato Institucional */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="font-heading font-bold text-xl mb-2 text-white border-b border-brand-light-gray/20 pb-2">Atendimento</h3>
            <div>
              <p className="font-bold text-gray-300 mb-1">Telefones</p>
              <p>PABX: (19) 3233 2224</p>
              <p>Fax: (19) 3232 6935</p>
            </div>
            <div className="pt-2">
              <p className="font-bold text-gray-300 mb-1">E-mail Comercial</p>
              <a href="mailto:vendas.recom@montelione.com.br" className="text-brand-orange hover:text-white transition-colors">
                vendas.recom@montelione.com.br
              </a>
            </div>
            <div className="pt-2">
              <p className="font-bold text-gray-300 mb-1">Horário de Funcionamento</p>
              <p>Segunda a Sexta: 08:00 às 17:30</p>
            </div>
          </div>

          {/* Contato Direto (Form Simplificado) */}
          <div className="flex flex-col text-sm">
            <h3 className="font-heading font-bold text-xl mb-2 text-white border-b border-brand-light-gray/20 pb-2">Contato Rápido</h3>
            <form className="flex flex-col space-y-3 mt-2">
              <input type="text" placeholder="Nome / Empresa" className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-brand-orange transition-colors" />
              <input type="email" placeholder="E-mail profissional" className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-brand-orange transition-colors" />
              <textarea placeholder="Sua mensagem" rows={3} className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"></textarea>
              <button type="button" className="bg-brand-blue hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors w-max">
                Enviar Mensagem
              </button>
              <p className="text-xs text-gray-400 mt-2">Retornaremos o contato em breve.</p>
            </form>
          </div>

        </div>

        <div className="border-t border-brand-light-gray/20 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 RECOM Metal Duro - AA Monteleone Comércio. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <a href="/empresa" className="hover:text-white transition-colors">A Empresa</a>
            <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
            <a href="/contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
