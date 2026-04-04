import React from 'react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { categoria: string, slug: string } }) {
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | RECOM Metal Duro`,
    description: `Detalhes do produto ${params.slug} na categoria ${params.categoria}`,
  };
}

export default function ProdutoDetalhe({ params }: { params: { categoria: string, slug: string } }) {
  const { categoria, slug } = params;

  return (
    <div className="container mx-auto px-4 max-w-6xl py-6">
      <div className="text-sm text-gray-500 mb-6 bg-gray-100 p-2 rounded capitalize">
        <span>Você está em: </span>
        <Link href="/" className="text-brand-blue hover:text-brand-orange font-semibold">Home</Link>
        <span> &gt; </span>
        <Link href="/produtos" className="text-brand-blue hover:text-brand-orange font-semibold">Produtos</Link>
        <span> &gt; {categoria} &gt; {slug.replace(/-/g, ' ')}</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 border-b-2 border-brand-orange pb-3 inline-block capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-gray-600 mb-6">
          Em breve: Detalhes técnicos, tabelas de aplicação e especificações completas para este produto.
        </p>
      </div>
    </div>
  );
}