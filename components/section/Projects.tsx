// TODO: Pendiente mejorar la UI en base a las otras secciones
"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

// Datos de los proyectos
// TODO: Pendiente agregar proyectos ISTE y Gala cuando estén listos
const projects = [
  {
    title: "Proximamente",
    media: "/images/placeholder.svg",
    description: "",
    tecnologies: [{}],
  },
  {
    title: "Marcfashion",
    media: "/images/screenshots/Marcfashion_1920.png",
    description: "Aplicación Ecommerce Internacionalizada.",
    tecnologies: [
      { title: "Next.js", icon: "/icons/nextjs.svg" },
      { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { title: "Supabase", icon: "/icons/supabase.svg" },
      { title: "Vercel", icon: "/icons/vercel.svg" },
      { title: "Google Cloud", icon: "/icons/google-cloud.svg" },
    ],
  },
  {
    title: "Gala Export",
    media: "/images/screenshots/Gala_Export_1920.png",
    description: "Aplicación Web con Landing de Blogs Internacionalizada.",
    tecnologies: [
      { title: "Next.js", icon: "/icons/nextjs.svg" },
      { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { title: "Supabase", icon: "/icons/supabase.svg" },
      { title: "Vercel", icon: "/icons/vercel.svg" },
    ],
  },
  {
    title: "PELByte",
    media: "/images/screenshots/PELByte_1920.png",
    description:
      "Single Landing Page para empresa relacionada con servicios tecnológicos.",
    tecnologies: [
      { title: "WordPress", icon: "/icons/wordpress.svg" },
      { title: "Elementor", icon: "/icons/elementor.svg" },
    ],
  },
  {
    title: "PSI",
    media: "/images/screenshots/PSI_Censurado_1920.png",
    description:
      "Dashboard administrativo con consumo de APIs, autenticación, roles, conexión con servicios en la nube de Azure y almacenamiento en gestor documental Sharepoint.",
    tecnologies: [
      { title: "Next.js", icon: "/icons/nextjs.svg" },
      { title: "React", icon: "/icons/react.svg" },
      { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { title: "Azure", icon: "/icons/azure.svg" },
    ],
  },
  {
    title: "App Móvil",
    media: "/images/screenshots/App_Movil_Censurado_1920.png",
    description:
      "Aplicación móvil con consumo de APIs, autenticación y roles, gestión de estados con RiverPod, conexión con servicios en la nube.",
    tecnologies: [
      { title: "Flutter", icon: "/icons/flutter.svg" },
      { title: "Dart", icon: "/icons/dart.svg" },
      { title: "Azure", icon: "/icons/azure.svg" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="text-white mt-20">
      <div id="projects" className="text-center py-10 px-4">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

        {/* Grid de proyectos */}
        <div className="flex flex-wrap lg:flex-row gap-8 justify-center">
          {projects.map((project, index) => (
            <motion.div // Card
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-dark/50 backdrop-blur-sm border border-border/20 rounded-2xl transition-all duration-300 w-full lg:w-[calc((100%-5rem)/3)]"
            >
              {/* Header de la tarjeta */}
              <div className="relative h-50">
                <Image
                  src={project.media}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="aspect-[21/10] object-cover object-center"
                />
              </div>
              {/* Cuerpo de la tarjeta */}
              <div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
