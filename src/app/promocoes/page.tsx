import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Promoções | RECOM Metal Duro',
  description: 'Promoções especiais de ferramentas de corte.',
};

export default function Promocoes() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
        <span> &gt; Promoções</span>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 border-b-2 border-brand-orange pb-3 inline-block">Promoções</h1>
        <p className="text-gray-600 mb-6">Em breve: Nossas promoções mais recentes.</p>
      </div>
    </div>
  );
}