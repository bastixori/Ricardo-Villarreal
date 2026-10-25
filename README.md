# 🎵 Portafolio & Dossier Comercial — Ricardo Villarreal Muñoz

Landing Page de alta conversión y **Dossier Artístico Digital (EPK)** diseñado para captar clientes potenciales de eventos (matrimonios, eventos corporativos, cenas de gala, aniversarios y celebraciones privadas) y dirigirlos directamente al canal de cierre por **WhatsApp (`+56 9 7929 6731`)** y llamada telefónica.

---

## 📂 Estructura Actual del Proyecto

```text
portafolio ricardo villareal/
├── index.html        # Landing Page completa + Dossier Artístico imprimible/PDF
├── css/
│   └── styles.css    # Diseño Luxury Stage (Dark & Gold) + Estilos @media print para PDF
├── js/
│   ├── config.js     # Configuración centralizada (WhatsApp, Redes, Videos Cloud, Fotos, Repertorio)
│   └── main.js       # Lógica de filtros, reproductor Cloud/YouTube, Lightbox y Cotizador WhatsApp
└── README.md         # Hoja de ruta de iteraciones técnicas + Plan Maestro de Marketing
```

---

## 🌿 Ramas de Iteración para Mejorar la Página (Roadmap de Desarrollo)

Para trabajar de forma ordenada a medida que tengamos el material definitivo de Ricardo, dividimos la evolución de la web en **6 ramas de iteración**:

### 🔹 Rama 1: `iteracion/multimedia-cloud-real` (Fotos y Videos Reales)
**Objetivo:** Reemplazar las fotos y videos de muestra por el material real de Ricardo alojado en servicios Cloud 100% gratuitos.
- [ ] **Selección Fotográfica:** Subir entre 6 y 12 fotos reales de alta calidad (en escenario, planos medios con su instrumento/voz, eventos reales y foto de portada) a **Cloudinary (Plan Free)**.
- [ ] **Videos Horizontales (16:9):** Subir 2 a 4 videos principales (Showreel resumen de 1-2 min + presentaciones en vivo) a **YouTube (No Listado o Público)** o **Cloudinary**.
- [ ] **Videos Verticales / Reels (9:16):** Subir los mejores clips verticales (30 a 60 seg) a **Cloudinary** para que reproduzcan al instante en la pestaña *"Reels Verticales"*.
- [ ] **Video de Fondo (Hero Loop):** Seleccionar un clip de 10-15 segundos sin audio (en alta estética) de Ricardo tocando en vivo para el fondo principal de la página.
- [ ] **Actualización en código:** Reemplazar las URLs en `PORTFOLIO_CONFIG.videos` y `PORTFOLIO_CONFIG.photos` dentro de `js/config.js`.

---

### 🔹 Rama 2: `iteracion/repertorio-y-formatos` (Propuesta Musical Real)
**Objetivo:** Alinear la página con el repertorio exacto y los formatos de show con los que se trabajará comercialmente.
- [ ] **Definición de Estilos y Cancionero:** Actualizar `PORTFOLIO_CONFIG.repertoire` en `js/config.js` con los géneros reales, artistas referentes y las 20-30 canciones más solicitadas en eventos.
- [ ] **Lista de Canciones Descargable / Interactiva:** Agregar un buscador o acordeón de *"Canciones Disponibles"* para que los novios o clientes puedan elegir sus temas favoritos y enviarlos en la cotización de WhatsApp.
- [ ] **Paquetes / Formatos de Contratación:** Definir los formatos reales:
  - *Formato Recepción / Cóctel* (ej. 1 hora de música instrumental/vocal suave).
  - *Formato Ceremonia + Cóctel* (canciones especiales para novios + recepción).
  - *Formato Show Estelar / Cena* (sets de 45 min x 2 o show continuo).
- [ ] **Muestras de Audio (Audio Snippets):** Opcionalmente incluir mini-reproductores de 30 segundos por género musical.

---

### 🔹 Rama 3: `iteracion/redes-sociales-y-omnicanalidad` (Instagram, TikTok, Facebook, YouTube)
**Objetivo:** Conectar la web con el ecosistema de redes sociales de Ricardo para generar prueba social inmediata.
- [ ] **Conexión de Perfiles Oficiales:** Actualizar en `js/config.js` (`PORTFOLIO_CONFIG.socials`) los enlaces reales y nombres de usuario (`@handle`) de:
  - **Instagram** (Catálogo visual, historias destacadas de eventos y Reels).
  - **TikTok** (Videos cortos de alto alcance orgánico interpretando canciones conocidas).
  - **Facebook** (Ideal para llegar a organizadores de eventos familiares, aniversarios y empresas).
  - **YouTube** (Canal de respaldo con videos en alta definición).
- [ ] **Feed de Reels Destacados:** Integrar enlaces directos a los 3 Reels más virales o emotivos de Instagram/TikTok.
- [ ] **Código QR para Tarjetas y Escenario:** Generar un código QR personalizado (con estética dorada/oscura) que apunte a la web, ideal para poner en un atril o acrílico mientras Ricardo toca en eventos (los invitados escanean el QR en vivo y guardan su contacto).

---

### 🔹 Rama 4: `iteracion/prueba-social-y-confianza` (Testimonios y Clientes)
**Objetivo:** Aumentar la tasa de cierre mostrando la satisfacción de clientes anteriores.
- [ ] **Sección de Testimonios Reales:** Agregar 3 a 6 reseñas de novios, clientes de cumpleaños o empresas (con nombre, tipo de evento y fecha/ciudad).
- [ ] **Capturas o Videos de Reacción:** Incluir videos cortos donde se vea al público disfrutando, aplaudiendo o cantando en el evento.
- [ ] **Logos de Empresas / Lugares / Centros de Eventos:** Añadir una franja de *"Lugares donde hemos llevado nuestra música"* (hoteles, viñas, centros de eventos, empresas).

---

### 🔹 Rama 5: `iteracion/dossier-b2b-y-pdf` (Dossier Ejecutivo para Productoras)
**Objetivo:** Facilitar que productoras de eventos, Wedding Planners y hoteles contraten a Ricardo como proveedor recurrente.
- [ ] **Dossier PDF Oficial Descargable:** Generar una versión en PDF estática de 2 páginas (además del botón de impresión automática ya integrado) lista para enviar por WhatsApp en 1 clic.
- [ ] **Ficha Técnica (Rider) Detallada:** Especificar exactamente qué equipos de sonido e iluminación incluye Ricardo, qué espacio físico requiere (ej. 2x2 mts) y opciones con/sin amplificación.
- [ ] **Información de Facturación:** Indicar disponibilidad de boleta de honorarios / factura para empresas y municipalidades.

---

### 🔹 Rama 6: `iteracion/seo-analitica-y-despliegue` (Dominio, Métricas y Captación)
**Objetivo:** Publicar la web gratis en internet, medir cuántas personas hacen clic en WhatsApp y aparecer en Google.
- [ ] **Despliegue Gratuito (Vercel / Netlify / GitHub Pages):** Subir el repositorio y activar el enlace público con `https://`.
- [ ] **SEO Local para Eventos en Chile:** Optimizar títulos y palabras clave (*"Músico para matrimonios en [Ciudad]"*, *"Música en vivo para eventos corporativos"*, *"Cantante / Músico para cumpleaños y cenas"*).
- [ ] **Pixel de Meta & Google Analytics (Gratis):** Instalar seguimiento para saber cuántas visitas llegan desde Instagram/TikTok y cuántas presionan el botón de WhatsApp (`+56 9 7929 6731`).

---

## 🚀 Plan Maestro de Marketing y Proyectos Comerciales para Ricardo

Una página web profesional es el **centro de conversión**, pero el crecimiento real viene de combinarla con estrategias activas de captación de clientes:

### 1. Estrategia de Contenido "Show, Don't Tell" (Redes Sociales → Landing → WhatsApp)
1. **Reels y TikToks de Canciones Pedidas (3 veces por semana):**
   - Grabar a Ricardo interpretando el coro (los mejores 30-45 segundos) de canciones icónicas de matrimonios, boleros o clásicos románticos con buen audio.
   - **Texto en pantalla (Hook):** *"Imagina que suena esta canción mientras entras a tu matrimonio..."* o *"La canción que nunca falla en los aniversarios"*.
   - **Llamado a la acción (CTA):** *"Repertorio completo y cotizaciones para eventos en el link de mi perfil"*.
2. **Videos de "Detrás de Escena / Vlog de Evento":**
   - Mostrar desde que llega al centro de eventos, monta su equipo de sonido profesional, hace prueba de sonido y luego el momento en que la gente aplaude. Esto transmite **puntualidad, seriedad y profesionalismo**.

### 2. Alianzas Estratégicas B2B (El Canal Más Rentable)
En lugar de buscar clientes uno por uno, un solo aliado puede darle **10 a 30 eventos al año**:
- **Wedding Planners y Productoras de Eventos:** Enviarles por WhatsApp o Instagram un mensaje breve con el link de esta página (sección **Dossier**) ofreciendo una comisión por referido o tarifa preferencial de proveedor.
- **Centros de Eventos, Viñas, Hoteles y Restaurantes:** Ofrecerse como músico recomendado dentro de la carpeta de proveedores del lugar para cenas de empresa, Día de la Madre, San Valentín, Año Nuevo y matrimonios.
- **Banqueteras y Fotógrafos de Bodas:** Crear alianzas cruzadas donde ambos se recomiendan mutuamente cuando un cliente les pide datos.

### 3. Captación en Vivo en Cada Evento (Efecto Multiplicador)
Cada vez que Ricardo toca frente a 80 o 150 invitados, **en ese salón están sus próximos 5 clientes**:
- **Atril / Acrílico con Código QR en el Escenario:** Colocar un soporte elegante junto al equipo de sonido que diga: *"¿Te gustó la música en vivo? Escanea aquí para ver mi portafolio y cotizar para tu próximo evento"*. El QR abre directamente esta página web.
- **Tarjetas Digitales vía WhatsApp:** Cuando un invitado se acerque a felicitarlo o pedirle su número, Ricardo le pide que le envíe un *"Hola"* al `+56 9 7929 6731` y WhatsApp Business le responde automáticamente con el enlace a este portafolio digital.

### 4. Configuración de WhatsApp Business (`+56 9 7929 6731`)
Para cerrar más ventas sin perder tiempo:
- **Perfil de Empresa:** Foto de perfil profesional de Ricardo, descripción clara (*"Música en Vivo para Matrimonios, Eventos Corporativos y Celebraciones Privadas"*) y enlace directo a esta web.
- **Catálogo de WhatsApp:** Subir los 3 formatos principales (*Matrimonios*, *Eventos Corporativos*, *Celebraciones Privadas*) con fotos y enlace al portafolio.
- **Respuestas Rápidas (`/dossier`, `/videos`, `/repertorio`):** Plantillas listas para responder en 5 segundos con el link directo a `#videos` o `#dossier`.

### 5. Campañas Pagadas de Bajo Presupuesto (Meta Ads para Fechas Clave)
Con presupuestos pequeños (\$3.000 a \$5.000 CLP diarios en temporadas clave):
- **Temporada de Matrimonios (Agosto a Marzo):** Anuncio con el mejor video de Ricardo dirigido a personas comprometidas recientemente o interesadas en bodas en su región, llevando el tráfico al cotizador de la web.
- **Temporada de Eventos de Fin de Año / Empresas (Octubre a Diciembre):** Anuncio enfocado en cenas corporativas y recepciones de fin de año.
- **Fechas Especiales (Día de la Madre, Día del Padre, Aniversarios):** Promoción de *"Regala una serenata o concierto privado en casa"*.

---

## 🛠️ Cómo Editar los Datos Rápidamente

Toda la información editable se encuentra centralizada en un único archivo:
👉 **`js/config.js`**

1. **Cambiar teléfono o mensaje de WhatsApp:** Edita el bloque `contact`.
2. **Agregar links de Instagram, TikTok, Facebook o YouTube:** Edita el bloque `socials`.
3. **Cambiar o agregar videos de Cloudinary / YouTube:** Edita el arreglo `videos`.
4. **Cambiar o agregar fotos nuevas:** Edita el arreglo `photos`.
5. **Actualizar repertorio o formatos de evento:** Edita los bloques `services` y `repertoire`.
