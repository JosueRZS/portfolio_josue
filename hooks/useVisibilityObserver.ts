// Hook personalizado para observar la visibilidad de elementos en el DOM
// Útil para depurar qué elementos se están mostrando en pantalla y en qué porcentaje
import { useEffect } from "react";

export const useVisibilityObserver = (
  selector: string,
  deps: any[] = [],
  deviceType: string = "Desconocido"
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const title =
            entry.target.getAttribute("data-title") || "Elemento sin título";
          const ratio = entry.intersectionRatio;
          const isIntersecting = entry.isIntersecting;

          if (isIntersecting) {
            if (ratio >= 0.99) {
              console.log(
                `%c[${deviceType}] [Visible] "${title}" se muestra COMPLETO (100%)`,
                "color: green; font-weight: bold;"
              );
            } else {
              console.log(
                `%c[${deviceType}] [Parcial] "${title}" visible al ${(
                  ratio * 100
                ).toFixed(1)}%`,
                "color: orange;"
              );
            }
          } else {
            // Opcional: descomentar si quieres ver cuándo se ocultan en la consola
            // console.log(`%c[Oculto] "${title}"`, "color: gray;");
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px", // Puedes ajustar esto si necesitas offsets (márgenes)
      }
    );

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      console.warn(`No se encontraron elementos con el selector: ${selector}`);
    }
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, deps);
};
