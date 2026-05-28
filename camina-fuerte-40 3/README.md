# Camina Fuerte 40+

Web estática demo en español para una tienda afiliada de Amazon enfocada en walking con resistencia para mayores de 40.

## Cómo abrir

1. Descomprime el ZIP.
2. Abre `index.html` en tu navegador. La web incluye datos embebidos para funcionar con doble clic.
3. Opcionalmente, para probarla como web local, puedes abrir la carpeta con un servidor local:

```bash
python3 -m http.server 8000
```

Después entra en `http://localhost:8000`.

## Archivos incluidos

- `index.html`
- `categorias.html`
- `categoria.html`
- `subcategoria.html`
- `productos.html`
- `producto.html`
- `comparativas.html`
- `guia-compra.html`
- `contacto.html`
- páginas legales
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/`
- `data/products.json`
- `api/amazon-api-placeholder.js`

## Importante para Amazon

- No uses scraping.
- No pongas claves reales en el frontend.
- Revisa las condiciones actuales de Amazon Product Advertising API antes de producción.
- Los precios, valoraciones, disponibilidad e imágenes reales deben venir de fuentes permitidas.
- Sustituye `TU_TRACKING_ID` por tu tracking ID real cuando tengas todo aprobado.


## Imágenes lifestyle

Esta versión incluye imágenes externas de estilo outdoor/lifestyle para que la web se vea más viva. Al abrirla sin conexión a internet, los textos y productos siguen funcionando, pero esas fotos pueden no cargarse. Para producción, sustituye estas URLs por imágenes propias, con licencia o por recursos aprobados por tu marca.


## NutriForty logo
Se ha añadido un logotipo vectorial SVG de NutriForty Fit en `assets/img/nutriforty-logo.svg` y se ha integrado en el header y footer de todas las páginas. Sustituir por el logotipo oficial si se dispone del archivo original de marca.
