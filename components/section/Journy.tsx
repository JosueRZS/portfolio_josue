"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVisibilityObserver } from "@/hooks/useVisibilityObserver";
import { useMobile } from "@/hooks/useMobile";
import {
  FaBriefcase,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import clsx from "clsx";

// Datos categorizados
const journeyByCategory = [
  {
    key: "experience",
    category: "Experiencia",
    icon: <FaBriefcase />,
    items: [
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
  },
  {
    key: "education",
    category: "Educación",
    icon: <FaGraduationCap />,
    items: [
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
  },
  {
    key: "certification",
    category: "Certificaciones",
    icon: <PiCertificateBold />,
    items: [
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
        title: "Administración Técnica",
        place: "UDET",
        status: "2023",
        link: "https://drive.google.com/file/d/1ABa7QcSv6h-FnFamRqJD5v5N9zBVdHae/view?usp=drive_link",
      },
      {
        title: "Experto Técnico Internacional",
        place: "SUDEN",
        status: "2023",
        link: "https://drive.google.com/file/d/1EZDp-rK3ocG84JYFtc00C0iEfvNGCXO-/view?usp=drive_link",
      },
      {
        title: "Experto en configuración y gestión de redes",
        place: "SUDEN",
        status: "2022 - 2023",
        link: "https://drive.google.com/file/d/1qA761yBe4TWzCj5lmjF8Emhxc_a0julA/view?usp=drive_link",
      },
      {
        title: "Experto en ensamblaje de equipos de cómputo",
        place: "SUDEN",
        status: "2022 - 2023",
        link: "https://drive.google.com/file/d/1JL7nOrkNA8RMyNiSzriC-xKQRltQV1ob/view?usp=drive_link",
      },
    ],
  },
];

export default function Journy() {
  const [activeTab, setActiveTab] = useState<string>("experience");
  const [showArrows, setShowArrows] = useState(false);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    visible: boolean;
  } | null>(null);

  useEffect(() => {
    setTooltip(null);
  }, [activeTab]);

  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );

  // Obtener la categoría activa
  const activeCategoryData = journeyByCategory.find(
    (cat) => cat.key === activeTab
  );

  // Agrupar items por status preservando el orden (asumiendo que vienen ordenados por fecha descendente)
  const groups: { status: string; items: any[] }[] = [];
  if (activeCategoryData) {
    activeCategoryData.items.forEach((item: any) => {
      const lastGroup = groups[groups.length - 1];
      if (lastGroup && lastGroup.status === item.status) {
        lastGroup.items.push(item);
      } else {
        groups.push({ status: item.status, items: [item] });
      }
    });
  }

  // Hook de visibilidad
  const { isMobile, isTablet } = useMobile();
  const deviceType = isMobile ? "Móvil" : isTablet ? "Tablet" : "Escritorio";
  useVisibilityObserver(
    '[data-observe="true"]',
    [activeTab, groups, deviceType],
    deviceType
  );

  // Control de flechas
  useEffect(() => {
    const checkArrows = () => {
      const container = scrollContainerRefs.current[activeTab];
      if (container) {
        setShowArrows(container.scrollWidth > container.clientWidth + 1);
      }
    };

    checkArrows();
    const timer = setTimeout(checkArrows, 100);
    window.addEventListener("resize", checkArrows);
    return () => {
      window.removeEventListener("resize", checkArrows);
      clearTimeout(timer);
    };
  }, [activeTab, groups]);

  const slide = (direction: "left" | "right", key: string) => {
    const container = scrollContainerRefs.current[key];
    if (container) {
      const firstItem = container.firstElementChild as HTMLElement;
      // gap-10 es 2.5rem = 40px
      const gap = 40;
      const itemWidth = firstItem
        ? firstItem.offsetWidth
        : container.clientWidth;
      const scrollAmount = itemWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="journy" className="pb-10 relative">
      <div className="relative z-10 px-4">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white mb-14 text-center">
          Mi{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-border to-strong">
            Trayectoria
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-16">
          {journeyByCategory.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={clsx(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300 border",
                activeTab === category.key
                  ? "text-white shadow-lg bg-linear-to-br from-border/20 to-strong/20 shadow-border/30 border-transparent"
                  : "bg-slate-dark/50 border-border/20 text-gray-300 hover:border-border/50 hover:bg-slate-dark/70"
              )}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Linea central decorativa */}
          <div
            // NO TOCAR: Configuración crítica para el diseño
            className="absolute left-0 right-0 h-0.5 hidden lg:block bg-linear-to-r from-transparent via-strong to-transparent top-11" // top-11 para que quede alineada con los iconos
          />

          {/* Flechas de navegación */}
          {showArrows && (
            <>
              <button
                onClick={() => slide("left", activeTab)}
                className="flex absolute left-0 md:-left-4 lg:-left-20 top-11 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-dark/90 border border-strong text-strong items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-strong/20"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => slide("right", activeTab)}
                className="flex absolute right-0 md:-right-4 lg:-right-20 top-11 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-dark/90 border border-strong text-strong items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-strong/20"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Carrusel */}
          {activeCategoryData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              ref={(el) => {
                if (el) scrollContainerRefs.current[activeTab] = el;
              }}
              // NO TOCAR: Configuración crítica para el diseño
              className="flex gap-10 items-start overflow-hidden pt-5" // gap entre items | pt-5 para que no tape la linea central | overflow-hidden para ocultar scroll | snap-x snap-mandatory para el scroll por snap
            >
              {groups.map((group, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  id={`group-${groupIndex}`}
                  data-observe="true"
                  data-title={`Grupo ${group.status}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                  className="relative shrink-0 flex flex-col snap-center w-full lg:w-[calc((100%-5rem)/3)]" // Responsive: 1 col móvil/tablet, 3 cols desktop
                >
                  {/* Icono en la línea - Estilo Skills */}
                  <div className="relative z-10 mb-4 -mt-3 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-slate-dark border border-border/20 flex items-center justify-center text-3xl text-white shadow-lg shadow-strong/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-border/20 to-strong/20" />
                      <div className="relative z-10">
                        {activeCategoryData.icon}
                      </div>
                    </div>
                    {/* Línea vertical hacia abajo */}
                    <div className="absolute left-1/2 top-full w-0.5 h-4 -translate-x-1/2 bg-strong" />
                  </div>

                  {/* Caja de estado - Estilo About Badge */}
                  <div className="relative z-10 mb-4 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-tag border border-border backdrop-blur-sm">
                      <FaCalendarAlt className="w-3 h-3 text-strong" />
                      <span className="text-white text-sm font-medium whitespace-nowrap">
                        {group.status}
                      </span>
                    </div>
                    {/* Línea vertical hacia abajo */}
                    <div className="absolute left-1/2 top-full w-0.5 h-4 -translate-x-1/2 bg-strong" />
                  </div>

                  {/* Tarjetas de contenido apiladas */}
                  <div className="flex flex-col gap-4 w-full">
                    {group.items.map((item, itemIndex) => {
                      const isMostRecent = groupIndex === 0 && itemIndex === 0;
                      return (
                        <div key={itemIndex} className="relative group w-full">
                          {/* Linea conectora entre cards */}
                          {itemIndex < group.items.length - 1 && (
                            <div className="absolute left-1/2 top-full h-4 w-0.5 -translate-x-1/2 bg-strong/30" />
                          )}

                          <div
                            className={clsx(
                              "backdrop-blur-sm border rounded-2xl p-4 transition-all duration-300 w-full min-h-[86px] h-auto",
                              isMostRecent
                                ? "bg-linear-to-br from-border/20 to-strong/20 border-border shadow-lg shadow-border/20"
                                : "bg-slate-dark/50 border-border/30",
                              item.link
                                ? "cursor-pointer hover:border-strong hover:shadow-lg hover:shadow-strong/20"
                                : "cursor-default"
                            )}
                            onClick={() => {
                              if (item.link) {
                                window.open(item.link, "_blank");
                              }
                            }}
                            onMouseEnter={(e) => {
                              if (item.link) {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setTooltip({
                                  x: rect.left + rect.width / 2,
                                  y: rect.bottom,
                                  visible: true,
                                });
                              }
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <h4 className="text-white font-bold text-base mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                  {item.place}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Tooltip Global */}
      <AnimatePresence>
        {tooltip && tooltip.visible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: tooltip.x,
              y: tooltip.y + 12,
            }}
            animate={{ opacity: 1, scale: 1, x: tooltip.x, y: tooltip.y + 12 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 -left-24 z-50 px-3 py-2 bg-slate-dark text-text text-xs rounded-lg whitespace-nowrap font-semibold shadow-xl border border-strong/30 pointer-events-none"
          >
            <div className="relative">
              Click para ver el certificado
              <div className="absolute -top-3 left-1/2 w-2 h-2 bg-border/50 border-t border-l border-strong/30 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
