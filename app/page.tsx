<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Tronx TV — Chile desde adentro</title>
<meta name="description" content="Canal editorial chileno. Series documentales, vodcast y producciones originales. Chile desde adentro.">
<meta name="theme-color" content="#0D0D0D">

<!-- PRECONNECT (MEJORA CARGA) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>

/* RESET */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* VARIABLES */
:root {
  --negro: #0D0D0D;
  --blanco: #F2EFE8;
  --rojo: #C0392B;
  --gris: #8A8880;
  --gris-claro: #1A1A1A;
  --linea: rgba(242,239,232,0.1);
}

html { scroll-behavior: smooth; }

body {
  background: var(--negro);
  color: var(--blanco);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  overflow-x: hidden;
}

/* NOISE (BAJADO OPACITY PARA PERFORMANCE) */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
  opacity: 0.2;
}

/* NAV */
nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(13,13,13,0.95), transparent);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.15em;
  text-decoration: none;
  color: var(--blanco);
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-logo span { color: var(--rojo); }

.nav-star {
  width: 8px;
  height: 8px;
  background: var(--rojo);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-links a {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(242,239,232,0.5);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover { color: var(--blanco); }

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 0 48px 80px;
  position: relative;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 60% 40%, rgba(192,57,43,0.08), transparent),
    linear-gradient(to bottom, rgba(13,13,13,0.3), rgba(13,13,13,0.95));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.hero-eyebrow {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--rojo);
  margin-bottom: 20px;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(64px, 10vw, 120px);
  line-height: 0.9;
  margin-bottom: 24px;
}

.hero-title em {
  color: transparent;
  -webkit-text-stroke: 1px rgba(242,239,232,0.3);
  font-style: normal;
}

.hero-sub {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 20px;
  color: rgba(242,239,232,0.7);
  margin-bottom: 40px;
}

.hero-cta {
  display: flex;
  gap: 16px;
}

.btn-primary {
  background: var(--blanco);
  color: var(--negro);
  padding: 14px 24px;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-decoration: none;
}

.btn-ghost {
  border: 1px solid rgba(242,239,232,0.2);
  padding: 14px 24px;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-decoration: none;
  color: var(--blanco);
}

/* SECCIONES */
.manifiesto,
.programas,
.branded {
  padding: 120px 48px;
  border-top: 1px solid var(--linea);
}

/* GRID PROGRAMAS */
.programas-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1px;
  background: var(--linea);
}

.programa-card {
  padding: 40px;
  background: var(--negro);
  transition: background 0.3s;
}

.programa-card:hover {
  background: var(--gris-claro);
}

.card-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px;
  margin-bottom: 12px;
}

/* FOOTER */
footer {
  padding: 60px 48px;
  border-top: 1px solid var(--linea);
}

.footer-copy {
  font-size: 11px;
  color: var(--gris);
  text-align: center;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  nav { padding: 20px; }
  .nav-links { display: none; }
  .programas-grid { grid-template-columns: 1fr; }
  .hero { padding: 0 24px 60px; }
}

</style>
</head>

<body>

<nav>
  <a href="/" class="nav-logo">
    <div class="nav-star"></div>
    Tronx<span>TV</span>
  </a>

  <ul class="nav-links">
    <li><a href="#programas">Programas</a></li>
    <li><a href="#produccion">Producción</a></li>
    <li><a href="mailto:info@tronxtv.com">Contacto</a></li>
  </ul>
</nav>

<section class="hero">
  <div class="hero-bg"></div>

  <div class="hero-content">
    <div class="hero-eyebrow">Canal editorial chileno</div>

    <h1 class="hero-title">
      Chile<br><em>desde</em><br>adentro.
    </h1>

    <p class="hero-sub">
      Documentales, series y vodcast sobre personas reales enfrentando días reales.
    </p>

    <div class="hero-cta">
      <a href="https://www.youtube.com/@tronxtv" target="_blank" class="btn-primary">
        Ver en YouTube
      </a>
      <a href="#programas" class="btn-ghost">
        Programas
      </a>
    </div>
  </div>
</section>

<section class="programas" id="programas">
  <div class="programas-grid">

    <div class="programa-card">
      <div class="card-name">Reality Day</div>
      <p>Serie documental. Un día real de trabajo en Chile.</p>
    </div>

    <div class="programa-card">
      <div class="card-name">Ídolos</div>
      <p>Conversaciones profundas con personajes reales.</p>
    </div>

    <div class="programa-card">
      <div class="card-name">Series especiales</div>
      <p>Formatos documentales y narrativos.</p>
    </div>

  </div>
</section>

<footer>
  <div class="footer-copy">
    © 2026 Tronx TV — Dekaelo Media
  </div>
</footer>

</body>
</html>
