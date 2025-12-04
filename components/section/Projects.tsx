"use client";

import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";
import Image from "next/image";

// Datos de los proyectos
const projects = [
  {
    title: "Proximamente",
    media: "/images/placeholder.svg",
    description: "Más ideas están siendo transformadas en proyectos reales.",
  },
  {
    title: "Marcfashion",
    media: "/images/screenshots/Marcfashion_1920.png",
    description:
      "Plataforma de comercio electrónico internacional.",
  },
  {
    title: "Gala Export",
    media: "/images/screenshots/Gala_Export_1920.png",
    description:
      "Aplicación web con blog y landing page, orientada a mercados internacionales.",
  },
  {
    title: "PSI",
    media: "/images/screenshots/PSI_Censurado_1920.png",
    description:
      "Dashboard administrativo con integración avanzada de servicios en la nube y gestión documental.",
  },
  {
    title: "App Móvil",
    media:
      "/images/screenshots/App_Movil_Censurado_blanco_1920.png",
    description:
      "Aplicación móvil con autenticación, gestión de roles y conexión a servicios en la nube.",
  },
  {
    title: "PELByte",
    media: "/images/screenshots/PELByte_1920.png",
    description:
      "Landing page corporativa para servicios tecnológicos, enfocada en la presentación profesional.",
  },
];

export default function Projects() {
  return (
    <section>
      <div id="projects" className="text-center  lg:pt-10 lg:px-0 px-4">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white mb-14 text-center">
          Mis{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-border to-strong">
            Proyectos
          </span>
        </h2>

        {/* Grid de proyectos */}
        <div className="flex flex-wrap lg:flex-row gap-8 justify-center">
          {/* Primer elemento: estilo destacado como el card más reciente de Journy */}
          <div className="bg-linear-to-br from-border/20 to-strong/20 border border-border shadow-lg shadow-border/20 rounded-2xl w-full lg:w-[calc((100%-5rem)/3)] min-h-72 flex flex-col items-center justify-center p-8">
            {/* Icono animado tipo Skills/Journy */}
            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-border/20 to-strong/20 flex items-center justify-center text-4xl mb-4 shadow-lg">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="inline-block"
              >
                <FaCog className="text-white" />
              </motion.span>
            </div>
            <span className="text-2xl font-bold mb-4">
              {projects[0].title ?? "Proximamente"}
            </span>
            <div className="text-lg text-white/80 mb-2">
              {(projects[0].description.match(/(?:\S+\s?){1,5}/g) || []).map(
                (line, idx) => (
                  <span key={idx} className="block mb-1">
                    {line.trim()}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Resto de proyectos */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
              className="relative w-full lg:w-[calc((100%-5rem)/3)] aspect-video rounded-xl overflow-hidden group min-h-72"
            >
              <Image
                src={project.media}
                alt={project.title}
                fill
                className="object-cover opacity-20 lg:opacity-100 lg:group-hover:opacity-20 transition-opacity duration-300"
                sizes="(min-width:1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-md text-white text-center px-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
