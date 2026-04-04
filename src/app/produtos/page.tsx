import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Produtos | RECOM Metal Duro',
  description: 'Catálogo de ferramentas de corte, torneamento, fresamento e furação.',
};

export default function Produtos() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
        <span> &gt; Produtos</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 border-b-2 border-brand-orange pb-3 inline-block">Produtos</h1>
        <p className="text-gray-600 mb-6">Explore nossa linha completa de ferramentas de precisão para usinagem pesada.</p>

        {/* Placeholder grid for product categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {['Torneamento', 'Fresamento', 'Furação'].map((categoria) => (
             <Link key={categoria} href={`/produtos/${categoria.toLowerCase()}/ver-todos`} className="block group">
               <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md hover:border-brand-blue transition-all">
                 <h3 className="text-xl font-bold text-gray-800 group-hover:text-brand-orange mb-2">{categoria}</h3>
                 <p className="text-sm text-gray-500">Ver linha completa</p>
               </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
}