import Image from "next/image";
import ValueGrid from "@/components/ValueGrid";
import ProgramCard from "@/components/ProgramCard";

function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
      {/* Fondo */}
      <Image
        src="/bg_tronxtv.png"
        alt="Tronx TV background"
        fill
        priority
        className="object-cover object-center brightness-60"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Tronx TV: Historias que trascienden fronteras
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
          Un canal editorial multiplataforma que recorre territorios, culturas y
          personas desde Chile hacia el mundo. Narrativas originales que combinan
          documental, ficción y conversación en formatos diversos.
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <h2 className="h2">Programas originales</h2>
          <p className="p mt-2">
            Historias bien contadas en distintos formatos. Publicación por
            temporada, con mirada editorial propia y en calidad 4K UHD.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ProgramCard
              title="Reality Day"
              desc="Serie documental laboral: acompañamos a personas reales en su trabajo diario, mostrando esfuerzo, humanidad y oficio."
              image="/reality_day.jpg"
              href="/programas"
              badge="Temporada 1 · 8×12’"
            />
            <ProgramCard
              title="Buen Día, Vecino"
              desc="Serie comunitaria y territorial: barrios, municipios y juntas vecinales desde adentro, con un tono cercano e inclusivo."
              image="/buen_dia_vecino.jpg"
              href={{ pathname: "/programas", hash: "bdv" }}
              badge="En desarrollo"
            />
            <ProgramCard
              title="Vodcast Tronx"
              desc="Conversaciones con personajes interesantes sobre cultura, actualidad y vida real chilena."
              image="/vodcast.jpg"
              href={{ pathname: "/programas", hash: "vodcast" }}
              badge="En desarrollo"
            />
          </div>

          <hr className="divider" />

          <h2 className="h2">Valor para marcas e instituciones</h2>
          <p className="p mt-2 max-w-3xl">
            No sólo producimos un programa: creamos contenido editorial que
            conecta con audiencias reales y otorga valor reputacional. Ideal para
            fortalecer marca empleadora, cultura interna y presencia pública.
          </p>

          <div className="mt-6">
            <ValueGrid />
          </div>
        </div>
      </section>
    </>
  );
}
