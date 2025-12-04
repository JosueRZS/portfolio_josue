"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuMonitorDot, LuServer, LuGitBranch } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiCloud } from "react-icons/ci";

// Datos de habilidades organizados por categoría
const skillsByCategory = [
  {
    category: "Frontend",
    icon: <LuMonitorDot />,
    skills: [
      { name: "HTML 5", image: "/icons/html5.svg" },
      { name: "CSS 3", image: "/icons/css3.svg" },
      { name: "JavaScript", image: "/icons/javascript.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
      { name: "Next.js", image: "/icons/nextjs.svg" },
    ],
  },
  {
    category: "Backend",
    icon: <LuServer />,
    skills: [
      { name: "PHP", image: "/icons/php.svg" },
      { name: "Python", image: "/icons/python.svg" },
      { name: "C#", image: "/icons/csharp.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "NestJS", image: "/icons/nestjs.svg" },
    ],
  },
  {
    category: "Bases de Datos",
    icon: <GoDatabase />,
    skills: [
      { name: "MySQL", image: "/icons/mysql.svg" },
      { name: "PostgreSQL", image: "/icons/postgresql.svg" },
      { name: "Supabase", image: "/icons/supabase.svg" },
    ],
  },
  {
    category: "Mobile",
    icon: <HiOutlineDevicePhoneMobile />,
    skills: [
      { name: "Flutter", image: "/icons/flutter.svg" },
      { name: "Dart", image: "/icons/dart.svg" },
    ],
  },
  {
    category: "Control de Versiones",
    icon: <LuGitBranch />,
    skills: [
      { name: "Git", image: "/icons/git.svg" },
      { name: "GitHub", image: "/icons/github.svg" },
    ],
  },
  {
    category: "CMS & Cloud",
    icon: <CiCloud />,
    skills: [
      { name: "WordPress", image: "/icons/wordpress.svg" },
      { name: "Elementor", image: "/icons/elementor.svg" },
      { name: "Vercel", image: "/icons/vercel.svg" },
      { name: "Azure", image: "/icons/azure.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-10 pt-6">
      <div>
        {/* Encabezado de la sección */}
        <h2 className="text-5xl font-bold text-white mb-14 text-center">
          Mis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-border to-strong">
            Habilidades
          </span>
        </h2>

        {/* Grilla de habilidades */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsByCategory.map((category, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-slate-dark/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="space-y-8">
                  {/* Encabezado de categoría */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-border/20 to-strong/20 flex items-center justify-center text-4xl">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        {category.category}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.skills.length} tecnologías
                      </p>
                    </div>
                  </div>

                  {/* Skills icons grid with tooltips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="group relative"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-border/10 to-strong/10 border border-border/20 flex items-center justify-center cursor-pointer group-hover:from-border/30 group-hover:to-strong/30 group-hover:border-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-border/20">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={28} // antes 32
                            height={28}
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-dark text-text text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold pointer-events-none shadow-xl z-10">
                          {skill.name}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-border/50 rotate-45" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
