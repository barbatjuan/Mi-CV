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
- **El bicho de Claude Code**: camina por la hairline que hay debajo del
  apellido, moviendo las patitas con una pisada de dos fotogramas. Si el puntero
  se le acerca a menos de 140 px acelera y sale para el lado contrario; si
  intentás clickearlo pega un brinco, deja una chispa y esprinta. **No se puede
  agarrar**: la capa entera es `pointer-events: none`, así que no hay hitbox que
  pueda recibir el click, y de paso el click atraviesa hasta el fondo. Cuando
  queda acorralado contra una pared no tiembla en la esquina: pasa de largo por
  debajo del cursor. A partir del tercer intento aparece un contador discreto.
  Sólo corre con el hero a la vista y con la pestaña activa.
- **Los poderes y la ventana**: del cuarto intento en adelante empieza a sacar
  poderes, y cuanto más insistís, más seguido. Son cinco, cada uno un verbo
  distinto para que el azar se lea como variedad y no como ruido: **campo de
  fuerza** hexagonal que rebota el click, **parpadeo** que lo teletransporta al
  otro extremo dejando tres fantasmas, **camuflaje** que deja sólo los ojos
  flotando, **espada** —el único que invierte el juego: deja de huir y te viene
  de frente— y **repulsor**, que empuja el anillo del cursor como dos imanes del
  mismo polo. Gastar un poder lo deja **sin energía** durante 1,8 s: se arrastra,
  se le vacía una barrita y ahí sí se atrapa. Fuera de esa ventana sigue siendo
  imposible. Al atraparlo se planta, te encara y te deja su correo.
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

El bicho, medido en Chromium: camina y gira en las dos paredes con su pausa,
acelera y cambia de sentido cuando el puntero entra en el radio, sale del rincón
cuando lo acorralan, y `elementFromPoint` sobre su centro nunca lo devuelve —ni
con mouse ni con tap—, así que el click es imposible por construcción. El layout
del hero (`.hero__name`, `.hero__meta`, `.stats`) mide exactamente igual que
antes de agregarlo, en los seis anchos, también con la espada y el campo de
fuerza desplegados.

Los poderes: los tres primeros intentos nunca sacan ninguno y del cuarto en
adelante sí; los cinco se activan con su efecto y todos desembocan en la ventana
sin energía; un click dentro la gana y uno fuera no; el empuje del anillo llega a
40 px con la espada, 21 con el escudo y 32 sostenidos con el repulsor, siempre
por debajo del tope de 52, y vuelve solo a cero. En puntero grueso el repulsor
queda fuera del grupo, porque no hay anillo que empujar. Veintidós clicks
seguidos no dejan un solo nodo huérfano ni un error en consola.

Renderizado en Chromium: consola limpia, sin desbordamiento horizontal a 390 px,
descendentes (g, y, q, p) completas en todos los títulos enmascarados, contador
del preloader sin recorte en el último dígito y las tres marquesinas avanzando
(transform medido a lo largo del tiempo, a 1440 y 390 px).

## Atajo para mostrar un poder

`#bicho=espada` en la URL fuerza el grupo a un solo poder, desde el primer click.
Sirve para las pruebas automáticas y para enseñar uno concreto sin tener que
clickear veinte veces. Los ids son `escudo`, `parpadeo`, `camuflaje`, `espada` y
`repulsor`.

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
