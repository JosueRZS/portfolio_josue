import {CoverParticles} from '../components/coverParticles'
import About from '../components/section/About';
import Skills from "../components/section/Skills";
import Projects from '../components/section/Projects';
import Journy from '../components/section/Journy';

export default function Portfolio() {
  return (
    <>
      <CoverParticles /> {/* Partículas de fondo */}
      {/* Contenido principal */}
      <main className='' >
        <About />
        <Skills />
        <Journy />
        <Projects />
      </main>
    </>
  );
}
