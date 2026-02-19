// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxtv.com"),

  title: {
    default: "Tronx TV — Estudio documental independiente",
    template: "%s | Tronx TV",
  },

  description:
    "Tronx TV es un estudio documental independiente que desarrolla series originales sobre jornadas reales de trabajo en oficios, empresas e instituciones.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon_tronxtv.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicon_tronxtv.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://www.tronxtv.com",
    title: "Tronx TV — Estudio documental independiente",
    description:
      "Series documentales originales. Jornadas reales. Observación directa. Producción audiovisual bajo formato editorial.",
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
  },
};

function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="relative w-12 h-12">
          <Image
            src="/2025_logo_tronx_tv.png"
            alt="Tronx TV"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-white/70">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <Link href="/reality-day" className="hover:text-white transition">
            Reality Day
          </Link>
          <Link href="/#programas" className="hover:text-white transition">
            Programas
          </Link>
          <Link href="/#contacto" className="hover:text-white transition">
            Producción
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <div className="text-sm tracking-widest uppercase text-white/50">
              Tronx TV
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              Estudio documental independiente que desarrolla series originales
              sobre jornadas reales en oficios, empresas e instituciones.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <div className="text-sm tracking-widest uppercase text-white/50">
              Navegación
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/reality-day"
                  className="hover:text-white transition"
                >
                  Reality Day
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="hover:text-white transition"
                >
                  Producción documental
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <div className="text-sm tracking-widest uppercase text-white/50">
              Redes sociales
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="https://www.youtube.com/@tronxtv"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tronxtv/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/tronxtv/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@tronxtv"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Tronx TV — Publicación por temporadas.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
