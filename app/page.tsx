"use client";

import Image from "next/image";

/**
 * Tronx TV — Landing minimal (editorial / vitrina)
 *
 * Assets esperados en /public:
 *  /bg_tronxtv.jpg
 *  /2025_logo_tronx_tv.png
 *  /ep1_thumb.jpg
 */

const SITE = {
  name: "Tronx TV",
  tagline: "Plataforma editorial de contenido original",
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
  { name: "Vodcast", status: "Próximamente" },
  { name: "Series especiales", status: "Próximamente" },
];

const EP1 = {
  title: "Reality Day | El mimbre no espera — Un día real de trabajo",
  url: "https://youtu.be/xiOxzZTb8Q4",
  meta: "Reality Day — Episodio 1",
  location: "Ñuñoa, Santiago de Chile",
  description:
    "Acompañamos una jornada real en Artesanía Pradena: oficio, clientes, decisiones y el peso del tiempo en un trabajo hecho a mano. Subtítulos en español e inglés.",
};

function IconPlay({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-widest uppercase backdrop-blur border border-white/15">
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-5 py-3 text-sm md:text-base font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:opacity-90 transition"
    >
      {children}
      <IconArrowRight />
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-5 py-3 text-sm md:text-base font-semibold border border-white/15 hover:bg-white/15 transition"
    >
      {children}
    </a>
  );
}

function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <span className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/2025_logo_tronx_tv.png"
              alt="Tronx TV"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 56px, 64px"
              priority
            />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-white/70">
          <a href="#programas" className="hover:text-white transition">
            Programas
          </a>
          <a href="#episodio" className="hover:text-white transition">
            Episodio
          </a>
          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
      <TopNav />

      <Image
        src="/bg_tronxtv.jpg"
        alt="Tronx TV — Fondo editorial"
        fill
        priority
        className="object-cover object-center brightness-[0.55]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />

      {/* Pills superiores — más separados del contenido */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center justify-center gap-2 px-6">
        <Pill>Canal editorial</Pill>
        <Pill>Programas originales</Pill>
        <Pill>Realidad sin guión</Pill>
      </div>

      {/* Contenido principal — baja para dar aire */}
      <div className="relative z-10 w-full max-w-6xl px-6 pt-44 pb-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">{SITE.name}</h1>

          <p className="mt-4 text-xs md:text-sm tracking-widest uppercase text-white/60">{SITE.tagline}</p>

          <p className="mt-6 max-w-3xl text-base md:text-xl text-white/85 leading-relaxed">
            Documental, conversación y formatos observacionales.
            <span className="text-white/90 font-medium"> Distintos programas, una sola regla: la realidad manda.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <PrimaryButton href={EP1.url} ariaLabel="Ver Reality Day Episodio 1 en YouTube">
              <IconPlay className="w-5 h-5" />
              Ver Reality Day · Episodio 1
            </PrimaryButton>
            <SecondaryButton href="#programas">Explorar programas</SecondaryButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SITE.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm border border-white/12 hover:bg-white/15 transition"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section id="programas" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs tracking-widest uppercase text-white/50">Programas</div>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold">Un canal, varios formatos</h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            Reality Day es el primer programa publicado. Tronx TV está diseñado para crecer con nuevos formatos y
            temporadas.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROGRAMS.map((p) => (
            <div key={p.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-widest uppercase text-white/50">{p.status}</div>
                <Pill>Formato</Pill>
              </div>
              <div className="mt-3 text-lg font-extrabold">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Episodio() {
  return (
    <section id="episodio" className="w-full">
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="relative lg:col-span-7 min-h-[280px]">
            <Image
              src="/ep1_thumb.jpg"
              alt={EP1.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs text-white/70">{EP1.meta}</div>
                <div className="mt-1 text-lg md:text-2xl font-extrabold leading-tight">El mimbre no espera</div>
                <div className="mt-1 text-xs md:text-sm text-white/70">{EP1.location}</div>
              </div>
              <a
                href={EP1.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                <IconPlay className="w-4 h-4" />
                Ver
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 md:p-8">
            <div className="text-xs tracking-widest uppercase text-white/60">Reality Day</div>
            <h3 className="mt-3 text-xl md:text-2xl font-extrabold">Episodio 1</h3>
            <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">{EP1.description}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <PrimaryButton href={EP1.url}>Ver en YouTube</PrimaryButton>
              <SecondaryButton href={SITE.socials[0].href}>Suscribirse</SecondaryButton>
            </div>

            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Tronx TV es el canal. Reality Day es un programa dentro del canal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="w-full">
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs tracking-widest uppercase text-white/50">Contacto</div>
              <div className="mt-2 text-2xl md:text-3xl font-extrabold">Propuestas editoriales</div>
              <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed">
                Lugares, oficios, empresas e historias reales. Selección y producción según criterio editorial.
              </p>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 text-white px-5 py-3 text-sm md:text-base font-semibold border border-white/15 hover:bg-white/15 transition"
            >
              <IconMail className="w-5 h-5" />
              {SITE.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {SITE.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm border border-white/12 hover:bg-white/15 transition"
              >
                {s.name}
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Tronx TV — Tronx Group.
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Programas />
      <Episodio />
      <Contacto />
    </main>
  );
}
