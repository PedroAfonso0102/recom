import React from 'react';
import ContactForm from '../../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contato | RECOM Metal Duro',
  description: 'Fale com a nossa equipe de engenharia de aplicação. Suporte técnico, catálogos e orçamentos para ferramentas de usinagem.',
};

export default function Contato() {
  return (
    <div className="w-full pt-28 pb-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-gray mb-4">Contato Técnico</h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto opacity-80 mb-6"></div>
          <p className="text-gray-600">
            Nossa equipe de engenharia está à disposição para auxiliar na seleção da melhor ferramenta para o seu processo de usinagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulário de Contato */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-xl font-bold text-brand-gray mb-2">Envie sua Especificação</h3>
            <p className="text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
              Preencha o formulário abaixo com as informações técnicas da sua necessidade.
            </p>
            <ContactForm />
          </div>

          {/* Informações da Empresa */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
              <h3 className="text-xl font-bold text-brand-gray mb-6">Fale Diretamente</h3>

              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-orange mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-gray mb-1">Telefones</strong>
                    <p>(19) 3233-2224 (PABX)</p>
                    <p>Fax: (19) 3232-6935</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-orange mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-gray mb-1">E-mail Corporativo</strong>
                    <a href="mailto:vendas.recom@montelione.com.br" className="hover:text-brand-blue transition-colors">vendas.recom@montelione.com.br</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-orange mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-gray mb-1">Horário de Atendimento</strong>
                    <p>Segunda a Sexta</p>
                    <p>08:00 às 18:00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-orange mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-gray mb-1">Localização da Sede</strong>
                    <address className="not-italic">
                      Rua Alferes João José, 350<br/>
                      Jardim Chapadão<br/>
                      Campinas - SP<br/>
                      CEP: 13070-188
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-2 border border-gray-100 shadow-sm rounded-sm h-[300px] w-full relative">
              <iframe
                src="https://www.google.com/maps?q=Rua+Alferes+João+José,+350,+Campinas,+SP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Localização RECOM Metal Duro"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}