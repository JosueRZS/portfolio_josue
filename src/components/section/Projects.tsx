import Image from "next/image";
import React, { useState } from "react";
import { FaElementor, FaReact, FaWordpress } from "react-icons/fa";
import APP_MOVILV3 from '../../../public/images/screenshots/app_movilv3.avif';
import PSI from '../../../public/images/screenshots/PSI.avif';
import PELByte from '../../../public/images/screenshots/PELByte_Landing.avif';
import ACCESS from '../../../public/images/screenshots/ACCESS.avif';
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { SiMicrosoftaccess, SiMicrosoftazure, SiMicrosoftsharepoint, SiVisualbasic, SiMicrosoftexcel } from "react-icons/si";

// Datos de los proyectos
const CARD_DATA = [
  {
    title: 'PELByte',
    media: PELByte,
    github: '#',
    category: 'web',
    description: 'Single Landing Page para empresa relacionada con servicios tecnológicos.',
    tecnologies: [<FaWordpress key="Wordpress" />, <FaElementor key="Elementor" />],
  },
  {
    title: 'PSI',
    media: PSI,
    github: '#',
    category: 'web',
    description: 'Dashboard administrativo con consumo de APIs, autenticación, roles, conexión con servicios en la nube de Azure y almacenamiento en gestor documental Sharepoint.',
    tecnologies: [<FaReact key="react" />, <RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <SiMicrosoftazure key="azure" />, <SiMicrosoftsharepoint key="sharepoint" />],
  },
  {
    title: 'App Móvil',
    media: APP_MOVILV3,
    github: '#',
    category: 'mobile',
    description: 'Aplicación móvil con consumo de APIs, autenticación y roles, gestión de estados con RiverPod, conexión con servicios en la nube.',
    tecnologies: [<DiDart key="dart" />, <RiFlutterFill key="flutter" />, <SiMicrosoftazure key="azure" />],
  },
  {
    title: 'Distributivos APP',
    media: ACCESS,
    github: '',
    category: 'desktop',
    description: 'Aplicación de escritorio en Microsoft Access para la gestión de distributivos académicos.',
    tecnologies: [<SiVisualbasic key="visualbasic" />, <SiMicrosoftaccess key="access" />, <SiMicrosoftexcel key="excel" />],
  },
];

// Opciones de filtro para los botones
const FILTER_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Móvil' },
  { value: 'desktop', label: 'Escritorio' },
];

export default function Projects() {
  // Estado para el filtro seleccionado
  const [filter, setFilter] = useState('all');

  // Lógica de filtrado:
  // - Si el filtro es 'all', muestra todos los proyectos
  // - Si el filtro es 'public' o 'private', filtra por la propiedad visibility
  // - Si el filtro es 'web', 'mobile' o 'desktop', filtra por la propiedad category
  const filteredData =
    filter === 'all'
      ? CARD_DATA
      : CARD_DATA.filter(card => card.category === filter);

  return (
    <section className="text-white py-16">
      <div id="projects" className="container mx-auto text-center py-10">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-12">Proyectos</h2>
        {/* Filtro desplegable para móviles muy pequeños */}
        <div className="block sm:hidden mb-6 relative">
          <label htmlFor="projectFilter" className="sr-only">Filtrar proyectos por categoría</label>
          <select 
            id="projectFilter"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="bg-gray-800 text-white px-4 py-4 rounded-lg w-full appearance-none text-base font-medium"
            aria-label="Filtrar proyectos"
            title="Filtrar proyectos por categoría"
          >
            {FILTER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} className="py-3 px-4">
                {option.label}
              </option>
            ))}
          </select>
          {/* Icono de flecha personalizado - mejorado */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {/* Botones de filtro para tablets y desktop */}
        <div className="hidden sm:flex flex-wrap justify-center mb-12">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`m-2 px-4 sm:px-8 py-2 ${
                filter === option.value
                  ? 'text-white font-semibold border-b border-white'
                  : 'text-gray-500'
              } hover:text-white`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden w-full h-full bg-transparent flex flex-col"
            >
              {/* Imagen del proyecto con animación al hacer hover */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={card.media}
                  alt={card.title}
                  className="rounded-t-lg transition-opacity duration-500 group-hover:opacity-10"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top left',
                  }}
                  priority={index < 2}
                />
                {/* Descripción que aparece al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-transparent p-6">
                  <p className="text-white text-center text-base">{card.description}</p>
                </div>
              </div>
              {/* Pie de cada tarjeta de proyecto */}
              <div className="w-full grid grid-cols-2 p-3 bg-transparent">
                {/* Título del proyecto */}
                <div className="flex items-center justify-start">
                  <h3 className="text-lg font-bold text-left text-white drop-shadow-lg truncate">
                    {card.title}
                  </h3>
                </div>
                {/* Tecnologías usadas */}
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {card.tecnologies?.map((icon, i) => (
                    <span key={i} className="text-xl text-white drop-shadow-lg">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
