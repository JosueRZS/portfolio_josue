# Portfolio Josue Ruiz - Next.js 16 + App Router 🚀

Portfolio personal desarrollado con Next.js 16, utilizando App Router, Tailwind CSS y componentes nativos para una experiencia optimizada y moderna.

## ✨ Características

- **Next.js 16** con App Router
- **React 19 RC** para las últimas características
- **Tailwind CSS** para estilos utilitarios
- **TypeScript** para tipado estático
- **Componentes nativos** sin dependencias de UI pesadas
- **Optimizado para rendimiento** con lazy loading e imágenes optimizadas
- **Responsive design** adaptable a todos los dispositivos
- **Partículas interactivas** con tsparticles
- **Animaciones suaves** con CSS y Tailwind

## 🛠️ Tecnologías Utilizadas

- Next.js 16
- React 19 RC
- TypeScript
- Tailwind CSS
- React Icons
- TSParticles
- React Type Animation

## 📁 Estructura del Proyecto

```
portfolio_josue/
├── app/                    # App Router directory
│   ├── globals.css        # Estilos globales con Tailwind
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── layout/
│   │   ├── Header.tsx     # Header con navegación
│   │   └── Footer.tsx     # Footer
│   ├── section/
│   │   ├── About.tsx      # Sección sobre mí (imagen a la derecha)
│   │   ├── Skills.tsx     # Habilidades técnicas
│   │   ├── Projects.tsx   # Proyectos destacados
│   │   └── Journy.tsx     # Trayectoria profesional
│   └── CoverParticles.tsx # Fondo de partículas
├── public/                # Archivos estáticos
│   ├── images/           # Imágenes y recursos
│   └── styles/           # Estilos adicionales
├── global.d.ts           # Declaraciones de tipos globales
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## 🎨 Características del Diseño

### Sección About Mejorada
- Imagen del desarrollador posicionada a la derecha
- Descripción profesional a la izquierda
- Información adicional sobre especialidades
- Diseño responsive que se adapta a móviles

### Componentes Nativos
- Sin dependencias de librerías UI pesadas (NextUI eliminado)
- Componentes construidos con Tailwind CSS puro
- Mejor rendimiento y menor bundle size
- Estilos consistentes y personalizables

### Optimizaciones de Next.js 16
- App Router para mejor rendimiento
- Optimización automática de imágenes
- Tree shaking mejorado
- Compilación más rápida

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JosueRZS/portfolio_josue.git
   cd portfolio_josue
   ```

2. **Instalar dependencias**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: Experiencia completa con navegación horizontal
- **Tablet**: Adaptación de layouts con navegación optimizada
- **Mobile**: Menú hamburguesa y diseño vertical

## 🎯 Mejoras Implementadas

### Performance
- Eliminación de librerías UI innecesarias
- Optimización de imágenes con Next.js Image
- Lazy loading de componentes
- CSS optimizado con Tailwind

### UX/UI
- Imagen personal reposicionada a la derecha en About
- Navegación mejorada con efectos hover
- Animaciones suaves y profesionales
- Esquema de colores consistente

### Código
- Estructura limpia sin carpeta `src`
- Componentes nativos más mantenibles
- TypeScript estricto con declaraciones globales
- Configuración optimizada para Next.js 16

## 🌟 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter ESLint

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **LinkedIn**: [Josue Ruiz](https://www.linkedin.com/in/josue-ruiz-0952001b3/)
- **GitHub**: [JosueRZS](https://github.com/JosueRZS)
- **Email**: Disponible en el portfolio

---