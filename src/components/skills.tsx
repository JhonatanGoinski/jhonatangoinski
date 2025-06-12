import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Layers,
  Users,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      name: "Front-End",
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      name: "Back-End",
      icon: <Server className="h-6 w-6 text-teal-600" />,
      skills: ["Node.js", "Typescript", "JavaScript", "PHP", "Python"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-6 w-6 text-amber-600" />,
      skills: [
        "React Native",
        "Expo",
        "Mobile UI/UX",
        "App Performance",
        "Push Notifications",
      ],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-emerald-600" />,
      skills: ["Firebase", "SQL", "PostgreSQL", "MySQL", "Caso de uso"],
    },
    {
      name: "DevOps & Tools",
      icon: <Code className="h-6 w-6 text-teal-600" />,
      skills: ["Git", "GitHub", "CI/CD", "Testing", "Locaweb", "Vercel", "AWS"],
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-6 w-6 text-amber-600" />,
      skills: [
        "Suporte ao Cliente",
        "Comunicação",
        "Trabalho em Equipe",
        "Resolução de Problemas",
        "Gestão de Projetos",
      ],
    },
    {
      name: "Architecture",
      icon: <Layers className="h-6 w-6 text-emerald-600" />,
      skills: ["Microservices", "MVC", "Clean Code"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Minhas Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tecnologias e habilidades que domino para criar soluções completas e
            eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 ml-3">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
