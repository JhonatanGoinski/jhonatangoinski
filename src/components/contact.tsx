"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: "jhonatangoinski@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuração de email incompleta");
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Responderei em breve!",
        variant: "default",
      });

      // Limpa o formulário após o envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownloadCV = () => {
    // Opção 1: Link direto para arquivo hospedado
    const cvUrl = "./Curriculo_ Jhonatan_Miguel_Goinski.pdf"; // ← Coloque seu PDF na pasta public/

    // Cria um link temporário para download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Curriculo_Jhonatan_Miguel_Goinski.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Opção 2: Se preferir abrir em nova aba
    // window.open(cvUrl, '_blank')
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 dark:text-slate-200">
                  <Mail className="mr-3 h-5 w-5 text-emerald-600" />
                  Email
                </CardTitle>
                <CardDescription>jhonatangoinski@gmail.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 dark:text-slate-200">
                  <Phone className="mr-3 h-5 w-5 text-teal-600" />
                  Telefone
                </CardTitle>
                <CardDescription>+55 (41) 99782-6816</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 dark:text-slate-200">
                  <MapPin className="mr-3 h-5 w-5 text-amber-600" />
                  Localização
                </CardTitle>
                <CardDescription>Curitiba, Brasil</CardDescription>
              </CardHeader>
            </Card>

            {/* Download CV Card */}
            <Card className="border-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 dark:text-slate-200">
                  <Download className="mr-3 h-5 w-5 text-emerald-600" />
                  Currículo
                </CardTitle>
                <CardDescription className="mb-4">
                  Baixe meu currículo completo em PDF com todas as informações
                  profissionais
                </CardDescription>
                <Button
                  onClick={handleDownloadCV}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Currículo
                </Button>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800 dark:text-slate-200">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Seu nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  <Input
                    placeholder="Seu email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Input
                  placeholder="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <Textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        {/* Alternative Download Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 dark:from-emerald-600/20 dark:to-teal-600/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
              Interessado em trabalhar comigo?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Baixe meu currículo completo ou entre em contato diretamente para
              discutirmos oportunidades de colaboração
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo Completo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("mailto:jhonatan.goinski@email.com", "_blank")
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail Direto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
