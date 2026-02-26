# Imágenes usadas en el proyecto

Este documento describe las imágenes que actualmente referencia la aplicación y las recomendaciones básicas para mantener el sitio consistente.

Ruta: `static/img/`

## Imágenes que se usan en las plantillas

- `foto_negocio.jpeg` — Imagen principal del hero en la página de inicio (`index.html`).
- `friesandchicken.jpeg` — Sección «Fries and Chicken» en la página de menú (`menu.html`).
- `alldaybreakfast.jpeg` — Sección «All Day Breakfast» en `menu.html`.
- `minipancakes.jpeg` — Sección «Mini Pancakes» en `menu.html`.
- `milkshakes.jpeg` — Sección «Milk Shakes» en `menu.html`.
- `smoothies.jpeg` — Sección «Smoothies» en `menu.html`.
- `placeholder.jpg` — Imagen genérica usada como fallback cuando falta alguna imagen.

Si deseas añadir más imágenes para futuras secciones, colócalas en esta carpeta y actualiza las plantillas correspondientes.

## Recomendaciones de tamaño y formato

- Formato: `JPEG` o `PNG` (preferible `JPEG` para fotografías por mejor compresión).
- Hero / imagen principal: mínimo 1200×800px para buena apariencia en pantallas grandes.
- Imágenes de sección / menú: suficientes 1000px en el lado más largo para mantener calidad si se muestran a pantalla completa; se escalarán según el diseño.
- Placeholder: conserva `placeholder.jpg` para mantener layout cuando falten recursos.

## Optimización

- Comprime imágenes antes de añadirlas (herramientas como `squoosh`, `imagemin`, o servicios online).
- Mantén nombres descriptivos pero sin espacios (usa guiones `-`).

## Información adicional

La paleta de colores y tipografías del proyecto están definidas en `static/css/style.css` y se cargan desde Google Fonts. No es necesario modificar este `README` para cambios de estilo visual.

Si quieres que genere versiones optimizadas (webp) o un script de conversión, dímelo y lo creo.
