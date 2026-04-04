import React from 'react';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contato | RECOM Metal Duro',
  description: 'Entre em contato com a RECOM Metal Duro. Solicite orçamentos, tire dúvidas sobre ferramentas de corte e usinagem.',
};

export default function Contato() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
        <span> &gt; Contato</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 border-b-2 border-brand-orange pb-3 inline-block">Contato</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 lg:min-w-[400px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Solicite um Orçamento</h3>
            <p className="text-gray-600 mb-6">
              Utilize o formulário abaixo para orçamentos técnicos ou dúvidas.
            </p>

            <ContactForm />
          </div>

          <div className="lg:w-1/3 min-w-[300px] flex flex-col gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-brand-blue mb-4">Informações de Contato</h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <strong className="block text-gray-900 mb-1">Endereço:</strong>
                  <p>Rua Alferes João José, 350</p>
                  <p>Jardim Chapadão - Campinas, SP</p>
                  <p>CEP 13070-188</p>
                </div>

                <div>
                  <strong className="block text-gray-900 mb-1">Telefones:</strong>
                  <p>(19) 3233-2224 (PABX)</p>
                  <p>(19) 3232-6935</p>
                </div>

                <div>
                  <strong className="block text-gray-900 mb-1">E-mail:</strong>
                  <a href="mailto:vendas.recom@montelione.com.br" className="text-brand-orange hover:underline font-medium">vendas.recom@montelione.com.br</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-blue mb-4">Onde Estamos</h3>
              <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Alferes+João+José,+350,+Campinas,+SP&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="RECOM Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}