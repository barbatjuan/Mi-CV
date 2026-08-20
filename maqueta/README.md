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
- **Invita él**: a los cuatro segundos saca un globo de diálogo a su lado —"eh,
  tocame"— y lo repite dos veces más con otra frase, espaciado. Si nadie le hace
  caso, deja de insistir; y un solo ataque lo calla para siempre. Va al costado y
  no encima porque entre el apellido y la línea sólo hay 38 px, y ahí arriba ya
  viven el casco y las marcas de aguante.
- **La pelea**: en cuanto lo atacás deja de ser un bicho que huye. Cada click lo
  para con una de ocho defensas, y ninguna lo deja expuesto: con la **espada** y
  la **embestida** te encara, cierra la distancia y se planta a distancia de
  golpe repartiendo tajos que mandan el cursor lejos; el **disparo** saca un
  fusil que apunta de verdad —el cañón sigue al puntero en vertical— y escupe
  balas que estallan sobre él, con culatazo y fogonazo; la **bazuca** dispara en
  ráfaga durante cinco segundos, un cohete teledirigido cada uno o dos, hasta
  tres a la vez en el aire; cada uno te persigue dejando estela y explota si te
  alcanza —vira más cerrado y afloja el gas cuanto más cerca está,
  así que te pilla si te quedás quieto y lo esquivás si corrés de verdad—; el **campo de fuerza** es un muro
  de verdad —ver abajo— y encima devuelve el click como una onda que viaja hasta
  tu cursor; el **repulsor** te lo aparta mientras te acercás; el **camuflaje**
  lo deja en dos ojos flotando; el **parpadeo** lo saca de ahí dejando tres
  fantasmas. Y se va enojando: a partir de cierto número de golpes se le ponen
  los ojos naranjas, después rojos, y pega más fuerte y más seguido.
- **Se arma**: al sacar la espada o el fusil le cae en la cabeza un casco de
  guerra, domo de acero con cresta dorada, y se lo quita al soltar el arma.
- **El campo de fuerza frena el cursor**, no lo empuja: mientras está levantado,
  el puntero no puede entrar en la burbuja. Se queda pegado al borde y resbala
  por el hexágono por más que apuntes al centro. Para que eso se lea como un muro
  y no como un fallo de dibujo, la página oculta el puntero del sistema mientras
  el cursor propio está activo (`cursor: none`), que además era lo que faltaba:
  hasta ahora se veían los dos a la vez. La clase la pone el JS, así que si el
  script fallara, el puntero del sistema seguiría ahí.
- **Modo bestia**: si desperdiciás la ventana y le volvés a vaciar el aguante, ya
  no cae: ruge un "me hiciste enojar", la pantalla tiembla y crece un 40%, verde
  y con los ojos encendidos. **Deja de huir del todo**: te encara y te va a
  buscar, esté donde esté el puntero. Aguanta seis golpes en vez de cuatro, pega
  más fuerte y cada golpe suyo sacude la pantalla. Si dejás de insistir siete
  segundos se le pasa el enfado solo; mientras sigas peleando, no. Al caer se
  queda sin aire con la ventana algo más ancha, por haberlo aguantado. Y vuelve a
  transformarse cada vez que dejes escapar una ventana.
- **Tu vida**: una barrita pegada al puntero. Cada impacto suyo te quita un
  pedazo, proporcional a la fuerza del golpe, y se regenera sola en cuanto dejás
  de recibir. Si llega a cero **el puntero estalla en doce trozos y desaparece de
  la pantalla** un par de segundos, mientras el bicho se planta a festejarlo a
  saltos con un "te gané". Después el puntero vuelve entero y con la vida llena:
  es un juguete de un hero, no un roguelike.
- **Sin aire**: lo que lo desgasta es la pelea, no el poder. Para cuatro golpes
  —las marcas sobre su cabeza los van contando— y al quinto se queda sin aire un
  par de segundos, jadeando y sin defenderse. Esa es la única ventana en la que
  se lo agarra, y te la ganás peleando. Al ganarle se planta, te encara y te deja
  el WhatsApp.

  El contacto de la rendición va por WhatsApp y no por `mailto:` a propósito:
  dentro de un iframe con sandbox —el visor de artifacts, sin ir más lejos—
  navegar a un protocolo externo hace que el navegador reemplace el marco entero
  por una pantalla de "contenido bloqueado". Por lo mismo, el botón de contacto
  de abajo copia la dirección en vez de navegar **sólo cuando la página está
  embebida**; en el sitio real sigue abriendo el cliente de correo.
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

La pelea: en ocho partidas salieron las ocho defensas y se ganaron las ocho, sin
un nodo huérfano ni un error. La espada y la
embestida cierran una distancia de 110 px y se plantan a 36; el escudo y el
repulsor aguantan firmes sin moverse un píxel; el empuje del anillo llega a 46 px
con un tajo y 40 con la onda del escudo, siempre por debajo del tope de 52, y
vuelve solo a cero. El aguante baja un punto por golpe parado y al cuarto llega
"sin aire"; un click ahí lo gana y uno fuera no. En puntero grueso el repulsor
queda fuera del grupo, porque no hay anillo que empujar, y el ciclo entero se
completa a dedazos. Sin un solo error en consola en los cinco anchos.

El equipo: la bazuca mide 37x17 px contra los 21x11 de la pistola, que es lo que
hace falta para que a ese tamaño no se confundan —tubo gordo, bocas acampanadas y
banda de aviso—; el cañón apunta hasta 38 grados arriba y abajo siguiendo al
puntero;
el casco no pisa las marcas de aguante ni se sale del carril, y el arma tampoco,
en escritorio y en móvil. El cohete, medido contra tres formas de mover el ratón:
acierta al puntero quieto en un cuarto de segundo, al que va a la deriva en dos
tercios, y no llega al que huye en serio.

El modo bestia: se dispara al vaciarle el aguante por segunda vez, crece x1.38 en
escritorio y x1.30 en móvil creciendo desde los pies —no despega de la línea—, no
se sale del carril, persigue al puntero aunque lo alejes al otro extremo, cae en
seis golpes y al caer deja la ventana para ganarle, que se sigue ganando. En una
partida larga se transformó once veces y tumbó al jugador ocho. Al tumbarte, el
punto, el anillo y la barra se apagan a la vez, salen doce trozos, y a los 2,6
segundos está todo de vuelta sin un nodo huérfano; mientras estás en el suelo los
clicks se ignoran, que para algo no tenés puntero. El enlace de WhatsApp sólo se puede pulsar con el bicho ya atrapado:
`elementFromPoint` sobre él devuelve la sección mientras sigue vivo. El temblor sacude `<main>` y no `<body>`:
body ya trae `overflow-x: hidden` y recorta el desplazamiento. Recortarlo en
`html` era lo intuitivo, pero tanto `hidden` como `clip` ahí rompen el
`position: sticky` de la columna del perfil —medido contra la versión anterior— y
sacudiendo main no hay barra de scroll ni desplazamiento permanente del layout.

El radio de acierto va en múltiplos del ancho del sprite, para que valga igual en
móvil, y sólo se ensancha mientras el bicho huye, que es cuando es un blanco móvil
de verdad. Medido: quieto o plantado deja de contar pasados los 48 px; huyendo
llega a 70; con el dedo, 50.

La ráfaga de la bazuca: tres lanzamientos en los cinco segundos que dura, con uno
y dos segundos de separación, tres cohetes en vuelo como mucho y ni un cohete ni
una nube de humo huérfanos al terminar. Es la defensa más frecuente: 22% de las
veces.

El globo: las tres frases salen a los 2, 13 y 24 segundos, cambian de lado según
por dónde ande el bicho, y no vuelven a aparecer después del primer ataque. En
móvil entra dentro del carril sin desbordar.

El muro del escudo, medido barriendo el puntero por encima del bicho: el punto se
queda clavado a 34 px del centro en todo el recorrido —nunca entra— y vuelve a
pasar en cuanto el escudo se apaga. `cursor: none` sólo se aplica en escritorio
con el cursor propio activo: en táctil y con `prefers-reduced-motion` la clase no
llega, y los campos de texto conservan el suyo.

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
