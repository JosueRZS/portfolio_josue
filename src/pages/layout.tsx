import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-full flex min-h-screen flex-col bg-[#0F1214]">
        <Header />
        <div className="container mt-20 mx-auto py-4 px-6 md:px-8">{children}</div>
        <Footer />
      </div>
    </>
  );
}
