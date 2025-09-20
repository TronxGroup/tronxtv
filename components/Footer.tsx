import Link from "next/link";
import { Send } from "lucide-react";

// Iconos inline (YouTube, Instagram, TikTok, Facebook, X)
function IconYouTube(props: React.SVGProps<SVGSVGElement>) { return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-5.8Z" fill="currentColor" opacity=".2"/><path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor"/></svg>); }
function IconInstagram(props: React.SVGProps<SVGSVGElement>) { return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>); }
function IconTikTok(props: React.SVGProps<SVGSVGElement>) { return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M15 3c.4 2.1 1.9 3.7 4 4v3.2a7.8 7.8 0 0 1-4-1.2v6.6A6 6 0 1 1 9 9.8V13a3 3 0 1 0 3 3V3h3Z" fill="currentColor"/></svg>); }
function IconFacebook(props: React.SVGProps<SVGSVGElement>) { return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M13.5 21v-7h2.3l.4-3h-2.7V8.9c0-.9.3-1.5 1.7-1.5H16V4.7c-.3 0-1.3-.1-2.4-.1-2.3 0-3.8 1.3-3.8 3.9V11H7.5v3h2.3v7h3.7Z" fill="currentColor"/></svg>); }
function IconX(props: React.SVGProps<SVGSVGElement>) { return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="m4 4 7.4 8.9L4.6 20H8l4.7-5.4L17.9 20H20l-7.2-8.8L19.4 4H16l-4.3 5-3.9-5H4Z" fill="currentColor"/></svg>); }

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="h3">Tronx TV</h4>
          <p className="p mt-2">Canal editorial audiovisual creado por Dekaelo Media. Santiago de Chile.</p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a href="https://youtube.com/@tronxtv" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2"><IconYouTube width={18} height={18}/>YouTube</a>
            <a href="https://instagram.com/tronxtv" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2"><IconInstagram width={18} height={18}/>Instagram</a>
            <a href="https://tiktok.com/@tronxtv" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2"><IconTikTok width={18} height={18}/>TikTok</a>
            <a href="https://facebook.com/tronxtv" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2"><IconFacebook width={18} height={18}/>Facebook</a>
            <a href="https://x.com/tronxtv" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2"><IconX width={18} height={18}/>X</a>
          </div>
        </div>

        <div>
          <h4 className="h3">¿Eres empresa o institución?</h4>
          <p className="p mt-2">Sumemos un episodio o coproducción. Conversemos.</p>
          <Link href="/contacto" className="btn mt-4"><Send size={18}/> Hablar con producción</Link>
          <div className="text-sm text-white/70 mt-6 space-y-1">
            <p><strong>Tronx TV</strong> es producido y dirigido por <strong>Dekaelo Media</strong>.</p>
            <p>Tronx TV pertenece al <strong>Tronx Group</strong>.</p>
            <p>Contacto: <a className="underline hover:no-underline" href="mailto:info@tronxtv.com">info@tronxtv.com</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Tronx TV · Dekaelo Media. Todos los derechos reservados.</p>
          <nav className="flex items-center gap-4">
            <a href="/privacidad-condiciones" className="hover:opacity-80">Privacidad & Condiciones</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
