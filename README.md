# Tronx TV – Sitio Web (Next.js + Tailwind)

Sitio estático en Next.js (App Router) para Tronx TV con 4 páginas:
- **Inicio** (`/`)
- **Programas** (`/programas`)
- **Próximamente** (`/proximamente`)
- **Contacto** (`/contacto`)

## Requisitos
- Node.js 18+
- pnpm / npm / yarn

## Instrucciones
```bash
pnpm install   # o npm install / yarn
pnpm dev       # http://localhost:3000
pnpm build && pnpm start
```

## Personalización
- Reemplaza las imágenes en `/public/*.jpg`.
- Edita los enlaces de redes en `Footer.tsx`.
- Ajusta textos, planes y metadatos SEO en `app/layout.tsx` y cada `page.tsx`.

## Despliegue
- Subir a GitHub y conectar con **Vercel**.
- Configura dominio `tronxtv.com` en Cloudflare → Vercel.
