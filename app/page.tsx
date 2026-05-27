export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
<section
  id="hero"
  className="relative min-h-screen flex items-end px-6 md:px-12 pb-24 overflow-hidden"
>

  {/* Background */}
  <div className="absolute inset-0">

    <img
      src="/backgraund_hero_tronxmedia.png"
      alt="Tronx Media Hero"
      className="w-full h-full object-cover scale-105"
    />

    {/* Overlay más suave */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Gradient más liviano */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* Vignette más cinematográfico */}
    <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />

    {/* Glow naranja sutil */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.12),transparent_55%)]" />

  </div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl">

    <p className="text-white/60 text-xs tracking-[0.35em] uppercase mb-6">
      Tronx Media
    </p>

    <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-semibold tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
      Chile
      <br />
      <span className="text-white/70">
        desde
      </span>
      <br />
      adentro.
    </h1>

    <p className="text-white/80 text-lg md:text-xl max-w-xl leading-8 mb-10 drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]">
      Canal editorial chileno.
      Historias reales, personas reales
      y mundos que merecen ser contados.
    </p>

    <div className="flex flex-wrap gap-4">

      <a
        href="https://www.youtube.com/@tronxmedia"
        target="_blank"
        className="inline-flex items-center justify-center bg-[#ff5a1f] hover:bg-[#ff6b35] text-white px-8 py-4 text-sm tracking-[0.25em] uppercase transition duration-300 shadow-[0_10px_30px_rgba(255,90,31,0.35)]"
      >
        Ver Reality Day
      </a>

      <a
        href="#episodios"
        className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm tracking-[0.25em] uppercase transition duration-300"
      >
        Explorar
      </a>

    </div>

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

  <div className="max-w-6xl">

    <p className="text-white/50 text-sm tracking-widest uppercase mb-10">
      Últimos episodios
    </p>

    <div className="grid md:grid-cols-3 gap-6">

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

      {/* EP3 */}
      <a
        href="https://www.youtube.com/@tronxmedia"
        target="_blank"
        className="group"
      >

        <div className="relative aspect-video overflow-hidden bg-neutral-900">

          <img
            src="/RD_Caratula_Ep03.png"
            alt="Reality Day Episodio 3"
            className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
          />

        </div>

        <div className="mt-3">

          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">
            Reality Day
          </p>

          <div className="text-sm text-white/80 group-hover:text-white transition">
            T1 E3 — La Morenita
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
