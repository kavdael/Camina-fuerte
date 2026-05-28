
const PRODUCTS_URL = 'data/products.json';
const FALLBACK_PRODUCTS = [
  {
    "asin": "DEMO-VEST-8KG",
    "name": "Chaleco lastrado ajustable 1–8 kg",
    "slug": "chaleco-lastrado-ajustable-1-8kg",
    "category": "Chalecos lastrados",
    "subcategory": "Walking con resistencia",
    "tag": "Producto estrella",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-vest.svg",
    "amazonSearch": "chaleco lastrado ajustable caminar 8 kg",
    "bestFor": "Personas 40+ que quieren añadir intensidad suave a sus caminatas",
    "level": "Principiante progresivo",
    "weight": "1–8 kg",
    "summary": "Una opción visual, práctica y fácil de entender para transformar un paseo normal en una rutina de movimiento más completa.",
    "pros": [
      "Carga ajustable",
      "Perfecto para empezar con poco peso",
      "Más elegante que material fitness extremo",
      "Muy fácil de integrar en la rutina"
    ],
    "cons": [
      "No recomendable si hay molestias de espalda sin supervisión",
      "Puede dar calor en verano",
      "Conviene elegir talla y ajuste con cuidado"
    ],
    "features": [
      "Peso ajustable",
      "Diseño compacto",
      "Uso para caminar",
      "Preparado para progresión semanal"
    ],
    "editorial": "Es el producto principal del método porque comunica muy bien la idea de caminar con intención: no se trata de entrenar más duro, sino de hacer más inteligente algo que ya haces.",
    "recommended": true,
    "amazonUrl": "https://www.amazon.es/s?k=chaleco+lastrado+ajustable+caminar+8+kg&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=82"
  },
  {
    "asin": "DEMO-SHOES-WALK",
    "name": "Zapatillas cómodas para walking urbano",
    "slug": "zapatillas-comodas-walking-urbano",
    "category": "Calzado walking",
    "subcategory": "Zapatillas para caminar",
    "tag": "Base del kit",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-shoes.svg",
    "amazonSearch": "zapatillas caminar mujer hombre comodidad walking",
    "bestFor": "Usuarios que caminan a diario y buscan comodidad estable",
    "level": "Todos los niveles",
    "weight": "Ligero",
    "summary": "Un buen par de zapatillas puede hacer que el hábito sea más cómodo, repetible y fácil de mantener.",
    "pros": [
      "Aumenta comodidad",
      "Útil incluso sin chaleco",
      "Producto muy buscado",
      "Buena compra recurrente"
    ],
    "cons": [
      "La elección depende mucho del pie",
      "No todos los modelos sirven para todos",
      "Conviene revisar tallas y devolución"
    ],
    "features": [
      "Amortiguación",
      "Suela estable",
      "Uso diario",
      "Diseño urbano"
    ],
    "editorial": "El calzado correcto reduce excusas: si caminar se siente cómodo, la constancia tiene más posibilidades de aparecer.",
    "amazonUrl": "https://www.amazon.es/s?k=zapatillas+caminar+mujer+hombre+comodidad+walking&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82"
  },
  {
    "asin": "DEMO-BANDS-SET",
    "name": "Set de bandas elásticas de resistencia",
    "slug": "set-bandas-elasticas-resistencia",
    "category": "Fuerza suave",
    "subcategory": "Bandas elásticas",
    "tag": "Complemento fuerza",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-bands.svg",
    "amazonSearch": "bandas elasticas resistencia set fitness",
    "bestFor": "Rutinas cortas antes o después de caminar",
    "level": "Principiante",
    "weight": "Muy ligero",
    "summary": "Ideales para completar el ritual con 5–8 minutos de fuerza suave en casa.",
    "pros": [
      "Baratas y versátiles",
      "Ocupan poco espacio",
      "Aptas para empezar",
      "Perfectas para contenido educativo"
    ],
    "cons": [
      "Se desgastan con el tiempo",
      "Requieren aprender técnica básica",
      "No sustituyen todo entrenamiento de fuerza"
    ],
    "features": [
      "Diferentes resistencias",
      "Uso en casa",
      "Fácil transporte",
      "Bajo coste"
    ],
    "editorial": "Son el puente perfecto entre caminar y empezar a trabajar fuerza sin convertir la rutina en algo complicado.",
    "amazonUrl": "https://www.amazon.es/s?k=bandas+elasticas+resistencia+set+fitness&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=82"
  },
  {
    "asin": "DEMO-BOTTLE-PRO",
    "name": "Botella premium de hidratación 750 ml",
    "slug": "botella-premium-hidratacion-750ml",
    "category": "Hidratación",
    "subcategory": "Botellas deportivas",
    "tag": "Hábito diario",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-bottle.svg",
    "amazonSearch": "botella agua deportiva 750 ml premium",
    "bestFor": "Personas que quieren reforzar el hábito de salir preparadas",
    "level": "Todos",
    "weight": "750 ml",
    "summary": "Un accesorio sencillo, pero muy coherente con la idea de ritual: salir a caminar con agua, intención y estructura.",
    "pros": [
      "Uso diario",
      "Buena venta complementaria",
      "Visual y fácil de recomendar",
      "Refuerza el ritual"
    ],
    "cons": [
      "Ticket medio más bajo",
      "Diferenciar calidad puede ser difícil",
      "Hay mucha competencia"
    ],
    "features": [
      "Capacidad 750 ml",
      "Cierre cómodo",
      "Uso urbano",
      "Fácil limpieza"
    ],
    "editorial": "No vende transformación por sí sola, pero ayuda a construir una experiencia completa alrededor del hábito.",
    "amazonUrl": "https://www.amazon.es/s?k=botella+agua+deportiva+750+ml+premium&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82"
  },
  {
    "asin": "DEMO-TRACKER-STEP",
    "name": "Contador de pasos sencillo / tracker básico",
    "slug": "contador-pasos-tracker-basico",
    "category": "Seguimiento",
    "subcategory": "Contadores de pasos",
    "tag": "Motivación simple",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-tracker.svg",
    "amazonSearch": "contador de pasos reloj actividad basico",
    "bestFor": "Usuarios que necesitan medir progreso sin complicarse",
    "level": "Todos",
    "weight": "Ligero",
    "summary": "Medir pasos, tiempo y constancia puede ser más motivador que seguir rutinas complicadas.",
    "pros": [
      "Ayuda a crear hábito",
      "Fácil de explicar",
      "Buena intención de búsqueda",
      "Ideal para retos de 7 días"
    ],
    "cons": [
      "Algunos modelos son poco precisos",
      "Puede distraer si se obsesiona con números",
      "Conviene elegir interfaz sencilla"
    ],
    "features": [
      "Pasos diarios",
      "Tiempo de actividad",
      "Pantalla simple",
      "Uso diario"
    ],
    "editorial": "Un buen tracker debe simplificar, no añadir presión. Para 40+, menos pantallas y más claridad suele convertir mejor.",
    "amazonUrl": "https://www.amazon.es/s?k=contador+de+pasos+reloj+actividad+basico&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=82"
  },
  {
    "asin": "DEMO-MASSAGE-BALL",
    "name": "Pelota de masaje y recuperación muscular",
    "slug": "pelota-masaje-recuperacion-muscular",
    "category": "Recuperación",
    "subcategory": "Movilidad y descarga",
    "tag": "Recuperación",
    "priceMock": "Precio demo",
    "ratingMock": "Valoración demo",
    "image": "assets/img/product-ball.svg",
    "amazonSearch": "pelota masaje muscular recuperacion fascia",
    "bestFor": "Después de caminar, para pies, gemelos y espalda alta",
    "level": "Todos",
    "weight": "Pequeño",
    "summary": "Un producto pequeño que completa el ritual con una parte de recuperación fácil de entender.",
    "pros": [
      "Muy económica",
      "Ocupa muy poco",
      "Buena compra impulsiva",
      "Encaja con rutina de recuperación"
    ],
    "cons": [
      "Necesita instrucciones de uso",
      "No debe usarse sobre dolor agudo",
      "Ticket medio bajo"
    ],
    "features": [
      "Tamaño compacto",
      "Textura de masaje",
      "Uso en pies y piernas",
      "Fácil transporte"
    ],
    "editorial": "Excelente como producto secundario dentro de un kit porque cierra el círculo: caminar, hidratarse y recuperar.",
    "amazonUrl": "https://www.amazon.es/s?k=pelota+masaje+muscular+recuperacion+fascia&tag=TU_TRACKING_ID",
    "lifestyleImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=82"
  }
];
const AMAZON_TRACKING_ID = 'TU_TRACKING_ID';

function menuInit(){
  const btn = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if(!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
}

function amazonSearchUrl(query){
  return `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TRACKING_ID}`;
}

async function loadProducts(){
  // Primero intenta cargar data/products.json. Si el navegador bloquea fetch en modo file://, usa datos embebidos.
  try {
    const res = await fetch(PRODUCTS_URL);
    if(!res.ok) throw new Error('No se pudo cargar data/products.json');
    return await res.json();
  } catch (error) {
    console.warn('Usando productos embebidos porque no se pudo cargar el JSON externo.', error);
    return FALLBACK_PRODUCTS;
  }
}

function productCard(p){
  return `
  <article class="product-card" data-category="${p.category}" data-level="${p.level}">
    <div class="product-media" style="background-image:url('${p.lifestyleImage || p.image}')"><img src="${p.image}" alt="${p.name}"></div>
    <div class="product-body">
      <div class="product-meta"><span class="pill orange">${p.tag}</span><span class="pill">${p.level}</span></div>
      <div class="product-title">${p.name}</div>
      <p class="product-summary">${p.summary}</p>
      <p class="small"><strong>Ideal para:</strong> ${p.bestFor}</p>
      <div class="product-actions">
        <a class="btn secondary" href="producto.html?asin=${encodeURIComponent(p.asin)}">Ver ficha</a>
        <a class="btn" href="${p.amazonUrl}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon</a>
      </div>
    </div>
  </article>`;
}

async function renderProducts(selector, limit){
  const el = document.querySelector(selector);
  if(!el) return;
  try{
    const products = await loadProducts();
    const list = limit ? products.slice(0, limit) : products;
    el.innerHTML = list.map(productCard).join('');
  }catch(e){ el.innerHTML = `<div class="empty">No se pudieron cargar los productos demo.</div>`; }
}

async function renderProductList(){
  const grid = document.querySelector('[data-product-list]');
  if(!grid) return;
  const search = document.querySelector('[data-search]');
  const category = document.querySelector('[data-category-filter]');
  const level = document.querySelector('[data-level-filter]');
  let products = [];
  try{ products = await loadProducts(); }catch(e){ grid.innerHTML = `<div class="empty">No se pudieron cargar los productos.</div>`; return; }
  function render(){
    const q = (search?.value || '').toLowerCase().trim();
    const cat = category?.value || '';
    const lev = level?.value || '';
    const filtered = products.filter(p => {
      const hay = `${p.name} ${p.category} ${p.subcategory} ${p.summary} ${p.bestFor}`.toLowerCase();
      return (!q || hay.includes(q)) && (!cat || p.category === cat) && (!lev || p.level === lev);
    });
    grid.innerHTML = filtered.length ? filtered.map(productCard).join('') : `<div class="empty">No hay productos con esos filtros.</div>`;
  }
  if(category){
    category.innerHTML = '<option value="">Todas las categorías</option>' + [...new Set(products.map(p=>p.category))].map(c=>`<option value="${c}">${c}</option>`).join('');
  }
  if(level){
    level.innerHTML = '<option value="">Todos los niveles</option>' + [...new Set(products.map(p=>p.level))].map(c=>`<option value="${c}">${c}</option>`).join('');
  }
  [search, category, level].forEach(x => x && x.addEventListener('input', render));
  render();
}

async function renderProductDetail(){
  const root = document.querySelector('[data-product-detail]');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const asin = params.get('asin');
  let products = [];
  try{ products = await loadProducts(); }catch(e){ root.innerHTML = `<div class="empty">No se pudieron cargar los datos del producto.</div>`; return; }
  const p = products.find(x => x.asin === asin) || products[0];
  document.title = `${p.name} | Camina Fuerte 40+`;
  const similar = products.filter(x=>x.asin !== p.asin).slice(0,3);
  root.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Inicio</a> / <a href="productos.html">Productos</a> / ${p.name}</div>
    <div class="split">
      <div class="product-detail-img" style="background-image:url('${p.lifestyleImage || p.image}')"><img src="${p.image}" alt="${p.name}"></div>
      <div class="content">
        <span class="badge">${p.tag}</span>
        <h1>${p.name}</h1>
        <p class="lead">${p.summary}</p>
        <div class="product-meta"><span class="pill">${p.category}</span><span class="pill">${p.subcategory}</span><span class="pill orange">${p.level}</span></div>
        <p><strong>Para quién es ideal:</strong> ${p.bestFor}</p>
        <p><strong>Precio y valoración:</strong> datos demo. En producción deben actualizarse únicamente mediante Amazon Product Advertising API y respetando sus condiciones vigentes.</p>
        <div class="hero-actions">
          <a class="btn" href="${p.amazonUrl}" target="_blank" rel="nofollow sponsored noopener">Ver opciones en Amazon</a>
          <a class="btn ghost" href="comparativas.html">Comparar alternativas</a>
        </div>
        <p class="small">Aviso: enlace afiliado. Como afiliados de Amazon, podemos obtener ingresos por compras que cumplan los requisitos.</p>
      </div>
    </div>
    <section class="section">
      <div class="grid cols-3">
        ${p.features.map(f=>`<div class="card"><div class="icon orange">✓</div><h3>${f}</h3><p>Característica pensada para facilitar una rutina sencilla, repetible y progresiva.</p></div>`).join('')}
      </div>
    </section>
    <section class="section alt">
      <div class="containerless">
        <h2>Opinión editorial</h2>
        <p class="lead">${p.editorial}</p>
        <div class="proscons">
          <div class="card"><h3>Pros</h3><ul>${p.pros.map(x=>`<li>${x}</li>`).join('')}</ul></div>
          <div class="card"><h3>Contras</h3><ul>${p.cons.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Comparativa rápida con productos similares</h2>
      <table class="comparison"><thead><tr><th>Producto</th><th>Uso principal</th><th>Ideal para</th><th>Acción</th></tr></thead><tbody>
      ${similar.map(s=>`<tr><td>${s.name}</td><td>${s.subcategory}</td><td>${s.bestFor}</td><td><a class="btn ghost" href="producto.html?asin=${s.asin}">Ver ficha</a></td></tr>`).join('')}
      </tbody></table>
    </section>
    <section class="section">
      <h2>Preguntas frecuentes</h2>
      <div class="faq">
        <details open><summary>¿Sirve para adelgazar?</summary><p>La web no promete pérdida de peso ni resultados médicos. El enfoque es añadir estructura, constancia e intensidad progresiva a una rutina de movimiento.</p></details>
        <details><summary>¿Por dónde debería empezar?</summary><p>Empieza con sesiones cortas, poca carga y progresión lenta. Si existe cualquier condición médica, dolor, problema articular o cardiovascular, consulta con un profesional sanitario.</p></details>
        <details><summary>¿Los precios son reales?</summary><p>En esta versión local los precios son de demostración. En producción se deben mostrar datos permitidos y actualizados desde Amazon Product Advertising API.</p></details>
      </div>
    </section>`;
}

function contactInit(){
  const form = document.querySelector('[data-contact-form]');
  const out = document.querySelector('[data-form-result]');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    out.textContent = 'Mensaje demo enviado. En producción conecta este formulario con tu backend o herramienta de email.';
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  menuInit();
  renderProducts('[data-featured-products]', 3);
  renderProducts('[data-all-products-preview]', 6);
  renderProductList();
  renderProductDetail();
  contactInit();
});
