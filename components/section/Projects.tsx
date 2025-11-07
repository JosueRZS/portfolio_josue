"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaElementor,
  FaReact,
  FaWordpress,
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaFileExcel,
} from "react-icons/fa";
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { TbBrandOffice } from "react-icons/tb";

// Datos de los proyectos
// TODO: Pendiente agregar proyectos ISTE y Gala
const CARD_DATA = [
  {
    title: "PELByte",
    media: "/images/screenshots/PELByte_Landing.avif",
    github: "#",
    category: "web",
    description:
      "Single Landing Page para empresa relacionada con servicios tecnológicos.",
    tecnologies: [
      <FaWordpress key="Wordpress" />,
      <FaElementor key="Elementor" />,
    ],
  },
  {
    title: "PSI",
    media: "/images/screenshots/PSI.avif",
    github: "#",
    category: "web",
    description:
      "Dashboard administrativo con consumo de APIs, autenticación, roles, conexión con servicios en la nube de Azure y almacenamiento en gestor documental Sharepoint.",
    tecnologies: [
      <RiNextjsFill key="nextjs" />,
      <FaReact key="react" />,
      <RiTailwindCssFill key="tailwind" />,
      <VscAzure key="azure" />,
      <TbBrandOffice key="sharepoint" />,
    ],
  },
  {
    title: "App Móvil",
    media: "/images/screenshots/app_movilv3.avif",
    github: "#",
    category: "mobile",
    description:
      "Aplicación móvil con consumo de APIs, autenticación y roles, gestión de estados con RiverPod, conexión con servicios en la nube.",
    tecnologies: [
      <DiDart key="dart" />,
      <RiFlutterFill key="flutter" />,
      <VscAzure key="azure" />,
    ],
  },
];

// Opciones de filtro para los botones
const FILTER_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Web", value: "web" },
  { label: "Móvil", value: "mobile" },
  { label: "Escritorio", value: "desktop" },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filtrar proyectos según la selección
  const filteredProjects =
    selectedFilter === "all"
      ? CARD_DATA
      : CARD_DATA.filter((project) => project.category === selectedFilter);

  return (
    <section className="text-white mt-20">
      <div id="projects" className="container mx-auto text-center py-10">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

        {/* Filtros */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === option.value
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900/50 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.media}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-cyan-400 text-lg hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex gap-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <FaExternalLinkAlt />
                    <span className="text-sm">Ver más</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
