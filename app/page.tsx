export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-end px-6 md:px-12 pb-24 overflow-hidden"
      >

        <div className="absolute inset-0">

          <img
            src="/backgraund_hero_tronxmedia.png"
            alt="Tronx Media"
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.12),transparent_55%)]" />

        </div>

        <div className="relative z-10 max-w-3xl">

          <p className="text-white/60 text-xs tracking-[0.35em] uppercase mb-6">
            Canal editorial chileno
          </p>

          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-semibold tracking-tight">
            Chile
            <br />
            <span className="text-white/70">
              desde
            </span>
            <br />
            adentro.
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-8 mb-10">
            Documentamos personas, oficios, empresas e instituciones
            que forman parte de la vida cotidiana del país.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#reality"
              className="inline-flex items-center justify-center bg-[#ff5a1f] hover:bg-[#ff6b35] text-white px-8 py-4 text-sm tracking-[0.25em] uppercase transition duration-300"
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

      {/* ================= SOBRE ================= */}

      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <div className="max-w-3xl">

          <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-5">
            Tronx Media
          </p>

          <h2 className="text-4xl md:text-6xl mb-8">
            Historias reales de Chile.
          </h2>

          <p className="text-white/70 leading-8 text-lg mb-6">
            Tronx Media es un canal editorial chileno dedicado
            a documentar el trabajo, las personas y los lugares
            que forman parte de la vida cotidiana del país.
          </p>

          <p className="text-white/60 leading-8">
            Buscamos historias que normalmente pasan desapercibidas:
            oficios, empresas, instituciones y proyectos que ayudan
            a entender cómo funciona Chile desde adentro.
          </p>

        </div>

      </section>

      {/* ================= REALITY DAY ================= */}

      <section
        id="reality"
        className="px-6 md:px-12 py-24 border-t border-white/10"
      >

        <div className="max-w-3xl">

          <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-5">
            Serie original
          </p>

          <h2 className="text-4xl md:text-6xl mb-6">
            Reality Day
          </h2>

          <p className="text-white/70 text-xl mb-8">
            Un día real de trabajo.
          </p>

          <p className="text-white/60 leading-8 mb-10">
            Reality Day acompaña durante algunas horas
            a personas reales en su lugar de trabajo.
            No hay conductor.
            No hay entrevistas tradicionales.
            Solo observación.
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="border border-white/15 px-4 py-2 text-sm text-white/80">
              Sin guión
            </span>

            <span className="border border-white/15 px-4 py-2 text-sm text-white/80">
              Sin intervención
            </span>

            <span className="border border-white/15 px-4 py-2 text-sm text-white/80">
              Sin filtros
            </span>

          </div>

          <p className="text-white/40 text-sm tracking-widest uppercase mt-8">
            Temporada 1 — En emisión
          </p>

        </div>

      </section>

      {/* ================= EPISODIOS ================= */}

      <section
        id="episodios"
        className="px-6 md:px-12 pb-28 border-t border-white/10 pt-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-12">

            <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4">
              Últimos episodios
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Reality Day
            </h2>

            <p className="text-white/60">
              Oficios, empresas e instituciones de Chile.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* EP1 */}

            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep01.png"
                  alt=""
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">

                  <h3 className="text-xl mb-2">
                    T1 E1 — El mimbre no espera
                  </h3>

                  <p className="text-white/60 text-sm">
                    Un taller familiar dedicado al mimbre en Ñuñoa.
                  </p>

                </div>

              </div>
            </a>

            {/* EP2 */}

            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep02.png"
                  alt=""
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">

                  <h3 className="text-xl mb-2">
                    T1 E2 — No era solo mantención
                  </h3>

                  <p className="text-white/60 text-sm">
                    Un taller mecánico enfrenta una falla que nadie logra explicar.
                  </p>

                </div>

              </div>
            </a>

            {/* EP3 */}

            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep03.png"
                  alt=""
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">

                  <h3 className="text-xl mb-2">
                    T1 E3 — La Morenita
                  </h3>

                  <p className="text-white/60 text-sm">
                    Una tarde de trabajo en una pescadería y restaurante de Pirque.
                  </p>

                </div>

              </div>
            </a>

          </div>

        </div>

      </section>

      {/* ================= MANIFIESTO ================= */}

      <section className="px-6 md:px-12 py-28 border-t border-white/10">

        <div className="max-w-4xl">

          <h2 className="text-4xl md:text-6xl leading-tight mb-10">
            Personas que dejan huella.
            <br />
            Decisiones que definen el día.
          </h2>

          <p className="text-white/60 text-lg leading-9">
            Detrás de cada negocio, institución u oficio
            hay personas tomando decisiones, resolviendo problemas
            y haciendo que las cosas funcionen.
            Eso es lo que buscamos documentar.
          </p>

        </div>

      </section>

      {/* ================= FUTURO ================= */}

      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4">
          Próximamente
        </p>

        <h2 className="text-3xl md:text-5xl mb-6">
          Nuevas historias.
        </h2>

        <p className="text-white/60 max-w-2xl leading-8">
          Nuevos episodios de Reality Day.
          Nuevas series.
          Nuevas historias reales de Chile.
        </p>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="px-6 md:px-12 py-12 border-t border-white/10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>

            <h3 className="text-lg mb-2">
              Tronx Media
            </h3>

            <p className="text-white/50">
              Canal editorial chileno.
            </p>

          </div>

          <div className="text-white/50 space-y-2">
            <div>YouTube</div>
            <div>Instagram</div>
            <div>TikTok</div>
          </div>

        </div>

        <div className="text-white/30 text-sm mt-12">
          © 2026 Tronx Media. Todos los derechos reservados.
        </div>

      </footer>

    </main>
  );
}
