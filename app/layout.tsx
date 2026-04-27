// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.tronxtv.com";

/* =========================
   METADATA
========================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tronx TV — Estudio documental independiente",
    template: "%s | Tronx TV",
  },

  description:
    "Estudio documental independiente. Series originales sobre jornadas reales en Chile.",

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tronx TV",
    description: "Series documentales originales.",
    images: ["/og-tronxtv.jpg"],
  },
};

/* =========================
   HEADER (MEJORADO)
========================= */

function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO + NOMBRE (MEJOR MARCA) */}
        <Link href="/" className="flex items-center gap-3 group">

          <div className="relative w-10 h-10">
            <Image
              src="/2025_logo_tronx_tv.png"
              alt="Tronx TV"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-sm tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition">
            Tronx TV
          </span>

        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-white/50">

          <Link href="/reality-day" className="text-white hover:opacity-70 transition">
            Reality Day
          </Link>

          <Link href="/series" className="hover:text-white transition">
            Series
          </Link>

          <Link href="/produccion" className="hover:text-white transition">
            Producción
          </Link>

          <a
            href="https://www.youtube.com/@tronxtv"
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
          >
            YouTube
          </a>

        </nav>
      </div>
    </header>
  );
}

/* =========================
   FOOTER (MEJORADO)
========================= */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-16">

          {/* MARCA */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-white/40">
              Tronx TV
            </div>

            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-sm">
              Estudio documental independiente enfocado en observar,
              registrar y construir relatos reales sobre el trabajo en Chile.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-white/40">
              Contenido
            </div>

            <ul className="mt-6 space-y-4 text-sm text-white/70">

              <li>
                <Link href="/reality-day" className="hover:text-white transition">
                  Reality Day
                </Link>
              </li>

              <li>
                <Link href="/series" className="hover:text-white transition">
                  Series documentales
                </Link>
              </li>

              <li>
                <Link href="/produccion" className="hover:text-white transition">
                  Producción para empresas
                </Link>
              </li>

            </ul>
          </div>

          {/* REDES */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-white/40">
              Canales
            </div>

            <ul className="mt-6 space-y-4 text-sm text-white/70">

              <li>
                <a href="https://www.youtube.com/@tronxtv" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  YouTube
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/tronxtv/" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Instagram
                </a>
              </li>

              <li>
                <a href="https://www.tiktok.com/@tronxtv" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  TikTok
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-24 border-t border-white/10 pt-8 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-4">

          <span>
            © {new Date().getFullYear()} Tronx TV
          </span>

          <span>
            Estudio independiente · Santiago de Chile
          </span>

        </div>

      </div>
    </footer>
  );
}

/* =========================
   ROOT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const orgLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx TV",
    url: siteUrl,
    logo: `${siteUrl}/favicon_tronxtv.png`,
    sameAs: [
      "https://www.youtube.com/@tronxtv",
      "https://www.instagram.com/tronxtv/",
      "https://www.tiktok.com/@tronxtv",
    ],
  };

  return (
    <html lang="es">
      <head>
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
        />
      </head>

      <body className="bg-black text-white antialiased selection:bg-white selection:text-black">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
