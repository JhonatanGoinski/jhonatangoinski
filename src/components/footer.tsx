"use client";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Jhonatan Goinski
            </h3>
            <p className="text-slate-300 mb-4">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
              e experiências digitais excepcionais.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
                onClick={() =>
                  window.open("https://github.com/JhonatanGoinski", "_blank")
                }
              >
                <FaGithub className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
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
                className="text-slate-300 hover:text-emerald-400 transition-colors"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tecnologias</h4>
            <ul className="space-y-2 text-slate-300">
              <li>JavaScript & TypeScript</li>
              <li>Next.js & React</li>
              <li>Node.js & PHP</li>
              <li>Python & Databases</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Jhonatan Goinski. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
