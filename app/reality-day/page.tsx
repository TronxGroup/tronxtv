"use client";

import Image from "next/image";

/**
 * Reality Day — Landing oficial
 * Serie documental original de Tronx TV
 */

const SERIES = {
  name: "Reality Day",
  tagline: "Un día real de trabajo",
  description:
    "Serie documental que acompaña una jornada completa en oficios, empresas, servicios e instituciones. Observación directa. Decisiones reales. Tiempo real.",
  trailerUrl: "https://www.youtube.com/@tronxtv",
};

const EPISODES = [
  {
    id: "ep1",
    title: "El mimbre no espera",
    meta: "Episodio 1 · 2026",
    location: "Ñuñoa, Santiago de Chile",
    url: "https://youtu.be/xiOxzZTb8Q4",
    thumb: "/ep1_thumb.jpg",
    description:
      "Una jornada completa en Artesanía Pradena. Oficio heredado, clientes y el peso del tiempo en un trabajo hecho a mano.",
  },
  {
    id: "ep2",
    title: "No era solo mantención",
    meta: "Episodio 2 · 2026",
    location: "Santiago de Chile",
    url: "https://youtu.be/4xe4CtPW4lI",
    thumb: "/ep2_thumb.jpg",
    description:
      "Un taller mecánico enfrenta un problema que no aparece a simple vista. Diagnóstico, presión y decisiones técnicas.",
  },
] as const;

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-widest uppercase border border-white/15">
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/bg_tronxtv.jpg"
        alt="Reality Day"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-4xl px-6 text-center pt-32">
        <div className="flex justify-center gap-2 mb-6">
          <Pill>Serie documental</Pill>
          <Pill>Observación directa</Pill>
          <Pill>Temporada 1</Pill>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {SERIES.name}
        </h1>

        <p className="mt-4 text-xs tracking-widest uppercase text-white/60">
          {SERIES.tagline}
        </p>

        <p className="mt-8 text-lg md:text-xl text-white/85 leading-relaxed">
          Acompañamos un día completo.
          <br />
          Las decisiones no se escriben.
          Se enfrentan.
        </p>
      </div>
    </section>
  );
}

function Concepto() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Concepto
        </div>

        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
          Un día completo.
          <br />
          Tal como ocurre.
        </h2>

        <p className="mt-8 text-white/75 leading-relaxed">
          Reality Day observa una jornada real en su totalidad.
          El foco no está en la biografía.
          Está en el día.
          <br />
          En el momento en que alguien debe decidir.
          En el tiempo que corre.
          En lo que se resuelve… y en lo que no.
        </p>
      </div>
    </section>
  );
}

function Episodios() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Temporada 1
        </div>

        <h2 className="mt-4 text-3xl font-extrabold">
          Episodios
        </h2>

        <div className="mt-12 grid gap-10">
          {EPISODES.map((ep) => (
            <div
              key={ep.id}
              className="grid lg:grid-cols-12 gap-6 border border-white/10 rounded-3xl overflow-hidden bg-white/5"
            >
              <div className="relative lg:col-span-7 min-h-[320px]">
                <Image
                  src={ep.thumb}
                  alt={ep.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-8">
                <div className="text-xs tracking-widest uppercase text-white/60">
                  {ep.meta}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold">
                  {ep.title}
                </h3>
                <div className="mt-2 text-sm text-white/60">
                  {ep.location}
                </div>

                <p className="mt-4 text-white/75 leading-relaxed">
                  {ep.description}
                </p>

                <div className="mt-6">
                  <PrimaryButton href={ep.url}>
                    Ver episodio
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Produccion() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Producción
        </div>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
          ¿Quieres un episodio?
        </h2>

        <p className="mt-6 text-white/75 max-w-3xl mx-auto">
          Reality Day también se produce para empresas e instituciones
          que deseen registrar una jornada real bajo el formato editorial de la serie.
        </p>

        <div className="mt-10">
          <PrimaryButton href="mailto:info@tronxtv.com">
            Contactar producción
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default function RealityDayPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Concepto />
      <Episodios />
      <Produccion />
    </main>
  );
}
