export const metadata = {
  title: "Próximamente | Tronx TV",
  description: "Calendario sugerido de publicación para Temporada 1 (2025) y visión futura.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Próximamente</h1>
        <p className="p mt-2">Calendario sugerido de publicación – Temporada 1 (2025)</p>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {[
            { mes: "Julio", info: "Ep1 (viral) · Ep2 (comercial)" },
            { mes: "Agosto", info: "Ep3 (viral)" },
            { mes: "Septiembre", info: "Ep4 (comercial)" },
            { mes: "Octubre", info: "Ep5 (viral) · Ep6 (viral)" },
            { mes: "Noviembre", info: "Ep7 (comercial)" },
            { mes: "Diciembre", info: "Ep8 (viral)" },
          ].map(({mes, info}) => (
            <div key={mes} className="card p-5">
              <div className="badge">{mes}</div>
              <div className="h3 mt-2">{info}</div>
              <p className="text-white/70 mt-2 text-sm">Publicación escalonada con clips verticales y repost de aliados.</p>
            </div>
          ))}
        </div>

    </section>
  );
}
