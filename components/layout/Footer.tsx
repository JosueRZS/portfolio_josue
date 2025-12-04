"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/JosueRZS",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/josue-ruiz-0952001b3/",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/josue_rzs/",
  },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileFooter />;
  }

  return (
    <footer className="my-4 mx-auto container">
      {/* Sección inferior con copyright y redes sociales */}
      <div className="relative mt-12 border-t border-border/40 pt-6">
        {/* Texto superpuesto sobre el borde */}
        <div className="absolute -top-3 right-8">
          <span className="bg-black-deep px-4 text-xs text-white uppercase font-semibold tracking-wider">
            Sígueme en redes sociales
          </span>
        </div>

        {/* Contenido inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center pr-16">
          <p className="text-sm">
            &copy; {currentYear} Josue RZS | Todos los derechos reservados
          </p>

          {/* Redes sociales con tooltips */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group relative"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-border/10 to-strong/10 border border-border/20 cursor-pointer group-hover:from-border/30 group-hover:to-strong/30 group-hover:border-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-border/20"
                >
                  <span className="text-lg">{link.icon}</span>
                </Link>{" "}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileFooter() {
  return (
    <footer className="my-4 mx-auto container">
      {/* Sección inferior con copyright y redes sociales */}
      <div className="relative mt-12 border-t border-border/40 pt-6">
        {/* Texto superpuesto sobre el borde */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-black-deep px-4 text-xs text-white uppercase font-semibold tracking-wider whitespace-nowrap">
            Sígueme en redes sociales
          </span>
        </div>

        {/* Contenido inferior - Redes sociales primero */}
        <div className="flex flex-col items-center space-y-6">
          {/* Redes sociales con tooltips */}
          <div className="flex space-x-4 pt-1">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group relative"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-border/10 to-strong/10 border border-border/20 cursor-pointer group-hover:from-border/30 group-hover:to-strong/30 group-hover:border-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-border/20"
                >
                  <span className="text-lg">{link.icon}</span>
                </Link>{" "}
              </motion.div>
            ))}
          </div>

          {/* Copyright texto */}
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} Josue Ruiz | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
