/**
 * CONFIGURACIÓN CENTRAL DEL PORTAFOLIO & DOSSIER
 * Ricardo Villarreal Muñoz
 * 
 * Aquí puedes editar fácilmente el número de WhatsApp, las redes sociales,
 * los videos de Cloudinary / YouTube y las fotografías del portafolio.
 */

const PORTFOLIO_CONFIG = {
  artist: {
    name: "Ricardo Villarreal Muñoz",
    shortName: "Ricardo Villarreal",
    initials: "RVM",
    tagline: "Bajista Profesional de 6 Cuerdas & Experiencias Sonoras para Eventos Exclusivos",
    role: "Bajista Profesional · Especialista en Bajo de 6 Cuerdas para Eventos",
    location: "Chile · Disponible para eventos en todo el país",
    experienceYears: "+10",
    eventsCount: "+250",
    satisfaction: "100%",
    bio: [
      "Ricardo Villarreal Muñoz es un bajista y músico profesional especializado en la ejecución del bajo eléctrico de 6 cuerdas, con amplia trayectoria en la ambientación musical y espectáculos en vivo para matrimonios, eventos corporativos, cenas de gala y celebraciones privadas.",
      "El bajo de 6 cuerdas le permite abarcar un rango armónico y melódico extendido único, combinando notas graves profundas con melodías virtuosas de gran calidez, creando atmósferas envolventes tanto para cócteles íntimos como para shows estelares de alta energía.",
      "Su propuesta escénica se caracteriza por el sonido pulcro, elegancia estética y un repertorio versátil adaptado a cada cliente, contando con sistema de amplificación y procesamiento propio de alta fidelidad para garantizar una experiencia acústica insuperable."
    ],
    technicalRider: [
      "Bajo eléctrico boutique de 6 cuerdas (rango extendido) e instrumentación profesional",
      "Sistema de amplificación propio de alta fidelidad (adaptable hasta 200+ personas)",
      "Procesamiento y pedalera de modelado acústico de nivel estudio/escenario",
      "Montaje limpio, discreto y estético acorde a eventos de gala y matrimonios",
      "Tiempo de montaje y prueba de sonido: 45 a 60 minutos antes del evento",
      "Requerimiento mínimo en lugar: 1 toma de corriente 220V cercana al área de presentación"
    ]
  },

  contact: {
    // Número en formato internacional sin '+' ni espacios para enlaces wa.me
    whatsappNumber: "56979296731",
    // Número formateado para mostrar en pantalla
    phoneDisplay: "+56 9 7929 6731",
    // Enlace tel: para llamadas directas
    phoneTel: "+56979296731",
    email: "contacto@ricardovillarreal.cl",
    defaultWhatsappMessage: "¡Hola Ricardo! Vi tu portafolio web y me gustaría consultar disponibilidad y cotizar música en vivo para un evento."
  },

  // REDES SOCIALES (Listas para personalizar en la siguiente iteración)
  socials: {
    instagram: {
      label: "Instagram",
      handle: "@ricardovillarreal.musica",
      url: "https://instagram.com/",
      active: true,
      description: "Reels en vivo, historias de eventos y fechas disponibles"
    },
    tiktok: {
      label: "TikTok",
      handle: "@ricardovillarreal.oficial",
      url: "https://tiktok.com/",
      active: true,
      description: "Clips virales, versiones en vivo y momentos en eventos"
    },
    facebook: {
      label: "Facebook",
      handle: "Ricardo Villarreal Música para Eventos",
      url: "https://facebook.com/",
      active: true,
      description: "Álbumes de eventos, reseñas de clientes y transmisiones"
    },
    youtube: {
      label: "YouTube",
      handle: "Ricardo Villarreal Muñoz",
      url: "https://youtube.com/",
      active: true,
      description: "Showreels completos y sesiones en alta definición"
    }
  },

  // VIDEOS EN CLOUD GRATIS (Soporta Cloudinary MP4 directo o YouTube)
  // type: "mp4" (ideal para Cloudinary / Cloud Storage) o "youtube" (ID o URL de YouTube)
  // aspect: "16:9" (horizontal) o "9:16" (formato Reel/TikTok vertical)
  videos: [
    {
      id: "vid-1",
      title: "Showreel Oficial — Solo de Bajo de 6 Cuerdas & Gala",
      category: "corporativos",
      categoryLabel: "Showreel Destacado",
      description: "Resumen de presentaciones en vivo para recepciones, cenas de gala y eventos exclusivos con bajo de 6 cuerdas.",
      type: "mp4",
      aspect: "16:9",
      featured: true,
      duration: "02:15",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-musician-playing-acoustic-guitar-on-stage-41729-large.mp4",
      posterUrl: "images/six-string-bass-hero.jpg"
    },
    {
      id: "vid-2",
      title: "Ambientación para Ceremonia & Cóctel de Matrimonio",
      category: "matrimonios",
      categoryLabel: "Matrimonios",
      description: "Repertorio romántico y acústico ideal para la entrada de los novios y recepción al aire libre.",
      type: "mp4",
      aspect: "16:9",
      featured: false,
      duration: "01:45",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-playing-an-acoustic-guitar-in-a-dimly-lit-room-42718-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "vid-3",
      title: "Cena Ejecutiva & Recepción Corporativa",
      category: "corporativos",
      categoryLabel: "Eventos Corporativos",
      description: "Música elegante con el volumen y atmósfera precisos para acompañar cenas de negocios y lanzamientos.",
      type: "mp4",
      aspect: "16:9",
      featured: false,
      duration: "01:30",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-person-playing-guitar-42716-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "vid-4",
      title: "Sesión Íntima en Vivo — Clásicos & Boleros",
      category: "sesiones",
      categoryLabel: "Sesión en Vivo",
      description: "Interpretación acústica en vivo demostrando calidad vocal e instrumental sin filtros.",
      type: "mp4",
      aspect: "16:9",
      featured: false,
      duration: "02:50",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-singer-performing-into-a-microphone-on-stage-41727-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "vid-5",
      title: "Reel en Vivo: Celebración & Fiesta Privada",
      category: "reels",
      categoryLabel: "Reel Vertical (9:16)",
      description: "Energía y conexión directa con los invitados durante celebración de aniversario.",
      type: "mp4",
      aspect: "9:16",
      featured: false,
      duration: "00:45",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-guitarist-playing-on-a-stage-with-lights-41728-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "vid-6",
      title: "Reel Matrimonio: Momento Especial de los Novios",
      category: "reels",
      categoryLabel: "Reel Vertical (9:16)",
      description: "Canciones personalizadas a pedido de los novios para el primer baile.",
      type: "mp4",
      aspect: "9:16",
      featured: false,
      duration: "00:52",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-musician-playing-acoustic-guitar-on-stage-41729-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // GALERÍA DE FOTOS (Alojadas en Cloud Gratis como Cloudinary)
  photos: [
    {
      id: "photo-1",
      title: "Bajo Eléctrico de 6 Cuerdas — Detalle Boutique",
      category: "Equipamiento",
      url: "images/six-string-bass-hero.jpg"
    },
    {
      id: "photo-2",
      title: "Presentación en Vivo en Gran Gala Nocturna",
      category: "Escenario en Vivo",
      url: "images/six-string-bass-live.jpg"
    },
    {
      id: "photo-3",
      title: "Recepción de Matrimonio al Aire Libre",
      category: "Matrimonios",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "photo-4",
      title: "Evento Corporativo & Cóctel Ejecutivo",
      category: "Corporativos",
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "photo-5",
      title: "Atmósfera y Calidad Escénica",
      category: "Escenario en Vivo",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "photo-6",
      title: "Show Principal para Celebraciones Privadas",
      category: "Eventos Privados",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  // FORMATOS DE EVENTOS (Servicios)
  services: [
    {
      id: "srv-matrimonios",
      icon: "rings",
      title: "Matrimonios & Ceremonias",
      subtitle: "Emoción y elegancia para el día más importante",
      description: "Acompañamiento musical diseñado a medida para la ceremonia civil o religiosa, el cóctel de bienvenida y el primer baile de los novios.",
      features: [
        "Canciones especiales a pedido para la entrada y ceremonia",
        "Música de cóctel sofisticada que permite conversar",
        "Sonido e iluminación discreta de alta estética",
        "Coordinación previa con Wedding Planner o banquetera"
      ],
      eventTypeValue: "Matrimonio / Boda"
    },
    {
      id: "srv-corporativos",
      icon: "briefcase",
      title: "Eventos Corporativos & Galas",
      subtitle: "Distinción para marcas, cenas y recepciones",
      description: "Propuesta musical sobria y de alto nivel para cenas de fin de año, lanzamientos de productos, congresos, viñas, hoteles y networking.",
      features: [
        "Volumen calibrado para acompañar la conversación",
        "Repertorio internacional, jazz, bossa, pop y clásicos",
        "Puntualidad rigurosa y presentación formal en escenario",
        "Facturación y dossier técnico para productoras"
      ],
      eventTypeValue: "Evento Corporativo / Empresa"
    },
    {
      id: "srv-privados",
      icon: "sparkles",
      title: "Celebraciones Privadas & Aniversarios",
      subtitle: "Un concierto exclusivo en tu propia celebración",
      description: "Shows cercanos, emotivos y participativos para cumpleaños, aniversarios de bodas, cenas familiares y reuniones exclusivas.",
      features: [
        "Repertorio adaptable a los gustos del homenajeado",
        "Interacción cálida y amena con los invitados",
        "Formato adaptable a salones, jardines o terrazas",
        "Equipos de amplificación incluidos sin cobros sorpresa"
      ],
      eventTypeValue: "Celebración Privada / Cumpleaños / Aniversario"
    }
  ],

  // REPERTORIO Y ESTILOS
  repertoire: [
    {
      genre: "Clásicos Románticos & Boleros",
      description: "Ideal para cenas, aniversarios y momentos emotivos.",
      examples: "Luis Miguel, Armando Manzanero, Los Panchos, Roberto Carlos, Andrea Bocelli"
    },
    {
      genre: "Pop Acústico & Baladas (Inglés / Español)",
      description: "Perfecto para ceremonias de matrimonio y recepciones modernas.",
      examples: "Ed Sheeran, Coldplay, Elvis Presley, Sin Bandera, Camila, Alejandro Sanz"
    },
    {
      genre: "Lounge, Bossa Nova & Estándares Suaves",
      description: "Atmósfera distinguida para cócteles corporativos y recepciones.",
      examples: "Frank Sinatra, Michael Bublé, Antonio Carlos Jobim, Eric Clapton, Sting"
    },
    {
      genre: "Show Estelar & Clásicos para Cantar",
      description: "Para levantar el ánimo y celebrar junto a todos los invitados.",
      examples: "Juan Gabriel, Raphael, Nino Bravo, Gipsy Kings, Clásicos Latinos"
    }
  ]
};
