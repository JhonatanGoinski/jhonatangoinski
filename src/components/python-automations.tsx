import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart2, Video, Zap } from "lucide-react";

export function PythonAutomations() {
  const automations = [
    {
      title: "Análise de Dados com Jupyter",
      description:
        "Desenvolvimento de notebooks Jupyter para análise avançada de dados, visualização e geração de relatórios automatizados. Implementação de modelos estatísticos e machine learning para extração de insights.",
      icon: <BarChart2 className="h-10 w-10 text-emerald-600" />,
      tools: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter"],
    },
    {
      title: "Automações com PyAutoGUI",
      description:
        "Criação de scripts de automação para tarefas repetitivas usando PyAutoGUI. Automatização de processos de negócios, preenchimento de formulários e interações com interfaces gráficas para aumentar a produtividade.",
      icon: <Zap className="h-10 w-10 text-teal-600" />,
      tools: ["PyAutoGUI", "OpenCV", "Pillow", "Threading", "Logging"],
    },
    {
      title: "Transcrição de Vídeo",
      description:
        "Desenvolvimento de sistema de transcrição automática de vídeos utilizando APIs de reconhecimento de fala e processamento de linguagem natural. Geração de legendas e documentação a partir de conteúdo audiovisual.",
      icon: <Video className="h-10 w-10 text-amber-600" />,
      tools: ["SpeechRecognition", "FFmpeg", "Transformers", "NLTK", "PyDub"],
    },
  ];

  return (
    <section
      id="automations"
      className="py-16 px-4 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-slate-900/50 dark:to-emerald-900/10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Automações em Python
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Soluções personalizadas para aumentar produtividade e extrair
            insights de dados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automations.map((automation, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  {automation.icon}
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                    {automation.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 text-base">
                  {automation.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {automation.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs rounded-full"
                    >
                      {tool}
                    </span>
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
