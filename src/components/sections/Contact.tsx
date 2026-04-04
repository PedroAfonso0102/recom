"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Label } from '../ui/Label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  company: z.string().min(2, { message: "Empresa é obrigatória." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(10, { message: "Telefone/WhatsApp inválido." }),
  machiningType: z.string().min(1, { message: "Selecione um tipo de usinagem." }),
  material: z.string().min(1, { message: "Informe o material." }),
  message: z.string().min(10, { message: "Descreva brevemente sua necessidade." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erro ao enviar');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="contato">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Informações de Contato */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fale com um Especialista</h2>
            <p className="text-lg text-gray-600 mb-10">
              Precisa de ajuda para definir a melhor ferramenta para sua aplicação? Nossa equipe de engenheiros está pronta para analisar seu desenho e propor a solução mais rentável.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Telefone & WhatsApp</h4>
                  <p className="text-gray-600 mt-1">(19) 3227-2111</p>
                  <p className="text-gray-600">(19) 99999-9999 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">E-mail</h4>
                  <p className="text-gray-600 mt-1">vendas@recommetalduro.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Sede Campinas</h4>
                  <p className="text-gray-600 mt-1">
                    Rua das Ferramentas, 123 - Distrito Industrial<br />
                    Campinas, SP - CEP: 13000-000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Técnico */}
          <Card className="border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle>Solicitação de Cotação Técnica</CardTitle>
              <CardDescription>Preencha os dados abaixo para um atendimento ágil e direcionado.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" {...register("name")} placeholder="João Silva" className={errors.name ? "border-red-500" : ""} />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa / CNPJ</Label>
                    <Input id="company" {...register("company")} placeholder="Indústria Exemplo Ltda" className={errors.company ? "border-red-500" : ""} />
                    {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail corporativo</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="joao@empresa.com.br" className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp / Telefone</Label>
                    <Input id="phone" {...register("phone")} placeholder="(19) 90000-0000" className={errors.phone ? "border-red-500" : ""} />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="machiningType">Tipo de Usinagem</Label>
                    <Select
                      id="machiningType"
                      {...register("machiningType")}
                      className={errors.machiningType ? "border-red-500" : ""}
                      options={[
                        { value: 'torneamento', label: 'Torneamento' },
                        { value: 'fresamento', label: 'Fresamento' },
                        { value: 'furacao', label: 'Furação' },
                        { value: 'roscamento', label: 'Roscamento' },
                        { value: 'outros', label: 'Outros' }
                      ]}
                    />
                    {errors.machiningType && <p className="text-red-500 text-xs">{errors.machiningType.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="material">Material Usinado</Label>
                    <Input id="material" {...register("material")} placeholder="Aço, Inox, Ferro Fundido, Alumínio..." className={errors.material ? "border-red-500" : ""} />
                    {errors.material && <p className="text-red-500 text-xs">{errors.material.message}</p>}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Label htmlFor="message">Descrição da Necessidade / Especificações</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Ex: Preciso de uma fresa de topo D=12mm para desbaste pesado em Inox 304, haste cilíndrica..."
                    className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação Técnica'}
                  </Button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 mt-4 text-sm text-green-800 bg-green-100 rounded-md border border-green-200">
                    Sua solicitação foi enviada com sucesso! Um de nossos especialistas entrará em contato em breve.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 mt-4 text-sm text-red-800 bg-red-100 rounded-md border border-red-200">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
