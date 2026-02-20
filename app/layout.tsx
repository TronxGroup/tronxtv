// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.tronxtv.com";

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
    "Tronx TV es un estudio documental independiente que desarrolla series originales sobre jornadas reales en oficios, empresas e instituciones.",

  icons: {
    icon: [
      {
        url: "/favicon_tronxtv.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon_tronxtv.png",
    apple: [
      {
        url: "/favicon_tronxtv.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tronx TV — Estudio documental independiente",
    description:
      "Series documentales originales. Jornadas reales. Observación directa.",
    siteName: "Tronx TV",
    locale: "es_CL",
    images: [
      {
        url: "/og-tronxtv.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx TV",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tronx TV",
    description:
      "Estudio documental independiente. Series originales y producción audiovisual.",
    images: ["/og-tronxtv.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/* =========================
   HEADER
========================= */

function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative w-12 h-12">
          <Image
            src="/2025_logo_tronx_tv.png"
            alt="Tronx TV"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.25em] uppercase text-white/60">

          <Link
            href="/reality-day"
            className="text-white hover:opacity-70 transition"
          >
            Reality Day
          </Link>

          <Link
            href="/series"
            className="hover:text-white transition"
          >
            Series
          </Link>

          <Link
            href="/produccion"
            className="hover:text-white transition"
          >
            Producción
          </Link>

          <a
            href="https://www.youtube.com/@tronxtv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            YouTube
          </a>

        </nav>
      </div>
    </header>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-14">

          {/* Marca */}
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">
              Tronx TV
            </div>

            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-sm">
              Estudio documental independiente.
              Creamos series originales sobre jornadas reales
              en oficios, empresas e instituciones.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">
              Navegación
            </div>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/reality-day" className="hover:text-white transition">
                  Reality Day
                </Link>
              </li>

              <li>
                <Link href="/series" className="hover:text-white transition">
                  Series
                </Link>
              </li>

              <li>
                <Link href="/produccion" className="hover:text-white transition">
                  Producción documental
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">
              Redes sociales
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
              <li>
                <a href="https://web.facebook.com/tronxtv/" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-xs text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Tronx TV — Publicación por temporadas.
          </span>

          <span className="text-white/40">
            Estudio independiente · Chile
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
    description:
      "Estudio documental independiente enfocado en series originales.",
    sameAs: [
      "https://www.youtube.com/@tronxtv",
      "https://www.instagram.com/tronxtv/",
      "https://www.tiktok.com/@tronxtv",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
    },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
