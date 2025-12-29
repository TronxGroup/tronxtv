"use client";

import Image from "next/image";

/**
 * Tronx TV — Landing editorial (vitrina)
 * - Sin dependencias externas (no lucide-react)
 * - Enfoque editorial, no venta
 * - Secciones: Hero, Manifiesto, Programas, Episodio 1, Contacto, Footer
 * - Assets esperados en /public:
 *   /bg_tronxtv.jpg
 *   /2025_logo_tronx_tv.png
 *   /ep1_thumb.jpg
 */

const SITE = {
  name: "Tronx TV",
  email: "info@tronxtv.com",
  socials: [
    { name: "YouTube", href: "https://www.youtube.com/@tronxtv" },
    { name: "Instagram", href: "https://www.instagram.com/tronxtv/" },
    { name: "Facebook", href: "https://web.facebook.com/tronxtv/" },
    { name: "TikTok", href: "https://www.tiktok.com/@tronxtv" },
  ],
};

const EP1 = {
  title: "Reality Day | El mimbre no espera — Un día real de trabajo",
  url: "https://youtu.be/xiOxzZTb8Q4",
  location: "Ñuñoa, Santiago de Chile",
  meta: "Episodio 1 — El mimbre no espera",
  series: "Reality Day",
  description: `Hay trabajos que no se pueden apurar, y días que no esperan.

En este primer episodio de Reality Day, acompañamos a Milenko Pradenas durante una jornada real de trabajo en Artesanía Pradena, un taller familiar con más de 50 años dedicado al mimbre y la restauración.

Sin guión, sin intervención y sin personajes forzados, el episodio observa el ritmo real del oficio: clientes, decisiones, problemas cotidianos y el peso del tiempo en un trabajo hecho a mano.

Subtítulos disponibles en español e inglés.`,
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
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
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
      {description ? <p className="mt-4 text-white/75 leading-relaxed">{description}</p> : null}
    </div>
  );
}

function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-3">
          <span className="relative w-9 h-9">
            <Image src="/2025_logo_tronx_tv.png" alt="Tronx TV" fill className="object-contain" sizes="36px" />
          </span>
          <span className="text-sm tracking-widest uppercase text-white/80">Tronx TV</span>
        </a>

        <nav className="hidden md:flex items-center gap-3 text-xs text-white/70">
          <a href="#programas" className="hover:text-white transition">
            Programas
          </a>
          <a href="#episodios" className="hover:text-white transition">
            Episodios
          </a>
          <a href="#manifiesto" className="hover:text-white transition">
            Editorial
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
        alt="Tronx TV — Fondo"
        fill
        priority
        className="object-cover object-center brightness-[0.55]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />

      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center justify-center gap-2 px-6">
        <Pill>Plataforma editorial</Pill>
        <Pill>Programas originales</Pill>
        <Pill>Documental observacional</Pill>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
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

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">{SITE.name}</h1>

          <p className="mt-6 max-w-3xl text-base md:text-xl text-white/85 leading-relaxed">
            Plataforma de contenido audiovisual original: documental, conversación y formatos observacionales.
            <span className="text-white/90 font-medium"> Realidad sin guión, sin intervención.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <PrimaryButton href={EP1.url} ariaLabel="Ver Reality Day Episodio 1 en YouTube">
              <IconPlay className="w-5 h-5" />
              Ver Episodio 1
            </PrimaryButton>
            <SecondaryButton href="#programas">Explorar programas</SecondaryButton>
          </div>

          <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-3xl border border-white/12 bg-black/35 backdrop-blur p-6 text-left">
              <div className="text-xs tracking-widest uppercase text-white/50">Enfoque</div>
              <div className="mt-2 text-lg font-extrabold">Mirada editorial</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Observamos la realidad como ocurre: trabajo, oficio, cultura y decisiones cotidianas.
              </p>
            </div>
            <div className="rounded-3xl border border-white/12 bg-black/35 backdrop-blur p-6 text-left">
              <div className="text-xs tracking-widest uppercase text-white/50">Formato</div>
              <div className="mt-2 text-lg font-extrabold">Sin conductor</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Sin personajes forzados ni guión. El ritmo lo define el lugar y su jornada real.
              </p>
            </div>
            <div className="rounded-3xl border border-white/12 bg-black/35 backdrop-blur p-6 text-left">
              <div className="text-xs tracking-widest uppercase text-white/50">Publicación</div>
              <div className="mt-2 text-lg font-extrabold">Serie viva</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Episodios y programas nuevos a medida que la realidad lo permite. Sin promesas vacías.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SITE.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm border border-white/12 hover:bg-white/15 transition"
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

function Manifiesto() {
  return (
    <section id="manifiesto" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionTitle
          kicker="Editorial"
          title="Una plataforma para observar la realidad"
          description="Tronx TV nace como una vitrina editorial: historias actuales, trabajo real y decisiones cotidianas. Sin intervención. Sin performance."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs tracking-widest uppercase text-white/50">Principios</div>
            <ul className="mt-5 space-y-4 text-white/80 leading-relaxed">
              <li>
                <span className="font-semibold text-white">Observación</span>: la cámara acompaña. No empuja la escena.
              </li>
              <li>
                <span className="font-semibold text-white">Respeto</span>: el oficio es protagonista, no el equipo de producción.
              </li>
              <li>
                <span className="font-semibold text-white">Ritmo real</span>: llamadas, clientes, tiempos, errores, soluciones.
              </li>
              <li>
                <span className="font-semibold text-white">Archivo</span>: construir una biblioteca de trabajos, oficios y empresas reales.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="text-xs tracking-widest uppercase text-white/50">Qué puedes esperar</div>
            <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">
              Episodios cortos, precisos y observacionales. El objetivo no es “venderte” una historia: es mostrar un día
              real de trabajo, tal como ocurre.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs tracking-widest uppercase text-white/50">Accesibilidad</div>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                Cuando aplique, publicamos subtítulos para ampliar audiencia (español e inglés).
              </p>
            </div>

            <div className="mt-6">
              <SecondaryButton href="#episodios">Ver episodios</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EpisodeCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative lg:col-span-7 min-h-[280px]">
        <Image
          src="/ep1_thumb.jpg"
          alt="Reality Day Episodio 1 — El mimbre no espera"
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
        <div className="text-xs tracking-widest uppercase text-white/60">{EP1.series}</div>
        <h3 className="mt-3 text-xl md:text-2xl font-extrabold">Episodio 1</h3>

        <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed whitespace-pre-line">{EP1.description}</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <PrimaryButton href={EP1.url}>Ver en YouTube</PrimaryButton>
          <a
            href={SITE.socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-5 py-3 text-sm md:text-base font-semibold border border-white/15 hover:bg-white/15 transition"
          >
            Suscribirse
          </a>
        </div>

        <p className="mt-4 text-xs text-white/50 leading-relaxed">
          Nota: Tronx TV es una plataforma. Reality Day es uno de nuestros formatos editoriales.
        </p>
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

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <EpisodeCard />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
              <div className="text-xs tracking-widest uppercase text-white/50">Próximos episodios</div>
              <div className="mt-2 text-lg font-extrabold">Enero 2026</div>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                Nuevas jornadas en oficios, empresas de servicios y operaciones reales. Cada episodio mantiene el mismo
                estándar editorial.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Oficios</Pill>
                <Pill>Servicios</Pill>
                <Pill>Operaciones</Pill>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-xs tracking-widest uppercase text-white/50">Sobre Tronx TV</div>
              <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed">
                Tronx TV es una vitrina editorial con programas y series originales. Publicamos documental,
                conversación y formatos observacionales desde Chile hacia el mundo.
              </p>
              <div className="mt-6">
                <SecondaryButton href="#contacto">Contacto</SecondaryButton>
              </div>
            </div>
          </div>
        </div>

        <div id="episodios" className="mt-14">
          <SectionTitle
            kicker="Episodios"
            title="Archivo en construcción"
            description="Reality Day inicia con el Episodio 1. El canal crecerá por acumulación: más lugares, más jornadas, más realidad."
          />

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="text-xs tracking-widest uppercase text-white/50">Ver el episodio</div>
              <div className="mt-2 text-xl md:text-2xl font-extrabold">El mimbre no espera</div>
              <p className="mt-2 text-sm md:text-base text-white/70">{EP1.location}</p>
            </div>
            <PrimaryButton href={EP1.url}>
              <IconPlay className="w-5 h-5" />
              Abrir en YouTube
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactoEditorial() {
  return (
    <section id="contacto" className="w-full">
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                kicker="Contacto"
                title="Propuestas y colaboraciones"
                description="Tronx TV recibe propuestas editoriales, acceso a lugares de trabajo y colaboraciones institucionales. Priorizamos entornos reales y jornadas auténticas."
              />
              <div className="mt-6 text-sm md:text-base text-white/75 leading-relaxed">
                Si quieres proponer un lugar, un oficio o una operación interesante, escríbenos. También respondemos a
                solicitudes institucionales cuando exista un encuadre editorial claro.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-white/80">
                    <IconMail />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-white/85">
                      Contacto editorial e institucional:
                    </p>
                    <p className="mt-2 font-semibold">
                      <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">
                        {SITE.email}
                      </a>
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
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

                    <p className="mt-5 text-xs text-white/50 leading-relaxed">
                      Nota: Reality Day es un programa de Tronx TV. Tronx TV puede desarrollar nuevos formatos y series.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50 leading-relaxed">
            © {new Date().getFullYear()} Tronx TV — Tronx Group. Todos los derechos reservados.
          </div>
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
            <Image src="/2025_logo_tronx_tv.png" alt="Tronx TV" fill className="object-contain" sizes="40px" />
          </div>
          <div className="text-xs md:text-sm text-white/60">© {new Date().getFullYear()} Tronx TV — Tronx Group.</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
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
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Hero />
      <Manifiesto />
      <Programas />
      <ContactoEditorial />
      <Footer />
    </main>
  );
}
