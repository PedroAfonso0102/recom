import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '../components/ui/Toasts';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contato = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const { addToast } = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    addToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    reset();
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <div className="mb-12 border-b-2 border-secondary pb-8">
           <span className="text-primary font-bold text-xs uppercase tracking-widest">Fale Conosco</span>
           <h1 className="text-4xl lg:text-6xl font-heading font-black text-secondary tracking-tighter uppercase mt-2">
             Contato
           </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white border border-secondary/10 p-8 shadow-sm">
                 <h3 className="font-heading font-black text-secondary uppercase tracking-widest text-sm mb-6 pb-4 border-b border-secondary/10">
                   Informações de Contato
                 </h3>
                 <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                       <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <div>
                          <p className="font-mono text-xs text-secondary font-bold uppercase tracking-widest mb-1">Endereço</p>
                          <p className="text-sm text-secondary/60">Rua Alferes João José, 350<br/>Jardim Chapadão<br/>CEP: 13070-188<br/>Campinas - SP - Brasil</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <div>
                          <p className="font-mono text-xs text-secondary font-bold uppercase tracking-widest mb-1">Telefone</p>
                          <p className="text-sm text-secondary/60">(19) 3233 2224 (PABX)<br/>Fax: (19) 3232 6935</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <div>
                          <p className="font-mono text-xs text-secondary font-bold uppercase tracking-widest mb-1">E-mail</p>
                          <a href="mailto:vendas.recom@montelione.com.br" className="text-sm text-primary hover:underline break-all">vendas.recom@montelione.com.br</a>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <div>
                          <p className="font-mono text-xs text-secondary font-bold uppercase tracking-widest mb-1">Horário de Atendimento</p>
                          <p className="text-sm text-secondary/60">Segunda a Sexta<br/>08:00 às 17:30</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>

           <div className="lg:col-span-2">
              <div className="bg-white border border-secondary/10 p-8 md:p-12 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

                 <h2 className="text-2xl font-heading font-black text-secondary uppercase tracking-tighter mb-2">Envie uma Mensagem</h2>
                 <p className="text-sm text-secondary/60 font-sans mb-8">Solicite um orçamento ou tire suas dúvidas entrando em contato conosco.</p>

                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest">Nome Completo</label>
                          <input
                             {...register('name')}
                             className="w-full bg-neutral border border-secondary/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                             placeholder="Ex: João da Silva"
                          />
                          {errors.name && <p className="text-primary text-[10px] font-mono">{errors.name.message}</p>}
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest">E-mail</label>
                          <input
                             {...register('email')}
                             className="w-full bg-neutral border border-secondary/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                             placeholder="Ex: joao@empresa.com"
                          />
                          {errors.email && <p className="text-primary text-[10px] font-mono">{errors.email.message}</p>}
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest">Telefone / Celular</label>
                       <input
                          {...register('phone')}
                          className="w-full bg-neutral border border-secondary/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                          placeholder="Ex: (11) 99999-9999"
                       />
                       {errors.phone && <p className="text-primary text-[10px] font-mono">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest">Mensagem</label>
                       <textarea
                          {...register('message')}
                          rows={5}
                          className="w-full bg-neutral border border-secondary/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                          placeholder="Como podemos ajudar?"
                       />
                       {errors.message && <p className="text-primary text-[10px] font-mono">{errors.message.message}</p>}
                    </div>

                    <button
                       type="submit"
                       disabled={isSubmitting}
                       className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-primary text-white font-heading font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-colors disabled:opacity-50"
                    >
                       {isSubmitting ? 'Enviando...' : (
                          <>
                             Enviar Mensagem
                             <Send className="w-4 h-4" />
                          </>
                       )}
                    </button>
                 </form>
              </div>
           </div>

        </div>
      </motion.div>
    </Layout>
  );
};

export default Contato;