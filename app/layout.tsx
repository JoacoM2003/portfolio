import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Joaquín Muñoz — Backend Developer",
    template: "%s | Joaquín Muñoz",
  },
  description:
    "Desarrollador backend con Python especializado en APIs REST y sistemas con lógica de negocio compleja. Proyectos en producción con FastAPI, Django, CI/CD y deploy automatizado.",
  keywords: ["Backend Developer", "Python", "FastAPI", "Django", "PostgreSQL", "Docker", "Argentina"],
  authors: [{ name: "Joaquín Muñoz", url: "https://jmunozdev.vercel.app" }],
  metadataBase: new URL("https://jmunozdev.vercel.app"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jmunozdev.vercel.app",
    siteName: "Joaquín Muñoz Portfolio",
    title: "Joaquín Muñoz — Backend Developer",
    description: "Portfolio profesional de Joaquín Muñoz, desarrollador backend Python.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
