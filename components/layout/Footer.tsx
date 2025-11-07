import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="my-4 text-white text-center">
      <p className="inline-block border-b border-white/10 pb-2">
        &copy; {currentYear} Josue Ruiz | Todos los derechos reservados
      </p>
    </footer>
  );
}
