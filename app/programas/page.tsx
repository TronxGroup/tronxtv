import Image from "next/image";

export const metadata = {
  title: "Programas | Tronx TV",
  description: "Reality Day, Buen Día, Vecino y Vodcast Tronx. Programación original en 4K UHD.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Programas</h1>
        <p className="p mt-2">Programación 100% original. Grabaciones en terreno y estudio. Todo en 4K UHD.</p>

        {/* Reality Day */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/reality_day.jpg" alt="Reality Day" fill className="object-cover" />
            </div>
            <div className="p-6">
              <span className="badge">Temporada 1 · 8×12’</span>
              <h2 className="h3 mt-2">Reality Day</h2>
              <p className="p mt-2">
                Serie documental laboral que acompaña a personas reales en sus trabajos cotidianos.
                Estilo cinematográfico, ritmo real, tono humano.
              </p>
              <ul className="mt-4 text-white/80 space-y-2">
                <li>• Contenido por episodio: mini doc vertical, teaser, reel emocional, reel blooper, historias IG y carrusel.</li>
                <li>• Producción estándar: 4–6 horas de terreno · Sony FX3 · audio pro · gimbal.</li>
                <li>• Publicación escalonada por temporada.</li>
              </ul>
            </div>
          </div>

          {/* Buen Día, Vecino */}
          <div id="bdv" className="card overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/buen_dia_vecino.jpg" alt="Buen Día, Vecino" fill className="object-cover" />
            </div>
            <div className="p-6">
              <span className="badge">En desarrollo</span>
              <h2 className="h3 mt-2">Buen Día, Vecino</h2>
              <p className="p mt-2">
                Serie comunitaria y territorial. Barrios, municipios y juntas vecinales desde adentro. Tono amable e inclusivo.
              </p>
              <p className="text-white/80 mt-2">Temporada 1 proyectada: 6 episodios × 10–12 min.</p>
            </div>
          </div>
        </div>

        {/* Vodcast */}
        <div id="vodcast" className="card overflow-hidden mt-6">
          <div className="relative aspect-video">
            <Image src="/vodcast.jpg" alt="Vodcast Tronx" fill className="object-cover" />
          </div>
          <div className="p-6">
            <span className="badge">En desarrollo</span>
            <h2 className="h3 mt-2">Vodcast Tronx</h2>
            <p className="p mt-2">
              Conversaciones con figuras públicas o interesantes, en un formato audiovisual moderno y dinámico.
              Cultura pop, actualidad y vida real chilena.
            </p>
            <p className="text-white/80 mt-2">Temporada 1 proyectada: 10 episodios × 20–25 min.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
