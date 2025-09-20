import Hero from "@/components/Hero";
import ValueGrid from "@/components/ValueGrid";
import ProgramCard from "@/components/ProgramCard";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <h2 className="h2">Programas originales</h2>
          <p className="p mt-2">
            Realidad + narrativa + estética cinematográfica. Publicación por temporada. Todo en 4K UHD.
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
            No sólo producimos un video: integramos a tu organización en un contenido editorial con distribución real.
            Ideal para reputación, marca empleadora y cultura interna.
          </p>
          <div className="mt-6">
            <ValueGrid />
          </div>

          <div className="card p-6 mt-8">
            <h3 className="h3">Planes y monetización</h3>
            <p className="p mt-2">
              A medida que el canal escala (1K → 5K → 10K+ subs), se habilitan paquetes editoriales y comerciales.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mt-4 text-white/80">
              <li>• Episodio editorial + video empresa: $1.200.000 – $1.800.000 (1.000 subs)</li>
              <li>• Episodio + Pack comercial completo: $2.000.000 – $2.800.000 (3.000–5.000 subs)</li>
              <li>• Episodio premium + pauta digital: desde $3.500.000 (5.000–10.000 subs)</li>
              <li>• Pack completo + reels + estrategia: $4.000.000 – $6.000.000 (50.000 subs)</li>
              <li>• Premium + pauta + marca integrada: $6.000.000 – $10.000.000+ (100.000 subs)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

