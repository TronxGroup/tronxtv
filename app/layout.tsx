import "./globals.css"; // 👈 necesario para que Tailwind aplique

export const metadata = {
  metadataBase: new URL("https://tronxtv.com"),
  title: "Tronx TV — Próximamente",
  description: "Canal editorial multiplataforma. Historias que trascienden fronteras.",
  openGraph: {
    title: "Tronx TV — Próximamente",
    description: "Historias que trascienden fronteras. Un proyecto de Tronx Group.",
    url: "https://tronxtv.com",
    type: "website",
    images: ["/2025_logo_tronx_tv.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx TV — Próximamente",
    description: "Historias que trascienden fronteras. Un proyecto de Tronx Group.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
