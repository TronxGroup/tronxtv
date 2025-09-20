import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 badge mb-5">
          <span>Lanzamiento 2025</span>
          <span className="w-1.5 h-1.5 rounded-full bg-tronx-accent"></span>
          <span>Chile · LATAM</span>
        </div>
        <h1 className="h1">Tronx TV: Realidad con narrativa y estética cinematográfica</h1>
        <p className="p mt-4 max-w-2xl mx-auto">
          Canal editorial multiplataforma creado por Dekaelo Media. Programas originales, grabaciones en terreno y estudio, mezcla de contenido gratuito y patrocinado.
        </p>
        <div className="flex items-center justify-center gap-3 mt-7">
          <Link href="/programas" className="btn">Explorar Programas</Link>
          <Link href="/contacto" className="btn-outline">Participar como empresa</Link>
        </div>
      </div>
    </section>
  );
}
