"use client";

import Link from "next/link";

export default function ProduccionPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-white/50">
            Producción documental
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
            Un día real.
            <br />
            Tal como ocurre.
          </h1>

          <p className="mt-10 text-white/75 leading-relaxed">
            Tronx TV produce episodios documentales para empresas,
            instituciones y equipos que deseen registrar
            una jornada real bajo formato editorial.
          </p>
        </div>
      </section>

      {/* FORMATO */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">

          <div>
            <h3 className="text-xl font-extrabold">Duración</h3>
            <p className="mt-4 text-white/70">
              Episodios de 10 a 15 minutos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-extrabold">Estilo</h3>
            <p className="mt-4 text-white/70">
              Observación directa.
              Sin guión. Sin actuación.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-extrabold">Entrega</h3>
            <p className="mt-4 text-white/70">
              Versión pública o institucional.
              Distribución digital.
            </p>
          </div>

        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold">
            ¿Para quién es?
          </h2>

          <p className="mt-8 text-white/75 leading-relaxed">
            Empresas que desean mostrar su operación real.
            <br />
            Instituciones públicas.
            <br />
            Equipos técnicos.
            <br />
            Oficios con historia.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:info@tronxtv.com"
              className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Contactar producción
            </a>

            <Link
              href="/reality-day"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Ver ejemplo
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
