"use client";

import Link from "next/link";

export default function SeriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-white/50">
            Series
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
            Producción original
          </h1>

          <p className="mt-10 text-white/75 leading-relaxed">
            Tronx TV desarrolla formatos documentales propios.
            Cada serie explora un territorio distinto.
            El eje común es el mismo: observar sin intervenir.
          </p>
        </div>
      </section>

      {/* REALITY DAY */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs tracking-[0.25em] uppercase text-white/50">
            Temporada 1
          </div>

          <h2 className="mt-6 text-3xl font-extrabold">
            Reality Day
          </h2>

          <p className="mt-8 text-white/75 max-w-3xl">
            Serie documental que acompaña una jornada completa en oficios,
            empresas e instituciones.
            Sin guión. Sin actuación. Sin intervención.
          </p>

          <div className="mt-12">
            <Link
              href="/reality-day"
              className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Explorar la serie
            </Link>
          </div>
        </div>
      </section>

      {/* EN DESARROLLO */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">
              En desarrollo
            </div>

            <h3 className="mt-6 text-2xl font-extrabold">
              Vodcast
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed">
              Conversaciones extensas con protagonistas del mundo empresarial
              e institucional.
              Ritmo pausado. Profundidad. Contexto.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">
              Próximamente
            </div>

            <h3 className="mt-6 text-2xl font-extrabold">
              Series especiales
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed">
              Formatos documentales diseñados para proyectos
              que exigen mayor profundidad narrativa y desarrollo
              audiovisual.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
