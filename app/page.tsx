"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Tronx TV — Studio Home
 * Estudio documental independiente
 */

const SITE = {
  name: "Tronx TV",
  tagline: "Estudio documental independiente",
  email: "info@tronxtv.com",
};

const PROGRAMS = [
  {
    name: "Reality Day",
    status: "En emisión",
    description:
      "Serie documental que acompaña una jornada completa en oficios, servicios e instituciones.",
    href: "/reality-day",
  },
  {
    name: "Vodcast",
    status: "En desarrollo",
    description:
      "Conversaciones extensas con protagonistas del mundo empresarial e institucional.",
  },
  {
    name: "Series especiales",
    status: "Próximamente",
    description:
      "Formatos documentales diseñados para temas que exigen mayor profundidad narrativa.",
  },
];

const EPISODES = [
  {
    id: "ep1",
    title: "El mimbre no espera",
    meta: "Reality Day · Episodio 1 · 2026",
    location: "Ñuñoa, Santiago de Chile",
    url: "https://youtu.be/xiOxzZTb8Q4",
    thumb: "/ep1_thumb.jpg",
  },
  {
    id: "ep2",
    title: "No era solo mantención",
    meta: "Reality Day · Episodio 2 · 2026",
    location: "Santiago de Chile",
    url: "https://youtu.be/4xe4CtPW4lI",
    thumb: "/ep2_thumb.jpg",
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
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/bg_tronxtv.jpg"
        alt="Tronx TV"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-4xl px-6 text-center pt-32">
        <div className="flex justify-center gap-2 mb-6">
          <Pill>Serie documental</Pill>
          <Pill>Producción original</Pill>
          <Pill>Temporadas</Pill>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {SITE.name}
        </h1>

        <p className="mt-4 text-xs tracking-widest uppercase text-white/60">
          {SITE.tagline}
        </p>

        <p className="mt-8 text-lg md:text-xl text-white/85 leading-relaxed">
          Desarrollamos formatos documentales que observan cómo se toman
          decisiones reales.
          <br />
          Oficios, empresas e instituciones enfrentando el peso de un día completo.
        </p>

        <div className="mt-10">
          <PrimaryButton href="/reality-day">
            Explorar Reality Day
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Nuestra mirada
        </div>

        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
          Observamos.
          <br />
          No intervenimos.
        </h2>

        <p className="mt-10 text-white/75 leading-relaxed">
          Nos interesa el momento en que alguien debe decidir.
          La presión cotidiana.
          La responsabilidad silenciosa.
          <br />
          Cada serie explora ese territorio desde dentro.
        </p>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Programas
        </div>

        <h2 className="mt-4 text-3xl font-extrabold">
          Series originales
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center">
                <div className="text-xs tracking-widest uppercase text-white/50">
                  {p.status}
                </div>
                <Pill>Formato</Pill>
              </div>

              <div className="mt-6 text-xl font-extrabold">
                {p.name}
              </div>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {p.description}
              </p>

              {p.href && (
                <div className="mt-6">
                  <Link
                    href={p.href}
                    className="text-sm font-semibold text-white hover:opacity-70 transition"
                  >
                    Ver serie →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestacadoRealityDay() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Serie principal
        </div>

        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">
          Reality Day
        </h2>

        <p className="mt-8 text-white/75 max-w-3xl mx-auto">
          Un día real de trabajo.
          Sin guión.
          Sin actuación.
          Sin intervención.
        </p>

        <div className="mt-10">
          <PrimaryButton href="/reality-day">
            Ir a la serie
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Episodios() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Reality Day
        </div>

        <h2 className="mt-4 text-3xl font-extrabold">
          Episodios recientes
        </h2>

        <div className="mt-14 grid gap-12">
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

              <div className="lg:col-span-5 p-10">
                <div className="text-xs tracking-widest uppercase text-white/60">
                  {ep.meta}
                </div>

                <h3 className="mt-6 text-2xl font-extrabold">
                  {ep.title}
                </h3>

                <div className="mt-2 text-sm text-white/60">
                  {ep.location}
                </div>

                <div className="mt-8">
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Ver en YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Producción documental
        </div>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
          Propuestas y colaboraciones
        </h2>

        <p className="mt-8 text-white/75">
          Tronx TV desarrolla episodios documentales para empresas e instituciones
          que deseen registrar una jornada real bajo formato editorial.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-6 py-3 text-sm font-semibold border border-white/15 hover:bg-white/15 transition"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Manifiesto />
      <Programas />
      <DestacadoRealityDay />
      <Episodios />
      <Contacto />
    </main>
  );
}
