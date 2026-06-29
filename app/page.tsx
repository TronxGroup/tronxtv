export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-end overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0">

          <img
            src="/backgraund_hero_tronxmedia.png"
            alt="Tronx Media"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        </div>

        {/* Content */}

        <div className="relative z-10 px-6 md:px-12 pb-24 max-w-5xl">

          <p className="text-white/50 uppercase tracking-[0.35em] text-xs mb-6">
            Tronx Media
          </p>

          <h1 className="text-5xl md:text-8xl leading-[0.95] font-semibold tracking-tight mb-8">

            Historias reales
            <br />
            de las personas
            <br />
            que hacen funcionar Chile.

          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-8 max-w-3xl mb-10">

            Documentales y series originales sobre trabajo,
            oficios, empresas, instituciones y personas que
            construyen el país cada día.

          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://youtu.be/3VhmLGZGqV4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff5a1f] hover:bg-[#ff6b35] transition px-8 py-4 uppercase text-sm tracking-[0.25em]"
            >
              Ver último episodio
            </a>

            <a
              href="#episodios"
              className="border border-white/20 hover:border-white/40 transition px-8 py-4 uppercase text-sm tracking-[0.25em]"
            >
              Explorar
            </a>

          </div>

        </div>

      </section>

      {/* ================= FEATURED EPISODE ================= */}

      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}

          <div>

            <a
              href="https://youtu.be/3VhmLGZGqV4"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep03.png"
                  alt="Reality Day Episode 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

            </a>

          </div>

          {/* Text */}

          <div>

            <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-5">
              Último estreno
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight mb-6">

              De tener $30.000
              <br />
              en el banco
              <br />
              a llenar su restaurante.

            </h2>

            <p className="text-white/60 leading-8 text-lg mb-8">

              Un día real en La Morenita, una pescadería y restaurante
              en Pirque donde el trabajo no se detiene.

              Sin actores.
              Sin intervención.
              Solo realidad.

            </p>

            <a
              href="https://youtu.be/3VhmLGZGqV4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#ff5a1f] uppercase tracking-[0.25em] text-sm"
            >
              Ver episodio completo →
            </a>

          </div>

        </div>

      </section>

      {/* ================= REALITY DAY ================= */}

      <section
        id="reality"
        className="px-6 md:px-12 py-24 border-t border-white/10"
      >

        <div className="max-w-4xl">

          <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-5">
            Serie original
          </p>

          <h2 className="text-4xl md:text-6xl mb-6">
            Reality Day
          </h2>

          <p className="text-white/70 text-xl mb-8">
            Un día real de trabajo.
          </p>

          <p className="text-white/60 leading-8 text-lg mb-10">

            Reality Day sigue durante algunas horas
            a personas reales mientras trabajan.

            Observamos cómo funcionan oficios,
            empresas e instituciones en Chile tal como son.

            No intervenimos.

            No dramatizamos.

            No cambiamos nada.

          </p>

          <div className="flex flex-wrap gap-3">

            <span className="border border-white/15 px-4 py-2 text-sm text-white/70">
              Sin guión
            </span>

            <span className="border border-white/15 px-4 py-2 text-sm text-white/70">
              Trabajo real
            </span>

            <span className="border border-white/15 px-4 py-2 text-sm text-white/70">
              Sin actuación
            </span>

            <span className="border border-white/15 px-4 py-2 text-sm text-white/70">
              Chile cotidiano
            </span>

          </div>

        </div>

      </section>

            {/* ================= EPISODIOS ================= */}

      <section
        id="episodios"
        className="px-6 md:px-12 py-24 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-4">
              Episodios
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Historias publicadas
            </h2>

            <p className="text-white/60 text-lg">
              Personas reales. Trabajo real. Chile real.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* EPISODIO 1 */}

            <a
              href="https://youtu.be/acC3dyDKqe8"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep01.png"
                  alt="Reality Day Episode 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <p className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3">
                  Episodio 1
                </p>

                <h3 className="text-xl mb-3">
                  El mimbre no espera
                </h3>

                <p className="text-white/55 leading-7 text-sm">

                  Un día dentro de un taller familiar donde
                  la tradición sigue viva generación tras generación.

                </p>

              </div>

            </a>

            {/* EPISODIO 2 */}

            <a
              href="https://youtu.be/_xtAoqqaaEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep02.png"
                  alt="Reality Day Episode 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <p className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3">
                  Episodio 2
                </p>

                <h3 className="text-xl mb-3">
                  No era solo mantención
                </h3>

                <p className="text-white/55 leading-7 text-sm">

                  Un taller mecánico enfrenta un problema
                  que ningún escáner logra explicar.

                </p>

              </div>

            </a>

            {/* EPISODIO 3 */}

            <a
              href="https://youtu.be/3VhmLGZGqV4"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="/RD_Caratula_Ep03.png"
                  alt="Reality Day Episode 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <p className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3">
                  Episodio 3
                </p>

                <h3 className="text-xl mb-3">
                  La Morenita
                </h3>

                <p className="text-white/55 leading-7 text-sm">

                  Desde la pescadería hasta la cocina,
                  un negocio familiar que no se detiene.

                </p>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* ================= ABOUT TRONX MEDIA ================= */}

      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">

          <div>

            <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-5">
              Sobre nosotros
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight">

              Un medio documental
              <br />
              sobre Chile.

            </h2>

          </div>

          <div>

            <p className="text-white/60 text-lg leading-8 mb-6">

              Tronx Media es un proyecto editorial independiente
              dedicado a documentar cómo funciona Chile
              a través de historias reales.

            </p>

            <p className="text-white/55 leading-8 mb-6">

              Nos interesan las personas,
              los trabajos invisibles,
              los oficios,
              las empresas,
              las instituciones
              y las historias que sostienen la vida cotidiana.

            </p>

            <p className="text-white/55 leading-8">

              Creemos que muchas de las historias más importantes
              ocurren lejos de la televisión,
              lejos de la política
              y lejos de los titulares.

            </p>

          </div>

        </div>

      </section>

            {/* ================= FUTURE SERIES ================= */}

      <section className="px-6 md:px-12 py-24 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-4">
              Próximamente
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Nuevas series en desarrollo
            </h2>

            <p className="text-white/60 text-lg">
              Reality Day es solo el comienzo.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CRONICAS */}

            <div className="border border-white/10 rounded-2xl p-8">

              <p className="text-white/40 uppercase text-xs tracking-[0.25em] mb-4">
                Serie 02
              </p>

              <h3 className="text-3xl mb-5">
                Crónicas de Chile
              </h3>

              <p className="text-white/55 leading-8">

                Una serie documental dedicada a explorar
                acontecimientos, procesos históricos
                y episodios que explican cómo Chile llegó
                a convertirse en el país que conocemos hoy.

              </p>

            </div>

            {/* IDOLOS */}

            <div className="border border-white/10 rounded-2xl p-8">

              <p className="text-white/40 uppercase text-xs tracking-[0.25em] mb-4">
                Serie 03
              </p>

              <h3 className="text-3xl mb-5">
                Ídolos
              </h3>

              <p className="text-white/55 leading-8">

                Conversaciones profundas con las personas
                que han dejado una huella en Chile.

                Historias sobre éxito,
                fracaso,
                legado
                y decisiones que cambiaron vidas.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="px-6 md:px-12 py-28 border-t border-white/10">

        <div className="max-w-4xl">

          <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-5">
            Nuestra visión
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight mb-10">

            Contar historias reales
            <br />
            sobre las personas
            <br />
            que hacen funcionar Chile.

          </h2>

          <p className="text-white/60 text-lg leading-9 max-w-3xl">

            Creemos que las historias más importantes
            muchas veces ocurren lejos de los grandes medios.

            Nuestro trabajo es observar,
            documentar
            y contar esas historias con respeto,
            profundidad
            y honestidad.

          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="px-6 md:px-12 py-14 border-t border-white/10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

          {/* Left */}

          <div>

            <h3 className="text-xl mb-3">
              Tronx Media
            </h3>

            <p className="text-white/40 text-sm leading-7 max-w-md">

              Medio audiovisual independiente
              dedicado a crear documentales,
              series originales
              e historias reales sobre Chile.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-3 text-sm text-white/50">

            <a
              href="https://www.youtube.com/@tronxmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/tronxmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@tronx.media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              TikTok
            </a>

            <a
              href="https://www.tronxmedia.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Sitio web
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
