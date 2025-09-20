import Image from "next/image";
import ValueGrid from "@/components/ValueGrid";
import ProgramCard from "@/components/ProgramCard";

function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {/* Fondo */}
      <Image
        src="/bg_tronxtv.png"
        alt="Tronx TV background"
        fill
        priority
        className="object-cover object-center brightness-50"
      />
      {/* Overlay de color (oscurece un poco para que el texto sea legible) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Tronx TV: Realidad con narrativa y estética cinematográfica
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Canal editorial multiplataforma creado por Dekaelo Media. Programas
          originales, grabaciones en terreno y estudio, mezcla de contenido
          gratuito y patrocinado.
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
            Realidad + narrativa + estética cinematográfica. Publicación por
            temporada. Todo en 4K UHD.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ProgramCard
              title="Reality Day"
              desc="Serie documental laboral: acompañamos a personas reales en su trabajo diario, con tono humano y ritmo real."
              image="/reality_day.jpg"
              href="/programas"
              badge="Temporada 1 · 8×12’"
            />
            <ProgramCard
              title="Buen Día, Vecino"
              desc="Serie comunitaria y territorial: barrios, municipios y juntas vecinales desde adentro. Cercano e inclusivo."
              image="/buen_dia_vecino.jpg"
              href={{ pathname: "/programas", hash: "bdv" }}
              badge="En desarrollo"
            />
            <ProgramCard
              title="Vodcast Tronx"
              desc="Conversaciones con personajes interesantes sobre cultura pop, actualidad y vida real chilena."
              image="/vodcast.jpg"
              href={{ pathname: "/programas", hash: "vodcast" }}
              badge="En desarrollo"
            />
          </div>

          <hr className="divider" />

          <h2 className="h2">Valor para marcas e instituciones</h2>
          <p className="p mt-2 max-w-3xl">
            No sólo producimos un video: integramos a tu organización en un
            contenido editorial con distribución real. Ideal para reputación,
            marca empleadora y cultura interna.
          </p>
          <div className="mt-6">
            <ValueGrid />
          </div>
        </div>
      </section>
    </>
  );
}
