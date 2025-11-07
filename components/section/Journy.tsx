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
    link: "https://drive.google.com/file/d/14AMcHFvOPmhA1sAQZM9lLrOErks6r3gB/view?usp=sharing",
  },
  {
    title: "DevNet Associate",
    place: "CISCO Networking Academy",
    status: "2024",
    category: "certification",
    link: "https://drive.google.com/file/d/1dTlrOlBDlNYzaE6Lmi2AL-ISBqfuAsM6/view?usp=drive_link",
  },
  {
    title: "Experto Técnico Internacional",
    place: "SUDEN",
    status: "2023",
    category: "certification",
    link: "https://drive.google.com/file/d/1EZDp-rK3ocG84JYFtc00C0iEfvNGCXO-/view?usp=drive_link",
  },
  {
    title: "Administración Técnica",
    place: "UDET",
    status: "2023",
    category: "certification",
    link: "https://drive.google.com/file/d/1ABa7QcSv6h-FnFamRqJD5v5N9zBVdHae/view?usp=drive_link",
  },
  {
    title: "Experto en configuración y gestión de redes",
    place: "SUDEN",
    status: "2023",
    category: "certification",
    link: "https://drive.google.com/file/d/1qA761yBe4TWzCj5lmjF8Emhxc_a0julA/view?usp=drive_link",
  },
  {
    title: "Experto en ensamblaje de equipos de cómputo",
    place: "SUDEN",
    status: "2023",
    category: "certification",
    link: "https://drive.google.com/file/d/1JL7nOrkNA8RMyNiSzriC-xKQRltQV1ob/view?usp=drive_link",
  },
  {
    title: "Experto en manteinimiento de equipos de cómputo",
    place: "SUDEN",
    status: "2023",
    category: "certification",
    link: "https://drive.google.com/file/d/10Las5lQ4Z2kUbbGEznQnJnOqrb6mC9sW/view?usp=drive_link",
  }
];

// Componente Timeline reutilizable
const Timeline = ({ title, items }: { title: string; items: typeof data }) => {
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

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="relative space-y-6">
        {/* Línea vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Punto en la línea */}
            <div className="absolute left-2.5 top-2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-900 shadow-lg">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Contenido */}
            <div className="bg-gray-900/70 p-4 rounded-lg shadow-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                {getCategoryIcon(item.category)}
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
              </div>

              <p className="text-gray-300 text-sm mb-1">{item.place}</p>

              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <FaCalendarAlt />
                <span>{item.status}</span>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  <FaExternalLinkAlt />
                  Ver certificado
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Journy() {
  // Filtrar datos por categoría
  const experience = data.filter((item) => item.category === "experience");
  const education = data.filter((item) => item.category === "education");
  const certifications = data.filter(
    (item) => item.category === "certification"
  );

  return (
    <section id="journy" className="max-w-full mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">
        Trayectoria
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8">
        <Timeline title="Experiencia" items={experience} />
        <Timeline title="Educación" items={education} />
        <Timeline title="Certificaciones" items={certifications} />
      </div>
    </section>
  );
}
