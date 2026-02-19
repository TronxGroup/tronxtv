"use client";

import Image from "next/image";

/**
 * Tronx TV — Cinematic Editorial Home
 * Estudio documental de jornadas reales
 */

const SITE = {
  name: "Tronx TV",
  tagline: "Estudio documental de jornadas reales",
  email: "info@tronxtv.com",
  socials: [
    { name: "YouTube", href: "https://www.youtube.com/@tronxtv" },
    { name: "Instagram", href: "https://www.instagram.com/tronxtv/" },
    { name: "Facebook", href: "https://web.facebook.com/tronxtv/" },
    { name: "TikTok", href: "https://www.tiktok.com/@tronxtv" },
  ],
};

const PROGRAMS = [
  { name: "Reality Day", status: "En emisión" },
  { name: "Vodcast", status: "En desarrollo" },
  { name: "Series especiales", status: "Próximamente" },
];

const EPISODES = [
  {
    id: "ep1",
    program: "Reality Day",
    title: "El mimbre no espera",
    subtitle: "Un día real de trabajo",
    url: "https://youtu.be/xiOxzZTb8Q4",
    meta: "Episodio 1 · 2026",
    location: "Ñuñoa, Santiago de Chile",
    thumb: "/ep1_thumb.jpg",
    description:
      "Una jornada completa en Artesanía Pradena. Oficio heredado, decisiones diarias y el peso del tiempo en un trabajo hecho a mano.",
  },
  {
    id: "ep2",
    program: "Reality Day",
    title: "No era solo mantención",
    subtitle: "Un día real de trabajo",
    url: "https://youtu.be/4xe4CtPW4lI",
    meta: "Episodio 2 · 2026",
    location: "Santiago de Chile",
    thumb: "/ep2_thumb.jpg",
    description:
      "Un taller mecánico enfrenta un problema que no aparece a simple vista. Diagnóstico, presión y decisiones técnicas en tiempo real.",
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
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
    >
      {children}
    </a>
  );
}

function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="relative w-14 h-14 md:w-16 md:h-16">
          <Image
            src="/2025_logo_tronx_tv.png"
            alt="Tronx TV"
            fill
            className="object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-white/70">
          <a href="#programas" className="hover:text-white transition">Programas</a>
          <a href="#episodios" className="hover:text-white transition">Episodios</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const latest = EPISODES[EPISODES.length - 1];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
      <TopNav />

      <Image
        src="/bg_tronxtv.jpg"
        alt="Tronx TV"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-5xl px-6 text-center pt-32">
        <div className="flex justify-center gap-2 mb-6">
          <Pill>Serie documental</Pill>
          <Pill>Observación directa</Pill>
          <Pill>Temporadas</Pill>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {SITE.name}
        </h1>

        <p className="mt-4 text-xs tracking-widest uppercase text-white/60">
          {SITE.tagline}
        </p>

        <p className="mt-8 text-lg md:text-xl text-white/85 leading-relaxed">
          El trabajo no se detiene.
          <br />
          Se decide bajo presión.
          <br />
          Se sostiene en silencio.
          <br />
          <span className="font-medium text-white">
            Documentamos jornadas completas, tal como ocurren.
          </span>
        </p>

        <div className="mt-10">
          <PrimaryButton href={latest.url}>
            Ver último episodio
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Nuestra mirada
        </div>

        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
          No dramatizamos.
          <br />
          Observamos.
        </h2>

        <p className="mt-8 text-white/75 leading-relaxed">
          Cada episodio acompaña un día completo.
          Las decisiones ocurren frente a la cámara,
          y continúan después.
          <br />
          El conflicto no se escribe.
          Se encuentra.
        </p>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section id="programas" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Programas
        </div>

        <h2 className="mt-4 text-3xl font-extrabold">
          Formatos documentales
        </h2>

        <p className="mt-6 text-white/75 max-w-3xl">
          Tronx TV desarrolla series por temporadas.
          Cada formato explora el trabajo desde un ángulo distinto.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="border border-white/10 rounded-3xl p-6 bg-white/5"
            >
              <div className="text-xs tracking-widest uppercase text-white/50">
                {p.status}
              </div>
              <div className="mt-3 text-xl font-extrabold">{p.name}</div>
              <p className="mt-3 text-sm text-white/70">
                {p.name === "Reality Day"
                  ? "Una jornada completa acompañando decisiones reales."
                  : "Formato en desarrollo dentro del universo Tronx TV."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Episodios() {
  return (
    <section id="episodios" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Reality Day
        </div>

        <h2 className="mt-4 text-3xl font-extrabold">
          Episodios disponibles
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
                <p className="mt-4 text-white/75 leading-relaxed">
                  {ep.description}
                </p>

                <div className="mt-6">
                  <PrimaryButton href={ep.url}>
                    Ver en YouTube
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

function Contacto() {
  return (
    <section id="contacto" className="py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">
          Producción documental
        </div>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
          Propuestas y colaboraciones
        </h2>

        <p className="mt-6 text-white/75 max-w-3xl mx-auto">
          Tronx TV desarrolla episodios documentales para empresas,
          instituciones y equipos que deseen registrar una jornada real
          bajo formato editorial.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-6 py-3 text-sm font-semibold border border-white/15 hover:bg-white/15 transition"
          >
            {SITE.email}
          </a>
        </div>

        <div className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Tronx TV — Publicación por temporadas.
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
      <Episodios />
      <Contacto />
    </main>
  );
}
