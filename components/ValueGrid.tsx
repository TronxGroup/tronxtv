import { Film, Layers, Users, Rocket } from "lucide-react";

const items = [
  { icon: Film, title: "4K UHD", text: "Producción y publicación en 4K para máxima calidad y longevidad." },
  { icon: Layers, title: "Editorial + Comercial", text: "Equilibrio entre narrativa documental y presencia de marca." },
  { icon: Users, title: "Audiencia Real", text: "Formatos pensados para redes, con protagonistas y territorios reales." },
  { icon: Rocket, title: "Distribución", text: "Publicación escalonada, clips verticales y repost de aliados." }
];

export default function ValueGrid() {
  return (
    <div className="grid md:grid-cols-4 gap-5">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="card p-5">
          <div className="badge mb-3 inline-flex gap-2"><Icon size={16}/><span>{title}</span></div>
          <p className="p">{text}</p>
        </div>
      ))}
    </div>
  );
}
