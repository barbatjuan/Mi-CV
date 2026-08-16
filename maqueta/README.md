# Maqueta — propuesta de rediseño

Propuesta de rediseño del CV/portfolio. **No forma parte de la app real**: es un
único archivo HTML autocontenido que no toca `src/`, el `index.html` de la raíz
ni `vite.config.js`. Se publica como página aparte en `/maqueta/`.

## Dónde vive

La página es **`public/maqueta/index.html`**. Está en `public/` a propósito:
Vite copia esa carpeta tal cual a `dist/`, así que la build la publica en
`/maqueta/` sin tocar la app real ni su configuración. Verificado: `npm run build`
genera `dist/maqueta/index.html` y la página funciona servida por HTTP.

Este README queda fuera de `public/` para no publicarse junto con el sitio.

## Cómo verla

Abrí `public/maqueta/index.html` directamente en el navegador (doble clic o
`file://`). No necesita `npm install` ni servidor: CSS, JS y foto van embebidos.

## Dirección visual

Obsidiana con una retícula fina y un campo de luz que barre de violeta a magenta
y amarillo eléctrico (#FFE500). El amarillo es el color de la interacción: halos,
cursor, puntos de la línea de tiempo y el apellido del encabezado. Es un mundo visual único y deliberado, sin tema claro: todos los
colores se pintan de forma explícita para que la página no dependa del fondo del
navegador.

Tipografía en cuatro roles: grotesca para los títulos, serif para el texto de
apertura, monoespaciada para etiquetas y datos, y **Anybody** (grotesca ancha y
negra, de formas cuadradas: brutalista sin caer en lo barato) para el apellido
del encabezado. Va incrustada como `@font-face` recortada a las letras de
"BARBAT": 924 bytes, así no depende de lo que tenga instalado el visitante ni de
una CDN externa, que la CSP bloquearía.

## Efectos

- **Fondo tranquilo**: retícula fina que da estructura, más un campo de luz que
  deriva muy lento y una luz que sigue al puntero con inercia. Tiene presencia en
  el hero y se retira al entrar en el contenido, para que el texto siempre gane.
- **Cursor propio**: punto en `mix-blend-mode: difference` más un anillo con
  inercia que se expande y etiqueta la acción sobre cada elemento.
- **Título partido en letras**, con entrada escalonada en desenfoque. El apellido
  se ajusta midiendo: JS compara el ancho real de las dos líneas y escala la
  segunda para que cierre exactamente donde termina el punto, en cualquier ancho
  de pantalla y aunque la tipografía incrustada no llegue a cargar.
- **Tarjetas de proyecto** con halo que sigue al puntero, borde iridiscente que
  se enciende y una inclinación 3D sutil.
- **Botón magnético** en el contacto, que se acerca al cursor.
- **Línea de tiempo que se dibuja** con el scroll y enciende cada hito.
- **Muro de tres marquesinas** en sentidos alternos (stack, certificaciones y
  herramientas). El recorrido se calcula en píxeles a partir del ancho real de
  cada fila, y la duración sale de una velocidad fija por banda (46, 38 y 53
  px/s), así avanzan parejas sin quedar sincronizadas. Pausa al pasar el puntero,
  sólo con puntero fino.
- Preloader con contador, revelados por máscara, barrido de brillo en los
  certificados y barra de progreso de lectura.

## Retícula

Una sola separación vertical (`--rhythm`) entre todos los bloques: hero,
marquesinas y las cinco secciones quedan a 104 px en escritorio, sin huecos
sueltos.

## Navegación y accesibilidad

- **Buscador `⌘K` / `Ctrl K`**: salta a cualquier sección o abre cualquier
  proyecto desde el teclado, filtrando también por tecnología.
- **Proyectos filtrables** por tipo de trabajo (e-commerce, WordPress, código a
  medida, marca, ads) con contador en vivo.
- Texto secundario a 11:1 de contraste y etiquetas a 5,8:1, ambos por encima del
  mínimo AA.
- `prefers-reduced-motion` desactiva animación, cursor propio e inclinaciones.
- El título partido conserva el texto real para lectores de pantalla; el foco de
  teclado tiene estado visible.

## Verificado

Renderizado en Chromium: consola limpia, sin desbordamiento horizontal a 390 px,
descendentes (g, y, q, p) completas en todos los títulos enmascarados, contador
del preloader sin recorte en el último dígito y las tres marquesinas avanzando
(transform medido a lo largo del tiempo, a 1440 y 390 px).

## Pendiente de confirmar

- **El texto sobre desarrollo a medida, IA, Claude y agentes lo redacté yo** a
  partir de tu indicación: revisalo y ajustalo a lo que realmente ofrecés.
- **La fila "Backend" (Node · Express · APIs REST · bases de datos) es un
  supuesto** a partir de tus certificados de CoderHouse: confirmá el stack real.
- **El stack de Capta24 también es un supuesto** (desarrollo a medida, IA,
  Claude, WhatsApp, automatización): ajustá las tecnologías reales.
- Saqué "Leader" del encabezado, pero el rol en FactuPro sigue como
  "QA Tester Leader" porque es el cargo que figura en tu CV.
- **El puesto de manager figura como "Empresa del sector web · España"**: falta
  el nombre real, y el mes de inicio en 2025.
- **Las descripciones de proyectos las reescribí yo**, derivadas de las
  tecnologías que ya tenías listadas. Describen el encargo y el alcance, no
  resultados: si tenés cifras (consultas, ventas, posiciones), valen más.
- El estado "Disponible / Abierto" del encabezado es un supuesto: cambiarlo si
  no aplica.
- Los proyectos se presentan como "una selección", sin total cerrado, para que
  no envejezca al sumar trabajos nuevos.
