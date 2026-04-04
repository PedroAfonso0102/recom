"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Wrench, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

const diffs = [
  {
    icon: Truck,
    title: 'Estoque Local',
    description: 'Amplo estoque em Campinas garantindo entrega rápida e imediata para não parar sua produção.',
  },
  {
    icon: Wrench,
    title: 'Engenharia de Aplicação',
    description: 'Suporte técnico especializado direto na máquina para otimização de parâmetros de corte.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Distribuidor autorizado das melhores marcas globais, assegurando procedência e garantia.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Differentials() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Por que escolher a RECOM?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mais do que ferramentas, entregamos produtividade e segurança para sua usinagem.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {diffs.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full border-transparent hover:border-brand-orange/30 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-brand-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <CardTitle className="text-xl">{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base text-gray-600">
                      {diff.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
