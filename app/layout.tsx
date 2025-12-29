// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxtv.com"),
  title: {
    default: "Tronx TV — Plataforma editorial de contenido audiovisual",
    template: "%s | Tronx TV",
  },
  description:
    "Tronx TV es una plataforma editorial de contenido audiovisual con programas y series originales. Observamos la realidad sin guión ni intervención.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.tronxtv.com",
    title: "Tronx TV — Plataforma editorial de contenido audiovisual",
    description:
      "Programas y series originales. Documental, conversación y formatos observacionales. Realidad sin guión, sin intervención.",
    siteName: "Tronx TV",
    images: [
      {
        url: "/og-tronxtv.jpg", // crea esta imagen en /public
        width: 1200,
        height: 630,
        alt: "Tronx TV",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx TV",
    description:
      "Plataforma editorial de contenido audiovisual con programas y series originales.",
    images: ["/og-tronxtv.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
