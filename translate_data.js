const fs = require('fs');

let raw = fs.readFileSync('config/settings_data.json', 'utf8');
const commentMatch = raw.match(/\/\*[\s\S]*?\*\//);
const comment = commentMatch ? commentMatch[0] + "\n" : '';
raw = raw.replace(/\/\*[\s\S]*?\*\//, '').trim();
const data = JSON.parse(raw);

const translations = {
  "20% off": "20% de descuento",
  "On your first purchase": "En tu primera compra",
  "Thank you for subscribe use this code:": "Gracias por suscribirte, usa este código:",
  "Enter your email..": "Ingresa tu correo..",
  "No products in the cart.": "No hay productos en el carrito.",
  "Continue shopping": "Continuar comprando",
  "There are": "Hay",
  "products": "productos",
  "Sub Total:": "Subtotal:",
  "View Cart": "Ver carrito",
  "Checkout": "Finalizar compra",
  "Add to cart": "Agregar al carrito",
  "Find our seach": "Busca aquí",
  "Read more": "Leer más",
  "Search": "Buscar",
  "Search blog": "Buscar en el blog",
  "Archive": "Archivo",
  "Recent post": "Publicación reciente",
  "Tags": "Etiquetas",
  "Add wishlist": "Añadir a deseos",
  "Loding..": "Cargando..",
  "Remove From wishlist": "Eliminar de deseos",
  "Go to wishlist": "Ir a deseos",
  "Your wishlist is currently empty!": "¡Tu lista de deseos está vacía!",
  "Please login your account": "Por favor inicia sesión",
  "Don't have an account?": "¿No tienes una cuenta?",
  "Already an account holder?": "¿Ya tienes una cuenta?",
  "Logout": "Cerrar sesión",
  "Your": "Tu",
  "wishlist": "lista de deseos",
  "is currently": "está",
  "Empty!": "¡Vacía!",
  "Please login below account detail": "Por favor inicia sesión abajo",
  "Please register below account detail": "Por favor regístrate abajo",
  "Lpsum is simply dummy text of the printing and typesetting industry has been \nthe industry's standard dummy text": "Somos una empresa dedicada a ofrecer los mejores productos con la más alta calidad.",
  "New": "Nuevo",
  "Sale": "Oferta",
  "Soldout": "Agotado",
  "Call : (000) 123 456 7890": "Llámanos: (000) 123 456 7890",
  "Subscribe <span>Votto</span>": "Suscríbete a <span>Novedades</span>",
  "Every day upto 45% off": "Hasta 45% de descuento todos los días",
  "End of hot summer sale": "Fin de temporada",
  "Get 50% off on lens": "Obtén 50% de descuento",
  "Buy from amazon": "Comprar en Amazon",
  "Added to cart successfully!": "¡Añadido al carrito con éxito!",
  "Categories": "Categorías",
  "Free Shipping": "Envío Gratis",
  "Oredr over $150 free": "En pedidos mayores a $150",
  "Money Back": "Devolución de Dinero",
  "100% Moneyback": "100% garantizado",
  "Quality Support": "Soporte de Calidad",
  "Send within 30 days": "Devoluciones en 30 días",
  "Gift & Voucher": "Tarjetas de Regalo",
  "Oredr above $200": "En pedidos sobre $200",
  "Summer sale discount off 20%": "Descuento de verano del 20%",
  "Shop Now": "Comprar Ahora",
  "Page error!!!": "¡Error de página!",
  "Not": "No",
  "Found": "Encontrado",
  "Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.": "Lo sentimos, la página que buscas no existe o no está disponible temporalmente.",
  "Go to home page": "Ir al inicio",
  "on electronics today offer": "en la oferta de hoy",
  "Vendors": "Vendedores",
  "Products Types": "Tipos de Productos",
  "Color": "Color",
  "Size": "Talla",
  "Best product": "Mejor producto",
  "Welcome to fashcart store": "Bienvenido a nuestra tienda",
  "Terms & Conditions.": "Términos y Condiciones.",
  "Your privacy and security are important to us. For more information on how we use your data read our": "Tu privacidad es importante. Para más información lee nuestra",
  "privacy policy": "política de privacidad",
  "Welcome to starplant store online": "Bienvenido a nuestra tienda online",
  "Subscribe": "Suscribirse",
  "PAGE NOT BE FOUND": "PÁGINA NO ENCONTRADA",
  "Recent Post": "Publicaciones Recientes",
  "Need help": "Necesitas ayuda",
  "Free delivery": "Envío gratis",
  "Free installation": "Instalación gratuita",
  "Related Product": "Productos Relacionados",
  "Comment": "Comentario",
  "Comments": "Comentarios",
  "By": "Por",
  "Shipping Info": "Info de Envío",
  "Calculate": "Calcular",
  "Special instructions for seller": "Instrucciones especiales",
  "Total": "Total",
  "Continue browsing": "Continuar navegando",
  "here": "aquí",
  "Product": "Producto",
  "Shop now": "Comprar",
  "For all orders over $150": "Para pedidos sobre $150",
  "Safe payment": "Pago Seguro",
  "100% secure payment": "Pagos 100% seguros",
  "24/7 Help center": "Centro de ayuda 24/7",
  "Dedicated 24/7 support": "Soporte dedicado 24/7",
  "Friendly services": "Servicio amigable",
  "30 Day guarantee": "Garantía de 30 días",
  "Trending Products": "Productos en Tendencia",
  "Copyright": "Derechos de autor",
  "Our mission": "Nuestra misión",
  "Our vision": "Nuestra visión",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit., rutrum massa quis, porttitor lorem. Aliquam non est a ipsum facilisis scelerisque eu sed lectus.": "Trabajamos arduamente para ofrecerte la mejor experiencia de compra, con productos seleccionados para garantizar calidad y satisfacción en cada entrega.",
  "Drop us message": "Déjanos un mensaje",
  "Your name": "Tu nombre",
  "Your email address": "Tu correo electrónico",
  "Your Mobile": "Tu celular",
  "Your message here...": "Tu mensaje aquí...",
  "Submit": "Enviar",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.": "Nuestros términos y condiciones aseguran una experiencia de compra transparente y segura para todos nuestros clientes.",
  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.": "Asegúrate de revisar nuestras políticas de privacidad y devoluciones para que tu experiencia con nosotros sea la mejor posible."
};

function translateStrings(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(translateStrings);
  } else if (obj !== null && typeof obj === 'object') {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        if (translations[obj[key]]) {
          obj[key] = translations[obj[key]];
        }
      } else if (typeof obj[key] === 'object') {
        translateStrings(obj[key]);
      }
    }
  }
}

translateStrings(data);
fs.writeFileSync('config/settings_data.json', comment + JSON.stringify(data, null, 2), 'utf8');
console.log('Data translation complete!');
