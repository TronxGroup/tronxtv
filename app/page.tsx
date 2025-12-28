"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Film,
  Mail,
  Youtube,
  Instagram,
  Facebook,
  Music2, // good enough icon for TikTok vibe (lucide doesn't have official tiktok)
} from "lucide-react";

const EP1 = {
  title: "Reality Day | El mimbre no espera — Un día real de trabajo",
  url: "https://youtu.be/xiOxzZTb8Q4",
  location: "Ñuñoa, Santiago de Chile",
  meta: "Episodio 1 — El mimbre no espera",
  description: `Hay trabajos que no se pueden apurar, y días que no esperan.

En este primer episodio de Reality Day, acompañamos a Milenko Pradenas durante una jornada real de trabajo en Artesanía Pradena, un taller familiar con más de 50 años dedicado al mimbre y la restauración.

Sin guión, sin intervención y sin personajes forzados, este episodio observa el ritmo real del oficio: clientes, decisiones, problemas cotidianos y el peso del tiempo en un trabajo hecho a mano.

Subtítulos disponibles en español e inglés.`,
};

const SOCIALS = [
  { name: "YouTube", href: "https://www.youtube.com/@tronxtv", icon: Youtube },
  { name: "Instagram", href: "https://www.instagram.com/tronxtv/", icon: Instagram },
  { name: "Facebook", href: "https://web.facebook.com/tronxtv/", icon: Facebook },
  { name: "TikTok", href: "https://www.tiktok.com/@tronxtv", icon: Music2 },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-widest uppercase backdrop-blur border border-white/15">
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-5 py-3 text-sm md:text-base font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:opacity-90 transition"
    >
      {Icon ? <Icon className="w-5 h-5" /> : null}
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-5 py-3 text-sm md:text-base font-semibold border border-white/15 hover:bg-white/15 transition"
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center text-white overflow-hidden">
      {/* Fondo */}
      <Image
        src="/bg_tronxtv.png"
        alt="Tronx TV"
        fill
        priority
        className="object-cover object-center brightness-[0.55]"
        sizes="100vw"
      />

      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

      {/* Banda superior */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        <Pill>Plataforma editorial</Pill>
        <Pill>Programas originales</Pill>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center text-center">
          <div className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 relative">
            <Image
              src="/2025_logo_tronx_tv.png"
              alt="Logo Tronx TV"
              fill
              className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              priority
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Tronx TV
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-xl text-white/85 leading-relaxed">
            Plataforma de contenido audiovisual original.
            Documental, conversación y formatos observacionales.
            <span className="text-white/90 font-medium"> Realidad sin guión, sin intervención.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <PrimaryButton href={EP1.url} icon={Play}>
              Ver Episodio 1
            </PrimaryButton>
            <SecondaryButton href="#programas">Explorar programas</SecondaryButton>
          </div>

          {/* Contacto institucional */}
          <div className="mt-10 w-full max-w-3xl rounded-3xl border border-white/12 bg-black/35 backdrop-blur px-6 py-5 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Mail className="w-5 h-5 text-white/80" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-white/85">
                  ¿Eres empresa o institución? Podemos producir un episodio o una serie interna/externa con
                  el mismo estándar editorial.
                </p>
                <p className="mt-2 font-semibold">
                  <a
                    href="mailto:info@tronxtv.com"
                    className="underline-offset-4 hover:underline"
                  >
                    info@tronxtv.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Links sociales compactos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm border border-white/12 hover:bg-white/15 transition"
              >
                <s.icon className="w-4 h-4" />
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs tracking-widest uppercase text-white/50">{kicker}</div>
      <h2 className="mt-3 text-2xl md:text-4xl font-extrabold">{title}</h2>
      {description ? (
        <p className="mt-4 text-white/75 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

function EpisodeCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      {/* Preview / Thumbnail */}
      <div className="relative lg:col-span-7 min-h-[260px]">
        {/* Recomendación: guarda una miniatura local en /public/ep1_thumb.jpg */}
        <Image
          src="/ep1_thumb.jpg"
          alt="Episodio 1 — El mimbre no espera"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-white/70">{EP1.meta}</div>
            <div className="mt-1 text-lg md:text-2xl font-extrabold leading-tight">
              El mimbre no espera
            </div>
            <div className="mt-1 text-xs md:text-sm text-white/70">{EP1.location}</div>
          </div>
          <a
            href={EP1.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            <Play className="w-4 h-4" />
            Ver
          </a>
        </div>
      </div>

      {/* Texto */}
      <div className="lg:col-span-5 p-6 md:p-8">
        <div className="flex items-center gap-2 text-white/70">
          <Film className="w-4 h-4" />
          <span className="text-xs tracking-widest uppercase">Reality Day</span>
        </div>

        <h3 className="mt-3 text-xl md:text-2xl font-extrabold">
          Episodio 1
        </h3>

        <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed whitespace-pre-line">
          {EP1.description}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <PrimaryButton href={EP1.url} icon={Youtube}>
            Ver en YouTube
          </PrimaryButton>
          <SecondaryButton href="https://www.youtube.com/@tronxtv">
            Suscribirse
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

function Programas() {
  return (
    <section id="programas" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionTitle
          kicker="Programas"
          title="Reality Day"
          description="Un día real de trabajo dentro de una empresa u oficio, tal como ocurre. Sin conductor, sin intervención, sin promesas."
        />

        <div className="mt-10">
          <EpisodeCard />
        </div>

        {/* Espacio para futuros programas */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
          <div className="text-xs tracking-widest uppercase text-white/50">Tronx TV</div>
          <div className="mt-2 text-lg md:text-xl font-extrabold">Nuevos programas</div>
          <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
            Tronx TV es una plataforma: Reality Day es uno de nuestros formatos.
            A futuro, publicaremos nuevas series y programas (documental, conversación y formatos especiales).
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-9 h-9 md:w-10 md:h-10">
            <Image
              src="/2025_logo_tronx_tv.png"
              alt="Tronx TV"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div className="text-xs md:text-sm text-white/60">
            © {new Date().getFullYear()} Tronx TV — Tronx Group. Todos los derechos reservados.
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm border border-white/12 hover:bg-white/15 transition"
            >
              <s.icon className="w-4 h-4" />
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Hero />
      <Programas />
      <Footer />
    </main>
  );
}
