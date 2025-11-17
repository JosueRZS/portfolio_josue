import React from "react";
import Image from "next/image";

const TECHNOLOGIES = [
  { name: "HTML 5", image: "/icons/html5-original.svg" },
  { name: "CSS 3", image: "/icons/css3-original.svg" },
  { name: "JavaScript", image: "/icons/javascript-original.svg" },
  { name: "React", image: "/icons/react-original.svg" },
  { name: "Next.js", image: "/icons/nextjs-original.svg" },
  { name: "Flutter", image: "/icons/flutter-original.svg" },
  { name: "MySQL", image: "/icons/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", image: "/icons/postgresql-original.svg" },
  { name: "Git", image: "/icons/git-original.svg" },
  { name: "GitHub", image: "/icons/github-original.svg", customStyle: { filter: "invert(1)" },},
  { name: "WordPress", image: "/icons/wordpress-plain.svg" },
  { name: "Elementor", image: "/icons/elementor.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-10 py-10">
      <h1 className="text-4xl font-bold mb-12 text-center text-white pb-8">
        Habilidades
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 pb-10">
        {TECHNOLOGIES.map((tech) => (
          <div
            key={tech.name}
            className="group flex justify-center items-center relative"
          >
            {/* Imagen con efecto de hover */}
            <Image
              src={tech.image}
              alt={tech.name}
              width={75}
              height={75}
              className="w-18 h-18 transform transition-transform duration-300 group-hover:scale-150"
              style={tech.customStyle ? tech.customStyle : {}}
            />
            {/* Tooltip personalizado con Tailwind */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-center text-xs rounded-lg px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
