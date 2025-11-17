"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Rutas de navegación
const navLinks = [
  { title: "Habilidades", path: "skills" },
  { title: "Trayectoria", path: "journy" },
  { title: "Proyectos", path: "projects" },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleHeader = () => setHeaderOpen((prev) => !prev);

  /* ---- Enlaces normales ---- */
  const renderNavLinks = (mobile = false) => (
    <ul
      className={
        mobile
          ? "flex flex-col items-center space-y-4 text-white"
          : "flex items-center space-x-4 text-white"
      }
    >
      {navLinks.map((link) => (
        <li key={link.path} className={mobile ? "w-full text-center" : ""}>
          <a
            href={`/#${link.path}`}
            className={`px-3 py-2 hover:text-gray-300 ${
              mobile ? "block" : "transition-colors"
            }`}
            onClick={mobile ? toggleHeader : undefined}
          >
            {link.title}
          </a>
        </li>
      ))}
      <li className={mobile ? "w-full text-center" : ""}>
        <a
          href="https://www.linkedin.com/in/josue-ruiz-0952001b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 font-semibold rounded-full inline-block bg-gray-900 text-white shadow-lg ring-2 ring-cyan-300 hover:ring-blue-700 transition"
          onClick={mobile ? toggleHeader : undefined}
        >
          Contacto
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-5 z-50 w-full flex justify-center items-start mt-2">
      {/* ---------- DESKTOP (pill centrado) ---------- */}
      <nav
        className={`hidden md:block transition-all duration-300 px-4 py-3 rounded-full ${
          scrolled
            ? "bg-gray-900/80 shadow-lg ring-1 backdrop-blur-md ring-white/10"
            : "bg-transparent"
        }`}
      >
        {renderNavLinks()}
      </nav>

      {/* ---------- BOTÓN MOBILE (queda fuera del pill) ---------- */}
      <button
        onClick={toggleHeader}
        className={`md:hidden absolute right-4 top-3 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 p-2.5 shadow-lg rounded-full text-white"
            : "p-2 text-white"
        }`}
        aria-label="Abrir menú de navegación"
      >
        {headerOpen ? (
          <FaTimes className="h-5 w-5" />
        ) : (
          <FaBars className="h-5 w-5" />
        )}
      </button>

      {/* ---------- PANEL MOBILE ---------- */}
      {headerOpen && (
        <div
          className="mt-2 w-11/12 mx-auto md:hidden absolute top-16 left-1/2 -translate-x-1/2 rounded-lg bg-gray-900/95 shadow-md px-6 py-4"
          aria-label="Menú de navegación móvil"
        >
          {renderNavLinks(true)}
        </div>
      )}
    </header>
  );
}
