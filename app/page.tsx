export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-end px-6 md:px-12 pb-24">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-6">
            Chile<br />
            <span className="opacity-50">desde</span><br />
            adentro.
          </h1>

          <p className="text-white/70 text-lg mb-8 max-w-md">
            Canal editorial chileno.
            Documentales sobre personas reales enfrentando días reales.
          </p>

          <a
            href="https://www.youtube.com/@tronxtv"
            target="_blank"
            className="inline-block bg-white text-black px-6 py-3 text-sm tracking-widest uppercase"
          >
            Ver episodios
          </a>

        </div>
      </section>

      {/* ================= FRASE ================= */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <p className="text-2xl md:text-3xl text-white/80 max-w-xl">
          Sin guión. Sin intervención.
        </p>
      </section>

      {/* ================= REALITY DAY ================= */}
      <section className="px-6 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-2xl">

          <h2 className="text-4xl md:text-6xl mb-6">
            Reality Day
          </h2>

          <p className="text-white/70 mb-6">
            Un día real de trabajo. Un desafío.
          </p>

          <p className="text-white/50 text-sm tracking-widest uppercase">
            Temporada 1 — En emisión
          </p>

        </div>
      </section>

      {/* ================= EPISODIOS ================= */}
      <section className="px-6 md:px-12 pb-24">

        <div className="max-w-5xl">

          <p className="text-white/50 text-sm tracking-widest uppercase mb-10">
            Últimos episodios
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* EP1 */}
            <a
              href="https://www.youtube.com/@tronxtv"
              target="_blank"
              className="group"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src="/ep1_thumb.jpg"
                  alt="Reality Day Episodio 1"
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-3 text-sm text-white/80 group-hover:text-white transition">
                T1 E1 — El mimbre no espera
              </div>
            </a>

            {/* EP2 */}
            <a
              href="https://www.youtube.com/@tronxtv"
              target="_blank"
              className="group"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src="/ep2_thumb.jpg"
                  alt="Reality Day Episodio 2"
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-3 text-sm text-white/80 group-hover:text-white transition">
                T1 E2 — No era solo mantención
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

        <div className="text-2xl space-y-2">
          <div>Ídolos</div>
          <div className="text-white/50">Series especiales</div>
        </div>

      </section>

      {/* ================= PRODUCCIÓN ================= */}
      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <div className="max-w-xl">

          <p className="text-white/70 mb-6">
            Producción documental para empresas e instituciones.
          </p>

          <a href="/produccion" className="underline text-white">
            Ver más
          </a>

        </div>

      </section>

    </main>
  );
}
