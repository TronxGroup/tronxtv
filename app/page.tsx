export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="min-h-screen flex items-end px-6 md:px-12 pb-24"
      >
        <div className="max-w-3xl">

          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
            Tronx Media
          </p>

          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-6">
            Chile<br />
            <span className="opacity-50">desde</span><br />
            adentro.
          </h1>

          <p className="text-white/70 text-lg mb-8 max-w-md leading-8">
            Canal editorial chileno.
            Documentales sobre personas reales,
            historias reales y trabajo real.
          </p>

          <a
            href="https://www.youtube.com/@tronxmedia"
            target="_blank"
            className="inline-block bg-white text-black px-6 py-3 text-sm tracking-widest uppercase transition hover:bg-neutral-200"
          >
            Ver episodios
          </a>

        </div>
      </section>

      {/* ================= FRASE ================= */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">

        <p className="text-2xl md:text-3xl text-white/80 max-w-xl leading-relaxed">
          Sin guión. <br />
          Sin intervención. <br />
          Sin filtros.
        </p>

      </section>

      {/* ================= REALITY DAY ================= */}
      <section
        id="reality"
        className="px-6 md:px-12 py-24 border-t border-white/10"
      >

        <div className="max-w-2xl">

          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">
            Serie principal
          </p>

          <h2 className="text-4xl md:text-6xl mb-6">
            Reality Day
          </h2>

          <p className="text-white/70 mb-6 leading-8">
            Una serie documental sobre negocios,
            oficios y personas enfrentando días reales de trabajo en Chile.
          </p>

          <p className="text-white/50 text-sm tracking-widest uppercase">
            Temporada 1 — En emisión
          </p>

        </div>

      </section>

      {/* ================= EPISODIOS ================= */}
      <section
        id="episodios"
        className="px-6 md:px-12 pb-24"
      >

        <div className="max-w-5xl">

          <p className="text-white/50 text-sm tracking-widest uppercase mb-10">
            Últimos episodios
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* EP1 */}
            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="group"
            >

              <div className="relative aspect-video overflow-hidden bg-neutral-900">

                <img
                  src="/RD_Caratula_Ep01.png"
                  alt="Reality Day Episodio 1"
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="mt-3">

                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                  Reality Day
                </p>

                <div className="text-sm text-white/80 group-hover:text-white transition">
                  T1 E1 — El mimbre no espera
                </div>

              </div>

            </a>

            {/* EP2 */}
            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="group"
            >

              <div className="relative aspect-video overflow-hidden bg-neutral-900">

                <img
                  src="/RD_Caratula_Ep02.png"
                  alt="Reality Day Episodio 2"
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="mt-3">

                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                  Reality Day
                </p>

                <div className="text-sm text-white/80 group-hover:text-white transition">
                  T1 E2 — No era solo mantención
                </div>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* ================= FUTURO ================= */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">

        <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
          En desarrollo
        </p>

        <div className="text-2xl md:text-3xl space-y-2">

          <div>Ídolos</div>

          <div className="text-white/50">
            Series especiales
          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 md:px-12 py-16 border-t border-white/10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          <div>

            <p className="text-xl mb-4">
              Tronx Media
            </p>

            <p className="text-white/50 leading-7 max-w-sm">
              Canal editorial chileno.
              Personas reales. Historias reales.
              Chile desde adentro.
            </p>

          </div>

          <div className="space-y-3 text-sm text-white/50">

            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="block hover:text-white transition"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/tronxmedia/"
              target="_blank"
              className="block hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@tronx.media"
              target="_blank"
              className="block hover:text-white transition"
            >
              TikTok
            </a>

            <a
              href="https://web.facebook.com/tronxmedia"
              target="_blank"
              className="block hover:text-white transition"
            >
              Facebook
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
