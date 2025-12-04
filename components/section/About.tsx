"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// Componente de presentación personal (Sobre mí)
export default function About() {
  return (
    <section id="about" className="flex items-center justify-center">
      {/* Sección de la imagen de perfil */}
      <div className=" hidden md:flex justify-center shrink-0">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-linear-to-br from-blue-500 via-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1C1F33]">
            <Image
              src="/images/avatar_v4.png"
              alt="Josue Ruiz - Desarrollador Full Stack"
              fill
              className="object-cover transform translate-y-6 scale-110"
              priority
            />
          </div>
        </div>
      </div>
      {/* Sección de la descripción y texto animado */}
      <div className="md:ml-12 flex flex-col text-left">
        {/* Etiqueta de estado "Disponible para trabajar" */}
        <div className="inline-flex items-center mb-4 md:mb-6 gap-2 max-w-[225px] px-4 py-2 rounded-full bg-tag border border-border backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-strong animate-pulse" />
          <span className="text-sm font-medium">Disponible para proyectos</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-white">Hola, soy</span>
          <span className="block md:inline text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-cyan-200 to-cyan-400 mt-2 md:mt-0 md:ml-2">
            <TypeAnimation
              sequence={["Josue Ruiz", 4000]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </span>
        </h1>
        <p className="text-base lg:text-lg mt-4 md:mt-8">
          Me apasionan los proyectos que pueden tener un impacto positivo en la
          vida de las personas. <br />
          Mi versatilidad en el trabajo me permite adaptarme y contribuir
          significativamente en cada proyecto que emprendo.
        </p>
      </div>
    </section>
  );
}
