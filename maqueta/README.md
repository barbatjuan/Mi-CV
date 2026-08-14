# Maqueta — propuesta de rediseño

Propuesta de rediseño del CV/portfolio. **No forma parte de la app real**: es un
único archivo HTML autocontenido que no toca `src/`, `index.html`, ni la build de Vite.

## Cómo verla

Abrí `maqueta/index.html` directamente en el navegador (doble clic o `file://`).
No necesita `npm install` ni servidor: CSS, JS y foto van embebidos.

## Dirección visual

Obsidiana con una aurora iridiscente (índigo → cian → magenta). Es un mundo
visual único y deliberado, sin tema claro: todos los colores se pintan de forma
explícita para que la página no dependa del fondo del navegador.

Tipografía en tres roles: grotesca para los títulos, serif para el texto de
apertura y monoespaciada para etiquetas y datos.

## Efectos

- **Aurora en WebGL**: shader propio con ruido simplex y deformación de dominio.
  Domina el hero y se retira al entrar en el contenido, para que el texto siempre
  gane. Si no hay WebGL, cae a un degradado CSS equivalente.
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
- `prefers-reduced-motion` desactiva animación, cursor propio e inclinaciones.
- El título partido conserva el texto real para lectores de pantalla; el foco de
  teclado tiene estado visible.

## Verificado

Renderizado en Chromium: WebGL activo, consola limpia, sin desbordamiento
horizontal a 390 px de ancho.

## Pendiente de confirmar

- `Juano Cocina` apunta a `rayosdelsol.uy`; en el sitio actual (`src/App.jsx`)
  tiene el mismo enlace. Falta la URL real.
- El estado "Disponible / Abierto" del encabezado es un supuesto: cambiarlo si
  no aplica.
