import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contacto | Tronx TV",
  description: "Habla con producción y participa con tu empresa o comunidad.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2">¿Eres empresa, institución o comunidad? Conversemos un episodio o coproducción.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-6">
            <h2 className="h3">Producción Tronx TV</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><Mail size={18}/> info@tronxtv.com</li>
              <li className="flex items-center gap-3"><Phone size={18}/> +56 9 0000 0000</li>
              <li className="flex items-center gap-3"><MapPin size={18}/> Santiago de Chile</li>
            </ul>

            <div className="mt-6 text-sm text-white/60">
              <p><strong>Creador y Productora:</strong> Dekaelo Media</p>
              <p><strong>Fundador y Director:</strong> Tomás Echeverría</p>
              <p><strong>Plataformas:</strong> YouTube, Instagram, TikTok, X, Shorts</p>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="h3">Qué podemos producir contigo</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Episodio editorial para marca empleadora o cultura interna.</li>
              <li>• Paquete comercial con clips verticales, teaser y distribución.</li>
              <li>• Episodios temáticos para ferias, selección de talento o reputación.</li>
            </ul>
            <p className="p mt-4">Envíanos una idea de episodio y la ciudad/barrio. Coordinamos piloto.</p>
          </div>
        </div>

        <div className="card p-6 mt-6">
          <h2 className="h3">Registro de derechos</h2>
          <p className="p mt-2">Cada programa/episodio se registra en el DDI (Chile): nombre, sinopsis, episodios, créditos, música y artes, para resguardar la propiedad intelectual.</p>
        </div>
      </div>
    </section>
  );
}
