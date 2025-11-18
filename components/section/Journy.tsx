"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

// Datos categorizados (ordenados del más reciente al más antiguo)
export const journeyByCategory = {
  experience: [
    {
      title: "Desarrollador de Software",
      place: "Gala Corp",
      status: "Actualmente...",
    },
    {
      title: "Técnico Junior en Desarrollo de Software",
      place: "Instituto Superior Tecnológico España",
      status: "2023 - 2025",
    },
    {
      title: "Técnico en Soporte Técnico Empresarial",
      place: "PELByte",
      status: "2021 - 2023",
    },
  ],
  education: [
    {
      title: "Ingeniería en Ciberseguridad",
      place: "Universidad de Saint Leo",
      status: "Cursando...",
    },
    {
      title: "Tecnólogo en Desarrollo Web",
      place: "Instituto Superior Tecnológico España",
      status: "2021 - 2023",
    },
    {
      title: "Bachiller en Ciencias",
      place: "Unidad Educativa Ambato",
      status: "2013 - 2020",
    },
  ],
  certification: [
    {
      title: "LCSPC",
      place: "CertiProf",
      status: "2024",
      link: "https://drive.google.com/file/d/14AMcHFvOPmhA1sAQZM9lLrOErks6r3gB/view?usp=sharing",
    },
    {
      title: "DevNet Associate",
      place: "CISCO Networking Academy",
      status: "2024",
      link: "https://drive.google.com/file/d/1dTlrOlBDlNYzaE6Lmi2AL-ISBqfuAsM6/view?usp=drive_link",
    },
    {
      title: "Experto Técnico Internacional",
      place: "SUDEN",
      status: "2023",
      link: "https://drive.google.com/file/d/1EZDp-rK3ocG84JYFtc00C0iEfvNGCXO-/view?usp=drive_link",
    },
    {
      title: "Administración Técnica",
      place: "UDET",
      status: "2023",
      link: "https://drive.google.com/file/d/1ABa7QcSv6h-FnFamRqJD5v5N9zBVdHae/view?usp=drive_link",
    },
    {
      title: "Experto en configuración y gestión de redes",
      place: "SUDEN",
      status: "2023",
      link: "https://drive.google.com/file/d/1qA761yBe4TWzCj5lmjF8Emhxc_a0julA/view?usp=drive_link",
    },
    {
      title: "Experto en ensamblaje de equipos de cómputo",
      place: "SUDEN",
      status: "2023",
      link: "https://drive.google.com/file/d/1JL7nOrkNA8RMyNiSzriC-xKQRltQV1ob/view?usp=drive_link",
    },
    {
      title: "Experto en mantenimiento de equipos de cómputo",
      place: "SUDEN",
      status: "2023",
      link: "https://drive.google.com/file/d/10Las5lQ4Z2kUbbGEznQnJnOqrb6mC9sW/view?usp=drive_link",
    },
  ],
};

// Esquema de colores por categoría
const colorThemes = {
  experience: {
    primary: "#06b6d4",
    secondary: "#0ea5e9",
  },
  education: {
    primary: "#60a5fa",
    secondary: "#3b82f6",
  },
  certification: {
    primary: "#a78bfa",
    secondary: "#8b5cf6",
  },
};

type TabType = "experience" | "education" | "certification";

export default function Journy() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getCurrentData = () => {
    return journeyByCategory[activeTab];
  };

  const getCategoryColor = (type: "primary" | "secondary" = "primary") => {
    return colorThemes[activeTab][type];
  };

  const getCurrentIcon = () => {
    switch (activeTab) {
      case "experience":
        return (
          <FaBriefcase
            className="w-6 h-6"
            style={{ color: getCategoryColor() }}
          />
        );
      case "education":
        return (
          <FaGraduationCap
            className="w-6 h-6"
            style={{ color: getCategoryColor() }}
          />
        );
      case "certification":
        return (
          <PiCertificateBold
            className="w-6 h-6"
            style={{ color: getCategoryColor() }}
          />
        );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="journy" className="py-10 relative">
      <div>
        {/* Header */}
        <h2 className="text-5xl font-bold text-white mb-14 text-center">
          Mi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-border to-strong">
            Trayectoria
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "experience"
                ? "text-white shadow-lg"
                : "bg-slate-dark/50 border border-border/20 text-gray-300 hover:border-border/50"
            }`}
            style={
              activeTab === "experience"
                ? {
                    background: `linear-gradient(to right, ${colorThemes.experience.primary}, ${colorThemes.experience.secondary})`,
                    boxShadow: `0 10px 30px ${colorThemes.experience.primary}30`,
                  }
                : undefined
            }
          >
            Experiencia
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "text-white shadow-lg"
                : "bg-slate-dark/50 border border-border/20 text-gray-300 hover:border-border/50"
            }`}
            style={
              activeTab === "education"
                ? {
                    background: `linear-gradient(to right, ${colorThemes.education.primary}, ${colorThemes.education.secondary})`,
                    boxShadow: `0 10px 30px ${colorThemes.education.primary}30`,
                  }
                : undefined
            }
          >
            Educación
          </button>
          <button
            onClick={() => setActiveTab("certification")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "certification"
                ? "text-white shadow-lg"
                : "bg-slate-dark/50 border border-border/20 text-gray-300 hover:border-border/50"
            }`}
            style={
              activeTab === "certification"
                ? {
                    background: `linear-gradient(to right, ${colorThemes.certification.primary}, ${colorThemes.certification.secondary})`,
                    boxShadow: `0 10px 30px ${colorThemes.certification.primary}30`,
                  }
                : undefined
            }
          >
            Certificaciones
          </button>
        </div>

        {/* Timeline Container */}
        <AnimatePresence mode="wait">
          {/* Experience Content */}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div
                className="absolute top-[32px] left-0 right-0 h-0.5 hidden md:block"
                style={{
                  background: `linear-gradient(to right, transparent, ${colorThemes.experience.primary}, transparent)`,
                }}
              />

              {/* Timeline - Start from left (3 items) */}
              <div className="pb-4">
                <div className="flex flex-wrap gap-6 items-start justify-start">
                  {journeyByCategory.experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative w-full md:w-auto"
                    >
                      {/* Icon Circle - No scale effect */}
                      <div className="flex justify-center mb-6 relative z-10">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300"
                          style={{
                            backgroundColor: "#020617",
                            border: `2px solid ${colorThemes.experience.primary}`,
                            color: colorThemes.experience.primary,
                            boxShadow: `0 0 0 6px #020617`,
                          }}
                        >
                          <FaBriefcase className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Card - Scale effect on first item (most recent) */}
                      <div
                        className={`bg-slate-dark/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-48 flex flex-col justify-between ${
                          index === 0 ? "scale-105" : ""
                        }`}
                        style={{
                          borderColor:
                            index === 0
                              ? colorThemes.experience.primary
                              : `${colorThemes.experience.primary}30`,
                          boxShadow:
                            index === 0
                              ? `0 10px 40px ${colorThemes.experience.primary}40, 0 0 0 1px ${colorThemes.experience.primary}50`
                              : "none",
                          minWidth: "280px",
                          maxWidth: "400px",
                        }}
                        onMouseEnter={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.experience.primary}60`;
                            e.currentTarget.style.boxShadow = `0 10px 30px ${colorThemes.experience.primary}20`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.experience.primary}30`;
                            e.currentTarget.style.boxShadow = "none";
                          }
                        }}
                      >
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {item.place}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs font-medium"
                            style={{
                              borderColor: colorThemes.experience.primary,
                              backgroundColor: `${colorThemes.experience.primary}15`,
                              color: colorThemes.experience.primary,
                            }}
                          >
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{item.status}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Content */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div
                className="absolute top-[32px] left-0 right-0 h-0.5 hidden md:block"
                style={{
                  background: `linear-gradient(to right, transparent, ${colorThemes.education.primary}, transparent)`,
                }}
              />

              {/* Timeline - Start from left (3 items) */}
              <div className="pb-4">
                <div className="flex flex-wrap gap-6 items-start justify-start">
                  {journeyByCategory.education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative w-full md:w-auto"
                    >
                      {/* Icon Circle - No scale effect */}
                      <div className="flex justify-center mb-6 relative z-10">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300"
                          style={{
                            backgroundColor: "#020617",
                            border: `2px solid ${colorThemes.education.primary}`,
                            color: colorThemes.education.primary,
                            boxShadow: `0 0 0 6px #020617`,
                          }}
                        >
                          <FaGraduationCap className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Card - Scale effect on first item (most recent) */}
                      <div
                        className={`bg-slate-dark/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-48 flex flex-col justify-between ${
                          index === 0 ? "scale-105" : ""
                        }`}
                        style={{
                          borderColor:
                            index === 0
                              ? colorThemes.education.primary
                              : `${colorThemes.education.primary}30`,
                          boxShadow:
                            index === 0
                              ? `0 10px 40px ${colorThemes.education.primary}40, 0 0 0 1px ${colorThemes.education.primary}50`
                              : "none",
                          minWidth: "280px",
                          maxWidth: "400px",
                        }}
                        onMouseEnter={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.education.primary}60`;
                            e.currentTarget.style.boxShadow = `0 10px 30px ${colorThemes.education.primary}20`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.education.primary}30`;
                            e.currentTarget.style.boxShadow = "none";
                          }
                        }}
                      >
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {item.place}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs font-medium"
                            style={{
                              borderColor: colorThemes.education.primary,
                              backgroundColor: `${colorThemes.education.primary}15`,
                              color: colorThemes.education.primary,
                            }}
                          >
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{item.status}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Certification Content - Carousel with 7 cards */}
          {activeTab === "certification" && (
            <motion.div
              key="certification"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div
                className="absolute top-[32px] left-0 right-0 h-0.5 hidden md:block"
                style={{
                  background: `linear-gradient(to right, transparent, ${colorThemes.certification.primary}, transparent)`,
                }}
              />

              {/* Scrollable Timeline - Carousel for 7 items */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-hide border-2 border-red-500 relative"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex gap-6 items-center border-2 border-orange-500">
                  {journeyByCategory.certification.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative w-full md:w-auto flex-shrink-0"
                    >
                      {/* Icon Circle - No scale effect */}
                      <div className="flex justify-center mb-6 relative z-10">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300"
                          style={{
                            backgroundColor: "#020617",
                            border: `2px solid ${colorThemes.certification.primary}`,
                            color: colorThemes.certification.primary,
                            boxShadow: `0 0 0 6px #020617`,
                          }}
                        >
                          <PiCertificateBold className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Card - Scale effect on first item (most recent) */}
                      <div
                        className={`bg-slate-dark/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-48 flex flex-col justify-between ${
                          index === 0 ? "scale-105" : ""
                        }`}
                        style={{
                          borderColor:
                            index === 0
                              ? colorThemes.certification.primary
                              : `${colorThemes.certification.primary}30`,
                          boxShadow:
                            index === 0
                              ? `0 10px 40px ${colorThemes.certification.primary}40, 0 0 0 1px ${colorThemes.certification.primary}50`
                              : "none",
                          minWidth: "280px",
                          maxWidth: "400px",
                        }}
                        onMouseEnter={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.certification.primary}60`;
                            e.currentTarget.style.boxShadow = `0 10px 30px ${colorThemes.certification.primary}20`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (index !== 0) {
                            e.currentTarget.style.borderColor = `${colorThemes.certification.primary}30`;
                            e.currentTarget.style.boxShadow = "none";
                          }
                        }}
                      >
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {item.place}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs font-medium"
                            style={{
                              borderColor: colorThemes.certification.primary,
                              backgroundColor: `${colorThemes.certification.primary}15`,
                              color: colorThemes.certification.primary,
                            }}
                          >
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{item.status}</span>
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-all duration-300 hover:scale-110"
                              style={{
                                color: colorThemes.certification.primary,
                              }}
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Positioned relative to red container */}
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-dark/90 border items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  borderColor: `${colorThemes.certification.primary}50`,
                  color: colorThemes.certification.primary,
                }}
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-dark/90 border items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  borderColor: `${colorThemes.certification.primary}50`,
                  color: colorThemes.certification.primary,
                }}
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
