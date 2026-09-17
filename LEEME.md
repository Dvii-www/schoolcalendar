# Mi Horario — versión instalable (PWA)

Estos 5 archivos tienen que vivir juntos, en la misma carpeta, para que
funcione como app instalable:

- `index.html` — la app
- `manifest.json` — le dice al celular cómo se llama, de qué color, qué ícono usar
- `sw.js` — el "service worker", lo que permite instalarla y que funcione sin internet
- `icon-192.png` y `icon-512.png` — el ícono de la app

## Publicarla (igual que hiciste con Tap Color)

1. Sube estos 5 archivos a un repositorio de GitHub.
2. Actívale GitHub Pages (Settings → Pages → Deploy from branch).
3. Te va a dar un enlace tipo `https://tuusuario.github.io/tu-repo/`.

**Importante:** tiene que ser un enlace real (https), no un archivo abierto
directo en el celular — los navegadores solo permiten instalar apps desde
una dirección web segura.

## Instalarla en un celular

- **Android (Chrome):** al abrir el enlace, va a aparecer un botón
  **"📲 Instalar"** en la app misma. Le dan clic y listo — queda como
  cualquier otra app en su pantalla de inicio.
- **iPhone (Safari):** Safari no muestra ese botón automático. Ahí es
  manual: abren el enlace, tocan el ícono de compartir (el cuadrito con
  la flecha hacia arriba) y eligen **"Agregar a pantalla de inicio"**.

## Cuando le hagas cambios después

Cada vez que subas una versión nueva de `index.html`, sube también
`sw.js` pero **cambia el número de versión** al principio del archivo:

```js
const VERSION = 'v1';   // súbelo a 'v2', 'v3', etc. en cada actualización
```

Si no cambias ese número, los celulares que ya instalaron la app se van
a quedar viendo la versión vieja guardada en su caché.

## Para tus compañeros

Como el horario que trae cargado es el del grupo completo, en cuanto
tengas el enlace de GitHub Pages, se los puedes compartir directo — cada
quien la instala en su celular y ya tiene el horario del grupo, sin
capturar nada.
