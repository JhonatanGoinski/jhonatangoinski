"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "AgendaEasePRO - SaaS",
      description:
        "Plataforma completa para gestão de profissionais de qualquer área. Agendamento autônomo, permitindo que profissionais ofereçam agenda online para seus clientes. Relatórios, controle de serviços, e muito mais.",
      images: [
        "/agendaPro.png?height=200&width=400&text=AgendaEasePRO+Home",
        "/agendaPro1.png?height=200&width=400&text=AgendaEasePRO+Dashboard",
        "/agendaPro2.png?height=200&width=400&text=AgendaEasePRO+Agendamentos",
        "/agendaPro3.png?height=200&width=400&text=AgendaEasePRO+Consultas",
      ],
      technologies: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Cloudinary",
        "Prisma",
        "Neon",
        "NextAuth ",
        "Stripe",
      ],
      liveUrl: "https://agenda-ease-pro.vercel.app",
      githubUrl: "https://github.com/JhonatanGoinski",
      featured: true,
    },
    {
      title: "Clinic Agenda - SaaS",
      description:
        "Plataforma completa para gestão de clínicas médicas. Agendamentos, pacientes, relatórios e muito mais em um só lugar. Sistema com dashboard administrativo e muito mais.",
      images: [
        "/projetoClinic.png?height=200&width=400&text=Clinic+Home",
        "/projetoClinic1.png?height=200&width=400&text=Clinic+login",
        "/projetoClinic2.png?height=200&width=400&text=AgendaEase+dashboard",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Drizzle",
        "Neon",
        "BetterAuth",
      ],
      liveUrl: "https://clinic-agenda.vercel.app",
      githubUrl: "https://github.com/JhonatanGoinski/clinic-agenda",
      featured: true,
    },
    {
      title: "Landing Page - BP Transportes",
      description:
        "Landing page para a transportadora BP Transportes, com foco em conversão e apresentação dos serviços de logística e frota especializada.",
      images: [
        "/bptrans.png?height=200&width=400&text=E-commerce+Home",
        "/bptrans1.png?height=200&width=400&text=E-commerce+Products",
        "/bptrans2.png?height=200&width=400&text=E-commerce+Cart",
        "/bptrans3.png?height=200&width=400&text=E-commerce+Cart",
        "/bptrans4.png?height=200&width=400&text=E-commerce+Cart",
      ],
      technologies: ["JavaScript", "HTML", "CSS", "SCSS", "Design-Canva"],
      liveUrl: "https://bptransp.com.br/",
      githubUrl: "https://github.com/JhonatanGoinski",
      featured: false,
    },
    {
      title: "Front-end - E-commerce - Loja de Veículos",
      description:
        "Desenvolvimento de front-end para uma loja de veículos, com proposito de apresentar os veiculos de diversas marcas, modelos e vendedores. Podendo realizar o agendamento de uma vistoria. Futuramente será implementado o back-end para gerenciar os veiculos e os vendedores.",
      images: [
        "/vendaCar1.png?height=200&width=400&text=Venda+Car",
        "/vendaCar2.png?height=200&width=400&text=Venda+Car",
        "/vendaCar3.png?height=200&width=400&text=Venda+Car",
        "/vendaCar4.png?height=200&width=400&text=Venda+Car",
        "/vendaCar5.png?height=200&width=400&text=Venda+Car",
        "/vendaCar6.png?height=200&width=400&text=Venda+Car",
        "/vendaCar7.png?height=200&width=400&text=Venda+Car",
        "/vendaCar8.png?height=200&width=400&text=Venda+Car",
        "/vendaCar9.png?height=200&width=400&text=Venda+Car",
        "/vendaCar10.png?height=200&width=400&text=Venda+Car",
        "/vendaCar11.png?height=200&width=400&text=Venda+Car",
      ],
      technologies: ["HTML  ", "CSS", "JavaScript", "Design-Canva"],
      liveUrl: "https://loja-veiculos-neon.vercel.app/",
      githubUrl: "https://github.com/JhonatanGoinski/loja-veiculos",
      featured: false,
    },
    {
      title: "Finanças Pessoais - Desenvolvimento Mobile com React Native",
      description:
        "Desenvolvimento de um aplicativo de finanças pessoais com React Native, permitindo que o usuário controle suas finanças de forma simples e eficiente.",
      images: [
        "/financa1.png?height=200&width=400&text=Finanças",
        "/financa2.png?height=200&width=400&text=Finanças",
        "/financa3.png?height=200&width=400&text=Finanças",
        "/financa4.png?height=200&width=400&text=Finanças",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Axios",
        "Insomnia",
        "Beekeeper",
        "Context API",
        "React Navigation",
        "AsyncStorage",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/jhonatan-miguel-goinski-b247b9279_javascript-react-reactnative-activity-7303831090266300416-njAV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPtogwBy7Tw9Dsp6u9LzcYl3ULWgr4wRjo",
      githubUrl: "https://github.com/JhonatanGoinski/ProjetoAppFinancas",
      featured: false,
    },
    {
      title: "DevPost - Desenvolvimento Mobile com React Native",
      description:
        "Desenvolvimento de um aplicativo de postagem de conteúdo, permitindo que o usuário poste seu conteúdo e compartilhe com  os usuários. Podendo realizar diversos posts e interagir com likes.",
      images: [
        "/devPost1.png?height=200&width=400&text=DevPost",
        "/devPost2.png?height=200&width=400&text=DevPost",
        "/devPost3.png?height=200&width=400&text=DevPost",
      ],
      technologies: [
        "JavaScript",
        "React Native",
        "Firebase",
        "Firebase Authentication",
        "Firebase Storage",
        "Android Studio",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/jhonatan-miguel-goinski-b247b9279_reactnative-javascript-firebase-activity-7311215434437976064-DtUB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPtogwBy7Tw9Dsp6u9LzcYl3ULWgr4wRjo",
      githubUrl: "https://github.com/JhonatanGoinski/DevPost",
      featured: false,
    },
    {
      title: "ChatRoom - Desenvolvimento Mobile com React Native",
      description:
        "Desenvolvimento de um aplicativo de chat, permitindo que o usuário criem e participem de salas de chat, podendo interagir em tempo real com outros usuários.",
      images: [
        "/chatroom1.png?height=200&width=400&text=Chatroom",
        "/chatroom2.png?height=200&width=400&text=Chatroom",
      ],
      technologies: [
        "JavaScript",
        "React Native",
        "Firebase",
        "Firebase Authentication",
        "Firebase Storage",
        "Android Studio",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/jhonatan-miguel-goinski-b247b9279_reactnative-javascript-firebase-activity-7314678027836129280-C-FY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPtogwBy7Tw9Dsp6u9LzcYl3ULWgr4wRjo",
      githubUrl: "https://github.com/JhonatanGoinski/ChatRooms",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que
            demonstram minhas habilidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-teal-600 z-10">
                    Destaque
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <FaGithub className="h-4 w-4 mr-3" />
                    Ver Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
