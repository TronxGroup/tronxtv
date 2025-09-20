export const metadata = {
  title: "Privacidad & Condiciones | Tronx TV",
  description:
    "Políticas de privacidad y términos de uso de Tronx TV. Conoce cómo tratamos tus datos y las condiciones del servicio.",
  robots: {
    index: false, // ← No indexar hasta que esté finalizado
    follow: true,
  },
};

export default function PrivacidadCondicionesPage() {
  return (
    <section className="section">
      <div className="container prose prose-invert max-w-3xl">
        <h1>Privacidad &amp; Condiciones</h1>

        <p className="lead">
          Última actualización: {new Date().toLocaleDateString("es-CL")}
        </p>

        <h2>1. Introducción</h2>
        <p>
          Bienvenido a <strong>Tronx TV</strong>, un canal editorial
          multiplataforma producido por <strong>Dekaelo Media</strong>. En este
          documento encontrarás un resumen de nuestras políticas de privacidad y
          condiciones de uso. Esta página puede actualizarse en cualquier
          momento.
        </p>

        <h2>2. Tratamiento de datos</h2>
        <ul>
          <li>
            Solo recopilamos datos básicos de uso (analítica web, interacciones)
            para mejorar la experiencia.
          </li>
          <li>
            Si nos escribes a <a href="mailto:info@tronxtv.com">info@tronxtv.com</a>,
            conservaremos tu correo para responder o coordinar.
          </li>
          <li>
            Puedes solicitar acceso o eliminación de tus datos escribiendo al
            mismo correo.
          </li>
        </ul>

        <h2>3. Cookies y analítica</h2>
        <p>
          Podemos usar cookies propias o de terceros con fines de medición y
          mejora continua. Puedes controlar el uso de cookies desde la
          configuración de tu navegador.
        </p>

        <h2>4. Contenido y propiedad intelectual</h2>
        <ul>
          <li>
            Todo el contenido editorial de Tronx TV está protegido por derechos
            de autor. No se permite su reproducción sin autorización.
          </li>
          <li>
            Las marcas, logotipos y materiales de terceros se usan con permiso o
            bajo licencias correspondientes.
          </li>
        </ul>

        <h2>5. Enlaces externos</h2>
        <p>
          Algunos enlaces pueden dirigir a sitios de terceros. No controlamos su
          contenido ni sus políticas. Te recomendamos revisarlas antes de usar
          esos servicios.
        </p>

        <h2>6. Uso permitido</h2>
        <ul>
          <li>
            No está permitido el uso del sitio para actividades ilícitas, abuso
            de servicios o intentos de vulnerar la seguridad.
          </li>
          <li>
            Podemos suspender o limitar el acceso en caso de uso indebido.
          </li>
        </ul>

        <h2>7. Cambios a estas políticas</h2>
        <p>
          Podremos actualizar esta página para reflejar cambios legales o
          operativos. Si el cambio es relevante, procuraremos comunicarlo por
          nuestros canales oficiales.
        </p>

        <h2>8. Contacto</h2>
        <p>
          ¿Dudas o solicitudes sobre tus datos o estas condiciones? Escríbenos a{" "}
          <a href="mailto:info@tronxtv.com">info@tronxtv.com</a>.
        </p>

        <hr />

        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Tronx TV · Dekaelo Media. Todos los
          derechos reservados.
        </p>
      </div>
    </section>
  );
}
