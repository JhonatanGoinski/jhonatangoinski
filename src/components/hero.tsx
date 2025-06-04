"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
            JG
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Dev. Jhonatan Goinski
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2">
            Desenvolvedor Full Stack
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Especialista em desenvolvimento web moderno com foco em JavaScript,
            TypeScript, Next.js e tecnologias full stack. Criando soluções
            inovadoras e experiências digitais excepcionais.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
          >
            Ver Projetos
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            Entrar em Contato
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-600 hover:text-emerald-600"
            onClick={() =>
              window.open("https://github.com/JhonatanGoinski", "_blank")
            }
          >
            <FaGithub className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-600 hover:text-emerald-600"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jhonatan-miguel-goinski-b247b9279/",
                "_blank"
              )
            }
          >
            <FaLinkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-600 hover:text-emerald-600"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
