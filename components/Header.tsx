"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { Route } from "next";

const nav: { href: Route; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/programas", label: "Programas" },
  { href: "/proximamente", label: "Próximamente" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-black/40 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Tronx TV"
            width={120}
            height={36}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                pathname === n.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
