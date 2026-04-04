'use client';
import React, { useState } from 'react';

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
      <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-md mb-6 shadow-sm">
        Mensagem enviada com sucesso! Entraremos em contato em breve.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1 text-sm">Nome *</label>
        <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block font-semibold text-gray-700 mb-1 text-sm">E-mail *</label>
          <input type="email" required className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors" />
        </div>
        <div className="flex-1">
          <label className="block font-semibold text-gray-700 mb-1 text-sm">Telefone</label>
          <input type="tel" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1 text-sm">Código(s) do(s) produto(s) desejado(s)</label>
        <input type="text" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors" />
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1 text-sm">Assunto *</label>
        <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors" />
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1 text-sm">Comentários *</label>
        <textarea required rows={5} className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors resize-y"></textarea>
      </div>
      <p className="text-xs text-gray-500">* Campos obrigatórios</p>
      <button type="submit" className="py-3 px-6 bg-brand-blue hover:bg-blue-800 text-white border-none rounded-md cursor-pointer font-bold self-start transition-colors shadow-sm">
        Enviar Mensagem
      </button>
    </form>
  );
};

export default ContactForm;