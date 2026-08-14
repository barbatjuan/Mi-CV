# Maqueta — propuesta de rediseño

Propuesta de rediseño del CV/portfolio. **No forma parte de la app real**: es un
único archivo HTML autocontenido que no toca `src/`, `index.html`, ni la build de Vite.

## Cómo verla

Abrí `maqueta/index.html` directamente en el navegador (doble clic o `file://`).
No necesita `npm install` ni servidor: todo el CSS, el JS y la foto van embebidos.

## Qué cambia respecto del sitio actual

- **Identidad visual nueva**: papel hueso / tinta, acento ultramar y ocre quemado,
  en lugar del navy + cian. Tema claro y oscuro completos, más botón para alternar.
- **Tipografía**: grotesca para display, serif para el texto de apertura y
  monoespaciada para etiquetas y datos.
- **Buscador `⌘K` / `Ctrl K`**: salta a cualquier sección o abre cualquier proyecto
  desde el teclado. Con 15 proyectos, es más rápido que scrollear.
- **Proyectos filtrables** por tipo de trabajo (e-commerce, WordPress, código a
  medida, marca, ads) con contador en vivo.
- **Trayectoria como línea de tiempo** con año en la columna izquierda.
- **Certificaciones agrupadas** por track (Full Stack / Frontend / Backend / QA).
- Barra de progreso de lectura, revelado al scroll y `prefers-reduced-motion`.

## Pendiente de confirmar

- `Juano Cocina` apunta a `rayosdelsol.uy`; en el sitio actual (`src/App.jsx`)
  tiene el mismo enlace. Falta la URL real.
- El estado "Disponible" del encabezado es un supuesto: cambiarlo si no aplica.
