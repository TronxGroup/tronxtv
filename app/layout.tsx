import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.tronxmedia.cl";

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
    default: "Tronx Media — Canal editorial chileno",
    template: "%s | Tronx Media",
  },

  description:
    "Tronx Media es un canal editorial chileno enfocado en documentales sobre personas reales, historias reales y trabajo real en Chile.",

  keywords: [
    "Tronx Media",
    "Reality Day",
    "documentales chile",
    "canal editorial chileno",
    "historias reales",
    "documental chileno",
    "personas reales",
    "trabajo real",
    "oficios chile",
    "empresas chile",
    "documentary chile",
    "reality day chile",
  ],

  applicationName: "Tronx Media",

  creator: "Tronx Media",

  publisher: "Tronx Media",

  category: "Entertainment",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon_tronxtv.png",
    apple: "/favicon_tronxtv.png",
  },

  openGraph: {
    type: "website",

    locale: "es_CL",

    url: siteUrl,

    siteName: "Tronx Media",

    title: "Tronx Media — Canal editorial chileno",

    description:
      "Documentales sobre personas reales, historias reales y trabajo real en Chile.",

    images: [
      {
        url: "/og-tronxtv.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tronx Media",

    description:
      "Documentales sobre personas reales y trabajo real en Chile.",

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
              alt="Tronx Media"
              fill
              className="object-contain"
              priority
            />

          </div>

          <span className="text-sm tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition">
            Tronx Media
          </span>

        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-white/50">

          <a
            href="#reality"
            className="hover:text-white transition"
          >
            Reality Day
          </a>

          <a
            href="#episodios"
            className="hover:text-white transition"
          >
            Episodios
          </a>

          <a
            href="https://www.youtube.com/@tronxmedia"
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

        {/* LOGO */}
<Link
  href="/"
  className="flex items-center gap-5 mb-12 group"
>

  {/* LOGO MÁS GRANDE */}
  <div className="relative w-20 h-20 md:w-28 md:h-28">

    <Image
      src="/2025_logo_tronx_tv.png"
      alt="Tronx Media"
      fill
      priority
      className="object-contain drop-shadow-[0_0_25px_rgba(255,90,31,0.25)] transition duration-300 group-hover:scale-105"
    />

  </div>

  <div>

    <div className="text-2xl md:text-4xl font-semibold tracking-tight leading-none">
      Tronx
      <span className="text-[#ff5a1f]">
        Media
      </span>
    </div>

    <div className="text-xs tracking-[0.35em] uppercase text-white/40 mt-2">
      Chile desde adentro
    </div>

  </div>

</Link>

        {/* REDES */}
        <div className="flex flex-wrap gap-6 text-sm text-white/60">

          <a
            href="https://www.youtube.com/@tronxmedia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/tronxmedia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@tronx.media"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            TikTok
          </a>

          <a
            href="https://web.facebook.com/tronxmedia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Facebook
          </a>

        </div>

        {/* COPY */}
        <div className="mt-12 text-xs text-white/40">
          © {new Date().getFullYear()} Tronx Media · Chile
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

    name: "Tronx Media",

    url: siteUrl,

    logo: `${siteUrl}/favicon_tronxtv.png`,

    sameAs: [
      "https://www.youtube.com/@tronxmedia",
      "https://www.instagram.com/tronxmedia",
      "https://www.tiktok.com/@tronx.media",
      "https://web.facebook.com/tronxmedia",
    ],
  };

  const websiteLdJson = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Tronx Media",

    url: siteUrl,

    potentialAction: {
      "@type": "SearchAction",

      target: `${siteUrl}/?q={search_term_string}`,

      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es">

      <head>

        {/* JSON LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgLdJson),
          }}
        />

        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteLdJson),
          }}
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
