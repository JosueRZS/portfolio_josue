import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josue RZS | Desarrollador Full Stack",
  description:
    "Portfolio de Josue Ruiz - Desarrollador Full Stack especializado en React, Next.js, Node.js y más.",
  keywords: [
    "desarrollador",
    "full stack",
    "react",
    "nextjs",
    "nodejs",
    "portfolio",
  ],
  authors: [{ name: "Josue Ruiz" }],
  openGraph: {
    title: "Josue-R3 | Desarrollador Full Stack",
    description: "Portfolio de Josue Ruiz - Desarrollador Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/icons/favicon.svg"
          type="image/svg+xml"
        />
      </head>
      <body className="min-h-screen bg-black-deep text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container mx-auto mt-40 py-4 px-6 md:px-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
