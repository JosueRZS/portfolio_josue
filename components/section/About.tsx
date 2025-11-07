"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section id="about" className="text-white w-full py-8">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Sección de la descripción - Ahora a la izquierda */}
          <div className="flex flex-col h-full w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            <div className="md:pr-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-white">Hola, soy</span>
                <br />
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-200 to-cyan-400 mt-2">
                  <TypeAnimation
                    sequence={["Josue Ruiz", 4000]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                  />
                </span>
              </h1>
              <p className="text-base lg:text-lg mt-8 text-justify leading-relaxed">
                Me apasionan los proyectos que pueden tener un impacto positivo
                en la vida de las personas. Siempre busco soluciones efectivas y
                duraderas, y tengo una curiosidad innata que me impulsa a
                aprender y crecer constantemente. Mi versatilidad en el trabajo
                me permite adaptarme y contribuir significativamente en cada
                proyecto que emprendo.
              </p>

              {/* Información adicional */}
              <div className="mt-6 space-y-2 text-gray-300">
                <p>
                  <span className="text-cyan-400 font-semibold">
                    🚀 Especialidad:
                  </span>{" "}
                  Desarrollo Full Stack
                </p>
                <p>
                  <span className="text-cyan-400 font-semibold">💻 Stack:</span>{" "}
                  React, Next.js, Node.js, TypeScript
                </p>
                <p>
                  <span className="text-cyan-400 font-semibold">
                    🎯 Enfoque:
                  </span>{" "}
                  Soluciones escalables y experiencia de usuario
                </p>
              </div>
            </div>
          </div>

          {/* Sección de la imagen - Ahora a la derecha */}
          <div className="flex justify-center md:justify-end w-full md:w-2/5 order-1 md:order-2">
            <div className="relative w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1C1F33]">
                <Image
                  src="/images/avatar_v4.png"
                  alt="Josue Ruiz - Desarrollador Full Stack"
                  fill
                  className="object-cover transform translate-y-6 scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
