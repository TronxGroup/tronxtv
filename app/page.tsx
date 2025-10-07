"use client";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Fondo */}
      <Image
        src="/bg_tronxtv.png"
        alt="Fondo Tronx TV"
        fill
        priority
        className="object-cover object-center brightness-60"
        sizes="100vw"
      />

      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Cinta PRÓXIMAMENTE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <span className="rounded-full bg-white/10 px-4 py-1 text-xs md:text-sm tracking-widest uppercase backdrop-blur border border-white/20">
          Próximamente
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 relative">
          <Image
            src="/2025_logo_tronx_tv.png"
            alt="Logo Tronx TV"
            fill
            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            priority
            sizes="(max-width: 768px) 64px, 80px"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Tronx TV
        </h1>
        <p className="mt-6 text-base md:text-xl text-white/80 leading-relaxed">
          Historias que trascienden fronteras. Un canal editorial multiplataforma
          que recorre territorios, culturas y personas desde Chile hacia el mundo.
        </p>

        {/* Bloque de contacto institucional */}
        <div className="mt-8 space-y-1 text-white/90">
          <p className="text-sm md:text-base">¿Eres empresa o institución?</p>
          <p className="text-sm md:text-base">Sumemos un episodio o coproducción. Conversemos.</p>
          <p className="font-medium">
            📧 <a href="mailto:info@tronxtv.com" className="underline-offset-4 hover:underline">info@tronxtv.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Hero />

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/2025_logo_tronx_tv.png"
                alt="Tronx TV"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="text-xs md:text-sm text-white/70">
              © {new Date().getFullYear()} Tronx TV — Tronx Group. Todos los derechos reservados.
            </div>
          </div>

          {/* Íconos sociales no linkeados (texto) */}
          <div className="flex items-center gap-4 text-xs md:text-sm text-white/60">
            <span>Youtube</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Facebook</span>
            <span>X</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
