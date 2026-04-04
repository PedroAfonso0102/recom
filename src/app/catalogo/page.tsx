import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';

export default function CatalogoPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Catálogo em Atualização</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Estamos preparando um novo catálogo digital completo para facilitar suas consultas de ferramentas de corte.
        Enquanto isso, nossa equipe técnica está à disposição no WhatsApp.
      </p>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer">
            Falar com Engenharia
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            Voltar para Home
          </Link>
        </Button>
      </div>

      {/* TODO: Fase 2 - Implementar a listagem real do catálogo e roteamento dinâmico /catalogo/[categoria]/[slug] */}
    </div>
  );
}
