# Portafolio — Ingrid Natalia Rodríguez Ovalle

Portafolio personal en React + Vite. Estética oscura con acentos neón: luces en
movimiento, rejilla en perspectiva, grano de película y tipografía display.

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
  data/cv.js            # ← todo el contenido del CV vive aquí
  components/
    Ambience.jsx        # orbes de luz, rejilla, viñeta, grano
    Nav.jsx             # nav fija con sección activa + menú móvil
    Hero.jsx            # encabezado, ecualizador, métricas de impacto
    Marquee.jsx         # cinta infinita de tecnologías
    Cases.jsx           # proyectos con impacto medible
    About.jsx           # resumen profesional + idiomas
    Stack.jsx           # tecnologías agrupadas por función
    Architecture.jsx    # diagrama SVG del flujo de una petición
    Tour.jsx            # experiencia laboral (acordeón)
    Brands.jsx          # marcas trabajadas + APIs integradas (paredes de logos)
    Credentials.jsx     # educación y certificaciones
    Contact.jsx         # llamado a la acción + redes
    Footer.jsx
  styles/global.css     # sistema de diseño completo (tokens en :root)
legacy/                 # sitio anterior en Bootstrap, por si se necesita algo
```

**Para actualizar contenido edita solo `src/data/cv.js`.** Los componentes se
alimentan de ahí.

## Logos

Están en `public/logos/`, descargados del sitio oficial de cada marca y servidos
localmente (no hay hotlinking a CDNs ajenos). Se unifican a blanco por CSS
(`filter: brightness(0) invert(1)`) para que la pared lea como un solo bloque
sobre el fondo oscuro, sin importar el color original de cada logo.

Para agregar una marca: pon el archivo en `public/logos/` y añade una entrada en
`brands` o `apis` dentro de `src/data/cv.js`.

## Paleta

Definida como variables CSS en `src/styles/global.css` (`:root`):
`--magenta #ff2e88` · `--cyan #00e5ff` · `--violet #b14cff` · `--acid #b6ff3b`
sobre fondo `--bg #05040a`.

## Imagen de preview (Open Graph)

`public/og-image.png` (1200×630) es lo que se ve al compartir el link en LinkedIn o
WhatsApp. El fuente que la genera está en el historial de la sesión; para regenerarla
basta con volver a renderizar un HTML del mismo tamaño y guardarlo ahí.

Las URLs absolutas de las etiquetas `og:` en `index.html` apuntan a
`https://innacroft.github.io/portfolio/` — hay que actualizarlas si cambia el dominio.

## Deploy

`npm run build` deja todo estático en `dist/`. Funciona tal cual en Netlify,
Vercel o GitHub Pages (`base: './'` ya está configurado en `vite.config.js`).
