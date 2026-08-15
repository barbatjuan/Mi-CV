# Maqueta — propuesta de rediseño

Propuesta de rediseño del CV/portfolio. **No forma parte de la app real**: es un
único archivo HTML autocontenido que no toca `src/`, `index.html`, ni la build de Vite.

## Cómo verla

Abrí `maqueta/index.html` directamente en el navegador (doble clic o `file://`).
No necesita `npm install` ni servidor: CSS, JS y foto van embebidos.

## Dirección visual

Obsidiana con una retícula fina y un campo de luz que barre de violeta a magenta
y ámbar. Es un mundo visual único y deliberado, sin tema claro: todos los
colores se pintan de forma explícita para que la página no dependa del fondo del
navegador.

Tipografía en tres roles: grotesca para los títulos, serif para el texto de
apertura y monoespaciada para etiquetas y datos.

## Efectos

- **Fondo tranquilo**: retícula fina que da estructura, más un campo de luz que
  deriva muy lento y una luz que sigue al puntero con inercia. Tiene presencia en
  el hero y se retira al entrar en el contenido, para que el texto siempre gane.
- **Cursor propio**: punto en `mix-blend-mode: difference` más un anillo con
  inercia que se expande y etiqueta la acción sobre cada elemento.
- **Título partido en letras**, con entrada escalonada en desenfoque.
- **Tarjetas de proyecto** con halo que sigue al puntero, borde iridiscente que
  se enciende y una inclinación 3D sutil.
- **Botón magnético** en el contacto, que se acerca al cursor.
- **Línea de tiempo que se dibuja** con el scroll y enciende cada hito.
- Preloader con contador, revelados por máscara, marquesina de stack, barrido de
  brillo en los certificados y barra de progreso de lectura.

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
descendentes (g, y, q, p) completas en todos los títulos enmascarados y el
contador del preloader sin recorte en el último dígito.

## Pendiente de confirmar

- **El texto sobre desarrollo a medida, IA, Claude y agentes lo redacté yo** a
  partir de tu indicación: revisalo y ajustalo a lo que realmente ofrecés.
- **La fila "Backend" (Node · Express · APIs REST · bases de datos) es un
  supuesto** a partir de tus certificados de CoderHouse: confirmá el stack real.
- Saqué "Leader" del encabezado, pero el rol en FactuPro sigue como
  "QA Tester Leader" porque es el cargo que figura en tu CV.
- `Juano Cocina` apunta a `rayosdelsol.uy`; en el sitio actual (`src/App.jsx`)
  tiene el mismo enlace. Falta la URL real.
- El estado "Disponible / Abierto" del encabezado es un supuesto: cambiarlo si
  no aplica.
- Los proyectos se presentan como "una selección", sin total cerrado, para que
  no envejezca al sumar trabajos nuevos.
