# Sistema de diseño — Echoes of You

## Origen y decisión de diseño

Se ejecutó el generador de **UI UX Pro Max** con el perfil “dark narrative video game cinematic liminal cyan amber”, usando una variación alta, movimiento medio y densidad baja. La recomendación validada fue un patrón **Hero-Centric**, una composición asimétrica de orientación brutalista y una base cinematográfica oscura. Se descartan del resultado automático el rojo como único CTA, las familias de color índigo y el uso de Inter, porque contradicen la semántica establecida del juego y los anti-patrones explícitos del brief. La desviación preserva el patrón, la densidad, el contraste, la accesibilidad y el tipo de interacción recomendados.

| Capa | Decisión aplicada |
|---|---|
| Producto | Videojuego 3D narrativo de puzles; experiencia de descubrimiento y competencia. |
| Patrón | Hero dominante con un CTA principal, pista de contenido siguiente y cierre narrativo. |
| Estilo | Editorial archivístico, brutalismo contenido e interfaz analógica. |
| Densidad | Espaciosa, con bloques de alto contraste y respiración cinematográfica. |
| Variación | Alta; las secciones alternan composición panorámica, vertical, collage y tira de datos. |
| Movimiento | Medio; revelaciones de máscara, transformaciones breves y motion reducido garantizado. |

## Tokens de color

| Token | Valor | Uso narrativo |
|---|---:|---|
| `--ink` | `#080A0E` | Vacío, entorno y superficie principal. |
| `--navy` | `#101A28` | Profundidad arquitectónica y paneles. |
| `--paper` | `#F0EBDD` | Lectura, archivo humano, capítulos. |
| `--echo` | `#66E7E1` | Registro activo, Echo y acciones reproducidas. |
| `--memory` | `#D7A55A` | Archivo recuperado, tiempo y detalles. |
| `--signal` | `#C9534F` | Peligro emocional, pérdida o interrupción. |
| `--fog` | `#B9C0C6` | Texto secundario y trazos de baja prioridad. |

## Tipografía

| Rol | Familia | Reglas |
|---|---|---|
| Display | Cormorant Garamond | Versales o título de capítulo; tamaño fluido; tracking sutilmente negativo. |
| Lectura | Manrope | Texto base mínimo de 16 px, `line-height` ≥ 1.5, máximo 62 caracteres por línea. |
| Utilidad | IBM Plex Mono | Etiquetas, marca temporal, botones y datos; `letter-spacing` amplio. |

## Sistema de UI y comportamiento

Las superficies usan bordes rectos o casi rectos, trazos finos, sombras de tinta y grano de opacidad baja. Las tarjetas no son un patrón por defecto: se sustituyen por etiquetas archivísticas, rieles de datos y objetos de contenido. El botón principal es una banda de señal cian; el secundario, un enlace subrayado por regla de registro. Todos los elementos interactivos mantienen foco visible, objetivo táctil mínimo de 44 px y etiqueta accesible.

## Motion e interacción

Los controles emplean 150–220 ms; los reveals de bloque, 240–420 ms; el paneo de imagen o atmósfera puede llegar a 800 ms. Se animan solamente `opacity` y `transform`. Los efectos se desactivan para movimiento reducido, no dependen del hover y nunca bloquean el contenido.

## Antipatrones controlados

Se prohíben gradientes púrpura/rosa, glassmorphism, blobs 3D, contenedores excesivamente redondeados, grids SaaS, testimonios falsos, badges repetitivos, glitch constante y fotografías de stock. No hay información transmitida sólo por color. La navegación de cabecera cambia a fondo sólido cuando pierde contraste con el hero.

## Criterios de validación

La implementación se comprobará a 375, 768, 1024, 1440 y 1920 px. Se validan contraste de texto, foco por teclado, texto alternativo, jerarquía semántica, compresión/lazy loading de imágenes y `prefers-reduced-motion`.

## Validación de salida

| Recomendación verificada | Aplicación en la página | Estado |
|---|---|---|
| Foco no oscurecido y un perímetro visible de 2 px | Todos los controles usan `:focus-visible` con contorno cian de 2 px y 4 px de separación. La cabecera no es fija, por lo que no tapa el foco durante el desplazamiento. | Aplicado |
| Movimiento reducido | El sitio contiene un bloque `prefers-reduced-motion` que desactiva animación y transiciones no esenciales; no existe parallax ni scroll-jacking. | Aplicado |
| Movimiento limitado por vista | La única animación autónoma es el indicador de desplazamiento del hero; el resto son respuestas de interacción breves. | Aplicado |
| Prueba responsive en puntos críticos | Se verificó visualmente el recorrido completo a 375 px y 1440 px. Las reglas cubren además tabletas y pantallas amplias mediante puntos de corte a 680 y 900 px. | Aplicado |
| Prioridad de consultas accesibles en React | Los controles de navegación usan botones y enlaces semánticos con nombres accesibles; no se depende de selectores de prueba visuales. | Aplicado |

La revisión visual independiente consideró que la dirección se mantiene coherente con **Archivo bajo interferencia** y no recomendó cambios de estilo adicionales. La compilación de TypeScript y producción finalizó correctamente; el empaquetador indicó una advertencia no bloqueante sobre el tamaño del bundle base de la plantilla.
