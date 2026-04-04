"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Car, Cog, Factory } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    title: 'Aeroespacial',
    description: 'Ferramentas de alta precisão para usinagem de titânio e ligas termorresistentes.',
    icon: Plane,
    colSpan: 'md:col-span-2 lg:col-span-1',
    rowSpan: 'lg:row-span-2',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-brand-blue'
  },
  {
    title: 'Automotivo',
    description: 'Alto volume e repetibilidade na usinagem de peças automotivas críticas.',
    icon: Car,
    colSpan: 'md:col-span-1',
    rowSpan: '',
    color: 'bg-orange-50 hover:bg-orange-100',
    iconColor: 'text-brand-orange'
  },
  {
    title: 'Usinagem Geral',
    description: 'Versatilidade para tornos CNC e centros de usinagem variados.',
    icon: Cog,
    colSpan: 'md:col-span-1',
    rowSpan: '',
    color: 'bg-slate-50 hover:bg-slate-100',
    iconColor: 'text-slate-700'
  },
  {
    title: 'Açúcar e Álcool',
    description: 'Soluções robustas para manutenção e fabricação de equipamentos pesados.',
    icon: Factory,
    colSpan: 'md:col-span-2',
    rowSpan: '',
    color: 'bg-emerald-50 hover:bg-emerald-100',
    iconColor: 'text-emerald-700'
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white" id="setores">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções por Indústria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Atendemos os setores mais exigentes com tecnologia de ponta e engenharia de aplicação dedicada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[200px]">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl p-8 border border-gray-100 transition-all duration-300 ${ind.color} ${ind.colSpan} ${ind.rowSpan} flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                <div>
                  <div className={`p-3 rounded-lg inline-block bg-white shadow-sm mb-6 ${ind.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">{ind.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link href="/catalogo" className="text-sm font-semibold text-gray-900 flex items-center gap-2 hover:underline">
                    Ver catálogo para este setor
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
