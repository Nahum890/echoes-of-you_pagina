/**
 * ECHOES OF YOU — Archivo bajo interferencia.
 * Página editorial-asimétrica: cada sección se comporta como una lámina recuperada del mundo del juego.
 */
import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  CircleDotDashed,
  Compass,
  Github,
  History,
  Menu,
  MoveRight,
  Pause,
  Play,
  Radio,
  ScanLine,
  X,
} from "lucide-react";

const echoSteps = [
  {
    index: "01",
    label: "ACTÚA",
    description: "Aiden atraviesa el espacio y deja una acción que puede volver a ocurrir.",
  },
  {
    index: "02",
    label: "REGISTRA",
    description: "El momento queda fijado: movimiento, tiempo y decisión en una sola pista.",
  },
  {
    index: "03",
    label: "REPRODUCE",
    description: "Un Echo devuelve esa acción al mundo, incluso cuando Aiden ya no está allí.",
  },
  {
    index: "04",
    label: "COORDINA",
    description: "Dos versiones del mismo instante resuelven lo que una no puede resolver sola.",
  },
];

const signals = [
  ["01", "MOVIMIENTO", "Recorre una escuela que ya no se comporta como debería."],
  ["02", "REGISTRO", "Convierte un instante en una segunda presencia."],
  ["03", "PUZLES", "Sincroniza acciones separadas por tiempo y espacio."],
  ["04", "EXPLORACIÓN", "Sigue rastros, habitaciones y memorias que resisten."],
  ["05", "DECISIONES", "Algunas cosas cambian cuando decides volver a mirarlas."],
];

const navItems = [
  ["EL ECHO", "#echo"],
  ["LA ESCUELA", "#school"],
  ["HISTORIA", "#story"],
  ["SEÑALES", "#signals"],
] as const;

function EchoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`echo-mark ${className}`} aria-hidden="true">
      <span className="echo-mark-core" />
      <span className="echo-mark-slash" />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="echo-site">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>

      <header className="archive-header">
        <a className="brand-lockup" href="#home" aria-label="Echoes of You, inicio" onClick={closeMenu}>
          <EchoMark />
          <span className="brand-copy">ECHOES<br />OF YOU</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#echo" onClick={closeMenu}>
          <span>ENTRAR</span><ArrowDownRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-registration hero-registration-a" aria-hidden="true">REC // 00:04:16</div>
          <div className="hero-registration hero-registration-b" aria-hidden="true">SECTOR 07 / NORTH WING</div>
          <div className="hero-rule hero-rule-left" aria-hidden="true" />
          <div className="hero-rule hero-rule-bottom" aria-hidden="true" />

          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><Radio size={13} aria-hidden="true" /> ARCHIVO DE MEMORIA / JUEGO NARRATIVO</div>
            <h1 id="hero-title"><span>ECHOES</span><em>OF YOU</em></h1>
            <p className="hero-statement">Tu pasado todavía sabe el camino.</p>
            <div className="hero-actions">
              <a className="signal-button" href="#echo"><Play size={15} fill="currentColor" aria-hidden="true" /> ENTRAR A LA MEMORIA</a>
              <a className="secondary-link" href="#school">EXPLORAR EL MUNDO <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-scene" aria-label="Una escuela abandonada, Aiden y una señal Echo separada por el espacio" role="img">
            <div className="scene-haze haze-one" />
            <div className="scene-haze haze-two" />
            <div className="scene-scanline" />
            <div className="scene-frame frame-left" />
            <div className="scene-frame frame-right" />
            <div className="school-block school-back">
              <i /><i /><i /><i /><i /><i />
            </div>
            <div className="school-block school-front">
              <span className="door" />
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="hallway-floor" />
            <div className="aiden-figure figure" aria-hidden="true">
              <span className="figure-head" /><span className="figure-body" /><span className="figure-leg figure-leg-one" /><span className="figure-leg figure-leg-two" />
            </div>
            <div className="echo-figure figure" aria-hidden="true">
              <span className="figure-head" /><span className="figure-body" /><span className="figure-leg figure-leg-one" /><span className="figure-leg figure-leg-two" />
            </div>
            <span className="scene-label label-aiden">AIDEN / POS. ACTUAL</span>
            <span className="scene-label label-echo">ECHO / PISTA 01</span>
            <span className="scene-scale">01 <b /> 12 M</span>
          </div>

          <a className="hero-scroll" href="#echo" aria-label="Descubrir la mecánica Echo">
            <span>DESPLAZAR PARA RECORDAR</span><ChevronDown size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="echo-section section-shell" id="echo" aria-labelledby="echo-title">
          <div className="section-index"><span>01</span><b /> MECÁNICA PRINCIPAL</div>
          <div className="echo-heading-row">
            <h2 id="echo-title">NO ESTÁS<br /><em>SOLO EN EL MOMENTO.</em></h2>
            <p>Aiden puede registrar una secuencia y convertirla en una segunda presencia. Un Echo no recuerda: ejecuta.</p>
          </div>

          <div className="echo-composition">
            <div className="tape-machine" aria-label="Representación visual de una cinta de memoria en reproducción" role="img">
              <div className="machine-header"><span><Activity size={13} aria-hidden="true" /> LIVE RECORD</span><span>MEM 01</span></div>
              <div className="tape-window">
                <div className="reel reel-left"><b /><i /><i /><i /><i /></div>
                <div className="tape-line"><span /></div>
                <div className="reel reel-right"><b /><i /><i /><i /><i /></div>
              </div>
              <div className="machine-track"><span className="track-dot dot-one" /><span className="track-dot dot-two" /><span className="track-dot dot-three" /><span className="track-play"><Play size={12} fill="currentColor" aria-hidden="true" /></span></div>
              <div className="machine-footer"><span>00:00:07</span><span>REPRODUCIR →</span></div>
            </div>

            <ol className="echo-protocol">
              {echoSteps.map((step, index) => (
                <li key={step.index} className={`protocol-step protocol-step-${index + 1}`}>
                  <span className="protocol-number">{step.index}</span>
                  <div><h3>{step.label}</h3><p>{step.description}</p></div>
                  {index < echoSteps.length - 1 && <MoveRight className="protocol-arrow" size={19} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
          <p className="echo-footnote"><span />DOS CUERPOS. UN SOLO INSTANTE. <span /></p>
        </section>

        <section className="school-section" id="school" aria-labelledby="school-title">
          <div className="school-gridline" aria-hidden="true" />
          <div className="school-intro">
            <div className="section-index section-index-light"><span>02</span><b /> EL LUGAR QUE SIGUE REPITIÉNDOSE</div>
            <h2 id="school-title">LA ESCUELA<br />NO QUEDÓ VACÍA.</h2>
            <p>Pasillos, aulas y puertas guardan versiones distintas de lo que pasó. Cada sala cambia cuando vuelves con algo que ya hiciste.</p>
            <a href="#story" className="secondary-link light-link">SEGUIR EL RASTRO <ArrowRight size={15} aria-hidden="true" /></a>
          </div>

          <div className="school-archive" aria-label="Estudio arquitectónico de la escuela" role="img">
            <div className="archive-tape-label">EVIDENCIA AMBIENTAL / 03</div>
            <div className="archive-sky" />
            <div className="archive-school">
              <div className="archive-roof" />
              <div className="archive-wall wall-one" />
              <div className="archive-wall wall-two" />
              <div className="archive-window-row row-one"><i /><i /><i /><i /><i /></div>
              <div className="archive-window-row row-two"><i /><i /><i /><i /><i /></div>
              <div className="archive-door" />
            </div>
            <div className="archive-floor-lines" />
            <span className="archive-note note-one">NORTH HALL<br />LOOP UNSTABLE</span>
            <span className="archive-note note-two">03:14:08<br />NO AUDIO</span>
            <span className="archive-cross" />
          </div>
        </section>

        <section className="story-section section-shell" id="story" aria-labelledby="story-title">
          <div className="story-side-label">ARCHIVO PERSONAL / 04</div>
          <div className="story-copy">
            <div className="section-index"><span>03</span><b /> FRAGMENTOS, NO RESPUESTAS</div>
            <h2 id="story-title">ALGO ESTÁ<br /><em>RECORDANDO POR TI.</em></h2>
            <p className="story-lede">Aiden sigue a un Echo que conoce lugares que él no reconoce. En los restos de la escuela, Lyra parece estar más cerca de la memoria que del presente.</p>
            <blockquote>“No todo lo que vuelve<br />está tratando de encontrarte.”</blockquote>
          </div>

          <div className="character-file">
            <div className="file-tabs"><span>PERSONA</span><span className="active">ECHO</span></div>
            <div className="portrait-stage" aria-label="Ilustración gráfica abstracta de Aiden frente a una variante Echo" role="img">
              <div className="portrait-glow" />
              <div className="portrait-aiden"><i className="portrait-head" /><i className="portrait-neck" /><i className="portrait-body" /></div>
              <div className="portrait-echo"><i className="portrait-head" /><i className="portrait-neck" /><i className="portrait-body" /></div>
              <span className="portrait-name name-aiden">AIDEN<br /><b>SUJETO 01</b></span>
              <span className="portrait-name name-echo">ECHO<br /><b>PISTA ACTIVA</b></span>
              <span className="portrait-grid" />
            </div>
            <div className="file-meta"><span>ESTADO</span><b>SEÑAL DISPONIBLE</b><span>ÚLTIMO RASTRO</span><b>ALA NORTE / SIN CONFIRMAR</b></div>
          </div>
        </section>

        <section className="signals-section" id="signals" aria-labelledby="signals-title">
          <div className="signals-header section-shell">
            <div className="section-index section-index-light"><span>04</span><b /> LENGUAJE DEL JUEGO</div>
            <h2 id="signals-title">CINCO SEÑALES<br />PARA ENCONTRAR <em>LA SALIDA.</em></h2>
          </div>
          <div className="signal-rail">
            {signals.map(([number, title, description], index) => (
              <article className="signal-entry" key={title}>
                <div className="signal-entry-top"><span>{number}</span><span className="signal-node"><CircleDotDashed size={18} aria-hidden="true" /></span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="signal-entry-count">0{index + 1} / 05</span>
              </article>
            ))}
          </div>
        </section>

        <section className="archive-section section-shell" aria-labelledby="archive-title">
          <div className="archive-prompt">
            <span className="archive-prompt-icon"><ScanLine size={22} aria-hidden="true" /></span>
            <div><span className="eyebrow">REGISTRO DE DESARROLLO</span><h2 id="archive-title">UNA EXPERIENCIA<br />DE PUZLES NARRATIVOS.</h2></div>
          </div>
          <div className="archive-data">
            <div><span>FORMATO</span><b>3D / NARRATIVO / PUZLES</b></div>
            <div><span>ALCANCE</span><b>MEMORIA · DECISIÓN · EXPLORACIÓN</b></div>
            <div><span>ESTADO</span><b>ARCHIVO EN CONSTRUCCIÓN</b></div>
          </div>
          <div className="audio-record" aria-label="Archivo de audio no disponible todavía">
            <span><Pause size={13} aria-hidden="true" /> ARCHIVO SONORO</span><b>FRAGMENTO / AÚN NO DISPONIBLE</b><span>00:00</span>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="final-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="final-copy">
            <span className="eyebrow"><History size={13} aria-hidden="true" /> PISTA FINAL</span>
            <h2 id="final-title">ALGUNAS COSAS<br />NO SE QUEDAN <em>EN EL PASADO.</em></h2>
            <a className="signal-button signal-button-large" href="#home"><Compass size={18} aria-hidden="true" /> VOLVER A LA MEMORIA</a>
          </div>
          <EchoMark className="final-mark" />
        </section>
      </main>

      <footer className="archive-footer" id="credits">
        <div className="footer-brand"><EchoMark /><span>ECHOES OF YOU<br /><b>ARCHIVO DE MEMORIA</b></span></div>
        <p>Un proyecto narrativo en desarrollo.<br />La señal continúa.</p>
        <div className="footer-meta"><span><Github size={14} aria-hidden="true" /> GITHUB / PENDIENTE</span><span>COMPETENCIA / PENDIENTE</span><span>CRÉDITOS &amp; LEGAL</span></div>
      </footer>
    </div>
  );
}
