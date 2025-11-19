import CoverParticles from "@/components/CoverParticles";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";
import Journy from "@/components/section/Journy";

// Página principal del portafolio
export default function HomePage() {
  return (
    <>
      {/* Fondo de partículas interactivo */}
      <CoverParticles />
      <div className="space-y-16">
        {/* Secciones principales */}
        <About />
        <Skills />
        <Journy />
        <Projects />
      </div>
    </>
  );
}
