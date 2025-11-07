import CoverParticles from "@/components/CoverParticles";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";
import Journy from "@/components/section/Journy";

export default function HomePage() {
  return (
    <>
      <CoverParticles />
      <div className="space-y-16">
        <About />
        <Skills />
        <Projects />
        <Journy />
      </div>
    </>
  );
}
