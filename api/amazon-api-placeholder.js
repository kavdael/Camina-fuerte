
/**
 * Placeholder de integración futura con Amazon Product Advertising API.
 *
 * IMPORTANTE:
 * - No incluir claves reales en frontend público.
 * - Crear un backend seguro para firmar peticiones.
 * - Revisar siempre las condiciones vigentes de Amazon Product Advertising API antes de producción.
 * - No hacer scraping.
 * - No mostrar precios, disponibilidad o valoraciones reales si no llegan desde una fuente permitida.
 */

const AMAZON_CONFIG = {
  accessKey: process.env.AMAZON_ACCESS_KEY || 'INTRODUCIR_EN_BACKEND_SEGURO',
  secretKey: process.env.AMAZON_SECRET_KEY || 'INTRODUCIR_EN_BACKEND_SEGURO',
  partnerTag: process.env.AMAZON_PARTNER_TAG || 'TU_TRACKING_ID',
  marketplace: 'www.amazon.es',
  region: 'eu-west-1'
};

async function searchProducts(keyword) {
  // TODO: Implementar llamada firmada desde backend a Amazon PA API.
  return { keyword, source: 'mock', items: [] };
}

async function getProductByASIN(asin) {
  // TODO: Obtener título, imágenes, precio, disponibilidad y otros campos permitidos.
  return { asin, source: 'mock' };
}

async function getPrice(asin) {
  // TODO: Devolver precio actualizado si está permitido por Amazon PA API.
  return { asin, price: null, currency: 'EUR', source: 'mock' };
}

function generateAffiliateLink(keywordOrAsin) {
  const q = encodeURIComponent(keywordOrAsin);
  return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_CONFIG.partnerTag}`;
}

module.exports = { searchProducts, getProductByASIN, getPrice, generateAffiliateLink };
