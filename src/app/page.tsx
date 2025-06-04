import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { PythonAutomations } from "@/components/python-automations"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-900/20">
      <Header />
      <Hero />
      <Skills />
      <PythonAutomations />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
