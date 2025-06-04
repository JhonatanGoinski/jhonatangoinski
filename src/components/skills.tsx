import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skills = [
    {
      name: "JavaScript",
      level: 95,
      color: "from-emerald-400 to-green-600",
      icon: "🟨",
    },
    {
      name: "TypeScript",
      level: 73,
      color: "from-teal-500 to-cyan-700",
      icon: "🔷",
    },
    {
      name: "Next.js",
      level: 83,
      color: "from-slate-700 to-slate-900",
      icon: "⚡",
    },
    {
      name: "React Native",
      level: 88,
      color: "from-emerald-400 to-teal-500",
      icon: "🟢",
    },

    {
      name: "PHP",
      level: 65,
      color: "from-amber-500 to-yellow-600",
      icon: "🐘",
    },
    {
      name: "Python",
      level: 70,
      color: "from-emerald-400 to-teal-500",
      icon: "🐍",
    },
    {
      name: "SQL",
      level: 70,
      color: "from-blue-500 to-cyan-700",
      icon: "💾",
    },
    {
      name: "Git e GitHub",
      level: 77,
      color: "from-green-500 to-emerald-700",
      icon: "🔄",
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
            Tecnologias e linguagens que domino para criar soluções completas e
            eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    {skill.name}
                  </h3>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
                    <span>Proficiência</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
