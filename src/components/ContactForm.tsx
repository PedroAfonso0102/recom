'use client';
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for form submission
    setTimeout(() => {
      setStatus({ submitted: true, error: false });
    }, 500);
  };

  if (status.submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm shadow-sm flex flex-col items-center justify-center text-center">
        <h4 className="font-bold text-lg mb-2">Mensagem Recebida</h4>
        <p className="text-sm">Obrigado pelo contato. Nossa equipe de engenharia retornará o mais breve possível.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Aviso de Em Construção */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-sm border border-brand-orange/20">
        <AlertCircle className="text-brand-orange w-12 h-12 mb-3" />
        <h3 className="font-serif text-xl font-bold text-brand-gray mb-1">Integração em Construção</h3>
        <p className="text-brand-gray/80 text-sm text-center max-w-xs">
          O formulário está recebendo melhorias para conexão direta com nosso sistema técnico.
          <br/>Por favor, utilize os contatos ao lado.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 opacity-40 pointer-events-none select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input id="nome" type="text" required className="bg-gray-50 border-gray-200 rounded-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input id="empresa" type="text" className="bg-gray-50 border-gray-200 rounded-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail Corporativo *</Label>
            <Input id="email" type="email" required className="bg-gray-50 border-gray-200 rounded-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone / Ramal</Label>
            <Input id="telefone" type="tel" className="bg-gray-50 border-gray-200 rounded-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="assunto">Assunto Técnico *</Label>
          <Input id="assunto" type="text" required className="bg-gray-50 border-gray-200 rounded-sm" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Especificações / Mensagem *</Label>
          <Textarea id="mensagem" required rows={5} className="bg-gray-50 border-gray-200 rounded-sm resize-y" />
        </div>

        <div className="pt-2">
          <Button type="submit" className="bg-brand-blue hover:bg-blue-800 text-white rounded-sm px-8" disabled>
            Enviar Mensagem Técnica
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;