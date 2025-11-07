import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

// Datos de trayectoria
const data = [
  {
    title: "Desarrollador de Software",
    place: "Gala Corp",
    status: "Actualmente...",
    category: "experience",
  },
  {
    title: "Técnico Junior en Desarrollo de Software",
    place: "Instituto Superior Tecnológico España",
    status: "2023 - 2025",
    category: "experience",
  },
  {
    title: "Técnico en Soporte Técnico Empresarial",
    place: "PELByte",
    status: "2021 - 2023",
    category: "experience",
  },
  {
    title: "Ingeniería en Ciberseguridad",
    place: "Universidad de Saint Leo",
    status: "Cursando...",
    category: "education",
  },
  {
    title: "Tecnólogo en Desarrollo Web",
    place: "Instituto Superior Tecnológico España",
    status: "2021 - 2023",
    category: "education",
  },
  {
    title: "Bachiller en Ciencias",
    place: "Unidad Educativa Ambato",
    status: "2013 - 2020",
    category: "education",
  },
  {
    title: "LCSPC",
    place: "CertiProf",
    status: "2024",
    category: "certification",
    link: "https://drive.google.com/file/d/14AMcHFvOPmhA1sAQZM9lLrOErks6r3gB/view?usp=drive_link",
  },
];

// Función para obtener el icono según la categoría
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "experience":
      return <FaBriefcase className="text-cyan-400" />;
    case "education":
      return <FaGraduationCap className="text-blue-400" />;
    case "certification":
      return <PiCertificateBold className="text-green-400" />;
    default:
      return <FaCalendarAlt className="text-gray-400" />;
  }
};

export default function Journy() {
  return (
    <section id="journy" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Mi Trayectoria
        </h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Contenido */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="bg-gray-900/70 p-6 rounded-lg shadow-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-gray-400 text-sm uppercase tracking-wide">
                      {item.category === "experience"
                        ? "Experiencia"
                        : item.category === "education"
                        ? "Educación"
                        : "Certificación"}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-2">{item.place}</p>

                  <div className="flex items-center gap-2 text-cyan-400 text-sm">
                    <FaCalendarAlt />
                    <span>{item.status}</span>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt />
                      Ver certificado
                    </a>
                  )}
                </div>
              </div>

              {/* Punto central */}
              <div className="relative z-10 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 shadow-lg">
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Espacio vacío del otro lado */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
