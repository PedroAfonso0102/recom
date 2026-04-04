"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Phone, Mail, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  const whatsappLink = "https://wa.me/5519999999999?text=Olá, sou engenheiro de [empresa] e preciso de cotação para ferramentas de...";

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background Effect: Simulating a subtle spotlight/grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Subtle Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-sm font-medium mb-8 text-blue-300"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
            Distribuidores Autorizados Mitsubishi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Precisão Industrial em <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              Ferramentas de Metal Duro
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Soluções Mitsubishi e líderes globais para usinagem de alta performance há mais de 30 anos. Especialistas em otimizar sua linha de produção.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="w-full sm:w-auto font-semibold text-md h-12 px-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Falar com Especialista
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto font-semibold text-md h-12 px-8 bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white">
              <a href="#contato">
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Cotação
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400 text-sm font-medium border-t border-slate-800 pt-8"
          >
            <div className="flex items-center justify-center gap-2">
              <Award className="h-4 w-4 text-brand-orange" />
              <span>ISO 9001</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-orange" />
              <span>Pronta Entrega</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-orange" />
              <span>Suporte Técnico</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-orange" />
              <span>Alta Performance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
