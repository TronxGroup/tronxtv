import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tronx TV | Canal editorial audiovisual por Dekaelo Media",
  description: "Programas originales en 4K: Reality Day, Buen Día Vecino y Vodcast Tronx. Entretenimiento humano + valor para marcas. Santiago de Chile · Lanzamiento 2025.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.tronxtv.com/" },
  openGraph: {
    title: "Tronx TV",
    description: "Realidad + narrativa + estética cinematográfica · 4K UHD · Chile · LATAM",
    url: "https://www.tronxtv.com/",
    siteName: "Tronx TV",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx TV",
    description: "Programas originales en 4K: Reality Day, Buen Día Vecino y Vodcast Tronx.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
