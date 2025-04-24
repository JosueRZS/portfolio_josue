import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaDownload } from "react-icons/fa";
import { RiMailAddLine } from "react-icons/ri";

const socialLinks = [
  {
    title: "Descarga mi CV",
    icon: <FaDownload size={20} />,
    path: "https://drive.google.com/file/d/1XPtFNQ26UJGm4S4E1uoC59Da2197XFfc/view?usp=drive_link",
    color: "bg-white text-black",
  },
  {
    title: "Conoce mis proyectos",
    icon: <FaGithub size={20} />,
    path: "https://github.com/Josue-R3",
    color: "bg-[#333]",
  },
  {
    title: "Disponible para trabajar",
    icon: <FaLinkedin size={20} />,
    path: "https://www.linkedin.com/in/josue-ruiz-0952001b3/",
    color: "bg-[#0072b1]",
  },
  {
    title: "Más sobre mí",
    icon: <FaInstagram size={20} />,
    path: "https://www.instagram.com/josue_r3/",
    color: "bg-[#E1306C]",
  },
  {
    title: "Chatea conmigo",
    icon: <FaWhatsapp size={20} />,
    path: "https://wa.me/+593987435775",
    color: "bg-[#349759]",
  },
  {
    title: "Envíame un correo",
    icon: <RiMailAddLine size={20} />,
    path: "mailto:your.email@example.com",
    color: "bg-[#EA4335]",
  }
];

const SocialLinks = () => (
  <div className="flex flex-row gap-3 w-full md:w-auto justify-center md:justify-end">
    {socialLinks.map((link, idx) => (
      <div key={idx} className="group relative flex items-center">
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full p-2 transition duration-300 ${link.color} bg-opacity-80 group-hover:bg-opacity-40`}
          aria-label={link.title}
        >
          {link.icon}
        </a>
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-black text-xs rounded-lg px-2 py-1 transition-opacity duration-300 whitespace-nowrap z-10">
          {link.title}
        </div>
      </div>
    ))}
  </div>
);

export default SocialLinks;