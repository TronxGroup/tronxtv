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
    default: "Tronx TV — Canal editorial chileno",
    template: "%s | Tronx TV",
  },

  description:
    "Canal editorial chileno. Documentales sobre personas reales y trabajo real en Chile.",

  icons: {
    icon: "/favicon_tronxtv.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tronx TV",
    description: "Documentales sobre personas reales en Chile.",
    images: ["/og-tronxtv.jpg"],
  },
};

/* =========================
   HEADER
========================= */

function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
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

        {/* NAV → SECCIONES DEL HOME */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-white/50">

  <a href="#reality" className="hover:text-white transition">
    Reality Day
  </a>

  <a href="#episodios" className="hover:text-white transition">
    Episodios
  </a>

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
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* LOGO + LINK ARRIBA */}
        <Link href="/" className="flex items-center gap-3 mb-10 group">

          <div className="relative w-10 h-10">
            <Image
              src="/2025_logo_tronx_tv.png"
              alt="Tronx TV"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-xs tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition">
            Tronx TV
          </span>

        </Link>

        {/* REDES */}
        <div className="flex flex-wrap gap-6 text-sm text-white/60">

          <a href="https://www.youtube.com/@tronxtv" target="_blank" rel="noreferrer" className="hover:text-white">
            YouTube
          </a>

          <a href="https://www.instagram.com/tronxtv" target="_blank" rel="noreferrer" className="hover:text-white">
            Instagram
          </a>

          <a href="https://www.tiktok.com/@tronxtv" target="_blank" rel="noreferrer" className="hover:text-white">
            TikTok
          </a>

          <a href="https://www.facebook.com/tronxtv" target="_blank" rel="noreferrer" className="hover:text-white">
            Facebook
          </a>

        </div>

        {/* COPY */}
        <div className="mt-12 text-xs text-white/40">
          © {new Date().getFullYear()} Tronx TV · Chile
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
      "https://www.instagram.com/tronxtv",
      "https://www.tiktok.com/@tronxtv",
      "https://www.facebook.com/tronxtv",
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
