// app/page.tsx
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Fondo */}
      <Image
        src="/bg_tronxtv.png"
        alt="Fondo Tronx TV"
        fill
        priority
        className="object-cover object-center brightness-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Cinta PROXIMAMENTE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <span className="rounded-full bg-white/10 px-4 py-1 text-xs md:text-sm tracking-widest uppercase backdrop-blur border border-white/20">
          Próximamente
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6">
        <div className="mx-auto mb-6 w-24 h-24 md:w-28 md:h-28 relative">
          <Image
            src="/2025_logo_tronx_tv.png"
            alt="Logo Tronx TV"
            fill
            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Tronx TV: Historias que trascienden fronteras
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
          Un canal editorial multiplataforma que recorre territorios, culturas y
          personas desde Chile hacia el mundo. Narrativas originales que combinan
          documental, ficción y conversación en formatos diversos.
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <Image
                src="/2025_logo_tronx_tv.png"
                alt="Tronx TV"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Tronx TV — Tronx Group. Todos los derechos reservados.
            </div>
          </div>

          <div className="text-xs text-white/50">
            Estrenos y novedades — <span className="uppercase tracking-widest">Próximamente</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
