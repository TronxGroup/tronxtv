import Link from "next/link";
import { Youtube, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="h3">Tronx TV</h4>
          <p className="p mt-2">Canal editorial audiovisual creado por Dekaelo Media. Lanzamiento 2025 – Santiago de Chile.</p>
          <div className="flex gap-3 mt-5">
            <Link href="https://youtube.com" className="btn-outline"><Youtube size={18}/> YouTube</Link>
            <Link href="https://instagram.com" className="btn-outline"><Instagram size={18}/> Instagram</Link>
            <Link href="https://x.com" className="btn-outline"><Twitter size={18}/> X</Link>
          </div>
        </div>
        <div>
          <h4 className="h3">¿Eres empresa o institución?</h4>
          <p className="p mt-2">Participa con un episodio editorial o coproduce un programa. Escríbenos y coordinemos un piloto.</p>
          <Link href="/contacto" className="btn mt-4"><Send size={18}/> Hablar con producción</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Tronx TV · Dekaelo Media
      </div>
    </footer>
  );
}
