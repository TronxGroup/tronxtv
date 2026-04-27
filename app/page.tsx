import "./globals.css";

export const metadata = {
  title: "TRONX TV",
  description: "Canal editorial chileno. Documentales sobre personas reales enfrentando días reales.",
  icons: {
    icon: "/favicon_tronxtv.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">

        {/* ================= NAV ================= */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-black/60 backdrop-blur-md">

          {/* Logo */}
          <a href="#hero" className="text-sm tracking-widest uppercase">
            TRONX TV
          </a>

          {/* Menu */}
          <div className="flex gap-6 text-sm text-white/60">

            <a href="#reality" className="hover:text-white transition">
              Reality Day
            </a>

            <a href="#episodios" className="hover:text-white transition">
              Episodios
            </a>

          </div>

        </nav>

        {/* ================= CONTENT ================= */}
        <div className="pt-20">
          {children}
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="px-6 md:px-12 py-16 border-t border-white/10">

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">

            {/* Logo */}
            <a href="#hero" className="text-sm tracking-widest uppercase">
              TRONX TV
            </a>

            {/* RRSS */}
            <div className="flex gap-6 text-sm text-white/60">

              <a href="https://www.youtube.com/@tronxtv" target="_blank" className="hover:text-white transition">
                YouTube
              </a>

              <a href="https://www.instagram.com/tronxtv" target="_blank" className="hover:text-white transition">
                Instagram
              </a>

              <a href="https://www.tiktok.com/@tronxtv" target="_blank" className="hover:text-white transition">
                TikTok
              </a>

              <a href="https://www.facebook.com/tronxtv" target="_blank" className="hover:text-white transition">
                Facebook
              </a>

            </div>

          </div>

          <div className="mt-10 text-xs text-white/40">
            © 2026 Tronx TV — Chile
          </div>

        </footer>

      </body>
    </html>
  );
}
