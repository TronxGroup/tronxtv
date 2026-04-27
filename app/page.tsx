export default function Home() {
  return (
    <main style={{ background: "#0D0D0D", color: "#F2EFE8", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(13,13,13,0.9)",
        zIndex: 100
      }}>
        <div style={{ letterSpacing: "2px" }}>
          Tronx<span style={{ color: "#C0392B" }}>TV</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "120px 40px"
      }}>
        <div>
          <p style={{ color: "#C0392B", fontSize: 12, letterSpacing: "3px" }}>
            CANAL EDITORIAL CHILENO
          </p>

          <h1 style={{
            fontSize: "clamp(60px, 10vw, 120px)",
            lineHeight: 1,
            margin: "20px 0"
          }}>
            Chile<br />
            <span style={{ opacity: 0.5 }}>desde</span><br />
            adentro.
          </h1>

          <p style={{ maxWidth: 500, opacity: 0.7 }}>
            Documentales, series y vodcast sobre personas reales enfrentando días reales.
          </p>

          <div style={{ marginTop: 30 }}>
            <a
              href="https://www.youtube.com/@tronxtv"
              target="_blank"
              style={{
                background: "#F2EFE8",
                color: "#0D0D0D",
                padding: "12px 20px",
                marginRight: 10,
                textDecoration: "none"
              }}
            >
              Ver en YouTube
            </a>

            <a
              href="#programas"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 20px",
                textDecoration: "none",
                color: "#F2EFE8"
              }}
            >
              Programas
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" style={{ padding: "80px 40px" }}>
        <h2 style={{ fontSize: 40, marginBottom: 40 }}>Programas</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: 20
        }}>
          <div style={{ background: "#1A1A1A", padding: 20 }}>
            <h3>Reality Day</h3>
            <p>Un día real de trabajo en Chile.</p>
          </div>

          <div style={{ background: "#1A1A1A", padding: 20 }}>
            <h3>Ídolos</h3>
            <p>Conversaciones sin filtro.</p>
          </div>

          <div style={{ background: "#1A1A1A", padding: 20 }}>
            <h3>Series especiales</h3>
            <p>Formatos de mayor profundidad.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
